"use client";
import { motion } from "framer-motion";
import { timeline } from "@/data/personal";
export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-700 -translate-x-1/2" />
      <div className="space-y-12">
        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col sm:flex-row items-start gap-4 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-zinc-900 dark:bg-zinc-100 rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-white dark:ring-zinc-950 z-10" />
              <div className={`hidden sm:block w-1/2 ${isLeft ? "text-right pr-10" : "text-left pl-10"}`}>
                <span className="inline-block px-3 py-1 text-sm font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full">
                  {item.year}
                </span>
              </div>
              <div className="ml-10 sm:ml-0 sm:w-1/2">
                <div className="sm:hidden mb-1">
                  <span className="inline-block px-2 py-0.5 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full">
                    {item.year}
                  </span>
                </div>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
