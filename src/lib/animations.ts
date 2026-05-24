import { Variants } from "framer-motion";

export const fadeBlurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export const bentoItem: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 }
  }
};
