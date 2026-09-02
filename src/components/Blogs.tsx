import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export type BlogItem = {
  title: string;
  excerpt: string;
  content: string; // full blog content
  date: string;
  slug: string;
};

// Blogs array
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
    date: "Jan 20, 2025",
    slug: "why-i-use-supabase-with-react",
  },
  {
    title: "AI-Powered Features in React",
    excerpt:
      "How to integrate AI into React apps using APIs, prompts, and smart UI patterns.",
    content: `With modern APIs, you can build powerful AI-driven features directly into React applications. This article walks through practical ways to combine React and AI without overengineering.

1. Choosing an AI Integration Approach  
   Most React apps integrate AI through APIs rather than running models locally. Common options include:  
   1. REST APIs (OpenAI, Gemini, Claude, etc.)  
   2. Serverless functions that wrap AI calls  
   3. Backend services (Node.js / NestJS) that handle prompts securely  

   Never expose API keys directly in the frontend.

2. Designing AI-Friendly UI  
   AI features work best with clear user intent. Common UI patterns include:  
   1. Text input + submit button (chat or prompt-based tools)  
   2. Streaming responses for better UX  
   3. Loading states and partial responses  
   4. Clear error handling for failed requests  

3. Example: Calling an AI API from React  
   Below is a simple example using fetch to send a prompt to an AI-powered backend:

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

4. Managing State for AI Responses  
   AI responses can be large or streamed. Use:  
   1. useState for simple responses  
   2. useReducer for chat-like conversations  
   3. useEffect carefully to avoid duplicate requests  

   Always debounce user input if requests are frequent.

5. Prompt Engineering in React Apps  
   The quality of AI output depends heavily on prompts. Good practices:  
   1. Be explicit about output format  
   2. Limit response length  
   3. Provide context and examples  
   4. Avoid vague instructions  

   Treat prompts like code and refine over time.

6. Performance & UX Considerations  
   AI calls are slower than normal APIs. Improve UX by:  
   1. Showing skeleton loaders  
   2. Streaming text word-by-word  
   3. Caching previous responses  
   4. Preventing duplicate submissions  

7. Real-World Use Cases  
   AI in React is commonly used for:  
   1. Chatbots and assistants  
   2. Code or content generation tools  
   3. Resume and form auto-fill  
   4. Search and summarization  
   5. Learning and tutoring platforms  

AI doesn’t replace frontend skills, it amplifies them. A well-designed React UI combined with thoughtful AI integration can create experiences that feel genuinely intelligent rather than gimmicky.`,
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
      className="px-4 lg:px-20 pt-4 lg:pt-6 pb-8 lg:pb-10"
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
