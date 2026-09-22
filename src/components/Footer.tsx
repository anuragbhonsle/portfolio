import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

import { Check, Loader2, MailIcon } from "lucide-react";

import { SiLeetcode, SiCodeforces } from "react-icons/si";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const MAX_MESSAGE = 600;

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  isTextarea,
  rows,
}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const active = focused || (value && value.length > 0);

  useEffect(() => {
    const element = inputRef.current;
    if (!element) return;

    const checkAutofill = () => {
      if (element.value !== value) {
        onChange({ target: { value: element.value } });
      }
    };

    element.addEventListener("change", checkAutofill);
    element.addEventListener("animationstart", checkAutofill);

    const timer = setTimeout(checkAutofill, 100);

    return () => {
      element.removeEventListener("change", checkAutofill);
      element.removeEventListener("animationstart", checkAutofill);
      clearTimeout(timer);
    };
  }, [value, onChange]);

  const sharedClassName =
    "peer w-full bg-transparent border-0 border-b-2 border-black/15 dark:border-white/15 px-0 pt-7 pb-2 text-base text-black dark:text-white outline-none transition-colors duration-300" +
    (isTextarea ? " resize-none leading-relaxed" : " autofill-transparent");

  return (
    <div className="relative w-full text-left">
      {!isTextarea && (
        <style>{`
    @keyframes onAutoFillStart {
      from { opacity: 0.99; }
      to { opacity: 1; }
    }
    .autofill-transparent:-webkit-autofill,
    .autofill-transparent:-webkit-autofill:hover,
    .autofill-transparent:-webkit-autofill:focus,
    .autofill-transparent:-webkit-autofill:active {
      /* Prevent the browser's default yellow/blue autofill background */
      transition: background-color 9999s ease-in-out 0s;
      animation-name: onAutoFillStart;
    }

    /* Standard Light Mode Autofill Text */
    .autofill-transparent:-webkit-autofill {
      -webkit-text-fill-color: #000000 !important;
      caret-color: #000000 !important;
    }

    /* Dark Mode Autofill Text */
    .dark .autofill-transparent:-webkit-autofill {
      -webkit-text-fill-color: #ffffff !important;
      caret-color: #ffffff !important;
    }
  `}</style>
      )}
      {isTextarea ? (
        <textarea
          ref={inputRef}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={rows}
          maxLength={MAX_MESSAGE}
          className={sharedClassName}
        />
      ) : (
        <input
          ref={inputRef}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={sharedClassName}
        />
      )}

      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 transition-all duration-300 ease-out motion-reduce:transition-none ${
          active
            ? "top-0 text-xs font-medium tracking-wide text-black/65 dark:text-white/65"
            : "top-7 text-base text-black/75 dark:text-white/75"
        }`}
      >
        {label}
      </label>

      {isTextarea && (
        <div
          className={`mt-1.5 text-right text-xs transition-colors ${
            value.length > MAX_MESSAGE * 0.9
              ? "text-rose-800 dark:text-rose-300"
              : "text-black/30 dark:text-white/30"
          }`}
        >
          {value.length}/{MAX_MESSAGE}
        </div>
      )}
    </div>
  );
}

export const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resp, setResp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quote, setQuote] = useState<any>();

  const VITE_RENDER_URL = import.meta.env.VITE_RENDER_URL;
  const sent = resp !== "" && !isSubmitting;

  async function handleSubmit(e) {
    e.preventDefault();

    if (email.trim() === "") {
      setError("Please enter your email.");
      return;
    }

    setError("");
    setResp("");
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${VITE_RENDER_URL}/api/contact`, {
        email,
        message,
      });
      setEmail("");
      setMessage("");
      setResp(response?.data?.message ?? "Message sent successfully.");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }
  async function getQuote() {
    try {
      const randomIndex = Math.floor(Math.random() * 29);
      const response = await axios.get(
        `https://my-json-server.typicode.com/eren2510/quotes-api/quotes/${randomIndex}`,
      );
      const data = response.data;

      setQuote(data);
    } catch (error) {
      console.error("Error fetching quotes:", error);

      const fallbackQuote = {
        quote:
          "Talk to yourself like a cherished friend. Treat yourself with love and care. You are perfect, just as you are.",
        author: "Amy Leigh Mercree",
        work: "The Compassion Revolution: 30 Days of Living from the Heart",
        categories: ["love", "inspirational", "wisdom", "happiness"],
      };

      setQuote(fallbackQuote);
    }
  }
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-6 px-2 sm:px-4 lg:px-20 bg-transparent mb-10"
    >
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-2xl font-bold text-foreground mb-5 tracking-tight text-left"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xs lg:text-[1rem] sm:text-sm leading-relaxed text-left tracking-wide"
        >
          I am always open to discussing new projects, creative ideas, or
          opportunities to be a part of your inspiring visions. Please feel free
          to reach out anytime to start a conversation.
        </motion.p>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
          <Field
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            isTextarea={undefined}
            rows={undefined}
          />
          <Field
            id="message"
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            isTextarea
            rows={1}
            required
          />
          {email && email.length > 0 && message && message.length > 0 && (
            <div className="flex w-full justify-center pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2.5 rounded-full border border-black/30 bg-transparent py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 motion-reduce:hover:translate-y-0 motion-reduce:transition-none dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-black mb-2"
              >
                {isSubmitting ? (
                  <>
                    Sending
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : sent ? (
                  <>
                    Sent
                    <Check className="h-4 w-4" />
                  </>
                ) : (
                  <>Send</>
                )}
              </button>
            </div>
          )}

          {(sent || (error && error.length > 0)) && (
            <div className="text-center text-sm" aria-live="polite">
              {sent && (
                <p className="text-black/60 dark:text-white/60">{resp}</p>
              )}
              {error !== "" && (
                <p className="text-rose-800 dark:text-rose-300">{error}</p>
              )}
            </div>
          )}
        </form>
        <div className="relative max-w-full p-4 border rounded-xl mt-8">
          {quote && (
            <div className="space-y-2">
              <p className="text-xs sm:text-sm lg:text-[1rem] tracking-wide text-left leading-relaxed pb-2">
                “{quote.quote}”
              </p>

              <p className="text-xs sm:text-sm text-right text-muted-foreground">
                — {quote.author}
                {quote.work && `, ${quote.work}`}
              </p>
            </div>
          )}
        </div>

        {/* Social Links + Back to top */}
        <div className="mt-2 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-6">
            {/* X */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("X")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "X" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: "-50%",
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute left-1/2 top-full z-20 mt-2.5 whitespace-nowrap rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-white shadow-md dark:bg-white dark:text-zinc-900"
                  >
                    X
                    <div className="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-zinc-900 dark:border-b-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="https://x.com/Anuraaaag7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground/60 transition-all duration-200 hover:bg-foreground/10 hover:text-foreground"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
            </div>

            {/* LinkedIn */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("LinkedIn")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "LinkedIn" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: "-50%",
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute left-1/2 top-full z-20 mt-2.5 whitespace-nowrap rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-white shadow-md dark:bg-white dark:text-zinc-900"
                  >
                    LinkedIn
                    <div className="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-zinc-900 dark:border-b-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="https://www.linkedin.com/in/anurag-bhonsle/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground/60 transition-all duration-200 hover:bg-foreground/10 hover:text-foreground"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>

            {/* GitHub */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("GitHub")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "GitHub" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: "-50%",
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute left-1/2 top-full z-20 mt-2.5 whitespace-nowrap rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-white shadow-md dark:bg-white dark:text-zinc-900"
                  >
                    GitHub
                    <div className="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-zinc-900 dark:border-b-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="https://github.com/anuragbhonsle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground/60 transition-all duration-200 hover:bg-foreground/10 hover:text-foreground"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>

            {/* Email */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("Email")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "Email" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: "-50%",
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute left-1/2 top-full z-20 mt-2.5 whitespace-nowrap rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-white shadow-md dark:bg-white dark:text-zinc-900"
                  >
                    Email
                    <div className="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-zinc-900 dark:border-b-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="mailto:anuragkbhonsle@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground/60 transition-all duration-200 hover:bg-foreground/10 hover:text-foreground"
              >
                <span className="text-lg font-semibold">
                  <MailIcon />
                </span>
              </a>
            </div>

            {/* LeetCode */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("LeetCode")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "LeetCode" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: "-50%",
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute left-1/2 top-full z-20 mt-2.5 whitespace-nowrap rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-white shadow-md dark:bg-white dark:text-zinc-900"
                  >
                    LeetCode
                    <div className="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-zinc-900 dark:border-b-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="https://leetcode.com/u/AnuragBhonsle/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground/60 transition-all duration-200 hover:bg-foreground/10 hover:text-foreground"
              >
                <SiLeetcode className="h-5 w-5" />
              </a>
            </div>

            {/* Codeforces */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink("Codeforces")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <AnimatePresence>
                {hoveredLink === "Codeforces" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: "-50%",
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -4,
                      x: "-50%",
                      scale: 0.9,
                    }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute left-1/2 top-full z-20 mt-2.5 whitespace-nowrap rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-white shadow-md dark:bg-white dark:text-zinc-900"
                  >
                    Codeforces
                    <div className="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-zinc-900 dark:border-b-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="https://codeforces.com/profile/Anurag2510"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeforces"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground/60 transition-all duration-200 hover:bg-foreground/10 hover:text-foreground"
              >
                <SiCodeforces className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex shrink-0 items-center gap-1.5 self-start text-sm text-foreground/60 transition-all duration-200 hover:text-foreground sm:self-auto"
          >
            Back to top
            <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
              ↑
            </span>
          </button>
        </div>
      </div>
    </motion.footer>
  );
};
