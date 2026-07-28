"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PERSONAL } from "@/lib/data";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Use mailto with prefilled details
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${PERSONAL.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            Have a project in mind, want to collaborate, or just want to say hi? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--fg)" }}>Let's talk!</h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
                I'm open to collaborations, remote positions, and open-source contributions. Shoot me an email or find me on socials!
              </p>

              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "var(--bg-tertiary)", color: "var(--accent)" }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs" style={{ color: "var(--fg-subtle)" }}>Email</h4>
                    <a href={`mailto:${PERSONAL.email}`} className="text-sm font-semibold hover:underline" style={{ color: "var(--fg)" }}>
                      {PERSONAL.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "var(--bg-tertiary)", color: "var(--accent)" }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs" style={{ color: "var(--fg-subtle)" }}>Location</h4>
                    <span className="text-sm font-semibold" style={{ color: "var(--fg)" }}>{PERSONAL.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass-panel hover:border-[var(--accent)] hover:text-white transition-colors"
                style={{ color: "var(--fg-muted)" }}
              >
                <FaGithub size={18} />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass-panel hover:border-[var(--accent)] hover:text-white transition-colors"
                style={{ color: "var(--fg-muted)" }}
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-card p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--fg)" }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 text-sm rounded-xl border bg-[var(--bg-secondary)] border-[var(--border)] focus:border-[var(--accent)] outline-none"
                  style={{ color: "var(--fg)" }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 text-sm rounded-xl border bg-[var(--bg-secondary)] border-[var(--border)] focus:border-[var(--accent)] outline-none"
                  style={{ color: "var(--fg)" }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-4 py-3 text-sm rounded-xl border bg-[var(--bg-secondary)] border-[var(--border)] focus:border-[var(--accent)] outline-none resize-none"
                  style={{ color: "var(--fg)" }}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white transition-all cursor-pointer"
                style={{ background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))" }}
              >
                <Send size={16} />
                Send via Email
              </button>

              {sent && (
                <span className="text-xs text-center font-semibold" style={{ color: "#10b981" }}>
                  Thank you! Redirecting to email client...
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
