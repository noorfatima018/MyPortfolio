"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeBlurIn } from "@/lib/animations";

export const GithubStats = () => {
  return (
    <section className="py-12 max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
          GitHub <span className="gradient-text">Stats</span>
        </h2>
      </div>

      <motion.div 
        className="flex flex-col lg:flex-row gap-6 justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={fadeBlurIn} className="w-full lg:w-1/2 glass-panel p-4 rounded-2xl flex justify-center hover:border-brand-purple/50 transition-colors">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://github-readme-stats.vercel.app/api?username=noorfatima018&show_icons=true&theme=radical&bg_color=0d1117&title_color=c084fc&icon_color=d8b4fe&text_color=f8fafc&border_color=c084fc33" 
            alt="GitHub Stats" 
            className="w-full max-w-md object-contain"
          />
        </motion.div>
        
        <motion.div variants={fadeBlurIn} className="w-full lg:w-1/2 glass-panel p-4 rounded-2xl flex justify-center hover:border-brand-purple/50 transition-colors">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=noorfatima018&layout=compact&theme=radical&bg_color=0d1117&title_color=c084fc&text_color=f8fafc&border_color=c084fc33" 
            alt="Top Languages" 
            className="w-full max-w-md object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
