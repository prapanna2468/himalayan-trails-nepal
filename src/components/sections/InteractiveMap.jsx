import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveMap = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: 1,
      name: 'Everest Base Camp',
      lat: 28.0,
      lng: 86.8,
      description: '14-day trek to the base of the world\'s highest peak',
      altitude: '5,364m',
    },
    {
      id: 2,
      name: 'Annapurna Circuit',
      lat: 28.7,
      lng: 84.0,
      description: '21-day complete circuit around Annapurna massif',
      altitude: '5,416m',
    },
    {
      id: 3,
      name: 'Langtang Valley',
      lat: 28.25,
      lng: 85.5,
      description: '7-day trek through alpine meadows and rhododendron forests',
      altitude: '3,430m',
    },
    {
      id: 4,
      name: 'Mardi Himal',
      lat: 28.35,
      lng: 84.35,
      description: '6-day trek with stunning mountain panoramas',
      altitude: '4,500m',
    },
    {
      id: 5,
      name: 'Manaslu Circuit',
      lat: 28.6,
      lng: 84.6,
      description: '18-day remote adventure around 8th highest peak',
      altitude: '5,160m',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-himalayan-blue to-himalayan-dark-blue py-20 px-4 sm:px-6 lg:px-8">
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
            Explore <span className="gradient-text">Trekking Destinations</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Click on any destination to learn more about our trekking routes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glassmorphism rounded-2xl p-8 h-96 relative overflow-hidden"
          >
            {/* SVG Map */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.1))',
              }}
            >
              {/* Nepal outline */}
              <path
                d="M 100 150 Q 150 140 200 145 Q 250 150 280 170 Q 290 200 270 220 Q 240 240 180 235 Q 120 230 100 200 Z"
                fill="rgba(77, 166, 255, 0.2)"
                stroke="#4da6ff"
                strokeWidth="2"
              />

              {/* Mountain markers */}
              {destinations.map((dest) => (
                <motion.g
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest)}
                  className="cursor-pointer"
                >
                  {/* Glow effect */}
                  <motion.circle
                    cx={(dest.lng - 80) * 1.5 + 100}
                    cy={(dest.lat - 26) * 3 + 100}
                    r="8"
                    fill="rgba(255, 107, 53, 0.3)"
                    animate={{
                      r: selectedDestination?.id === dest.id ? 15 : 8,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Main marker */}
                  <motion.circle
                    cx={(dest.lng - 80) * 1.5 + 100}
                    cy={(dest.lat - 26) * 3 + 100}
                    r="5"
                    fill={selectedDestination?.id === dest.id ? '#ff6b35' : '#4da6ff'}
                    animate={{
                      r: selectedDestination?.id === dest.id ? 8 : 5,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.g>
              ))}
            </svg>

            {/* Info overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {!selectedDestination && (
                <div className="text-center">
                  <p className="text-gray-400">🗺️ Click on a destination marker</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Destination List */}
          <div className="space-y-4">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedDestination(dest)}
                className={`glassmorphism p-4 rounded-xl cursor-pointer transition-all ${
                  selectedDestination?.id === dest.id
                    ? 'bg-nepal-orange/20 border-2 border-nepal-orange'
                    : 'border border-white/10 hover:border-nepal-orange/50'
                }`}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start justify-between"
                >
                  <div>
                    <h4 className="font-bold text-white mb-1">{dest.name}</h4>
                    <p className="text-sm text-gray-400">{dest.altitude}</p>
                  </div>
                  <span className="text-xl">🏔️</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Destination Details */}
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 glassmorphism rounded-2xl p-8"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-3xl font-bold font-display mb-2">
                  {selectedDestination.name}
                </h3>
                <p className="text-gray-300 text-lg">
                  {selectedDestination.description}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedDestination(null)}
                className="text-gray-400 hover:text-nepal-orange transition-colors"
              >
                ✕
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-nepal-orange to-nepal-red text-white font-bold rounded-lg"
            >
              Book This Trek
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InteractiveMap;
