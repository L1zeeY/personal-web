"use client";
import { motion } from "framer-motion";
import { skillCategories, skillTags } from "@/data/skills";
export default function SkillRadar() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category, catIndex) => (
        <motion.div key={category.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: catIndex * 0.1, duration: 0.5 }}
        >
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">{category.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.items.map((skill, skillIndex) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                  <span className="text-zinc-400 dark:text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-zinc-900 dark:bg-zinc-100 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 * skillIndex, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">技能标签</h3>
        <div className="flex flex-wrap gap-2">
          {skillTags.map((tag, i) => (
            <motion.span key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="px-3 py-1.5 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
