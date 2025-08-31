import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
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
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const techStack: TechItem[] = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express", icon: SiExpress, color: "text-[#000000]" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#00D4FF]" },
];

export const TechStack = () => {
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
          className="text-l sm:text-2xl font-bold text-foreground mb-5 tracking-tight"
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
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex-shrink-0"
            >
              <div
                className={cn(
                  "flex items-center gap-2 px-2 py-1 rounded-md bg-black text-white hover:bg-gray-800",
                  "dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200",
                  "transition-all duration-300"
                )}
              >
                <tech.icon className={cn("w-5 h-5", tech.color)} />
                <h3 className="text-xs font-medium">{tech.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
