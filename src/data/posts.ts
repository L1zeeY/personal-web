export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "welcome",
    title: "欢迎来到我的博客",
    date: "2026-07-04",
    excerpt: "这是第一篇文章。在这里记录想法、读书笔记和成长思考。",
    content: "这是我在这个博客上的第一篇文章。\n\n未来我会在这里记录我的想法、读书笔记和成长过程中的思考。\n\n如果你有任何想交流的话题，欢迎在留言板上给我留言。",
    tags: ["开篇"],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
