import type { PostProps } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { splitPostLocation } from "@/lib/posts";

export function PostCard({ post }: { post: PostProps }) {
  const { place, date } = splitPostLocation(post.location);

  return (
    <Link
      href={`/post/${post.slug}`}
      className="group flex h-full w-82 md:w-full flex-col bg-background border border-black/20 transition-colors duration-300 hover:border-light-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-orange"
    >
      <div className="relative h-52 overflow-hidden bg-bold-green">
        {post.picture1 && (
          <Image
            src={post.picture1}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 380px"
            className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100"
          />
        )}
        {!post.picture1 && (
          <span className="flex h-full w-full items-center justify-center px-4 text-center font-stardos text-2xl leading-none tracking-widest text-background/80 sm:text-3xl">
            {place}
          </span>
        )}
      </div>

      <div className="h-1 w-full bg-light-orange" />

      <div className="flex flex-1 flex-col p-5">
        <p className="font-stardos text-xl leading-none tracking-widest text-light-orange sm:text-2xl">
          {place}
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-600">
          {date} &middot; Oleh {post.author}
        </p>

        <h3 className="mt-4 mb-6 text-[15px] font-bold leading-snug text-black line-clamp-3">
          {post.title}
        </h3>

        <div className="mt-auto flex items-center justify-between border-t border-black/20 pt-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black">
            Baca laporan
          </span>
          <BsArrowRight className="size-4 text-light-orange transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}
