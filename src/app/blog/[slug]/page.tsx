import { posts as staticPosts } from "@/data/posts";

export function generateStaticParams() {
  return staticPosts.map((post) => ({ slug: post.slug }));
}

import BlogPostContent from "@/components/blog/BlogPostContent";

export default function BlogPost() {
  return <BlogPostContent />;
}
