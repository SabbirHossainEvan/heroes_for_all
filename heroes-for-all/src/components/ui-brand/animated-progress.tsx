"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedProgressProps = {
  /** Percentage 0–100 */
  value: number;
  className?: string;
  barClassName?: string;
  /** Color variant — defaults to coral for active, primary for complete */
  variant?: "accent" | "primary";
  delay?: number;
  duration?: number;
  "aria-label"?: string;
};

export function AnimatedProgress({
  value,
  className,
  barClassName,
  variant = "accent",
  delay = 0.2,
  duration = 1.2,
  ...aria
}: AnimatedProgressProps) {
  const reduce = useReducedMotion();
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      {...aria}
      className={cn(
        "h-2 w-full rounded-full bg-secondary overflow-hidden",
        className,
      )}
    >
      <motion.div
        className={cn(
          "h-full rounded-full",
          variant === "accent" ? "bg-accent" : "bg-primary",
          barClassName,
        )}
        initial={{ width: reduce ? `${clamped}%` : "0%" }}
        whileInView={{ width: `${clamped}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: reduce ? 0.01 : duration,
          delay: reduce ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}
