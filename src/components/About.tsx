import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="px-2 sm:px-4 lg:px-20 pt-1 lg:pt-2 pb-4 lg:pb-6"
    >
      <div className="w-full sm:max-w-5xl mx-auto flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-lg sm:text-2xl font-bold text-foreground tracking-tight">
            About
          </h2>

          <div className="space-y-4 text-[0.6rem] sm:text-base text-foreground/95 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              I turn ideas into clean web apps that not only work, but feel
              intuitive and enjoyable to use.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
            >
              Always curious about new tools, I learn by building and
              experimenting to truly understand them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
            >
              You’ll usually find me tackling competitive programming challenges
              or planning my next project.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
