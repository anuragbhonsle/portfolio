import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 lg:px-16">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              <motion.div
                animate={{ scale: [1, 1.01, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.005, 1] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-foreground"
                >
                  Hi, Anurag here
                </motion.span>
              </motion.div>
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-text-dim font-light leading-relaxed"
          >
            A 22-year-old developer from Pune 🇮🇳. I build things for the web,
            solve problems with code, and love creating experiences that people
            actually want to use.
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
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer overflow-hidden p-4 rounded-full"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div
                className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-900 rounded-full animate-pulse"
                style={{ animationDuration: "1s" }}
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 via-indigo-600 to-purple-800 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s", animationDuration: "1s" }}
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-700 rounded-full animate-pulse"
                style={{ animationDelay: "0.6s", animationDuration: "1s" }}
              ></div>
            </div>

            {/* Subtle glow behind the image */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[120px] opacity-20 transition-opacity duration-300 pointer-events-none" />

            {/* Enhanced glow on hover */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[120px] opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />

            {/* Pulsing border effect */}
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                borderColor: [
                  "hsl(var(--border))",
                  "hsl(var(--primary))",
                  "hsl(var(--border))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border-4 border-border"
            />

            {/* Actual profile image */}
            <motion.img
              src="/anurag.png"
              alt="Anurag's profile"
              width={384}
              height={384}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-card group-hover:shadow-glow transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
