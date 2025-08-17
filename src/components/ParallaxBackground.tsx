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
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 180]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -120]);

  // Rotations for floaty vibe
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 12]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -8]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Blue glow - top left */}
      <motion.div
        style={{
          y: y1,
          rotate: rotate1,
          width: blobSize,
          height: blobSize,
          background:
            "radial-gradient(circle at 30% 30%, rgba(0, 140, 255, 0.12), transparent)",
        }}
        className="absolute top-[20%] left-[15%] rounded-full blur-3xl"
      />

      {/* Purple glow - bottom right */}
      <motion.div
        style={{
          y: y2,
          rotate: rotate2,
          width: blobSize,
          height: blobSize,
          background:
            "radial-gradient(circle at 70% 70%, rgba(155, 81, 224, 0.12), transparent)",
        }}
        className="absolute bottom-[15%] right-[20%] rounded-full blur-3xl"
      />

      {/* Subtle atmosphere (mix of both) */}
      <motion.div
        style={{
          y: y3,
          width: blobSize * 1.2,
          height: blobSize * 1.2,
          background:
            "radial-gradient(circle, rgba(90, 60, 200, 0.06), transparent)",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
      />
    </div>
  );
};
