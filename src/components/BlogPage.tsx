import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { blogs } from "./Blogs";
import { useParams } from "react-router-dom";

type CodeProps = {
  node: any;
  inline: boolean;
  className?: string;
  children: React.ReactNode[];
};

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return (
      <div className="text-center mt-20 text-gray-600 dark:text-gray-300">
        Blog not found 😕
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-10 lg:px-16 pt-10 pb-20">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-text-dim mb-6">{blog.date}</p>

      {/* Markdown Content */}
      <div className="markdown-content prose prose-sm sm:prose lg:prose-lg dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  className="rounded-md my-2"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className="bg-gray-200 dark:bg-gray-800 rounded px-1 py-0.5"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            ul: ({ children }) => (
              <ul className="list-disc ml-5 mb-4">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal ml-5 mb-4">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-1">{children}</li>,
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPage;
