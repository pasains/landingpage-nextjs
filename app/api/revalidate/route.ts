import { POSTS_TAG } from "@/lib/posts";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    return new Response("REVALIDATE_SECRET belum di-set", { status: 501 });
  }

  if (request.headers.get("x-revalidate-secret") !== secret) {
    return new Response("Unauthorized", { status: 401 });
  }

  revalidateTag(POSTS_TAG, { expire: 3600 });
  revalidatePath("/", "page");
  revalidatePath("/post/[slug]", "page");

  return Response.json({ revalidated: true, at: new Date().toISOString() });
}
