"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, bentoItem } from "@/lib/animations";

const categories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", ".NET", "C#", "Python"]
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Dart"]
  },
  {
    title: "Database & Cloud",
    skills: ["MongoDB", "Firebase", "MySQL"]
  },
  {
    title: "Data & AI",
    skills: ["Python", "Jupyter", "Scikit-Learn"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Notion"]
  }
];

export const TechStack = () => {
  return (
    <section id="tech" className="py-24 max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-gray-400">Tools and technologies I use to build digital experiences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            className="glass-panel p-8 rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">{category.title}</h3>
            <motion.div className="flex flex-wrap gap-3" variants={staggerContainer}>
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={bentoItem}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-brand-purple hover:bg-brand-purple/20 transition-all cursor-default"
                  title={skill}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
