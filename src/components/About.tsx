import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 lg:px-20 pt-1 lg:pt-2 pb-4 lg:pb-6"
    >
      <div className="mx-auto max-w-3xl flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-l sm:text-2xl font-bold text-foreground mb-5 tracking-tight">
            About
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-foreground/95 leading-normal">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I turn ideas into clean, functional web apps that not only work,
              but feel intuitive and enjoyable to use.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Always curious about new tools, I learn by building and break
              things just enough to figure them out.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              When I’m not coding, I’m diving into startups, tech trends, or
              sketching my next side project.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
