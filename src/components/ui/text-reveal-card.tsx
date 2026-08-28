"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const updateBounds = () => {
      if (cardRef.current) {
        const { left, width: localWidth } =
          cardRef.current.getBoundingClientRect();
        setLeft(left);
        setLocalWidth(localWidth);
      }
    };
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current && localWidth > 0) {
      const relativeX = clientX - left;
      setWidthPercentage(
        Math.min(Math.max((relativeX / localWidth) * 100, 0), 100),
      );
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current && localWidth > 0) {
      const relativeX = clientX - left;
      setWidthPercentage(
        Math.min(Math.max((relativeX / localWidth) * 100, 0), 100),
      );
    }
  }

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-transparent relative overflow-hidden select-none cursor-pointer inline-block w-full max-w-prose p-0 m-0",
        className,
      )}
    >
      {children}

      <div className="relative overflow-hidden py-0 my-0">
        {/* Reveal Text */}
        <motion.div
          style={{ width: "100%" }}
          animate={{
            opacity: isMouseOver && widthPercentage > 0 ? 1 : 0,
            clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute inset-0 z-20 will-change-transform bg-transparent flex items-center"
        >
          <p className="text-xs sm:text-base md:text-base text-foreground font-light leading-snug m-0 p-0">
            {revealText}
          </p>
        </motion.div>

        {/* Sweep Line */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            opacity: isMouseOver && widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-full w-[2px] rounded-full bg-black dark:bg-white absolute z-50 will-change-transform pointer-events-none top-0"
        ></motion.div>

        {/* Base Text */}
        <motion.div
          className="w-full relative z-10 flex items-center"
          animate={{
            clipPath: isMouseOver
              ? `inset(0 0 0 ${widthPercentage}%)`
              : `inset(0 0 0 0%)`,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
        >
          <p className="text-xs sm:text-base md:text-base text-foreground/90 font-light leading-snug m-0 p-0">
            {text}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-foreground text-base mb-1", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-foreground/70 text-xs sm:text-sm", className)}>
      {children}
    </p>
  );
};
