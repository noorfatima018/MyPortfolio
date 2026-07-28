"use client";

import React from "react";
import { SERVICES } from "@/lib/data";

export const Services = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Offerings</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Services & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            Premium client-oriented development solutions engineered for scale and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-[var(--accent)] transition-all duration-300"
            >
              {/* Corner indicator */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${serv.gradient} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`} />

              <div className="flex gap-4 items-start mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ background: "var(--bg-tertiary)" }}>
                  {serv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--fg)" }}>
                    {serv.title}
                  </h3>
                  <div className={`h-1 w-12 rounded bg-gradient-to-r ${serv.gradient}`} />
                </div>
              </div>

              <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {serv.description}
              </p>

              <ul className="space-y-2 text-xs" style={{ color: "var(--fg-muted)" }}>
                {serv.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="text-[var(--accent)]">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
