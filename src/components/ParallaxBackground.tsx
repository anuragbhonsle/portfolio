import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const blobs = [
  {
    top: "20%",
    left: "15%",
    rotateRange: 6,
    yRange: -50,
    size: 400,
    colorDark: "180,180,255",
    colorLight: "255,220,180",
  },
  {
    bottom: "15%",
    right: "20%",
    rotateRange: -4,
    yRange: 40,
    size: 400,
    colorDark: "200,150,255",
    colorLight: "180,200,255",
  },
  {
    top: "50%",
    left: "50%",
    rotateRange: 0,
    yRange: -30,
    size: 480,
    colorDark: "150,120,200",
    colorLight: "200,180,220",
  },
];

export const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const [blobSize, setBlobSize] = useState(400);
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const updateSize = () => setBlobSize(window.innerWidth < 768 ? 250 : 400);
    const updateMode = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    updateSize();
    updateMode();
    window.addEventListener("resize", updateSize);
    window.addEventListener("resize", updateMode);
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("resize", updateMode);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {blobs.map((b, i) => {
        // Scroll offset for each blob
        const y = useTransform(scrollY, [0, 1000], [0, b.yRange]);
        const rotate = useTransform(scrollY, [0, 1000], [0, b.rotateRange]);

        // Twinkle effect as alpha value
        const alpha = useSpring(
          useTransform(scrollY, [0, 1000], [0.08 + i * 0.01, 0.12 + i * 0.01]),
          { damping: 10, stiffness: 50 }
        );

        return (
          <motion.div
            key={i}
            style={{
              y,
              rotate,
              width: b.size,
              height: b.size,
              background: `radial-gradient(circle, ${
                isDark ? b.colorDark : b.colorLight
              }, ${alpha})`,
            }}
            className={`absolute rounded-full blur-3xl ${
              b.top ? `top-[${b.top}]` : ""
            } ${b.left ? `left-[${b.left}]` : ""} ${
              b.bottom ? `bottom-[${b.bottom}]` : ""
            } ${b.right ? `right-[${b.right}]` : ""}`}
          />
        );
      })}
    </div>
  );
};
