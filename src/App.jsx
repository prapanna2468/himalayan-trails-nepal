import React, { useState } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Thank you ${formData.name}! We will contact you at ${formData.email} soon.`);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleBookPackage = (packageName) => {
    setSelectedPackage(packageName);
    alert(`Great choice! You selected ${packageName}.\n\nOur team will contact you shortly with booking details.`);
    setTimeout(() => setSelectedPackage(null), 2000);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            🏔️ Himalayan Trails
          </h1>
          <div className="flex gap-6">
            <button 
              onClick={() => handleScroll('about')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleScroll('packages')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Packages
            </button>
            <button 
              onClick={() => handleScroll('contact')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
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
          <button 
            onClick={() => handleScroll('packages')}
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold rounded-lg text-lg transition-all cursor-pointer shadow-lg hover:shadow-orange-500/50"
          >
            Start Your Adventure
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all cursor-pointer group">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Expert Guides</h3>
              <p className="text-gray-300">Our experienced local guides know every trail intimately and ensure your safety and comfort throughout your journey.</p>
            </div>
            <div className="p-8 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all cursor-pointer group">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Stunning Views</h3>
              <p className="text-gray-300">Experience some of the most breathtaking mountain views in the entire world that will take your breath away.</p>
            </div>
            <div className="p-8 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all cursor-pointer group">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Cultural Experience</h3>
              <p className="text-gray-300">Connect with local communities and experience authentic Nepali culture, traditions, and hospitality firsthand.</p>
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
              { name: 'Everest Base Camp', duration: '14 Days', price: '$1,200', difficulty: 'Hard', reviews: 4.9 },
              { name: 'Annapurna Circuit', duration: '21 Days', price: '$950', difficulty: 'Medium', reviews: 4.8 },
              { name: 'Langtang Valley', duration: '7 Days', price: '$650', difficulty: 'Easy', reviews: 4.7 }
            ].map((pkg, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-lg bg-gray-900/50 border transition-all cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 ${
                  selectedPackage === pkg.name ? 'border-orange-500 bg-orange-500/10' : 'border-gray-700 hover:border-orange-500'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-orange-400">{pkg.name}</h3>
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">{pkg.difficulty}</span>
                </div>
                <div className="flex justify-between items-center mb-2 text-gray-400 text-sm">
                  <span>⏱️ {pkg.duration}</span>
                  <span>⭐ {pkg.reviews}</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm border-t border-gray-700 pt-4">Perfect trek for experiencing the Himalayas with expert guidance and comfortable accommodations.</p>
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-bold text-orange-500">{pkg.price}</p>
                  <button 
                    onClick={() => handleBookPackage(pkg.name)}
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold rounded-lg transition-all cursor-pointer shadow-lg"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-8">Fill out the form below and we'll contact you within 24 hours</p>
          
          {submitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
              ✅ Thank you! Your message has been received. We'll contact you soon!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe" 
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none text-white placeholder-gray-500 transition-colors cursor-text"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com" 
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none text-white placeholder-gray-500 transition-colors cursor-text"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell us about your trek preferences..." 
                rows="5" 
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none text-white placeholder-gray-500 transition-colors resize-none cursor-text"
              />
            </div>

            <button 
              type="submit"
              className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold rounded-lg transition-all cursor-pointer shadow-lg hover:shadow-orange-500/50"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl mb-2">📍</div>
              <p className="text-sm text-gray-400">Kathmandu, Nepal</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📞</div>
              <p className="text-sm text-gray-400">+977-1-1234567</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📧</div>
              <p className="text-sm text-gray-400">info@himalayan.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => handleScroll('about')} className="hover:text-orange-400 cursor-pointer transition">About</button></li>
                <li><button onClick={() => handleScroll('packages')} className="hover:text-orange-400 cursor-pointer transition">Packages</button></li>
                <li><button onClick={() => handleScroll('contact')} className="hover:text-orange-400 cursor-pointer transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Popular Treks</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-400 cursor-pointer transition">Everest Trek</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Annapurna Trek</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Langtang Trek</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-400 cursor-pointer transition">Facebook</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Instagram</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Twitter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-3">Subscribe for trek updates</p>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
          <div className="text-center text-gray-500 border-t border-gray-800 pt-8">
            <p>&copy; 2024 Himalayan Trails Nepal. All rights reserved. | Made with ❤️ for adventurers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
