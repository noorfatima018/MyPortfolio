"use client";

import React from "react";
import { PROJECTS } from "@/lib/data";
import { Compass, Code, Award, ArrowRight } from "lucide-react";

export const Timeline = () => {
  // Sort projects or major events by year/timeline
  const milestones = [
    {
      year: "2026",
      title: "Crop Disease AI & Quiz Master App",
      description: "Deployed crop disease classifier using TensorFlow/Flask and designed personalized tutoring quiz app with Groq AI.",
      icon: <Award size={16} />,
    },
    {
      year: "2026",
      title: "E-Learning & ShopHub",
      description: "Launched mobile catalog ShopHub App using Flutter and verified responsive React-based LMS platform.",
      icon: <Code size={16} />,
    },
    {
      year: "2025",
      title: "Academics & Core Programming",
      description: "Implemented LushBlush beauty site, guess games, and explored algorithms and database systems.",
      icon: <Compass size={16} />,
    },
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Development <span className="gradient-text">Timeline</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            Key milestones, projects launched, and my evolution as a software engineer.
          </p>
        </div>

        <div className="max-w-xl mx-auto relative pl-6 border-l" style={{ borderColor: "var(--border)" }}>
          {milestones.map((ms, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0 group">
              {/* Dot */}
              <div
                className="absolute -left-[31px] top-1 w-4 h-4 rounded-full flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--accent)]"
                style={{ background: "var(--bg)", borderColor: "var(--accent)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold tracking-widest" style={{ color: "var(--accent-light)" }}>
                  {ms.year}
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--fg)" }}>
                  {ms.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  {ms.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
