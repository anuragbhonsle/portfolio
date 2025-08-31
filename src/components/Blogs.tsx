import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export type BlogItem = {
  title: string;
  excerpt: string;
  content: string; // full blog content
  date: string;
  slug: string;
};

// Blogs array (unchanged)
export const blogs: BlogItem[] = [
  {
    title: "Creating a Meteor Shower Animation in React",
    excerpt:
      "Guide to building a meteor shower animation using React and HTML5 canvas.",
    content: `This tutorial explains how to create a meteor shower animation in React using HTML5 canvas. The animation uses requestAnimationFrame for smooth rendering, trigonometry for meteor movement, and supports light and dark modes. The result is a background animation suitable for a webpage.

1. Set Up the Canvas  
   Create a canvas element that spans the full window. Use a React ref to access it and set its width and height to match the window dimensions. Update these on window resize.

2. Define Meteor Properties  
   Each meteor has properties:  
   1. Position (x, y coordinates)  
   2. Length (size of the meteor trail)  
   3. Speed (movement rate)  
   4. Angle (direction of movement)  
   5. Opacity (visual depth)  
   Initialize 50 meteors with random values for natural variation.

3. Animate Meteors  
   Use requestAnimationFrame to draw and update meteors. Clear the canvas each frame, draw each meteor as a line with a shadow effect, and update its position based on speed and angle. Reset meteors that move off-screen to maintain continuous animation.

4. Support Light and Dark Modes  
   Check the document's classList for a dark class to set meteor colors. Use white with opacity in dark mode and black with opacity in light mode for visibility.

Here is an example of a meteor initialization function:

\`\`\`ts
// Example: initialize a meteor
function createMeteor() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * -window.innerHeight,
    length: Math.random() * 80 + 10,
    speed: Math.random() * 2 + 0.5,
    angle: Math.PI / 4,
    opacity: Math.random() * 0.5 + 0.5
  };
}
\`\`\`

This creates a dynamic background animation for web applications. Adjust meteor count, speed, or angle for different effects.`,
    date: "Aug 20, 2025",
    slug: "meteor-shower-react",
  },
  {
    title: "Reaching the Pupil Rating on Codeforces",
    excerpt: "Guide to reaching the Pupil rating on Codeforces.",
    content: `To reach the Pupil rating of 1200 to 1399 on Codeforces, follow this roadmap. It is designed for beginners and those in the Newbie rank to build skills and improve performance in contests.

1. Solve Easy Problems  
   Begin with problems labeled A and B in Div. 2 contests. These test basic programming skills. Focus on accuracy by reading problem statements carefully to avoid errors in constraints or edge cases. Aim to solve 10 to 15 problems per week to build familiarity.

2. Learn Core Concepts  
   Understand these topics:  
   1. Loops, conditionals, arrays, strings  
   2. Sorting, searching (e.g., binary search, built-in sort functions)  
   3. Basic data structures like sets, maps, and vectors  
   4. Time complexity (e.g., O(n), O(log n))  
   5. Basic number theory (e.g., divisibility, modular arithmetic)  
   Practice these through tutorials on platforms like GeeksforGeeks or Codeforces’ educational materials.

3. Practice Daily  
   Solve 1 to 2 problems daily to maintain consistency. Spend 30 to 60 minutes reviewing solutions or learning new concepts. Occasionally simulate a contest by solving A and B problems from a past Div. 2 contest within 1 hour to improve time management.

4. Analyze Mistakes  
   After failing a problem, read the editorial on Codeforces. Identify why the solution failed, such as incorrect logic, missed edge cases, or coding errors. Rewrite the correct solution to reinforce understanding. Keep a record of mistakes in a notebook or digital tool to track patterns.

5. Use Tags Effectively  
   Select problems by tags for weak areas, such as greedy algorithms or math. Start with easier problems (rated 800 to 1000) and progress to harder ones (rated 1100 to 1300). Use the Codeforces problemset filter to find relevant problems.

6. Increase Difficulty  
   After solving A and B problems consistently, attempt C problems in Div. 2 contests. These require combining multiple concepts, such as sorting with greedy logic. Solve 5 to 10 C problems before contests to prepare for their complexity.

7. Participate in Contests  
   Join every Div. 2 contest to gain experience under time pressure. Use virtual contests on Codeforces to practice past contests at your own pace. Aim to solve at least A and B problems during live contests to boost your rating.

8. Choose a Programming Language  
   Select a language you are comfortable with, such as C++, Python, or Java. C++ is popular for its speed and standard library. Learn its basics, like vectors and sets, to handle common problem requirements efficiently.

9. Use Additional Resources  
   Supplement practice with:  
   1. Codeforces blog posts and tutorials for advanced explanations  
   2. Books like "Competitive Programming" by Steven Halim  
   3. YouTube channels or online courses for visual explanations of algorithms  

Here is an example of a common task, summing an array in C++:

\`\`\`cpp
// Example: sum of array in C++
int sumArray(vector<int> &arr) {
    int sum = 0;
    for(int x : arr) sum += x;
    return sum;
}
\`\`\`

Another example is checking if a number is prime, often used in number theory problems:

\`\`\`cpp
// Example: check if a number is prime in C++
bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
\`\`\`

With consistent practice, targeted problem selection, and regular contest participation, the Pupil rating can be achieved in 4 to 8 weeks. Track progress using the Codeforces rating graph and review mistakes to improve steadily.`,
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
          className="text-l sm:text-2xl font-bold text-foreground mb-5 tracking-tight"
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
