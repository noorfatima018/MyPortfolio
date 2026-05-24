import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-brand-base-bg">
      <Cursor />
      <Navbar />
      
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm relative z-10 border-t border-white/5 mt-10">
        <p className="flex items-center justify-center gap-1 group">
          Designed & Built by Noor Fatima <span className="inline-block group-hover:scale-125 transition-transform duration-300 text-pink-500">🌸</span>
        </p>
      </footer>
    </main>
  );
}
