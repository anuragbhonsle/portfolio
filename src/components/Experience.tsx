import { motion } from "framer-motion";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  icon: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Yhills",
    role: "Frontend Developer Intern",
    period: "March 2024 – May 2024",
    icon: "/yhills_logo.jpeg",
  },
];

export const Experience = () => {
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
          Cool places I worked at
        </motion.h2>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <img
                  src={exp.icon}
                  alt={exp.company}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain border border-border"
                />
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-dim">{exp.role}</p>
                </div>
              </div>

              {/* Period */}
              <span className="text-xs sm:text-sm text-text-dim font-mono">
                {exp.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
