import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-20">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
          >
            Hi, Anurag here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-text-dim font-light"
          >
            A 22-year-old developer and creator from Pune 🇮🇳, passionate about
            clean UIs, problem-solving, and turning ideas into responsive web
            apps using React, TypeScript, and Node.js.
          </motion.p>
        </motion.div>

        {/* Right side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
            }}
            transition={{ duration: 0.3 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img
              src="public\anurag.png"
              alt="Anurag's profile"
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-card border-4 border-border group-hover:shadow-glow transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
