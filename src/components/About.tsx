"use client";

import React from "react";
import { motion } from "framer-motion";
import { bentoItem, staggerContainer } from "@/lib/animations";
import { STATS, PERSONAL } from "@/lib/data";
import CountUp from "react-countup";
import { Rocket, Zap, Code, BookOpen } from "lucide-react";

const STAT_ICONS: Record<string, React.ReactNode> = {
  rocket: <Rocket size={20} />,
  zap: <Zap size={20} />,
  code: <Code size={20} />,
  book: <BookOpen size={20} />,
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="gradient-text">Background</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            A glimpse into my background, stats, and passion for software engineering.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Story (2 cols) */}
          <motion.div
            variants={bentoItem}
            className="md:col-span-2 glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--fg-muted)" }}>
                {PERSONAL.bio}
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                With a focus on Flutter, React, Next.js, and modern AI/ML systems, I bridge the gap between creative visual designs and powerful backend capabilities. I continuously explore new technologies and design systems to deliver world-class products.
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={bentoItem}
            className="flex flex-col gap-6"
          >
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-[var(--accent)] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--bg-tertiary)", color: "var(--accent)" }}>
                  {STAT_ICONS[stat.icon] ?? <Rocket size={20} />}
                </div>
                <div>
                  <h4 className="text-3xl font-bold tracking-tight">
                    <CountUp end={stat.value} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--fg-muted)" }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

