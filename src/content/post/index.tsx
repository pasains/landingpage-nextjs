import { getPosts } from "@/lib/posts";
import { PostCard } from "@/components/postCard";
import { PostCarousel } from "@/components/postCarousel";

export async function Post() {
  const posts = await getPosts();

  return (
    <section className="w-full flex flex-col bg-background mx-auto justify-center items-center space-y-8 md:pb-16">
      <div className="font-stardos text-5xl md:text-7xl lg:text-8xl leading-none text-center tracking-widest text-light-orange">
        PUBLIKASI
      </div>

      <div className="relative w-full max-w-7xl mx-auto p-2 md:px-14">
        <PostCarousel itemsPerView={4} autoSlide interval={4000}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostCarousel>
      </div>
    </section>
  );
}
