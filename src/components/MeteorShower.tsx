// MeteorShower.tsx
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
        speed: Math.random() * 1 + 0.2,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3, // diagonal + random tilt
        opacity: 0, // will set per mode
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      meteors.forEach((m) => {
        // Opacity range based on mode
        const opacity = isDark
          ? Math.random() * 0.2 + 0.1 // subtle in dark
          : Math.random() * 0.2 + 0.1; // visible in light

        m.opacity = opacity;

        // Gradient for meteor line
        const gradient = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x + Math.cos(m.angle) * m.length,
          m.y + Math.sin(m.angle) * m.length
        );

        if (isDark) {
          gradient.addColorStop(0, `rgba(180,180,255,${opacity})`); // soft bluish-white
          gradient.addColorStop(1, "rgba(180,180,255,0)");
        } else {
          gradient.addColorStop(0, `rgba(50,50,50,${opacity})`); // soft dark-gray
          gradient.addColorStop(1, "rgba(50,50,50,0)");
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.shadowBlur = isDark ? 12 : 5;
        ctx.shadowColor = isDark
          ? `rgba(180,180,255,0.3)`
          : `rgba(50,50,50,0.2)`;

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(
          m.x + Math.cos(m.angle) * m.length,
          m.y + Math.sin(m.angle) * m.length
        );
        ctx.stroke();

        // Move meteor
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;

        // Respawn if off screen
        if (m.x > width || m.y > height) {
          m.x = Math.random() * width;
          m.y = -20;
          m.length = Math.random() * 80 + 10;
          m.speed = Math.random() * 1 + 0.3;
          m.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
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
