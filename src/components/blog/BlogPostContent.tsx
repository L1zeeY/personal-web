"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getPost } from "@/data/posts";
import { getUploadedPosts, deleteUploadedPost } from "@/lib/blogStore";

export default function BlogPostContent() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const slugStr = slug as string;

  useEffect(() => {
    const fromStatic = getPost(slugStr);
    if (fromStatic) {
      setPost(fromStatic);
      setIsUploaded(false);
      return;
    }
    const fromUploaded = getUploadedPosts().find((p) => p.slug === slugStr);
    if (fromUploaded) {
      setPost(fromUploaded);
      setIsUploaded(true);
      return;
    }
    setPost(null);
  }, [slugStr, refresh]);

  const handleDelete = () => {
    deleteUploadedPost(slugStr);
    setRefresh((k) => k + 1);
  };

  if (!post) {
    return (
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-zinc-400 dark:text-zinc-500 mb-4">鏂囩珷涓嶅瓨鍦?/p>
          <Link href="/blog" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline">杩斿洖鍗氬</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center justify-between mb-8">
            <Link href="/blog" className="inline-flex items-center text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              杩斿洖鍗氬
            </Link>
            {isUploaded && (
              <button onClick={handleDelete}
                className="text-xs text-zinc-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                鍒犻櫎
              </button>
            )}
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-zinc-400 dark:text-zinc-500 mb-8">
            <time>{post.date}</time>
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">{tag}</span>
            ))}
          </div>
          <div>
            {post.content.split("\n").map((line, i) => (
              <p key={i} className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">{line || "\u00a0"}</p>
            ))}
          </div>
        </motion.div>
      </article>
    </main>
  );
}
