"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Code } from "lucide-react";
import { PERSONAL } from "@/lib/data";

export const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      url: PERSONAL.github,
      username: "noorfatima018",
      icon: <FaGithub size={24} />,
      desc: "Open source projects, repositories, and contribution activity.",
    },
    {
      name: "LinkedIn",
      url: PERSONAL.linkedin,
      username: "Noor Fatima",
      icon: <FaLinkedin size={24} />,
      desc: "Professional networking, connections, and background info.",
    },
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Profiles</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            Explore my external coding presence and networking profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profiles.map((prof) => (
            <a
              key={prof.name}
              href={prof.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--bg-tertiary)", color: "var(--accent)" }}>
                    {prof.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--fg)" }}>{prof.name}</h3>
                    <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>@{prof.username}</p>
                  </div>
                </div>

                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>{prof.desc}</p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--accent-light)" }}>
                <span>Visit Profile</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
