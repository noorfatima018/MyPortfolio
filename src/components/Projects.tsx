"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { GitBranch, ExternalLink } from "lucide-react";

export const Projects = () => {
  const containerRef = useRef(null);
  
  return (
    <section id="projects" className="py-24 relative z-10" ref={containerRef}>
      <div className="section-container max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <span className="section-label">Showcase</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Creative <span className="gradient-text">Work</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "var(--fg-muted)" }}>
            A minimalist collection of my most impactful projects.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {PROJECTS.map((project, i) => {
            return (
              <ProjectCard key={project.id} project={project} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="relative group flex flex-col md:flex-row gap-8 lg:gap-16 items-center"
    >
      <div className={`w-full md:w-1/2 lg:w-[45%] rounded-3xl overflow-hidden aspect-[4/3] relative shadow-2xl ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      
      <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col gap-4">
        <h3 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
          {project.title}
        </h3>
        
        <p className="text-base lg:text-lg leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.slice(0, 4).map((tag: string) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "var(--bg-tertiary)", color: "var(--fg)" }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-6 mt-4 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              View Live
              <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--fg)" }}
            >
              Source Code
              <GitBranch size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
