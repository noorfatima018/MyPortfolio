"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            Quick answers to common questions about my development processes and skills.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border transition-all duration-300"
                style={{ borderColor: isOpen ? "var(--accent)" : "var(--border)" }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-base cursor-pointer"
                  style={{ color: "var(--fg)" }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: "var(--accent)",
                    }}
                  />
                </button>

                {/* Answer with smooth height */}
                <div
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="p-6 pt-0 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
