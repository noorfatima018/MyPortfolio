"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeBlurIn, staggerContainer, bentoItem } from "@/lib/animations";
import { Code, Smartphone, PenTool, Sparkles } from "lucide-react";

export const About = () => {
  const cards = [
    { icon: <Code className="text-brand-purple" size={24} />, title: "Full Stack Dev" },
    { icon: <Smartphone className="text-brand-purple" size={24} />, title: "Mobile Developer" },
    { icon: <PenTool className="text-brand-purple" size={24} />, title: "UI/UX Focused" },
    { icon: <Sparkles className="text-brand-purple" size={24} />, title: "Always Learning" }
  ];

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6 relative z-10">
      <motion.div 
        className="flex flex-col md:flex-row gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeBlurIn} className="flex-1">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            I'm a Computer Science student passionate about building aesthetic and functional digital experiences. I love crafting clean UIs and building full-stack solutions that look great and work even better.
          </p>
        </motion.div>
        
        <motion.div variants={staggerContainer} className="flex-1 grid grid-cols-2 gap-4 w-full">
          {cards.map((card, idx) => (
            <motion.div key={idx} variants={bentoItem} className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-brand-purple/10 transition-colors">
              {card.icon}
              <h3 className="font-medium text-foreground">{card.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
