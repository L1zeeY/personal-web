"use client";
import { motion } from "framer-motion";
import SkillRadar from "@/components/ui/SkillRadar";

export default function Skills() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">技能图谱</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">四年来积累的能力与工具</p>
        </motion.div>

        <SkillRadar />
      </div>
    </main>
  );
}
