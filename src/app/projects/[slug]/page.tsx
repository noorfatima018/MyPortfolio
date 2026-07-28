"use client";

import React, { use } from "react";
import { PROJECTS } from "@/lib/data";
import { GitBranch, ExternalLink, ArrowLeft, Calendar, Award } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = use(params);
  const project = PROJECTS.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)]">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link href="/" className="px-6 py-2.5 rounded-full bg-[var(--accent)] text-white font-semibold">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-[var(--bg)]">
      <Cursor />
      <Navbar />

      <div className="section-container pt-32 pb-24">
        {/* Back link */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:underline" style={{ color: "var(--accent-light)" }}>
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="relative h-64 md:h-[400px] rounded-3xl overflow-hidden mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="%23161b22"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="%23c084fc">${project.title}</text></svg>`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white mb-3 inline-block"
              style={{
                background:
                  project.status === "Completed"
                    ? "#10b981"
                    : project.status === "In Progress"
                    ? "#3b82f6"
                    : "#f59e0b",
              }}
            >
              {project.status}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-gray-300 text-sm md:text-base max-w-xl">{project.description}</p>
          </div>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>Project Overview</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {project.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feat, i) => (
                  <li
                    key={i}
                    className="glass-card p-4 rounded-2xl flex items-start gap-3 text-sm"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    <span className="text-[var(--accent)] font-bold">•</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Details sidebar */}
          <div className="flex flex-col gap-6">
            <div className="glass-card p-6 rounded-3xl">
              <h3 className="text-lg font-bold mb-4" style={{ color: "var(--fg)" }}>Details</h3>

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between border-b pb-3" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--fg-subtle)" }}>Difficulty</span>
                  <span className="font-semibold" style={{ color: "var(--fg)" }}>{project.difficulty}</span>
                </div>
                <div className="flex justify-between border-b pb-3" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--fg-subtle)" }}>Timeline</span>
                  <span className="font-semibold" style={{ color: "var(--fg)" }}>{project.timeline}</span>
                </div>
                <div className="flex justify-between border-b pb-3" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--fg-subtle)" }}>Category</span>
                  <span className="font-semibold" style={{ color: "var(--fg)" }}>{project.category.join(", ")}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white transition-all"
                  style={{ background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))" }}
                >
                  <GitBranch size={16} />
                  GitHub Repository
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold transition-all border border-[var(--border)]"
                    style={{ color: "var(--fg)" }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl">
              <h3 className="text-lg font-bold mb-4" style={{ color: "var(--fg)" }}>Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: "var(--bg-tertiary)", color: "var(--fg-muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
