"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { posts as staticPosts } from "@/data/posts";
import { getUploadedPosts } from "@/lib/blogStore";
import PostEditor from "@/components/blog/PostEditor";

export default function Blog() {
  const [showEditor, setShowEditor] = useState(false);
  const [uploaded, setUploaded] = useState<typeof staticPosts>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setUploaded(getUploadedPosts());
  }, [refreshKey]);

  const allPosts = [...uploaded, ...staticPosts];
  const hasPosts = allPosts.length > 0;

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">博客</h1>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">一些想法和记录</p>
            </div>
            <button onClick={() => setShowEditor(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              上传文章
            </button>
          </div>
        </motion.div>

        {!hasPosts ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-center py-20 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl"
          >
            <svg className="w-12 h-12 mx-auto text-zinc-300 dark:text-zinc-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <p className="text-zinc-400 dark:text-zinc-500 text-sm">还没有文章</p>
            <p className="text-zinc-300 dark:text-zinc-600 text-xs mt-1">点击右上角「上传文章」发布你的第一篇</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {allPosts.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 text-xs text-zinc-400 dark:text-zinc-500 mb-2">
                      <time>{post.date}</time>
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">{post.title}</h2>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">{post.excerpt}</p>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <PostEditor open={showEditor} onClose={() => setShowEditor(false)}
        onSaved={() => setRefreshKey((k) => k + 1)} />
    </main>
  );
}
