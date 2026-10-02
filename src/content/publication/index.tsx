import { FeaturedPost } from "@/components/featuredPost";
import { PostCard } from "@/components/postCard";
import { PostGrid } from "@/components/postGrid";
import { getPosts } from "@/lib/posts";

export async function Publication() {
  const posts = await getPosts();
  const [latest, ...archive] = posts;

  return (
    <section className="w-full bg-background px-4 pt-30 pb-16 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="border-b border-bold-green pb-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600">
            PASAINS — Pecinta Alam FMIPA UGM
          </p>
          <h1 className="mt-2 font-stardos text-4xl leading-none tracking-[0.06em] text-light-orange sm:text-5xl sm:tracking-widest md:text-6xl lg:text-7xl">
            PUBLIKASI
          </h1>
        </div>

        {latest && <FeaturedPost post={latest} />}

        {archive.length > 0 && (
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline gap-4 border-b border-bold-green pb-2">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold">
                Arsip laporan
              </h2>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                {archive.length} publikasi
              </span>
            </div>

            <PostGrid>
              {archive.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </PostGrid>
          </div>
        )}
      </div>
    </section>
  );
}
