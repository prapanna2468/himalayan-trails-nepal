import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'USA',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      quote: 'The Everest Base Camp trek was absolutely incredible! Our guide was knowledgeable and made us feel safe the entire way.',
    },
    {
      id: 2,
      name: 'Marco Rossi',
      location: 'Italy',
      image: 'https://i.pravatar.cc/150?img=2',
      rating: 5,
      quote: 'Best adventure of my life! The team took care of everything, and the views were breathtaking. Highly recommended!',
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'UK',
      image: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
      quote: 'Himalayan Trails truly exceeded my expectations. The organization was perfect, and I made amazing memories.',
    },
    {
      id: 4,
      name: 'Raj Kumar',
      location: 'India',
      image: 'https://i.pravatar.cc/150?img=4',
      rating: 5,
      quote: 'Experience Nepal like never before! The guides are experienced and passionate about sharing their culture.',
    },
    {
      id: 5,
      name: 'Lisa Chen',
      location: 'Singapore',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      quote: 'Professional service combined with authentic Nepali hospitality. This is how trekking should be!',
    },
    {
      id: 6,
      name: 'James Brown',
      location: 'Canada',
      image: 'https://i.pravatar.cc/150?img=6',
      rating: 5,
      quote: 'Fantastic team, stunning landscapes, and unforgettable memories. I cannot wait to book another trek!',
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

  return (
    <section className="min-h-screen bg-gradient-to-b from-himalayan-dark-blue to-himalayan-blue py-20 px-4 sm:px-6 lg:px-8">
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
            Traveler <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join thousands of happy trekkers who've explored Nepal with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-2xl p-8 flex flex-col"
            >
              {/* Quote */}
              <p className="text-gray-300 mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block glassmorphism px-8 py-6 rounded-2xl">
            <p className="text-gray-300 mb-3">Rated Excellent on</p>
            <div className="flex justify-center items-center gap-4">
              <span className="text-yellow-400 text-lg font-bold">★★★★★ 4.9/5</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300">Based on 1,200+ verified reviews</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
