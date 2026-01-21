import { motion } from "framer-motion";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  icon: string;
  cgpa?: string;
};

const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "Savitribai Phule Pune University",
    period: "2023 – 2025",
    icon: "/sppu.jpg",
    cgpa: "7.62 CGPA",
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="w-full px-2 sm:px-4 lg:px-20 pt-2 lg:pt-4 pb-4 lg:pb-6"
    >
      <div className="w-full max-w-full sm:max-w-5xl mx-auto flex flex-col gap-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-lg sm:text-2xl font-bold text-foreground mb-3 tracking-tight"
        >
          My Education
        </motion.h2>

        <div className="flex flex-col gap-4 w-full">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 w-full"
            >
              {/* Left: Icon + Info */}
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <img
                  src={edu.icon}
                  alt={edu.institution}
                  className="w-8 h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 rounded-full object-contain border border-border"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-foreground truncate">
                    {edu.degree}
                  </h3>
                  <p className="text-[0.6rem] xs:text-xs sm:text-sm text-text-dim truncate">
                    {edu.institution}
                  </p>
                  {edu.cgpa && (
                    <p className="text-[0.6rem] xs:text-xs sm:text-sm text-muted-foreground truncate">
                      CGPA: {edu.cgpa}
                    </p>
                  )}
                </div>
              </div>

              {/* Right: Period */}
              <span className="text-[0.6rem] xs:text-xs sm:text-sm text-text-dim font-mono mt-1 sm:mt-0">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
