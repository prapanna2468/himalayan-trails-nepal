import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            Himalayan Trails Nepal
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Explore the Roof of the World
          </p>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Experience the breathtaking beauty of Nepal's Himalayan mountains. Trek through pristine valleys, stay in authentic villages, and create memories that last a lifetime.
          </p>
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-lg transition-colors">
            Start Your Adventure
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            About Our Treks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Expert Guides</h3>
              <p className="text-gray-300">Our experienced local guides know every trail intimately and ensure your safety and comfort.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Stunning Views</h3>
              <p className="text-gray-300">Experience some of the most breathtaking mountain views in the entire world.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Cultural Experience</h3>
              <p className="text-gray-300">Connect with local communities and experience authentic Nepali culture firsthand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Trek Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Everest Base Camp', duration: '14 Days', price: '$1,200' },
              { name: 'Annapurna Circuit', duration: '21 Days', price: '$950' },
              { name: 'Langtang Valley', duration: '7 Days', price: '$650' }
            ].map((pkg, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-orange-500 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-orange-400">{pkg.name}</h3>
                <p className="text-gray-400 mb-4">Duration: {pkg.duration}</p>
                <p className="text-2xl font-bold text-orange-500 mb-4">{pkg.price}</p>
                <button className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none text-white"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none text-white"
            />
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none text-white resize-none"
            />
            <button 
              type="submit"
              className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Himalayan Trails Nepal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
