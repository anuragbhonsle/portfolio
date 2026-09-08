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

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 text-center text-gray-600 dark:text-gray-300">
        <p className="text-base sm:text-lg">Blog not found 😕</p>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="
        w-full
        max-w-2xl
        lg:max-w-3xl
        mx-auto
        px-4
        sm:px-6
        md:px-8
        pt-8
        sm:pt-10
        md:pt-12
        pb-16
        sm:pb-20
      "
    >
      {/* Blog Header */}
      <header className="mb-8 sm:mb-10">
        <h1
          className="
            font-Inter
            font-bold
            tracking-tight
            text-2xl
            sm:text-3xl
            md:text-4xl
            leading-tight
            mb-3
            break-words
          "
        >
          {blog.title}
        </h1>

        <p className="font-Inter text-sm sm:text-base text-text-dim">
          {blog.date}
        </p>
      </header>

      {/* Markdown Content */}
      <div
        className="
          w-full
          min-w-0
          font-sans
          prose
          prose-neutral
          dark:prose-invert

          prose-p:font-Inter
          prose-p:font-normal
          prose-p:text-[0.98rem]
          sm:prose-p:text-[1.05rem]
          prose-p:leading-7
          sm:prose-p:leading-8
          prose-p:mb-5

          prose-headings:font-Inter
          prose-headings:font-semibold
          prose-headings:tracking-tight
          prose-headings:break-words

          prose-h2:text-xl
          sm:prose-h2:text-2xl

          prose-h3:text-lg
          sm:prose-h3:text-xl

          prose-li:text-[0.98rem]
          sm:prose-li:text-[1.05rem]
          prose-li:leading-7
          prose-li:mb-2

          prose-strong:font-semibold

          prose-code:font-normal
          prose-code:text-[0.85rem]
          sm:prose-code:text-sm

          prose-pre:p-0
          prose-pre:bg-transparent

          [&_table]:block
          [&_table]:w-full
          [&_table]:overflow-x-auto

          [&_img]:max-w-full
          [&_img]:h-auto
          [&_img]:rounded-xl

          [&_a]:break-words
        "
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            ul: ({ children }) => (
              <ul className="list-disc ml-5 sm:ml-6 mb-5 pl-2 text-base sm:text-lg leading-relaxed">
                {children}
              </ul>
            ),

            ol: ({ children }) => (
              <ol className="list-decimal ml-5 sm:ml-6 mb-5 pl-2 text-base sm:text-lg leading-relaxed">
                {children}
              </ol>
            ),

            li: ({ children }) => <li className="mb-2 pl-1">{children}</li>,

            p: ({ children }) => (
              <p className="font-Inter text-gray-800 dark:text-gray-200 mb-5 leading-7 sm:leading-8">
                {children}
              </p>
            ),

            blockquote: ({ children }) => (
              <blockquote
                className="
                  border-l-4
                  pl-4
                  sm:pl-5
                  my-6
                  text-gray-600
                  dark:text-gray-400
                  italic
                "
              >
                {children}
              </blockquote>
            ),

            code({ inline, className, children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || "");

              return !inline && match ? (
                <div className="w-full max-w-full overflow-x-auto rounded-xl my-5">
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    wrapLongLines={false}
                    customStyle={{
                      margin: 0,
                      borderRadius: "0.75rem",
                      fontSize: "0.8rem",
                      lineHeight: "1.6",
                      padding: "1rem",
                      minWidth: "max-content",
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code
                  className="
                    bg-gray-200
                    dark:bg-gray-800
                    rounded
                    px-1.5
                    py-0.5
                    text-[0.8rem]
                    sm:text-sm
                    break-words
                  "
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
    </motion.article>
  );
};

export default BlogPage;
