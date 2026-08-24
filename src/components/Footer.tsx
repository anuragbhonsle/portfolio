import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resp, setResp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const VITE_RENDER_URL = import.meta.env.VITE_RENDER_URL;

  async function handleSubmit() {
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

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 px-4 lg:px-20 bg-transparent mb-20"
    >
      <div className="mx-auto max-w-3xl text-center space-y-6 ">
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
          className="text-text-dim text-sm lg:text-lg sm:text-sm leading-relaxed text-left "
        >
          I am always open to discussing new projects, creative ideas, or
          opportunities to be a part of your inspiring visions. Please feel free
          to reach out anytime to start a conversation.
        </motion.p>
        <form
          className="flex w-full flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="group flex w-full flex-col gap-2">
            <label
              htmlFor="Email"
              className="text-left text-sm font-medium text-foreground sm:text-base"
            >
              Email
            </label>

            <input
              id="Email"
              type="email"
              placeholder="name@example.com"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
              required
              className="h-12 w-full rounded-2xl border-2 border-black/20 bg-transparent px-4 text-sm text-black outline-none transition-all duration-300 placeholder:text-black/40 hover:border-black/40 focus:border-black focus:ring-2 focus:ring-black/10 dark:border-white/20 dark:text-white dark:placeholder:text-white/40 dark:hover:border-white/40 dark:focus:border-white dark:focus:ring-white/10 sm:text-base"
            />
          </div>

          <div className="group flex w-full flex-col gap-2">
            <label
              htmlFor="Message"
              className="text-left text-sm font-medium text-foreground sm:text-base"
            >
              Message
            </label>

            <textarea
              id="Message"
              placeholder="Type your message here..."
              rows={4}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
              value={message}
              className="w-full resize-none rounded-2xl border-2 border-black/20 bg-transparent px-4 py-3 text-sm text-black outline-none transition-all duration-300 placeholder:text-black/40 hover:border-black/40 focus:border-black focus:ring-2 focus:ring-black/10 dark:border-white/20 dark:text-white dark:placeholder:text-white/40 dark:hover:border-white/40 dark:focus:border-white dark:focus:ring-white/10 sm:text-base "
            />
          </div>

          <div className="flex justify-center pt-2 w-full ">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full border border-black/40 bg-transparent px-7 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg dark:border-white/40 dark:text-white dark:hover:bg-white dark:hover:text-black w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  Sending...
                  <Loader2 className="h-4 w-4 animate-spin" />
                </span>
              ) : (
                <span>Send</span>
              )}
            </button>
          </div>

          {resp && <p className="text-md text-green-500/90">{resp}</p>}
          {error && <p className="text-md text-red-500/90">{error}</p>}
        </form>
      </div>
    </motion.footer>
  );
};
