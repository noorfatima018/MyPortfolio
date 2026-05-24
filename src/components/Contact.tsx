"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeBlurIn, staggerContainer } from "@/lib/animations";
import { GitBranch, Briefcase, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      // We are using Web3Forms because FormSubmit is currently experiencing a server outage.
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            // IMPORTANT: Replace this with your actual access key from Web3Forms
            access_key: "ad074abe-9e72-490b-abea-80f8cd591546", 
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New message from ${formData.name} via Portfolio`,
        })
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000); // Reset status after 5s
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6 relative z-10">
      <motion.div 
        className="glass-panel p-8 md:p-12 rounded-[2rem] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeBlurIn} className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Let's Build Something <br className="md:hidden" />
          <span className="gradient-text animate-pulse">Beautiful Together ✨</span>
        </motion.h2>
        
        <motion.p variants={fadeBlurIn} className="text-gray-400 mb-10 max-w-xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's connect!
        </motion.p>

        <motion.form variants={fadeBlurIn} onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mb-10 text-left">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              disabled={status === "sending"}
              placeholder="Your name" 
              className="bg-[#0d1117]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all disabled:opacity-50"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              disabled={status === "sending"}
              placeholder="Your email address" 
              className="bg-[#0d1117]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all disabled:opacity-50"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-2">Message</label>
            <textarea 
              id="message" 
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              disabled={status === "sending"}
              placeholder="How can I help you?" 
              className="bg-[#0d1117]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all resize-none disabled:opacity-50"
            />
          </div>
          
          <button 
            type="submit"
            disabled={status === "sending"}
            className="mt-4 px-6 py-3.5 rounded-xl bg-brand-purple hover:bg-brand-purple-light text-white font-medium transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "idle" && (
              <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
            )}
            {status === "sending" && "Sending..."}
            {status === "success" && <><CheckCircle2 size={18} /> Sent Successfully!</>}
            {status === "error" && <><AlertCircle size={18} /> Failed to send</>}
          </button>
          
          {status === "success" && (
            <p className="text-green-400 text-sm text-center mt-2">
              Thank you for reaching out! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-2">
              Oops! Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>

        <motion.div variants={fadeBlurIn} className="flex items-center justify-center gap-6 pt-8 border-t border-white/10">
          <a href="https://github.com/noorfatima018" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors">
            <GitBranch size={24} />
          </a>
          <a href="https://www.linkedin.com/in/noor-fatima-653aa3337" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors">
            <Briefcase size={24} />
          </a>
          <a href="mailto:noor.fatima.212212@gmail.com" className="text-gray-400 hover:text-brand-purple transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
