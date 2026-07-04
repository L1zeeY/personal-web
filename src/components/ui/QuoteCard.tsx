"use client";

import { motion } from "framer-motion";
import { getDailyQuote } from "@/data/quotes";

export default function QuoteCard() {
  const quote = getDailyQuote();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900 p-8 md:p-10"
    >
      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-8 translate-x-8">
        <div className="w-full h-full rounded-full bg-white/5 blur-2xl" />
      </div>
      <div className="relative">
        <svg
          className="w-8 h-8 text-white/20 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light italic">
          &ldquo;{quote.text}&rdquo;
        </p>
        <p className="mt-4 text-sm text-white/50 text-right">&mdash; {quote.author}</p>
      </div>
    </motion.div>
  );
}
