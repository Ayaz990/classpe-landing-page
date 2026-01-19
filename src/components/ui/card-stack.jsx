"use client";
import { useEffect, useState, useImperativeHandle, forwardRef, useRef } from "react";
import { motion } from "framer-motion";

export const CardStack = forwardRef(({ items, offset, scaleFactor }, ref) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    startFlipping();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      stopFlipping();
    } else {
      startFlipping();
    }
  }, [isHovered]);

  const startFlipping = () => {

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  const stopFlipping = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNext = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop());
      return newArray;
    });
  };

  const handlePrev = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift());
      return newArray;
    });
  };

  useImperativeHandle(ref, () => ({
    next: handleNext,
    prev: handlePrev,
  }));

  return (
    <div
      className="relative h-60 w-80 md:h-72 md:w-[500px] lg:w-[600px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-60 w-80 md:h-72 md:w-[500px] lg:w-[600px] rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 flex flex-col justify-center items-center text-center"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              {card.content}
            </div>
            <div className="mt-auto">
              <p className="text-gray-900 font-semibold text-lg mb-1">
                {card.name}
              </p>
              <p className="text-gray-600 font-normal text-sm">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
});

CardStack.displayName = "CardStack";