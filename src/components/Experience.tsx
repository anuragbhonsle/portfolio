import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  icon: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Consultant In Computer Systems",
    role: "SDE (Web) Intern",
    period: "Sep 2026 - Present",
    icon: "/ccs_tech_solutions_logo.jpg",
    points: [
      "Recently joined as an SDE Intern, contributing to software development across the team's projects.",
      "Getting up to speed with the codebase, development workflow, and engineering practices.",
      "Working with senior engineers on features, bug fixes, and code reviews.",
    ],
  },
  {
    company: "Yhills",
    role: "Web Developer Intern",
    period: "Mar 2024 - May 2024",
    icon: "/yhills.jpg",
    points: [
      "Built a responsive, mobile-first blog platform using HTML5, CSS3, JavaScript, and Flexbox/Grid.",
      "Made sure the platform worked consistently across Chrome, Firefox, Safari, and Edge, which cut down layout-related bug reports.",
      "Set up a Gitflow branching strategy and PR/code-review guidelines for the team, which reduced merge conflicts.",
      "Redesigned the UI/UX with fluid transitions and a minimalist look, improving session duration and engagement.",
      "Worked on React component state management and REST API integration to make the frontend more stable.",
      "Collaborated with the team in an Agile/Scrum setup, which helped keep sprint deliveries more consistent.",
    ],
  },
];

export const Experience = () => {
  // Index of the open item; the first one starts open, like the screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="px-2 sm:px-4 lg:px-20 pt-1 lg:pt-2 pb-4 lg:pb-6"
    >
      <div className="w-full sm:max-w-5xl mx-auto flex flex-col gap-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-lg sm:text-2xl font-bold text-foreground mb-3 tracking-tight"
        >
          Places I worked at
        </motion.h2>

        <div className="flex flex-col">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;
            const isLast = index === experiences.length - 1;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={!isLast ? "border-b border-border" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 py-4 text-left cursor-pointer"
                >
                  {/* Left */}
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={exp.icon}
                      alt={exp.company}
                      className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full object-contain border border-border"
                    />
                    <div className="min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="hidden sm:inline text-text-dim">/</span>
                      <p className="text-xs sm:text-sm text-text-dim font-mono">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline text-sm text-text-dim">
                      {exp.period}
                    </span>
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
                        isOpen ? "border border-border" : ""
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 text-text-dim transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {/* Period shown here on mobile, since it's hidden in the header */}
                      <p className="sm:hidden text-xs text-text-dim mb-2">
                        {exp.period}
                      </p>
                      <ul className="list-disc pl-5 pb-5 flex flex-col gap-2 text-sm sm:text-base text-text-dim leading-relaxed marker:text-text-dim">
                        {exp.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
