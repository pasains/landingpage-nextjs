import Image from "next/image";
import Link from "next/link";
import type { PostProps } from "@/types/post";

interface PostDetailProps {
  post: PostProps;
}

const GALLERY_FIELDS = ["picture2", "picture3", "picture4", "picture5"] as const;

export function PostDetail({ post }: PostDetailProps) {
  const gallery = GALLERY_FIELDS.map((field) => post[field]).filter(Boolean);
  const body = [post.text3, post.text4].filter(Boolean);

  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="border-t-4 border-b border-bold-green my-16 mb-2" />
        <div className="border-b-4 border-bold-green mb-6" />

        {/* Masthead */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold font-stardos tracking-tight text-bold-green">
            PASAINS
          </h1>
          <div className="flex justify-center items-center gap-4 my-2">
            <div className="h-px flex-1 max-w-32 bg-bold-green" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">
              Since 1996
            </span>
            <div className="h-px flex-1 max-w-32 bg-bold-green" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Pecinta Alam FMIPA Universitas Gadjah Mada
          </p>
        </div>

        <div className="border-t-2 border-b border-bold-green mb-6" />

        {/* Article Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-bold-green">
            {post.title}
          </h2>
          <div className="border-t border-bold-green mb-4" />
          <div className="justify-between flex">
            <p className="text-xs uppercase tracking-widest mb-3 text-gray-600">
              By {post.author}
            </p>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              {post.location}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        {post.picture1 && (
          <div className="relative border border-bold-green p-2 mb-8">
            <div className="relative aspect-16/9 w-full">
              <Image
                src={post.picture1}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Body */}
        {(post.text1 || post.text2) && (
          <div className="mb-8">
            {post.text1 && (
              <p className="text-justify text-sm md:text-base tracking-wider leading-relaxed mb-4">
                <span className="float-left text-6xl leading-none font-bold mr-2 mt-1 text-black">
                  {post.text1.charAt(0)}
                </span>
                {post.text1.slice(1)}
              </p>
            )}
            {post.text2 && (
              <p className="text-justify text-sm md:text-base leading-relaxed tracking-wider mb-4">
                {post.text2}
              </p>
            )}
          </div>
        )}

        {/* Image Gallery */}
        {gallery.length > 0 && (
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gallery.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="relative border border-black p-2 h-82 w-full"
                >
                  <Image
                    src={src}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {post.caption && (
              <p className="text-[10px] uppercase tracking-wider text-center mt-2 text-gray-600 italic">
                {post.caption}
              </p>
            )}
          </div>
        )}

        {/* Continue Article */}
        {body.length > 0 && (
          <div className="mb-8">
            {body.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-sm md:text-base tracking-wider leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Final Image */}
        {post.picture6 && (
          <div className="relative border border-black p-2 mb-8">
            <div className="relative aspect-16/9 w-full">
              <Image
                src={post.picture6}
                alt={post.caption}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Quote Block */}
        {post.quote && (
          <div className="border-t-2 border-b-2 border-bold-green my-8 py-8 text-center">
            <p className="text-xl md:text-2xl italic leading-relaxed mb-4 text-bold-green">
              &ldquo;{post.quote}&rdquo;
            </p>
            {post.name && (
              <p className="text-xs uppercase tracking-widest text-gray-600">
                &mdash; {post.name} &mdash;
              </p>
            )}
          </div>
        )}

        {/* Back Navigation */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block border-2 border-bold-green px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-bold-green hover:text-background transition-colors"
          >
          Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
