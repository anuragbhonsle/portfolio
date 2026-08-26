import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiCplusplus,
  SiFirebase,
  SiJavascript,
  SiExpress,
  SiSupabase,
  SiPrisma,
  SiAxios,
  SiVercel,
  SiRender,
  SiNextdotjs,
  SiReactrouter,
  SiShadcnui,
  SiPostman,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const techStack: TechItem[] = [
  // Tier 1: Core Languages (Foundational)
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Express", icon: SiExpress, color: "text-black dark:text-white" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "text-black dark:text-white" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
  { name: "Prisma", icon: SiPrisma, color: "text-black dark:text-white" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
  { name: "Render", icon: SiRender, color: "text-[#46E3B7]" },
  { name: "React Router", icon: SiReactrouter, color: "text-[#CA4245]" },
  { name: "Axios", icon: SiAxios, color: "text-[#5A29E4]" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
];

export const TechStack = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 lg:px-20 pt-2 lg:pt-4 pb-6 lg:pb-8"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-2xl font-bold text-foreground mb-5 tracking-tight"
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap gap-3 justify-start">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                type: "spring",
                stiffness: 100,
              }}
              onHoverStart={() => setHovered(tech.name)}
              onHoverEnd={() => setHovered(null)}
              className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11"
            >
              {/* Tooltip centered on top */}
              <AnimatePresence>
                {hovered === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 6, x: "-50%", scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 mb-3.5 whitespace-nowrap
    px-2.5 py-1 rounded-full text-xs font-medium
    bg-zinc-900 text-white dark:bg-white dark:text-zinc-900
    shadow-md pointer-events-none z-20"
                  >
                    {tech.name}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
                        border-l-4 border-r-4 border-t-4 border-transparent
                        border-t-zinc-900 dark:border-t-white"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex items-center justify-center"
              >
                <tech.icon
                  className={cn("w-7 h-7 lg:w-8 lg:h-8", tech.color)}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
