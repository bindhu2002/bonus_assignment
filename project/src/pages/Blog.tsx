import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import type { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Neural Networks: A Beginner\'s Guide',
    snippet: 'Dive into the basics of neural networks and how they form the foundation of modern AI systems.',
    tags: ['AI', 'Machine Learning', 'Neural Networks'],
    date: '2024-03-15',
    content: 'Full content here...'
  },
  {
    id: '2',
    title: 'Data Preprocessing Techniques for Machine Learning',
    snippet: 'Learn essential data preprocessing steps to prepare your dataset for machine learning models.',
    tags: ['Data Science', 'Machine Learning', 'Python'],
    date: '2024-03-10',
    content: 'Full content here...'
  },
  {
    id: '3',
    title: 'The Future of AI in Business Analytics',
    snippet: 'Explore how AI is transforming business analytics and what the future holds.',
    tags: ['AI', 'Business', 'Analytics'],
    date: '2024-03-05',
    content: 'Full content here...'
  }
];

const Blog: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className={`pt-20 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Blog
        </motion.h1>

        {/* Tags filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !selectedTag
                ? 'bg-blue-500 text-white'
                : `${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-blue-500 text-white'
                  : `${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Blog posts */}
        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow`}
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {post.snippet}
              </p>
              <button
                className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
              >
                Read More →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;