import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export type BlogItem = {
  title: string;
  excerpt: string;
  content: string; // full blog content
  date: string;
  slug: string;
};

// ✅ Add your blogs here
export const blogs: BlogItem[] = [
  {
    title: "Creating a Stunning Meteor Shower Animation in React",
    excerpt: "Step-by-step guide to creating a meteor shower canvas animation.",
    content: `In this tutorial, we build a meteor shower animation using HTML5 canvas and React.
We'll use requestAnimationFrame, trigonometry for angles, and Framer Motion for smooth UI effects.
By the end, you'll have a visually stunning meteor shower component ready for your homepage.

\`\`\`ts
// Example of a falling star function
function createStar() {
  return { x: Math.random() * canvas.width, y: 0, speed: Math.random() * 5 + 2 };
}
\`\`\`

Enjoy creating cool effects!`,
    date: "Aug 20, 2025",
    slug: "meteor-shower-react",
  },
  {
    title: "Your First Codeforces Milestone: Become a Pupil Fast",
    excerpt:
      "Step-by-step guide to reaching the Pupil rating on Codeforces efficiently.",
    content: `If you’re aiming to become a Pupil (rating 1200–1399) on Codeforces, here’s a roadmap to get there efficiently:

1. **Start with Easy Problems**  
   Solve problems labeled **A and B** from Div. 2 contests. Focus on **accuracy over speed**.  

2. **Learn Core Concepts**  
   Make sure you understand:
   - Loops, conditionals, arrays, strings  
   - Sorting, searching  
   - Simple data structures like sets, maps

3. **Practice Daily**  
   - Solve **1–2 problems daily** consistently.  
   - Try to simulate contest environment sometimes to practice time management.  

4. **Analyze Mistakes**  
   - Always read editorial after failing a problem.  
   - Understand why your solution failed and how the correct solution works.  

5. **Use Tags Smartly**  
   - Pick problems by tags you are weak in and gradually improve.  

6. **Gradually Increase Difficulty**  
   - After mastering A & B, start attempting **C problems** in Div. 2 contests.  

\`\`\`cpp
// Example: simple sum of array in C++
int sumArray(vector<int> &arr) {
    int sum = 0;
    for(int x : arr) sum += x;
    return sum;
}
\`\`\`

With **consistent practice** and **smart problem selection**, you’ll reach Pupil rating in a few weeks!  
Keep track of your progress and never skip analyzing mistakes.
`,
    date: "Aug 31, 2025",
    slug: "codeforces-pupil-guide",
  },
];

export const Blogs = () => {
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
          className="text-l sm:text-2xl font-bold text-foreground mb-4 tracking-tight"
        >
          Recent Blog Posts
        </motion.h2>

        {/* Blog Items */}
        <div className="flex flex-col gap-4 w-full">
          {blogs.map((blog, index) => (
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
                  <h3 className="text-lg font-semibold text-foreground hover:text-blue-500 transition-colors">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-sm text-text-dim mt-1">{blog.excerpt}</p>
              </div>

              {/* Right: Date */}
              <span className="text-sm text-text-dim font-mono mt-1 sm:mt-0">
                {blog.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
