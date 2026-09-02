import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Check, Loader2 } from "lucide-react";

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

  // Synchronize browser autofill with React state cleanly
  useEffect(() => {
    const element = inputRef.current;
    if (!element) return;

    // Check periodically on mount/focus for autofill values inserted without React events
    const checkAutofill = () => {
      if (element.value !== value) {
        onChange({ target: { value: element.value } });
      }
    };

    // Browsers issue a native 'change' or trigger pseudo-classes on autofill
    element.addEventListener("change", checkAutofill);
    element.addEventListener("animationstart", checkAutofill);

    // Initial check in case browser autofills on page load immediately
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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resp, setResp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-6 px-4 lg:px-20 bg-transparent mb-12"
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
          className="text-sm lg:text-[1rem] sm:text-sm leading-relaxed text-left"
        >
          I am always open to discussing new projects, creative ideas, or
          opportunities to be a part of your inspiring visions. Please feel free
          to reach out anytime to start a conversation.
        </motion.p>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
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
            rows={2}
            required={undefined}
          />

          <div className="flex w-full justify-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2.5 rounded-full border border-black/40 bg-transparent px-7 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 motion-reduce:hover:translate-y-0 motion-reduce:transition-none dark:border-white/40 dark:text-white dark:hover:bg-white dark:hover:text-black"
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

          <div className="min-h-5 text-center text-sm" aria-live="polite">
            {sent && <p className="text-black/60 dark:text-white/60">{resp}</p>}
            {error !== "" && (
              <p className="text-rose-800 dark:text-rose-300">{error}</p>
            )}
          </div>
        </form>
      </div>
    </motion.footer>
  );
};
