"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, bentoItem } from "@/lib/animations";

const skills = [
  "Flutter", "Dart", "React", "Next.js", "Python", "Machine Learning (CNNs)",
  "JavaScript", "TypeScript", "Tailwind CSS", "Firebase", "MongoDB", "Figma", 
  "UI/UX Design", "Flask", "Gemini AI"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto px-6 relative z-10">
      <div className="glass-panel p-8 md:p-14 rounded-[2rem] text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bentoItem}
        >
          <h2 className="text-3xl font-bold text-brand-text-main mb-6">
            Technical Arsenal
          </h2>
          <p className="text-brand-text-muted mb-10 max-w-2xl mx-auto">
            From crafting mobile apps in Flutter to deploying ML models via Flask, here are the technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={bentoItem}
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-text-main text-sm font-medium hover:bg-brand-accent/20 hover:border-brand-accent/50 hover:text-white transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
