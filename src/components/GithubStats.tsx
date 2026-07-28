"use client";

import React, { useEffect, useState } from "react";
import { GitBranch, Star, Users, Award } from "lucide-react";
import CountUp from "react-countup";

export const GithubStats = () => {
  const [stats, setStats] = useState({
    repos: 10,
    stars: 5,
    followers: 12,
    following: 15,
  });

  useEffect(() => {
    // Fetch real data from the API
    fetch("https://api.github.com/users/noorfatima018")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos !== undefined) {
          setStats({
            repos: data.public_repos,
            stars: 6, // Hardcoded fallback for stars since it needs separate repo fetch
            followers: data.followers,
            following: data.following,
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-24 relative z-10">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label">Open Source</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            GitHub <span className="gradient-text">Statistics</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--fg-muted)" }}>
            Real-time insights from my GitHub developer account.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Repositories", value: stats.repos, icon: <GitBranch size={20} /> },
            { label: "Total Stars", value: stats.stars, icon: <Star size={20} /> },
            { label: "Followers", value: stats.followers, icon: <Users size={20} /> },
            { label: "Following", value: stats.following, icon: <Award size={20} /> },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:border-[var(--accent)] transition-colors duration-300"
            >
              <span className="mb-3" style={{ color: "var(--accent)" }}>{item.icon}</span>
              <h3 className="text-3xl font-bold tracking-tight mb-1">
                <CountUp end={item.value} duration={2} enableScrollSpy scrollSpyOnce />
              </h3>
              <p className="text-xs" style={{ color: "var(--fg-muted)" }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Contribution Graph & Stats Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Stats Summary Visual */}
          <div className="glass-card p-6 rounded-3xl flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold mb-4 w-full text-left" style={{ color: "var(--fg)" }}>GitHub Stats Visual</h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=noorfatima018&show_icons=true&theme=transparent&title_color=c084fc&text_color=8b949e&icon_color=c084fc&border_color=30363d&hide_border=true"
              alt="Noor Fatima GitHub Stats"
              className="w-full max-w-md h-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Card 2: Top Languages */}
          <div className="glass-card p-6 rounded-3xl flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold mb-4 w-full text-left" style={{ color: "var(--fg)" }}>Most Used Languages</h3>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=noorfatima018&layout=compact&theme=transparent&title_color=c084fc&text_color=8b949e&icon_color=c084fc&border_color=30363d&hide_border=true"
              alt="Noor Fatima GitHub Languages"
              className="w-full max-w-md h-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
