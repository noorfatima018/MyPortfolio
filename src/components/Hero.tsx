"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeBlurIn, staggerSlow, fadeInUp } from "@/lib/animations";
import { ArrowRight, Download, Mail, MapPin, Circle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const TYPING_PHRASES = [
  "Flutter Developer",
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "AI/ML Explorer",
  "Problem Solver",
];

const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    const current = TYPING_PHRASES[index];
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % TYPING_PHRASES.length);
      return;
    }
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => setSubIndex((s) => s + (deleting ? -1 : 1)), speed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index]);

  return (
    <span style={{ color: "var(--accent-light)" }}>
      {TYPING_PHRASES[index].slice(0, subIndex)}
      <span className="cursor-blink" style={{ color: "var(--accent)" }}>|</span>
    </span>
  );
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden px-6"
    >
      {/* Aurora backgrounds */}
      <div className="aurora-bg w-[700px] h-[700px] top-[-200px] left-[-200px]"
        style={{ background: "var(--accent)" }} />
      <div className="aurora-bg aurora-bg-2 w-[500px] h-[500px] bottom-[-100px] right-[-100px]"
        style={{ background: "var(--gradient-2)" }} />
      <div className="aurora-bg aurora-bg-3 w-[400px] h-[400px] top-[30%] left-[40%]"
        style={{ background: "var(--brand-blue, #60a5fa)", opacity: 0.15 }} />



      <div className="section-container w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left order-2 md:order-1"
            initial="hidden"
            animate="visible"
            variants={staggerSlow}
          >
            {/* Availability badge */}
            <motion.div variants={fadeBlurIn} className="mb-6 flex items-center gap-3 justify-center md:justify-start flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-semibold tracking-wider"
                style={{ color: "#4ade80" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <Circle size={8} className="relative inline-flex rounded-full" fill="#4ade80" stroke="none" />
                </span>
                Open to Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel text-xs"
                style={{ color: "var(--fg-muted)" }}>
                <MapPin size={12} /> Pakistan
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeBlurIn}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text block sm:inline">Noor Fatima</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={fadeBlurIn} className="text-xl md:text-2xl font-light mb-4 h-9">
              <TypewriterEffect />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeBlurIn}
              className="text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              I craft <span style={{ color: "var(--accent-light)" }}>beautiful digital experiences</span> — from
              AI-powered apps to sleek Flutter mobile solutions. Turning ideas into production-ready products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeBlurIn} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-8">
              <a
                href="#projects"
                className="group px-8 py-3.5 rounded-full font-semibold text-white transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ background: "var(--accent)" }}
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Noor_Fatima_CV.pdf"
                download
                className="group px-8 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 w-full sm:w-auto justify-center glass-panel"
                style={{ color: "var(--fg)" }}
              >
                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeBlurIn} className="flex items-center gap-4 justify-center md:justify-start">
              {[
                { href: "https://github.com/noorfatima018", icon: <FaGithub size={20} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/noor-fatima-653aa3337/", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
                { href: "mailto:noor.fatima.212212@gmail.com", icon: <Mail size={20} />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full glass-panel transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <span style={{ color: "var(--fg-muted)" }} className="group-hover:text-white transition-colors block"
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-light)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
                  >
                    {icon}
                  </span>
                </motion.a>
              ))}

            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="order-1 md:order-2 shrink-0 relative"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, type: "spring", bounce: 0.3, delay: 0.3 }}
          >
            {/* Solid border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full"
              style={{
                padding: 4,
                background: "var(--accent)",
              }}>
              <div className="w-full h-full rounded-full p-1"
                style={{ background: "var(--bg)" }}>
                <img
                  src="https://avatars.githubusercontent.com/u/187599428?v=4"
                  alt="Noor Fatima — Flutter & Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -right-4 top-8 glass-panel rounded-2xl px-3 py-2 text-xs font-semibold flex items-center gap-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{ color: "var(--fg)" }}
            >
              <span>10+</span>
              <span style={{ color: "var(--fg-muted)" }}>Projects</span>
            </motion.div>

            <motion.div
              className="absolute -left-6 bottom-12 glass-panel rounded-2xl px-3 py-2 text-xs font-semibold flex items-center gap-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              style={{ color: "var(--fg)" }}
            >
              <span>15+</span>
              <span style={{ color: "var(--fg-muted)" }}>Technologies</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
