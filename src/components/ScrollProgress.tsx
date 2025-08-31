import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [gradient, setGradient] = useState(
    "linear-gradient(to right, black, white)"
  );

  useEffect(() => {
    const updateGradient = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setGradient(
        isDark
          ? "linear-gradient(to right, #ccc, #fff)" // lighter gradient for dark mode
          : "linear-gradient(to right, #000, #555)" // darker gradient for light mode
      );
    };

    updateGradient();
    // Listen for theme changes
    const observer = new MutationObserver(updateGradient);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{ scaleX, background: gradient }}
    />
  );
};
