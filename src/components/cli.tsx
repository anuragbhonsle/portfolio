import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = {
  help: `Available commands:
help (h, ?)  - Show this help message
about (a)    - Display information about me
skills (s)   - List technical skills
projects (p) - List projects
edu          - Show education
contact (c)  - Contact info
social       - Show social media links
version (v)  - CLI version
clear        - Clear the terminal
gui (g)      - Switch to GUI mode`,
  about: `Hi, I'm Anurag, a web developer from Pune 🇮🇳.`,
  skills: `React, TypeScript, Node.js, Express, Tailwind, Next.js, Supabase, MongoDB, PostgreSQL, Firebase`,
  projects: `Eclipz, Animeverse, LeetScape, KanaKore, Starune`,
  edu: `Savitribai Phule Pune University - Master of Computer Applications (2023-2025)
Savitribai Phule Pune University - Bachelor of Science in Computer Science (2020-2023)`,
  contact: `Email: anuragkbhonsle@gmail.com
Phone: +91-9373336322`,
  social: `GitHub: github.com/anuragbhonsle
LinkedIn: https://www.linkedin.com/in/anurag-bhonsle-4b576524a/`,
  version: "CLI Version 1.0.0",
};

export const CLI = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to my portfolio CLI! 👋 Type 'help' or '?' for commands.",
  ]);
  const [cursor, setCursor] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => setCursor((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    let output = "";
    cmd = cmd.toLowerCase().trim();

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (commands[cmd]) {
      output = commands[cmd];
    } else if (cmd === "h" || cmd === "?") {
      output = commands.help;
    } else if (cmd === "a") output = commands.about;
    else if (cmd === "s") output = commands.skills;
    else if (cmd === "p" || cmd === "ls") output = commands.projects;
    else if (cmd === "c") output = commands.contact;
    else if (cmd === "g") output = "Switching to GUI mode...";
    else if (cmd === "v") output = commands.version;
    else output = `Command not found: ${cmd}`;

    setHistory((prev) => [
      ...prev,
      `$ anurag@cli:~$ ${cmd}`,
      ...output.split("\n"),
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-black/95 text-white font-mono text-sm rounded-lg w-full max-w-3xl flex flex-col h-[70vh]">
          <div className="flex-1 overflow-y-auto p-4 whitespace-pre-wrap">
            {history.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
            <div ref={bottomRef}></div>
          </div>

          <div className="flex items-center px-4 py-2 border-t border-white/20">
            <span className="mr-2 text-green-400">anurag@cli:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none flex-1 text-white placeholder-white/50"
              autoFocus
              placeholder="Type a command..."
            />
            <span className="ml-1 text-green-400">{cursor ? "|" : " "}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CLI;
