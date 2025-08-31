import { useEffect, useRef } from "react";

export const MeteorShower = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    type Meteor = {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
    };

    const meteors: Meteor[] = [];
    const meteorCount = 50;

    for (let i = 0; i < meteorCount; i++) {
      meteors.push({
        x: Math.random() * width,
        y: Math.random() * -height,
        length: Math.random() * 80 + 10,
        speed: Math.random() * 2 + 0.5, // slower
        angle: Math.PI / 4, // diagonal
        opacity: Math.random() * 0.5 + 0.5, // for subtle depth
      });
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      meteors.forEach((m) => {
        ctx.strokeStyle = isDark
          ? `rgba(255,255,255,${m.opacity})`
          : `rgba(0,0,0,${m.opacity})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = ctx.strokeStyle;

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(
          m.x + Math.cos(m.angle) * m.length,
          m.y + Math.sin(m.angle) * m.length
        );
        ctx.stroke();

        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;

        if (m.x > width || m.y > height) {
          m.x = Math.random() * width;
          m.y = -20;
          m.length = Math.random() * 80 + 10;
          m.speed = Math.random() * 2 + 0.5;
          m.opacity = Math.random() * 0.5 + 0.5;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};
