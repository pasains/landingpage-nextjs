import { contentData, type LegacyPostProps } from "@/data/post";
import type { PostProps } from "@/types/post";
import type { StaticImageData } from "next/image";

export const POSTS_TAG = "posts";

const REVALIDATE_SECONDS = 1800;

type RawCell = unknown;
type RawRow = Record<string, RawCell>;

const FIELD_ALIASES: Record<string, string[]> = {
  caption: ["photocaption", "imagecaption", "captionfoto", "captions"],
  name: ["quotename", "quoteauthor", "namakutipan", "quoteby", "sumberquote"],
  author: ["writer", "penulis", "authorname"],
};

function normalizeKey(key: string) {
  return key.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

function toIndex(row: RawRow) {
  const index: Record<string, RawCell> = {};
  for (const [key, value] of Object.entries(row)) {
    index[normalizeKey(key)] = value;
  }
  return index;
}

function readCell(index: Record<string, RawCell>, field: string): RawCell {
  if (field in index) return index[field];
  for (const alias of FIELD_ALIASES[field] ?? []) {
    if (alias in index) return index[alias];
  }
  return undefined;
}

function toText(value: RawCell): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "object") {
    const record = value as Record<string, RawCell>;
    for (const key of ["url", "link", "formattedValue", "value"]) {
      const candidate = record[key];
      if (typeof candidate === "string" && candidate.trim()) {
        return candidate.trim();
      }
    }
  }
  return "";
}

const DRIVE_FILE_ID_PATTERN = /drive\.google\.com\/file\/d\/([\w-]+)/;
const DRIVE_UC_ID_PATTERN = /drive\.google\.com\/uc\?[^#\s]*id=([\w-]+)/;

function toImage(value: RawCell): string {
  const raw = toText(value);
  if (!raw) return "";
  if (raw.startsWith("/")) return raw;

  const fileId =
    raw.match(DRIVE_FILE_ID_PATTERN)?.[1] ?? raw.match(DRIVE_UC_ID_PATTERN)?.[1];

  if (fileId) {
    return `https://lh3.googleusercontent.com/d/${fileId}=w1600`;
  }
  if (!/^https?:\/\//i.test(raw)) return "";
  return raw;
}

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40)
    .replace(/-+$/g, "");
}

function shortHash(value: string) {
  let hash = 5381;
  for (let index = 0; index < value.length; index++) {
    hash = ((hash << 5) + hash + value.charCodeAt(index)) >>> 0;
  }
  return hash.toString(36);
}

export function buildSlug(id: string, title: string) {
  const safeId = slugify(id);
  return `post-${safeId || shortHash(title)}`;
}

export function splitPostLocation(location: string) {
  const [place, ...rest] = location.split(",");
  return { place: place.trim(), date: rest.join(",").trim() };
}

function rowsFromPayload(payload: unknown): RawRow[] {
  const source = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { posts?: unknown } | null)?.posts)
      ? ((payload as { posts: unknown[] }).posts)
      : [];

  if (source.length === 0) return [];

  if (Array.isArray(source[0])) {
    const header = (source[0] as unknown[]).map((cell) => String(cell ?? ""));
    return source.slice(1).map((row) => {
      const record: RawRow = {};
      (row as unknown[]).forEach((cell, index) => {
        const key = header[index];
        if (key) record[key] = cell;
      });
      return record;
    });
  }

  return source.filter(
    (row): row is RawRow =>
      typeof row === "object" && row !== null && !Array.isArray(row),
  );
}

function toPost(row: RawRow, index: number): PostProps | null {
  const cells = toIndex(row);
  const title = toText(readCell(cells, "title"));
  if (!title) return null;

  const quote = toText(readCell(cells, "quote"));
  const name = toText(readCell(cells, "name"));
  const id = toText(readCell(cells, "id")) || String(index + 1);

  return {
    id,
    slug: buildSlug(id, title),
    title,
    location: toText(readCell(cells, "location")),
    author: toText(readCell(cells, "author")),
    picture1: toImage(readCell(cells, "picture1")),
    picture2: toImage(readCell(cells, "picture2")),
    picture3: toImage(readCell(cells, "picture3")),
    picture4: toImage(readCell(cells, "picture4")),
    picture5: toImage(readCell(cells, "picture5")),
    picture6: toImage(readCell(cells, "picture6")),
    text1: toText(readCell(cells, "text1")),
    text2: toText(readCell(cells, "text2")),
    text3: toText(readCell(cells, "text3")),
    text4: toText(readCell(cells, "text4")),
    caption: toText(readCell(cells, "caption")),
    ...(quote ? { quote } : {}),
    ...(name ? { name } : {}),
  };
}

function withUniqueSlugs(posts: PostProps[]) {
  const seen = new Map<string, number>();
  return posts.map((post) => {
    const count = seen.get(post.slug) ?? 0;
    seen.set(post.slug, count + 1);
    if (count === 0) return post;
    return { ...post, slug: `${post.slug}-${count + 1}` };
  });
}

function toLegacyPosts(): PostProps[] {
  const resolve = (image: StaticImageData | string) =>
    typeof image === "string" ? image : image.src;

  return Object.values(contentData).map((post: LegacyPostProps) => ({
    ...post,
    id: String(post.id),
    picture1: resolve(post.picture1),
    picture2: resolve(post.picture2),
    picture3: resolve(post.picture3),
    picture4: resolve(post.picture4),
    picture5: resolve(post.picture5),
    picture6: resolve(post.picture6),
  }));
}

const SHEET_ATTEMPTS = 3;
const SHEET_TIMEOUT_MS = 10000;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchSheet(url: string) {
  let lastError: unknown;

  for (let attempt = 1; attempt <= SHEET_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(url, {
        next: {
          revalidate: REVALIDATE_SECONDS,
          tags: [POSTS_TAG],
        },
        headers: { accept: "application/json" },
        signal: AbortSignal.timeout(SHEET_TIMEOUT_MS),
      });

      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < SHEET_ATTEMPTS) {
        await wait(500 * attempt);
      }
    }
  }

  throw lastError;
}

export async function getPosts(): Promise<PostProps[]> {
  const sheetUrl = process.env.GOOGLE_SHEET_SCRIPT_URL?.trim();
  if (!sheetUrl) return toLegacyPosts();

  try {
    const posts = rowsFromPayload(await fetchSheet(sheetUrl))
      .reverse()
      .map(toPost)
      .filter((post): post is PostProps => post !== null);

    const unique = withUniqueSlugs(posts);
    return unique.length > 0 ? unique : toLegacyPosts();
  } catch (error) {
    console.error(
      "[posts] Gagal membaca Google Sheet, memakai konten lokal:",
      error,
    );
    return toLegacyPosts();
  }
}

export async function getPostBySlug(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
