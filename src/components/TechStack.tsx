import { motion } from "framer-motion";
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
  SiAmazon,
  SiGit,
  SiFigma,
  SiJavascript,
  SiGraphql,
  SiRedis,
  SiKubernetes,
  SiCplusplus,
} from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  hoverColor: string;
}

const techStack: TechItem[] = [
  {
    name: "React",
    icon: SiReact,
    color: "text-[#61DAFB]",
    hoverColor: "hover:shadow-[0_0_20px_#61DAFB40]",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
    hoverColor: "hover:shadow-[0_0_20px_#3178C640]",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-[#339933]",
    hoverColor: "hover:shadow-[0_0_20px_#33993340]",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-[#3776AB]",
    hoverColor: "hover:shadow-[0_0_20px_#3776AB40]",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-[#F7DF1E]",
    hoverColor: "hover:shadow-[0_0_20px_#F7DF1E40]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
    hoverColor: "hover:shadow-[0_0_20px_#06B6D440]",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-[#336791]",
    hoverColor: "hover:shadow-[0_0_20px_#33679140]",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-[#47A248]",
    hoverColor: "hover:shadow-[0_0_20px_#47A24840]",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-[#2496ED]",
    hoverColor: "hover:shadow-[0_0_20px_#2496ED40]",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-[#F05032]",
    hoverColor: "hover:shadow-[0_0_20px_#F0503240]",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "text-[#00599C]",
    hoverColor: "hover:shadow-[0_0_20px_#00599C40]",
  },
  {
    name: "Cursor",
    icon: VscTerminal,
    color: "text-[#00D4FF]",
    hoverColor: "hover:shadow-[0_0_20px_#00D4FF40]",
  },
];

export const TechStack = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 lg:px-20"
    >
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-12 tracking-tight"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="group cursor-pointer"
            >
                             <div
                 className={`backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-xl p-5 border border-white/20 dark:border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card text-center ${tech.hoverColor} shadow-lg`}
               >
                 <motion.div
                   whileHover={{ scale: 1.2, rotate: 5 }}
                   className="flex items-center justify-center mb-4"
                 >
                   <tech.icon
                     className={`w-10 h-10 ${tech.color} transition-all duration-300`}
                   />
                 </motion.div>

                 <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 tracking-wide">
                   {tech.name}
                 </h3>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
