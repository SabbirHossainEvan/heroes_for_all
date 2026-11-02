"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  value: string | number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
};

/**
 * Animated number counter. Accepts a numeric value or a string like "10,000"
 * (commas are stripped, then re-added during the count-up). Non-numeric
 * strings (e.g. "500+") are rendered as-is.
 */
export function AnimatedCounter({
  value,
  duration = 1.8,
  className,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  // Determine if the value is numeric
  const rawStr = String(value).replace(/[^\d.]/g, "");
  const target = parseFloat(rawStr);
  const isNumeric = !Number.isNaN(target) && rawStr.length > 0;
  const hasComma = String(value).includes(",");

  const [display, setDisplay] = useState<string>(
    isNumeric ? (hasComma ? target.toLocaleString("en-US") : String(target)) : String(value),
  );

  useEffect(() => {
    if (!isNumeric || !inView || reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(hasComma ? target.toLocaleString("en-US") : String(target));
      return;
    }

    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(1, elapsed / duration);
      // ease-out-cubic for a slowing finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(hasComma ? Math.round(current).toLocaleString("en-US") : String(Math.round(current)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(hasComma ? target.toLocaleString("en-US") : String(target));
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumeric, target, duration, reduce, hasComma]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {isNumeric ? `${prefix}${display}${suffix}` : display}
    </motion.span>
  );
}
