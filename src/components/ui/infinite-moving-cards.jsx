"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState, forwardRef } from "react";

export const InfiniteMovingCards = forwardRef(({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}, ref) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollTimeoutRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    scrollLeft: (amount) => {
      if (containerRef.current && scrollerRef.current) {

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        setIsPaused(true);

        const container = containerRef.current;
        const scroller = scrollerRef.current;
        const cardWidth = 450 + 16;
        const currentScroll = container.scrollLeft;
        const maxScroll = scroller.scrollWidth - container.clientWidth;

        let newScroll = currentScroll + amount;

        if (newScroll >= maxScroll) {

          container.scrollLeft = 0;
          newScroll = amount > 0 ? cardWidth : 0;
        } else if (newScroll < 0) {

          const middlePoint = scroller.scrollWidth / 2;
          container.scrollLeft = middlePoint;
          newScroll = middlePoint + amount;
        }

        container.scrollTo({
          left: newScroll,
          behavior: 'smooth'
        });

        scrollTimeoutRef.current = setTimeout(() => {
          setIsPaused(false);
        }, 600);
      }
    },
    container: containerRef.current
  }));

  useEffect(() => {
    addAnimation();

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)] scroll-smooth",
        className
      )}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .scroller::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && !isPaused && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-slate-200 flex-shrink-0 px-8 py-6 md:w-[450px] bg-white shadow-md"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-700 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-900 font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-600 font-normal">
                    {item.designation}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
});

InfiniteMovingCards.displayName = "InfiniteMovingCards";