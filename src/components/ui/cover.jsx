"use client";
import { cn } from "../../lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Cover = ({ children, className }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 15 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative inline-block px-2 py-1 rounded-lg transition-all duration-200",
        className
      )}
    >
      <motion.span
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
        className="relative inline-block"
      >
        <span className="relative z-20 inline-block bg-gradient-to-br from-primary via-primary-400 to-primary-600 bg-clip-text text-transparent">
          {children}
        </span>
        <motion.span
          className="absolute inset-0 z-10 bg-gradient-to-br from-primary/20 via-primary-400/20 to-primary-600/20 blur-xl"
          style={{
            transform: "translateZ(-10px)",
          }}
        />
      </motion.span>
    </motion.span>
  );
};