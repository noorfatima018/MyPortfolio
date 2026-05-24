"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeBlurIn } from "@/lib/animations";
import { ArrowRight, Download, GitBranch, Briefcase, Mail } from "lucide-react";
import { Typewriter } from "./Typewriter";

export const Hero = () => {
  const phrases = [
    "Full Stack Developer",
    "Mobile Developer",
    "UI/UX Enthusiast",
    "Building aesthetic digital experiences"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">
      <div className="aurora-bg w-[600px] h-[600px] bg-brand-purple top-[-100px] left-[-200px]" />
      <div className="aurora-bg w-[500px] h-[500px] bg-brand-purple-light bottom-[-100px] right-[-100px] animation-delay-2000" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left order-2 md:order-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeBlurIn} className="mb-4 inline-block px-4 py-1.5 rounded-full glass-panel text-brand-purple-light text-sm font-semibold tracking-wider">
            Where creativity meets code 🌸
          </motion.div>

          <motion.h1 variants={fadeBlurIn} className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4">
            Hi, I'm <br />
            <span className="gradient-text">Noor Fatima</span>
          </motion.h1>

          <motion.div variants={fadeBlurIn} className="text-xl md:text-2xl text-gray-300 font-light mb-8 h-8">
            <Typewriter phrases={phrases} />
          </motion.div>

          <motion.div variants={fadeBlurIn} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-8">
            <a href="#projects" className="px-8 py-3.5 rounded-full bg-brand-purple hover:bg-brand-purple-light text-white font-medium transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="px-8 py-3.5 rounded-full glass-panel hover:bg-white/5 text-foreground font-medium transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              Download CV
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div variants={fadeBlurIn} className="flex items-center gap-5 justify-center md:justify-start">
            <a href="https://github.com/noorfatima018" target="_blank" rel="noreferrer" className="p-3 rounded-full glass-panel hover:bg-brand-purple/20 hover:border-brand-purple/50 transition-all group">
              <GitBranch size={22} className="text-gray-300 group-hover:text-brand-purple-light transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/noor-fatima-653aa3337" target="_blank" rel="noreferrer" className="p-3 rounded-full glass-panel hover:bg-brand-purple/20 hover:border-brand-purple/50 transition-all group">
              <Briefcase size={22} className="text-gray-300 group-hover:text-brand-purple-light transition-colors" />
            </a>
            <a href="mailto:noor.fatima.212212@gmail.com" className="p-3 rounded-full glass-panel hover:bg-brand-purple/20 hover:border-brand-purple/50 transition-all group">
              <Mail size={22} className="text-gray-300 group-hover:text-brand-purple-light transition-colors" />
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar Image */}
        <motion.div
          className="order-1 md:order-2 shrink-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-brand-purple to-pink-500 animate-[spin_10s_linear_infinite]">
            <div className="w-full h-full rounded-full bg-brand-base-bg p-2">
              <img
                src="/Avatar.png"
                alt="Noor Fatima"
                className="w-full h-full object-cover rounded-full animate-[spin_10s_linear_infinite_reverse]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
