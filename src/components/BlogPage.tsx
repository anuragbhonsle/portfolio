// BlogPage.tsx
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { blogs } from "./Blogs";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

type CodeProps = {
  node: any;
  inline: boolean;
  className?: string;
  children: React.ReactNode[];
};

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  // Scroll to top when blog changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!blog)
    return (
      <div className="text-center mt-20 text-gray-600 dark:text-gray-300">
        Blog not found 😕
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-4 sm:px-10 lg:px-16 pt-10 pb-20"
    >
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-2 font-Inter">{blog.title}</h1>
      <p className="text-semibold text-text-dim mb-6 font-Inter">{blog.date}</p>

      {/* Markdown Content */}
      <div
        className=" font-sans
         prose prose-neutral dark:prose-invert
         max-w-none
         prose-p:leading-7
         prose-p:text-[1.05rem]
  prose-li:leading-7
  prose-li:marker:text-gray-400
  prose-strong:font-semibold
  prose-code:font-normal
  prose-code:text-sm
  prose-headings:font-semibold
 prose-headings:tracking-tight"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            ul: ({ children }) => (
              <ul className="list-disc ml-6 mb-5 text-base sm:text-lg leading-relaxed">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal ml-6 mb-5 text-base sm:text-lg leading-relaxed">
                {children}
              </ol>
            ),
            li: ({ children }) => <li className="mb-2">{children}</li>,
            p: ({ children }) => (
              <p className=" text-semibold font-Inter text-grey-800 dark:text-grey-200 mb-4">
                {children}
              </p>
            ),
            code({ inline, className, children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-lg my-4 text-sm"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className="bg-gray-200 dark:bg-gray-800 rounded px-1 py-0.5 text-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default BlogPage;
