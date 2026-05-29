import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Treks in Nepal',
      excerpt: 'Discover the most breathtaking trekking routes in Nepal, from beginner-friendly paths to challenging mountain expeditions.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      category: 'Travel Guide',
      readTime: '8 min',
      date: 'May 15, 2024',
    },
    {
      id: 2,
      title: 'Best Time for Everest Trek',
      excerpt: 'Planning your Everest adventure? Learn about the best seasons, weather conditions, and preparation tips for the ultimate trek.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop',
      category: 'Planning',
      readTime: '6 min',
      date: 'May 12, 2024',
    },
    {
      id: 3,
      title: 'Essential Trekking Gear Guide',
      excerpt: 'Complete checklist of essential gear and equipment needed for a successful and comfortable Himalayan trekking experience.',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=300&fit=crop',
      category: 'Equipment',
      readTime: '10 min',
      date: 'May 10, 2024',
    },
    {
      id: 4,
      title: 'Hidden Gems of Nepal',
      excerpt: 'Explore lesser-known trekking routes and hidden destinations that offer authentic Nepali culture and stunning natural beauty.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      category: 'Exploration',
      readTime: '7 min',
      date: 'May 8, 2024',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Travel Guide':
        return 'bg-blue-500/20 text-blue-400 border-blue-500';
      case 'Planning':
        return 'bg-green-500/20 text-green-400 border-green-500';
      case 'Equipment':
        return 'bg-orange-500/20 text-orange-400 border-orange-500';
      case 'Exploration':
        return 'bg-purple-500/20 text-purple-400 border-purple-500';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  return (
    <section className="min-h-screen bg-himalayan-dark-blue py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Latest from <span className="gradient-text">Our Blog</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tips, stories, and guides for your Himalayan adventure
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glassmorphism rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-himalayan-dark-blue to-transparent" />

                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category)}`}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold font-display mb-3 group-hover:text-nepal-orange transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-white/10">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {post.readTime} read
                  </span>
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ gap: '12px' }}
                  className="flex items-center gap-2 text-nepal-orange font-semibold group-hover:text-nepal-red transition-colors"
                >
                  Read Article
                  <FaArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Blog Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-nepal-orange to-nepal-red text-white font-bold rounded-full text-lg hover:shadow-lg transition-all"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
