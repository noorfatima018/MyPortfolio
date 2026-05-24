"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { staggerContainer, fadeBlurIn } from "@/lib/animations";
import { Smartphone, Globe, Brain, PenTool } from "lucide-react";

const services = [
  {
    title: "Mobile App Development",
    description: "I build responsive, high-performance, and feature-rich cross-platform mobile applications. My apps feature smooth animations, complex state management, and real-time backend synchronization.",
    features: ["Flutter", "Dart", "Firebase", "State Management"],
    icon: Smartphone,
  },
  {
    title: "Modern Web Development",
    description: "I create premium, responsive web applications with a focus on seamless user experiences, interactive elements, and SEO-optimized structures that look beautiful on every device.",
    features: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: Globe,
  },
  {
    title: "Machine Learning & AI",
    description: "I develop intelligent diagnostic systems, predictive models, and integrate cutting-edge AI capabilities (like Groq AI) directly into modern web and mobile applications.",
    features: ["Python", "TensorFlow", "Scikit-Learn", "Computer Vision"],
    icon: Brain,
  },
  {
    title: "UI/UX & Interactive Design",
    description: "Beyond just coding, I focus on the visual aesthetics. I design modern glassmorphic interfaces, dynamic micro-interactions, and engaging user flows that wow your audience.",
    features: ["Wireframing", "Prototyping", "Glassmorphism", "Micro-Animations"],
    icon: PenTool,
  },
];

const ServiceCard = ({ service }: { service: any }) => {
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
      className="group relative glass-panel rounded-2xl p-8 overflow-hidden shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      variants={fadeBlurIn}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(192, 132, 252, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-20">
        <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple-light mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-brand-purple/20">
          <service.icon size={32} />
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.features.map((feature: string, i: number) => (
            <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-brand-purple/30 transition-colors">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-24 max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Combining technical expertise with an eye for design to deliver premium digital solutions.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </motion.div>
    </section>
  );
};
