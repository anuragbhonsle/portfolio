import { motion } from "framer-motion";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  icon: string;
  cgpa?: string; // optional field
};

const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "Savitribai Phule Pune University",
    period: "2023 – 2025",
    icon: "/sppu.jpg",
    cgpa: "7.62 CGPA", // add it here
  },

  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2020 – 2023",
    icon: "/sppu.jpg",
    cgpa: "8.59 CGPA",
  },
];

export const Education = () => {
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
          My Education
        </motion.h2>

        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
              {/* Left: Icon + Info */}
              <div className="flex items-center gap-4">
                <img
                  src={edu.icon}
                  alt={edu.institution}
                  className="w-12 h-12 rounded-full object-contain border border-border"
                />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-text-dim">{edu.institution}</p>
                  {edu.cgpa && (
                    <p className="text-sm text-muted-foreground">
                      CGPA: {edu.cgpa}
                    </p>
                  )}
                </div>
              </div>

              {/* Right: Period */}
              <span className="text-sm text-text-dim font-mono">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
