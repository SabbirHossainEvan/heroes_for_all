"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

type RevealProps = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "header";
};

const directionToOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    case "scale":
      return { scale: 0.92 };
    default:
      return {};
  }
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 24,
  once = true,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...(reduce ? {} : directionToOffset(direction, distance)),
      filter: reduce ? "none" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0.01 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1], // custom cubic-bezier for premium feel
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
