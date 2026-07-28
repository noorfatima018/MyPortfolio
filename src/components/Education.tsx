"use client";

import React from "react";
import { EDUCATION } from "@/lib/data";
import { Calendar, GraduationCap, Award } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Academics</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Education <span className="gradient-text">Milestones</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            Academic credentials, core courses, and background foundation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden hover:border-[var(--accent)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: "var(--bg-tertiary)", color: "var(--accent)" }}>
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--fg)" }}>{edu.degree}</h3>
                    <p className="text-sm font-semibold" style={{ color: "var(--fg-muted)" }}>
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-1.5 text-xs" style={{ color: "var(--fg-muted)" }}>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {edu.duration}</span>
                  <span className="flex items-center gap-1 font-bold text-[var(--accent-light)]">CGPA: {edu.gpa}</span>
                </div>
              </div>

              <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {edu.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--fg)" }}>
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: "var(--bg-tertiary)", color: "var(--fg-muted)" }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
