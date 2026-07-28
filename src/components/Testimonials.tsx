"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  const curr = TESTIMONIALS[index];

  return (
    <section className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Endorsements</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            What clients and collaborators say about my work.
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass-card p-8 md:p-10 rounded-3xl relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)]">
              {curr.avatar}
            </div>
            <div>
              <h3 className="text-base font-bold" style={{ color: "var(--fg)" }}>{curr.name}</h3>
              <p className="text-xs" style={{ color: "var(--fg-muted)" }}>{curr.role}</p>
            </div>
            <div className="ml-auto flex gap-0.5">
              {[...Array(curr.rating)].map((_, i) => (
                <Star key={i} size={14} fill="#f59e0b" stroke="none" />
              ))}
            </div>
          </div>

          <p className="text-base italic leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
            "{curr.text}"
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={prev}
              className="p-2 rounded-xl border border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer"
              style={{ color: "var(--fg)" }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-xl border border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer"
              style={{ color: "var(--fg)" }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
