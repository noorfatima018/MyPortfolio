"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { PERSONAL } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t mt-20 py-12" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold gradient-border"
            style={{ background: "var(--bg-tertiary)" }}>
            <span className="gradient-text">NF</span>
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
            Noor Fatima
          </span>
        </div>

        <p className="text-xs text-center" style={{ color: "var(--fg-muted)" }}>
          © {new Date().getFullYear()} Noor Fatima. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href={PERSONAL.github} target="_blank" rel="noreferrer" style={{ color: "var(--fg-muted)" }} className="hover:text-white transition-colors">
            <FaGithub size={16} />
          </a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--fg-muted)" }} className="hover:text-white transition-colors">
            <FaLinkedin size={16} />
          </a>
          <a href={`mailto:${PERSONAL.email}`} style={{ color: "var(--fg-muted)" }} className="hover:text-white transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
