"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { supabase, getMessages, addMessage, type Message } from "@/lib/supabase";

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);



  useEffect(() => {
    getMessages().then(setMessages);

    const channel = supabase?.channel
      ? supabase
          .channel("messages")
          .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, (payload: any) => {
            setMessages((prev) => [payload.new as Message, ...prev]);
          })
          .subscribe()
      : null;

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim() || sending) return;
    setSending(true);
    try {
      await addMessage(name.trim(), content.trim());
      setName("");
      setContent("");
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch {
      alert("发送失败，请稍后再试");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">联系 &amp; 留言</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">想说的、想问的，都可以留在这里</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">联系方式</h2>
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personalInfo.email}
              </a>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {personalInfo.phone}
              </div>
            </div>
          </motion.div>

          {/* Guestbook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">留言板</h2>

            {/* Submit form */}
            <form onSubmit={handleSubmit} className="mb-6 space-y-3">
              <input
                type="text"
                placeholder="你的名字"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={30}
                required
                className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-shadow"
              />
              <textarea
                placeholder="想说的话..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={500}
                required
                rows={3}
                className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-shadow resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="px-5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 transition-colors"
              >
                {sending ? "发送中..." : sent ? "已发送 !" : "发送留言"}
              </button>
            </form>

            {/* Messages list */}
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {messages.length === 0 ? (
                <p className="text-sm text-zinc-400 dark:text-zinc-500 text-center py-8">
                  还没有留言，来写下第一句吧
                </p>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{msg.name}</span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {new Date(msg.created_at).toLocaleDateString("zh-CN")}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{msg.content}</p>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
