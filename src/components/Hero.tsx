import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative px-2 sm:px-6 lg:px-20 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 bg-transparent">
      <div className="w-full sm:max-w-5xl mx-auto flex flex-row flex-wrap items-start justify-between gap-4 sm:gap-8 lg:gap-16">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 min-w-0 max-w-full sm:max-w-[60%] text-left space-y-2 sm:space-y-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight whitespace-nowrap"
          >
            Hi, I'm <span>Anurag</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[0.55rem] sm:text-base md:text-base lg:text-base text-foreground/95 font-light leading-relaxed max-w-prose mx-auto lg:mx-0"
          >
            A developer from Pune. I build web apps, solve problems, and create
            experiences people love.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mt-2"
          >
            <a
              href="https://www.linkedin.com/in/anurag-bhonsle-4b576524a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/anuragbhonsle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-16 sm:w-28 md:w-36 lg:w-40 mt-0"
        >
          <motion.div className="relative group cursor-pointer overflow-hidden p-1 sm:p-2 md:p-3 rounded-full">
            <motion.img
              src="/anurag.png"
              alt="Anurag profile"
              className="relative z-10 w-full rounded-full object-cover shadow-card group-hover:shadow-glow transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
