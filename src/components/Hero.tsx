import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative px-4 lg:px-20 pt-8 lg:pt-16 pb-8 lg:pb-12 bg-transparent">
      <div className="mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight inline-block"
          >
            Hi, I'm <span className="">Anurag</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-foreground/95 font-light leading-relaxed max-w-prose mx-auto lg:mx-0"
          >
            A developer from Pune 🇮🇳. I build web apps, solve problems, and
            create experiences people love.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center lg:justify-start gap-6"
          >
            <a
              href="https://www.linkedin.com/in/anurag-bhonsle-4b576524a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/anuragbhonsle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image with Glow + Hover */}
        <motion.div
          initial={{ opacity: 10, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end mb-4"
        >
          <motion.div className="relative group cursor-pointer overflow-hidden p-3 rounded-full">
            {/* Always-on subtle glow */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[90px] opacity-10 pointer-events-none" />

            {/* Extra glow on hover */}
            <div
              className="absolute inset-0 rounded-full blur-[90px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
              style={{
                background: "rgba(4, 133, 254, 1)", // bright blue
              }}
            />

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                borderColor: [
                  "hsl(var(--border))",
                  "hsl(var(--primary))",
                  "hsl(var(--border))",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border-2 border-border"
            />

            {/* Profile image with breathing effect */}
            <motion.img
              src="/anurag.png"
              alt="Anurag's profile"
              animate={{ scale: [1, 1.015, 1] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-40 sm:w-48 lg:w-56 rounded-full object-cover shadow-card group-hover:shadow-glow transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
