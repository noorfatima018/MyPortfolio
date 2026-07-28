"use client";

import React, { useState } from "react";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";

import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { GithubStats } from "@/components/GithubStats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CommandPalette } from "@/components/CommandPalette";
import { BackToTop } from "@/components/BackToTop";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onDone={() => setLoading(false)} />
        ) : (
          <main key="main" className="min-h-screen relative overflow-hidden bg-[var(--bg)] page-enter">
            <Cursor />
            <Navbar />
            <CommandPalette />
            <BackToTop />

            {/* Aurora Background blobs */}
            <div className="aurora-bg w-[600px] h-[600px] top-[-100px] left-[-200px]"
              style={{ background: "var(--accent)" }} />
            <div className="aurora-bg aurora-bg-2 w-[500px] h-[500px] bottom-[-100px] right-[-100px]"
              style={{ background: "var(--gradient-2)" }} />

            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Certifications />
            <Projects />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
