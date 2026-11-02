"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Next.js wraps every route in `template.tsx`. We use it to add a smooth
 * fade-and-rise transition on every navigation. Each route remounts the
 * template (unlike layout), so the entrance animation runs on every
 * navigation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduce ? 0.01 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
