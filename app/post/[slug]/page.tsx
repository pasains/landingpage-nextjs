import { getPostBySlug } from "@/lib/posts";
import { PostDetail } from "@/src/content/post/postDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 1800;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} - PASAINS`,
    description: post.text1.slice(0, 160),
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="scroll-smooth focus:scroll-auto">
      <PostDetail post={post} />
    </div>
  );
}
