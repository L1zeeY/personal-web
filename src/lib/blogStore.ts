import { Post } from "@/data/posts";

const STORAGE_KEY = "blog_uploaded_posts";

export function getUploadedPosts(): Post[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveUploadedPost(post: Post): void {
  const posts = getUploadedPosts();
  posts.unshift(post);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function deleteUploadedPost(slug: string): void {
  const posts = getUploadedPosts().filter((p) => p.slug !== slug);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50);
  const ts = Date.now().toString(36);
  return `${base || "post"}-${ts}`;
}
