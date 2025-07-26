import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center px-4 lg:px-16">
      <div className="container max-w-7xl mx-auto max-h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 overflow-hidden"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
          >
            Hi, Anurag here 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-text-dim font-light"
          >
            A 22-year-old developer and creator from Pune 🇮🇳. I love clean UIs,
            building fast & responsive apps, and solving real-world problems
            with React, TypeScript, and Node.js.
          </motion.p>
        </motion.div>

        {/* Right: Profile Image with Glow Hover */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img
              src="/anurag.png"
              alt="Anurag's profile"
              width={384}
              height={384}
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-card border-4 border-border group-hover:shadow-glow transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
