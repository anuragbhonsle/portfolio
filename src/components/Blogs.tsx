import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface BlogItem {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
}

export const blogs: BlogItem[] = [
  {
    title: "Why I Chose Supabase for My React Projects",
    excerpt:
      "My experience using Supabase as a backend for React apps, what it gets right.",
    content: `When you're building React apps, the backend can either boost your momentum or completely kill it. I’ve tried Firebase, custom Node backends, and random side-project APIs. Supabase is the first one that actually felt like it respected my time.

The biggest win with Supabase is that it doesn’t hide the database from you. You’re working directly with Postgres, not some abstract data layer that feels magical until it breaks. Tables, relationships and constraints are all real and visible.

Auth is another huge win. Email and password, magic links and OAuth are all there and surprisingly easy to wire into a React app. The Supabase client feels natural with hooks and async logic, especially when paired with something like React Query.

Realtime features are where Supabase really shines. Subscriptions make apps feel alive without needing WebSockets or extra infrastructure. For dashboards, chats or live updates, this is genuinely powerful.

That said, Supabase isn’t something you can just set and forget. You still need to understand SQL, indexes and security rules. Row Level Security will humble you if you skip the docs, but once it clicks, it becomes a serious advantage.

Supabase feels less like a toy and more like a real backend you can grow with. If you’re serious about React and want control without building everything from scratch, Supabase is absolutely worth your time.`,
    date: "Jan 20, 2026",
    slug: "why-i-use-supabase-with-react",
  },
  {
    title: "AI-Powered Features in React",
    excerpt:
      "How to integrate AI into React apps using APIs, prompts, and smart UI patterns.",
    content: `Adding AI features to a React app isn't as complex as it sounds—you don't need to train models locally or rewrite your entire frontend. Modern APIs make it fairly straightforward, but getting the UX and security right requires careful thought.

1. Choosing an Integration Approach  
Most React apps interface with AI via APIs wrapper functions. The three main setups are:  
- REST APIs (OpenAI, Gemini, Claude) directly from a server context  
- Serverless functions wrapping your AI logic  
- A dedicated backend (Node.js / NestJS) handling prompt construction  

Rule #1: Never expose your API keys directly in client-side React code. Always proxy requests through a serverless function or backend.

2. Designing for AI User Interfaces  
Unlike typical REST endpoints that respond in 100ms, AI models take time. Good AI UIs account for this latency:  
- Use streaming responses instead of making users stare at a static spinner.  
- Add explicit loading states, skeletons, and disable re-submissions while pending.  
- Gracefully handle API rate limits and failures with clear user feedback.

3. Example: Fetching from an AI Endpoint  
Here’s a clean pattern for passing prompts to a backend route:

\`\`\`ts
async function askAI(prompt: string) {
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    throw new Error("AI request failed");
  }

  return res.json();
}
\`\`\`

4. State Management & Inputs  
Handling AI data often requires custom state logic. Standard \`useState\` works fine for single-prompt responses, but for conversational UIs, \`useReducer\` keeps history clean. Also, remember to debounce text inputs if you're triggering auto-suggestions on keypresses.

5. Treat Prompts Like Code  
The output quality depends entirely on how you instruct the model. Be explicit about expected JSON formats, set boundaries on output length, and provide system context upfront. Refine your prompts in code just like any other function.

6. Real-World Applications  
When implemented thoughtfully, AI fits naturally into features like:  
- Interactive chatbots and context-aware help assistants  
- In-app text summarization and content generation  
- Smart form auto-fill and document processing  

Focus on solving a specific UX problem rather than adding AI just for the hype. When paired with responsive UI patterns, it feels like a natural upgrade to your product.`,
    date: "Oct 15, 2025",
    slug: "react-ai-integration",
  },
];

export const Blogs = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 2);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-2 sm:px-4 lg:px-20 pt-4 lg:pt-6 pb-8 lg:pb-10"
    >
      <div className="mx-auto max-w-3xl flex flex-col gap-6 w-full">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-2xl font-bold text-foreground mb-5 tracking-tight"
        >
          Recent Blog Posts
        </motion.h2>

        {/* Blog Items */}
        <div className="flex flex-col gap-4 w-full">
          {visibleBlogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start justify-between gap-4 cursor-pointer rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
            >
              {/* Left: Title + Excerpt */}
              <div className="flex-1">
                <Link to={`/blogs/${blog.slug}`}>
                  <h3 className="text-sm lg:text-lg sm:text-xs font-semibold text-foreground hover:text-blue-500 transition-colors">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-xs text-text-dim mt-1">{blog.excerpt}</p>
              </div>

              {/* Right: Date */}
              <span className="text-sm text-text-dim font-mono mt-1 sm:mt-0">
                {blog.date}
              </span>
            </motion.div>
          ))}
        </div>
        {blogs.length > 2 && (
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => setShowAll((prev) => !prev)}
            className="mx-auto mt-4 flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
          >
            {showAll ? "Show less" : "Show older posts"}
            <span
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </motion.button>
        )}
      </div>
    </motion.section>
  );
};
