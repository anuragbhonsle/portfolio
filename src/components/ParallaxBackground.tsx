import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const ParallaxBackground = () => {
  const { scrollY } = useScroll();

  // Responsive blob size
  const [blobSize, setBlobSize] = useState(400);
  useEffect(() => {
    const updateSize = () => {
      setBlobSize(window.innerWidth < 768 ? 250 : 400);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Scroll transforms
  const y1 = useTransform(scrollY, [0, 1000], [0, -250]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y4 = useTransform(scrollY, [0, 1000], [0, 300]);

  // Rotations for floaty vibe
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 15]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -10]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Layer 1 - top left deep violet glow */}
      <motion.div
        style={{
          y: y1,
          rotate: rotate1,
          width: blobSize,
          height: blobSize,
          background:
            "radial-gradient(circle at 30% 30%, rgba(155, 81, 224, 0.18), transparent)",
        }}
        className="absolute top-[20%] left-[15%] rounded-full blur-3xl"
      />

      {/* Layer 2 - bottom right electric blue glow */}
      <motion.div
        style={{
          y: y2,
          rotate: rotate2,
          width: blobSize,
          height: blobSize,
          background:
            "radial-gradient(circle at 70% 70%, rgba(0, 172, 255, 0.18), transparent)",
        }}
        className="absolute bottom-[15%] right-[20%] rounded-full blur-3xl"
      />

      {/* Layer 3 - center soft pink atmosphere */}
      <motion.div
        style={{
          y: y3,
          width: blobSize * 1.5,
          height: blobSize * 1.5,
          background:
            "radial-gradient(circle, rgba(255, 192, 203, 0.08), transparent)",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
      />

      {/* Layer 4 - subtle golden accent */}
      <motion.div
        style={{
          y: y4,
          width: blobSize / 2,
          height: blobSize / 2,
          background:
            "radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.1), transparent)",
        }}
        className="absolute top-[30%] right-[30%] rounded-full blur-2xl"
      />
    </div>
  );
};
