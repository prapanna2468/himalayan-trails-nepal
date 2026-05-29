import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Everest Sunrise',
      category: 'Mountain',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
      span: 'lg:col-span-1 lg:row-span-2',
    },
    {
      id: 2,
      title: 'Prayer Flags',
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
      span: 'lg:col-span-1',
    },
    {
      id: 3,
      title: 'Mountain Village',
      category: 'Landscape',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop',
      span: 'lg:col-span-1',
    },
    {
      id: 4,
      title: 'Tea House Trek',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      span: 'lg:col-span-2',
    },
    {
      id: 5,
      title: 'Alpine Meadows',
      category: 'Nature',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      span: 'lg:col-span-1',
    },
    {
      id: 6,
      title: 'Summit Victory',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
      span: 'lg:col-span-1',
    },
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen bg-himalayan-dark-blue py-20 px-4 sm:px-6 lg:px-8"
    >
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
            Gallery of <span className="gradient-text">Adventures</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Stunning moments captured from our trekking expeditions
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${img.span} relative h-64 md:h-72 rounded-xl overflow-hidden group cursor-pointer`}
              onHoverStart={() => setHoveredId(img.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              {/* Image */}
              <motion.img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredId === img.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-himalayan-dark-blue via-transparent to-transparent"
                animate={{
                  opacity: hoveredId === img.id ? 0.9 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                animate={{
                  opacity: hoveredId === img.id ? 1 : 0.8,
                  y: hoveredId === img.id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold font-display mb-2">
                  {img.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{img.category}</p>

                {/* Hover CTA */}
                {hoveredId === img.id && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-2 bg-nepal-orange text-white rounded-lg w-fit font-semibold text-sm"
                  >
                    View Details
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-nepal-orange to-nepal-red text-white font-bold rounded-full text-lg hover:shadow-lg transition-all"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
