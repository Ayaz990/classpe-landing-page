"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../lib/utils";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}) => {
  return (
    <div className={cn("h-full w-full relative flex items-center justify-center", className)}>
      <div className="absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center">
        <svg
          className="absolute inset-0 h-full w-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(148, 163, 184, 0.2)"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="grid"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <rect width="200" height="200" fill="url(#smallGrid)" />
              <path
                d="M 200 0 L 0 0 0 200"
                fill="none"
                stroke="rgba(148, 163, 184, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <SVG />
      {children}
    </div>
  );
};

export const SVG = ({ className }) => {
  const lines = [
    {
      id: 1,
      d: "M0 300 Q 150 250, 300 300 T 600 300",
      strokeWidth: 2,
    },
    {
      id: 2,
      d: "M0 350 Q 150 300, 300 350 T 600 350",
      strokeWidth: 2,
    },
    {
      id: 3,
      d: "M0 400 Q 150 350, 300 400 T 600 400",
      strokeWidth: 2,
    },
    {
      id: 4,
      d: "M0 450 Q 150 400, 300 450 T 600 450",
      strokeWidth: 2,
    },
    {
      id: 5,
      d: "M0 250 Q 150 200, 300 250 T 600 250",
      strokeWidth: 2,
    },
  ];

  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute h-full w-full inset-0 pointer-events-none",
        className
      )}
    >
      {lines.map((line) => (
        <motion.path
          key={line.id}
          d={line.d}
          stroke="url(#gradient)"
          strokeWidth={line.strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0, 143, 245, 0.2)" />
          <stop offset="50%" stopColor="rgba(0, 143, 245, 0.5)" />
          <stop offset="100%" stopColor="rgba(0, 143, 245, 0.2)" />
        </linearGradient>
      </defs>
    </svg>
  );
};