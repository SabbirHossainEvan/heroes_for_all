"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
  as?: "div" | "section" | "ul" | "ol" | "header";
};

export function StaggerGroup({
  children,
  className,
  delay = 0,
  staggerChildren = 0.1,
  once = true,
  as = "div",
}: StaggerGroupProps) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : staggerChildren,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  distance?: number;
  as?: "div" | "li" | "article" | "span";
};

const offsetFor = (direction: StaggerItemProps["direction"], distance: number) => {
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
      return { scale: 0.94 };
    default:
      return {};
  }
};

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 20,
  as = "div",
}: StaggerItemProps) {
  const reduce = useReducedMotion();

  const item: Variants = {
    hidden: {
      opacity: 0,
      ...(reduce ? {} : offsetFor(direction, distance)),
      filter: reduce ? "none" : "blur(3px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0.01 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag variants={item} className={cn(className)}>
      {children}
    </MotionTag>
  );
}
