"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { staggerContainer, fadeBlurIn } from "@/lib/animations";
import { GitBranch } from "lucide-react";

const projects = [
  {
    title: "AI Crop Disease Detection",
    description: "Deep learning agricultural diagnostic system with hybrid SVM/KNN transfer learning, automated PDF report generation, and MongoDB local sync.",
    tags: ["Python", "TensorFlow", "Flask", "React", "MongoDB"],
    github: "https://github.com/noorfatima018/AI_Crops_Disease_Detection",
    image: "/crop_disease.png",
  },
  {
    title: "Quiz Master",
    description: "Interactive & dynamic Flutter quiz application featuring real-time tracking, Groq AI tutor integration, and high-fidelity screen transitions.",
    tags: ["Flutter", "Dart", "Firebase", "Groq AI"],
    github: "https://github.com/noorfatima018/Quiz_Master",
    image: "/quiz_master.png",
  },
  {
    title: "RecipeFinder",
    description: "A smart culinary web application that helps users discover, organize, and explore recipes with a beautiful glassmorphic interface.",
    tags: ["React", "API", "Tailwind CSS"],
    github: "https://github.com/noorfatima018/RecipeFinder.git",
    image: "/recipe_finder.png",
  },
  {
    title: "Lush Blush Website",
    description: "A beautifully designed modern e-commerce platform for makeup and beauty products.",
    tags: ["CSS", "JavaScript", "HTML"],
    github: "https://github.com/noorfatima018/LushBlush-makeup-website",
    image: "/lush_blush.png",
  }
];

const TiltCard = ({ project }: { project: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative glass-panel rounded-2xl overflow-hidden shadow-xl"
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      variants={fadeBlurIn}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(192, 132, 252, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative h-48 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent" />
      </div>

      <div className="relative p-6 -mt-8 z-20">
        <h3 className="text-2xl font-serif font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple-light border border-brand-purple/20">
                {tag}
              </span>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white">
            <GitBranch size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-400">A selection of my recent works.</p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {projects.map((project, idx) => (
          <TiltCard key={idx} project={project} />
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a
          href="https://github.com/noorfatima018"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-purple/10 text-brand-purple-light border border-brand-purple/20 hover:bg-brand-purple/20 transition-all hover:scale-105"
        >
          <GitBranch size={20} />
          <span>View More on GitHub</span>
        </a>
      </motion.div>
    </section>
  );
};
