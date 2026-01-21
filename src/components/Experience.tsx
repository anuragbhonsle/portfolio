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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 lg:px-20 pt-1 lg:pt-2 pb-4 lg:pb-6"
    >
      <div className="mx-auto max-w-3xl flex flex-col gap-4">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-l sm:text-2xl font-bold text-foreground mb-5 tracking-tight"
        >
          Cool places I worked at
        </motion.h2>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
              {/* Left: Icon + Info */}
              <div className="flex items-center gap-4">
                <img
                  src={exp.icon}
                  alt={exp.company}
                  className="w-12 h-12 rounded-full object-contain border border-border"
                />
                <div>
                  <h3 className="lg:text-lg sm:text-sm font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-text-dim">{exp.role}</p>
                </div>
              </div>

              {/* Right: Period */}
              <span className="text-sm text-text-dim font-mono">
                {exp.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
