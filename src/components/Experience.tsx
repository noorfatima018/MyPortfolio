"use client";

import React from "react";
import { EXPERIENCE } from "@/lib/data";
import { Calendar, Briefcase, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Trajectory</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            A summary of my roles, client deliverables, and professional roadmap.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={exp.id}
              className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-[var(--accent)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: "var(--bg-tertiary)", color: "var(--accent)" }}>
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--fg)" }}>{exp.role}</h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold hover:underline"
                      style={{ color: "var(--accent-light)" }}
                    >
                      {exp.company}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-1.5 text-xs" style={{ color: "var(--fg-muted)" }}>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {exp.duration}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                </div>
              </div>

              <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: "var(--bg-tertiary)", color: "var(--fg-muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
