"use client";

import React from "react";
import { CERTIFICATIONS } from "@/lib/data";
import { Award, ExternalLink, Calendar, GraduationCap } from "lucide-react";

export const Certifications = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Certifications & <span className="gradient-text">Badges</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            Professional credentials and verified domain skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 rounded-3xl relative overflow-hidden group hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--bg-tertiary)", color: "var(--accent)" }}
                  >
                    <GraduationCap size={18} />
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-[var(--bg-tertiary)] transition-colors"
                    style={{ color: "var(--fg-subtle)" }}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <h3 className="text-base font-bold mb-1" style={{ color: "var(--fg)" }}>
                  {cert.title}
                </h3>
                <p className="text-xs mb-4" style={{ color: "var(--fg-muted)" }}>
                  {cert.issuer}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: "var(--fg-subtle)" }}>
                  <Calendar size={12} />
                  <span>Issued {cert.date}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{ background: "var(--bg-tertiary)", color: "var(--fg-subtle)" }}
                    >
                      {tag}
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

