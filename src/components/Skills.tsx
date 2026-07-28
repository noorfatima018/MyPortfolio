"use client";

import React from "react";
import { motion } from "framer-motion";
import { bentoItem, staggerContainer } from "@/lib/animations";
import { SKILLS } from "@/lib/data";
import { Smartphone, Layout, Server, Cpu, Database, Wrench } from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  mobile: <Smartphone size={18} />,
  layout: <Layout size={18} />,
  server: <Server size={18} />,
  cpu: <Cpu size={18} />,
  database: <Database size={18} />,
  tool: <Wrench size={18} />,
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            Categorized technical skills and tools.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SKILLS.map((category) => (
            <motion.div
              key={category.category}
              variants={bentoItem}
              className="glass-card p-6 rounded-2xl relative group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--bg-tertiary)", color: "var(--accent)" }}
                >
                  {CATEGORY_ICONS[category.icon] ?? <Wrench size={18} />}
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg transition-colors hover:bg-opacity-80"
                    style={{ background: "var(--bg-tertiary)", color: "var(--fg)" }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
