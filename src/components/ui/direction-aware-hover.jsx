"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const DirectionAwareHover = ({ imageUrl, children, childrenClassName, imageClassName, className, icon: Icon }) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");

  const handleMouseEnter = (event) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "md:h-96 w-full bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full w-full",
          imageClassName
        )}
      >
        {}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#003d5c] to-[#001f2e] flex items-center justify-center">
          {Icon && <Icon className="w-32 h-32 text-white/20" strokeWidth={1.5} />}
        </div>

        {}
        <motion.div
          className="absolute inset-0 w-full h-full bg-black/70 z-10"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          animate={direction}
          variants={{
            initial: {
              x: "0%",
              y: "0%",
            },
            top: {
              y: "-100%",
            },
            bottom: {
              y: "100%",
            },
            left: {
              x: "-100%",
            },
            right: {
              x: "100%",
            },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          variants={{
            initial: {
              opacity: 0,
            },
            top: {
              opacity: 1,
              y: -10,
            },
            bottom: {
              opacity: 1,
              y: 10,
            },
            left: {
              opacity: 1,
              x: -10,
            },
            right: {
              opacity: 1,
              x: 10,
            },
          }}
          animate={direction}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "relative px-4 py-4 h-full w-full flex items-center justify-center z-20 opacity-0 group-hover/card:opacity-100",
            childrenClassName
          )}
        >
          <div className="text-center">
            {Icon && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mb-4 flex justify-center"
              >
                <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
              </motion.div>
            )}
            {children}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};