"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Code2, Briefcase, Mail, X, ArrowRight } from "lucide-react";

const COMMANDS = [
  { label: "Home",           section: "hero",       icon: <Home size={16} /> },
  { label: "About Me",       section: "about",      icon: <User size={16} /> },
  { label: "Skills",         section: "skills",     icon: <Code2 size={16} /> },
  { label: "Projects",       section: "projects",   icon: <Code2 size={16} /> },
  { label: "Experience",     section: "experience", icon: <Briefcase size={16} /> },
  { label: "Education",      section: "education",  icon: <Briefcase size={16} /> },
  { label: "Contact",        section: "contact",    icon: <Mail size={16} /> },
  { label: "GitHub",         url: "https://github.com/noorfatima018", icon: <Code2 size={16} /> },
  { label: "LinkedIn",       url: "https://www.linkedin.com/in/noor-fatima-653aa3337/", icon: <Briefcase size={16} /> },
  { label: "Download CV",    url: "/Noor_Fatima_CV.pdf", icon: <ArrowRight size={16} /> },
];

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelected(0);
    }
  }, [open]);

  const execute = (cmd: (typeof COMMANDS)[0]) => {
    if (cmd.url) {
      window.open(cmd.url, "_blank");
    } else if (cmd.section) {
      document.getElementById(cmd.section)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      filtered[selected] && execute(filtered[selected]);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-start justify-center pt-[15vh] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Palette */}
            <motion.div
              className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <Search size={18} style={{ color: "var(--accent)" }} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                  onKeyDown={handleKey}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent outline-none text-sm"
                  style={{ color: "var(--fg)" }}
                />
                <button onClick={() => setOpen(false)}>
                  <X size={16} style={{ color: "var(--fg-muted)" }} />
                </button>
              </div>

              {/* Results */}
              <ul className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <li className="px-4 py-3 text-sm" style={{ color: "var(--fg-muted)" }}>
                    No commands found
                  </li>
                )}
                {filtered.map((cmd, i) => (
                  <li
                    key={cmd.label}
                    className="flex items-center gap-3 px-4 py-2.5 cursor-pointer text-sm transition-colors"
                    style={{
                      background: i === selected ? "rgba(192,132,252,0.1)" : "transparent",
                      color: i === selected ? "var(--accent-light)" : "var(--fg)",
                    }}
                    onMouseEnter={() => setSelected(i)}
                    onClick={() => execute(cmd)}
                  >
                    <span style={{ color: "var(--accent)" }}>{cmd.icon}</span>
                    {cmd.label}
                    {i === selected && (
                      <ArrowRight size={14} className="ml-auto" style={{ color: "var(--accent)" }} />
                    )}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="px-4 py-2 border-t flex gap-4 text-xs" style={{ borderColor: "var(--border)", color: "var(--fg-subtle)" }}>
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
