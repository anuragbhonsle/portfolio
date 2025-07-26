import { motion } from "framer-motion";
import { SiGoogle, SiMeta, SiNetflix, SiGithub } from "react-icons/si";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  icon: string | React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  glowColor: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Yhills",
    role: "Frontend Developer Intern",
    period: "Mar 2024 - May 2024",
    icon: "/yhills_logo.jpeg",

    description:
      "Built a responsive blog site using HTML, CSS, and JavaScript with dynamic post rendering and mobile-friendly design. Practiced modular JS and used Git for version control.",
    color: "text-[#4285F4]",
    glowColor: "hover:shadow-[0_0_20px_#4285F440]",
  },
];

export const Experience = () => {
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
          className="text-3xl sm:text-4xl font-bold text-foreground mb-12"
        >
          Places I worked at
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
              }}
              className="group"
            >
              <div
                className={`bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card ${exp.glowColor}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-12 h-12 bg-card rounded-xl border border-border flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
                      {typeof exp.icon === "string" ? (
                        <img
                          src={exp.icon}
                          alt={exp.company}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <exp.icon
                          className={`w-6 h-6 ${exp.color} transition-all duration-300`}
                        />
                      )}
                    </div>
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-text-dim font-mono bg-secondary/50 px-2 py-1 rounded-md">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-text-dim font-medium mb-3">{exp.role}</p>

                    <p className="text-sm text-text-dim leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
