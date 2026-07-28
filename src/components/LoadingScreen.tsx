"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [20, 45, 70, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onDone, 400);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "var(--bg)" }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Aurora */}
      <div className="aurora-bg w-[500px] h-[500px] opacity-30 top-0 left-0"
        style={{ background: "var(--accent)" }} />
      <div className="aurora-bg aurora-bg-2 w-[400px] h-[400px] opacity-20 bottom-0 right-0"
        style={{ background: "var(--gradient-2)" }} />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 relative"
      >
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold gradient-border"
          style={{ background: "var(--card)" }}>
          <span className="gradient-text">NF</span>
        </div>
        <div className="absolute -inset-2 rounded-2xl pulse-glow opacity-50 pointer-events-none" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-sm mb-8 tracking-widest uppercase"
        style={{ color: "var(--fg-muted)" }}
      >
        Loading Portfolio...
      </motion.p>

      {/* Progress bar */}
      <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2))",
            width: `${progress}%`,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <motion.span
        className="text-xs mt-3"
        style={{ color: "var(--fg-subtle)" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        {progress}%
      </motion.span>
    </motion.div>
  );
};
