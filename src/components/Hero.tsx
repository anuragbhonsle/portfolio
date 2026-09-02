import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FileText } from "lucide-react";
import { TextRevealCard } from "./ui/text-reveal-card";

export const Hero = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight whitespace-nowrap"
          >
            Hi, I'm <span>Anurag</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[0.55rem] sm:text-base md:text-base lg:text-base text-foreground/95 font-light leading-relaxed max-w-prose mx-auto lg:mx-0"
          >
            <TextRevealCard
              text="A full-stack developer from Pune, building everything from interface to backend"
              revealText="Connecting every layer of the stack to build web apps that feel complete from end to end"
            />
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-7 mt-2 items-center"
          >
            {/* LinkedIn */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("LinkedIn")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "LinkedIn" && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md pointer-events-none z-20"
                  >
                    LinkedIn
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-white" />
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href="https://www.linkedin.com/in/anurag-bhonsle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:scale-110 hover:text-violet-600 transition-all duration-200 block"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            {/* GitHub */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("GitHub")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "GitHub" && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md pointer-events-none z-20"
                  >
                    GitHub
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-white" />
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href="https://github.com/anuragbhonsle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-violet-600 hover:scale-110 transition-all duration-200 block"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            {/* LeetCode */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("LeetCode")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "LeetCode" && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md pointer-events-none z-20"
                  >
                    LeetCode
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-white" />
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href="https://leetcode.com/u/AnuragBhonsle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:scale-110 hover:text-violet-600 transition-all duration-200 block"
              >
                <SiLeetcode className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            {/* Codeforces */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("Codeforces")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "Codeforces" && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md pointer-events-none z-20"
                  >
                    Codeforces
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-white" />
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href="https://codeforces.com/profile/Anurag2510"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-violet-600 transition-all duration-200 hover:scale-110 block"
              >
                <SiCodeforces className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            {/* X (Twitter) */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("X")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "X" && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md pointer-events-none z-20"
                  >
                    X
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-white" />
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href="https://x.com/Anuraaaag7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-foreground hover:text-violet-600 hover:scale-110 transition-all duration-200 block"
              >
                <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            {/* Resume */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("Resume")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "Resume" && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md pointer-events-none z-20"
                  >
                    Resume
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-white" />
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href="/Anurag_Bhonsle_Full_Stack_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:scale-110 hover:text-violet-600 transition-all duration-200 block"
              >
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-16 sm:w-28 md:w-36 lg:w-40 mt-0"
        >
          <motion.img
            src="https://ik.imagekit.io/anurag25102002/Pics/anuragbhonsle.jpg?updatedAt=1788369363883"
            alt="Anurag profile"
            className="relative z-10 w-full rounded-full object-cover shadow-card group-hover:shadow-glow transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};
