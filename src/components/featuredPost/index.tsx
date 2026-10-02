import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { splitPostLocation } from "@/lib/posts";
import type { PostProps } from "@/types/post";

const EXCERPT_LENGTH = 240;

function toExcerpt(text: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= EXCERPT_LENGTH) return clean;
  const cut = clean.lastIndexOf(" ", EXCERPT_LENGTH);
  return `${clean.slice(0, cut > 0 ? cut : EXCERPT_LENGTH)}…`;
}

export function FeaturedPost({ post }: { post: PostProps }) {
  const { place, date } = splitPostLocation(post.location);
  const excerpt = toExcerpt(post.text1 || post.text2 || post.text3);

  return (
    <Link
      href={`/post/${post.slug}`}
      className="group block border border-bold-green bg-background transition-colors duration-300 hover:border-light-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-orange"
    >
      {/* Pita penanda rute */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--light-orange) 0 12px, var(--bold-orange) 12px 24px)",
        }}
        aria-hidden="true"
      />

      <div className="grid gap-0 lg:grid-cols-12">
        <div className="relative h-64 lg:col-span-6 lg:h-full lg:min-h-[26rem]">
          {post.picture1 ? (
            <Image
              src={post.picture1}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-bold-green">
              <span className="px-6 text-center font-stardos text-4xl leading-none tracking-widest text-background/80 lg:text-6xl">
                {place}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-4 border-t border-bold-green p-6 lg:col-span-6 lg:border-t-0 lg:border-l lg:p-8">
          <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-light-orange">
            <span className="inline-block h-2 w-2 bg-light-orange" />
            Publikasi terbaru
          </p>

          <h2 className="font-stardos text-3xl leading-none tracking-wide text-bold-green sm:text-4xl xl:text-5xl">
            {place}
          </h2>

          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
            {[date, post.author && `Oleh ${post.author}`]
              .filter(Boolean)
              .join(" · ")}
          </p>

          <div className="border-t border-bold-green" />

          <h3 className="text-lg leading-snug font-bold text-black lg:text-xl">
            {post.title}
          </h3>

          {excerpt && (
            <p className="text-sm leading-relaxed text-gray-700 line-clamp-4">
              {excerpt}
            </p>
          )}

          <span className="mt-2 flex items-center gap-3 border-t border-bold-green pt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-bold-green">
            Baca laporan
            <BsArrowRight className="size-4 text-light-orange transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
