"use client";

import React from "react";
import { TECH_STACK } from "@/lib/data";
import {
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiTensorflow,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiFlask,
  SiDart,
  SiGit,
  SiNodedotjs,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

// Map string icon names to React Icon Components
const iconComponents: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiTensorflow,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiFlask,
  SiDart,
  SiGit,
  SiNodedotjs,
  SiSupabase,
  SiVercel,
};

export const TechStack = () => {
  // Split technologies into two rows for alternate marquee directions
  const midIndex = Math.ceil(TECH_STACK.length / 2);
  const firstRow = TECH_STACK.slice(0, midIndex);
  const secondRow = TECH_STACK.slice(midIndex);

  // Helper to render the marquee items
  const renderMarqueeItems = (items: typeof TECH_STACK) => {
    return [...items, ...items, ...items].map((tech, idx) => {
      const Icon = iconComponents[tech.icon];
      return (
        <div
          key={`${tech.name}-${idx}`}
          className="flex items-center gap-2.5 px-5 py-3 mx-4 rounded-xl glass-card text-sm font-medium hover:border-[var(--accent)] hover:scale-105 transition-all duration-300 cursor-default"
        >
          {Icon ? <Icon size={18} color={tech.color} /> : <span>⚡</span>}
          <span style={{ color: "var(--fg)" }}>{tech.name}</span>
        </div>
      );
    });
  };

  return (
    <section className="py-16 overflow-hidden relative z-10">
      <div className="section-container text-center mb-10">
        <span className="section-label">Technologies</span>
        <h2 className="text-3xl md:text-4xl font-bold">Tech Stack Marquee</h2>
      </div>

      <div className="marquee-container flex flex-col gap-6 w-full">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden">
          <div className="marquee-track">
            {renderMarqueeItems(firstRow)}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden">
          <div className="marquee-track-reverse">
            {renderMarqueeItems(secondRow)}
          </div>
        </div>
      </div>
    </section>
  );
};
