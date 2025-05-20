import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiTag, FiArrowRight } from 'react-icons/fi';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to create your first component.',
    date: '2024-03-15',
    category: 'React',
    image: 'https://via.placeholder.com/400x300',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Building Responsive Designs',
    excerpt: 'Master the art of creating responsive web designs that work on all devices.',
    date: '2024-03-10',
    category: 'CSS',
    image: 'https://via.placeholder.com/400x300',
    readTime: '8 min read',
  },
  // Add more blog posts as needed
];

const categories = ['All', 'React', 'CSS', 'JavaScript', 'Web Development'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <div className="section pt-24">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Blog
        </motion.h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-dark-light text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-white/90 dark:bg-dark/90 text-gray-900 dark:text-white">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FiTag className="mr-1" />
                      {post.category}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog; 