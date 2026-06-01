import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMapPin, FaClock } from 'react-icons/fa';

const TrekkingPackages = () => {
  const packages = [
    {
      id: 1,
      name: 'Everest Base Camp Trek',
      difficulty: 'Hard',
      duration: '14 Days',
      price: '$1,200',
      location: 'Khumbu Region',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      description: 'Trek to the base camp of the world\'s highest mountain'
    },
    {
      id: 2,
      name: 'Annapurna Circuit Trek',
      difficulty: 'Medium',
      duration: '21 Days',
      price: '$950',
      location: 'Annapurna Range',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop',
      description: 'Complete circuit around the Annapurna massif'
    },
    {
      id: 3,
      name: 'Langtang Valley Trek',
      difficulty: 'Easy',
      duration: '7 Days',
      price: '$650',
      location: 'Langtang Region',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      description: 'Scenic trek through lush valleys and mountain villages'
    },
    {
      id: 4,
      name: 'Mardi Himal Trek',
      difficulty: 'Medium',
      duration: '5 Days',
      price: '$450',
      location: 'Pokhara Region',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
      description: 'Hidden gem with stunning Himalayan views'
    },
    {
      id: 5,
      name: 'Manaslu Circuit Trek',
      difficulty: 'Very Hard',
      duration: '18 Days',
      price: '$1,100',
      location: 'Manaslu Region',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      description: 'Remote trek around the 8th highest mountain'
    },
    {
      id: 6,
      name: 'Tsum Valley Trek',
      difficulty: 'Hard',
      duration: '12 Days',
      price: '$850',
      location: 'Manaslu Region',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop',
      description: 'Explore the mystical Tsum Valley'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hard': return 'bg-orange-500';
      case 'Very Hard': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            Trek Packages
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our carefully curated selection of trekking packages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-lg overflow-hidden hover:shadow-glow-lg transition-all group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold ${getDifficultyColor(pkg.difficulty)}`}>
                  {pkg.difficulty}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <FaMapPin className="text-nepal-orange" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-nepal-orange" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {pkg.rating} ({Math.floor(Math.random() * 50) + 20} reviews)
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                  <span className="text-2xl font-bold gradient-text">{pkg.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-nepal-orange to-nepal-orange rounded-lg text-white font-bold hover:shadow-lg transition-all"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrekkingPackages;
