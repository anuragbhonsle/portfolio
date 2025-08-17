import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 lg:px-16">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              <span className="text-foreground">Hi, Anurag here</span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-foreground/70 font-light leading-relaxed"
          >
            A 22-year-old developer from Pune 🇮🇳. I build things for the web,
            solve problems with code, and love creating experiences that people
            actually want to use.
          </motion.p>

          {/* 🔗 Social Icons (springy bounce) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-5"
          >
            <motion.a
              href="https://www.linkedin.com/in/anurag-bhonsle-4b576524a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="https://github.com/anuragbhonsle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div className="relative group cursor-pointer overflow-hidden p-4 rounded-full">
            {/* Subtle glow behind the image (always on) */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[120px] opacity-20 transition-opacity duration-500 pointer-events-none" />

            {/* Enhanced glow on hover (softer & smoother) */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Calm pulsing border */}
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                borderColor: [
                  "hsl(var(--border))",
                  "hsl(var(--primary))",
                  "hsl(var(--border))",
                ],
              }}
              transition={{
                duration: 6, // slower for premium feel
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border-4 border-border"
            />

            {/* Actual profile image with subtle breathing */}
            <motion.img
              src="/anurag.png"
              alt="Anurag's profile"
              width={384}
              height={384}
              animate={{ scale: [1, 1.015, 1] }} // subtle but visible
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-card group-hover:shadow-glow transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
