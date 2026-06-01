import React, { useState } from 'react';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [authForm, setAuthForm] = useState({ email: '', password: '', name: '' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // Mock user database
  const [users, setUsers] = useState([
    { id: 1, email: 'demo@example.com', password: 'demo123', name: 'Demo User', bookings: [] }
  ]);

  // Trek packages with advanced details
  const packages = [
    { 
      id: 1, 
      name: 'Everest Base Camp Trek',
      duration: '14 Days',
      price: 1200,
      difficulty: 'Hard',
      reviews: 4.9,
      location: 'Khumbu Region',
      altitude: '5,364m',
      bestSeason: 'Sep-Nov, Mar-May',
      included: ['Professional guide', '3-star accommodation', 'All meals', 'Porter service'],
      description: 'Trek to the base camp of the world\'s highest mountain with expert guidance.',
      image: '🏔️'
    },
    { 
      id: 2, 
      name: 'Annapurna Circuit Trek',
      duration: '21 Days',
      price: 950,
      difficulty: 'Medium',
      reviews: 4.8,
      location: 'Annapurna Range',
      altitude: '5,416m',
      bestSeason: 'Oct-Nov, Mar-Apr',
      included: ['Expert guide', '2-3 star hotels', 'Breakfast & dinner', 'Emergency support'],
      description: 'Complete circuit around the Annapurna massif with stunning views.',
      image: '⛰️'
    },
    { 
      id: 3, 
      name: 'Langtang Valley Trek',
      duration: '7 Days',
      price: 650,
      difficulty: 'Easy',
      reviews: 4.7,
      location: 'Langtang Region',
      altitude: '3,844m',
      bestSeason: 'Year-round',
      included: ['Guide', 'Accommodation', 'Meals', 'Transportation'],
      description: 'Scenic trek through lush valleys and authentic mountain villages.',
      image: '🌄'
    }
  ];

  // Auth handlers
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === authForm.email && u.password === authForm.password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setAuthForm({ email: '', password: '', name: '' });
      setCurrentPage('home');
      alert(`Welcome back, ${user.name}!`);
    } else {
      alert('Invalid email or password!');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (users.find(u => u.email === authForm.email)) {
      alert('Email already registered!');
      return;
    }
    const newUser = {
      id: users.length + 1,
      email: authForm.email,
      password: authForm.password,
      name: authForm.name,
      bookings: []
    };
    setUsers([...users, newUser]);
    setIsLoggedIn(true);
    setCurrentUser(newUser);
    setAuthForm({ email: '', password: '', name: '' });
    setCurrentPage('home');
    alert(`Welcome, ${newUser.name}! Account created successfully.`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('home');
    alert('Logged out successfully!');
  };

  // Contact form handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Thank you ${formData.name}! We will contact you at ${formData.email} soon.`);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Payment handler
  const handlePayment = (e) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now(),
      packageId: selectedPackage.id,
      packageName: selectedPackage.name,
      date: new Date().toLocaleDateString(),
      price: selectedPackage.price,
      status: 'Confirmed',
      paymentMethod: 'Credit Card'
    };
    
    const updatedUser = {
      ...currentUser,
      bookings: [...(currentUser.bookings || []), newBooking]
    };
    
    setCurrentUser(updatedUser);
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setBookings([...bookings, newBooking]);
    setShowPayment(false);
    setPaymentData({ cardNumber: '', expiryDate: '', cvv: '' });
    alert(`🎉 Booking confirmed! Trek: ${selectedPackage.name}\nPrice: $${selectedPackage.price}\nConfirmation email sent!`);
    setCurrentPage('bookings');
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Auth pages
  if (!isLoggedIn && (currentPage === 'login' || currentPage === 'signup')) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
            <h1 className="text-4xl font-bold text-center mb-2 gradient-text">Himalayan Trails</h1>
            <p className="text-center text-gray-400 mb-8">Adventure Awaits</p>

            {currentPage === 'login' ? (
              <>
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input 
                      type="email" 
                      value={authForm.email}
                      onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Password</label>
                    <input 
                      type="password" 
                      value={authForm.password}
                      onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 text-white"
                      placeholder="••••••••"
                    />
                  </div>
                  <button type="submit" className="w-full py-3 bg-orange-500 hover:bg-orange-600 font-bold rounded-lg transition-colors">
                    Login
                  </button>
                </form>
                <p className="text-center text-gray-400 mt-4">
                  Don't have an account? <button onClick={() => setCurrentPage('signup')} className="text-orange-400 hover:text-orange-300 cursor-pointer">Sign up</button>
                </p>
                <p className="text-center text-gray-500 text-xs mt-4">Demo: demo@example.com / demo123</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Create Account</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input 
                      type="text" 
                      value={authForm.name}
                      onChange={(e) => setAuthForm({...authForm, name: e.target.value})}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input 
                      type="email" 
                      value={authForm.email}
                      onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Password</label>
                    <input 
                      type="password" 
                      value={authForm.password}
                      onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 text-white"
                      placeholder="••••••••"
                    />
                  </div>
                  <button type="submit" className="w-full py-3 bg-orange-500 hover:bg-orange-600 font-bold rounded-lg transition-colors">
                    Create Account
                  </button>
                </form>
                <p className="text-center text-gray-400 mt-4">
                  Already have an account? <button onClick={() => setCurrentPage('login')} className="text-orange-400 hover:text-orange-300 cursor-pointer">Login</button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main app
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => setCurrentPage('home')}>
            🏔️ Himalayan Trails
          </h1>
          <div className="flex gap-6 items-center">
            {isLoggedIn && <button onClick={() => setCurrentPage('bookings')} className="hover:text-orange-400 transition-colors cursor-pointer">My Bookings</button>}
            <button onClick={() => handleScroll('packages')} className="hover:text-orange-400 transition-colors cursor-pointer">Packages</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-orange-400 transition-colors cursor-pointer">About</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-orange-400 transition-colors cursor-pointer">Contact</button>
            {isLoggedIn ? (
              <div className="flex gap-4 items-center">
                <span className="text-sm text-gray-400">Hello, {currentUser?.name}!</span>
                <button onClick={handleLogout} className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-bold transition-colors cursor-pointer">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button onClick={() => setCurrentPage('login')} className="px-4 py-2 border border-orange-500 text-orange-400 hover:bg-orange-500/10 rounded-lg font-bold transition-colors cursor-pointer">
                  Login
                </button>
                <button onClick={() => setCurrentPage('signup')} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold transition-colors cursor-pointer">
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* My Bookings Page */}
      {currentPage === 'bookings' && isLoggedIn && (
        <section className="min-h-screen pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 gradient-text">My Bookings</h2>
            {(currentUser?.bookings || []).length > 0 ? (
              <div className="space-y-4">
                {(currentUser?.bookings || []).map((booking) => (
                  <div key={booking.id} className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-orange-400 mb-2">{booking.packageName}</h3>
                        <p className="text-gray-400">Booked on: {booking.date}</p>
                        <p className="text-gray-400">Status: <span className="text-green-400 font-bold">{booking.status}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-orange-500">${booking.price}</p>
                        <p className="text-gray-400 text-sm">Payment: {booking.paymentMethod}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-gray-900/50 border border-gray-700 rounded-lg text-center">
                <p className="text-gray-400 mb-4">No bookings yet</p>
                <button onClick={() => setCurrentPage('home')} className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold">
                  Book a Trek
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Home Page */}
      {currentPage === 'home' && (
        <>
          {/* Hero */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
            <div className="text-center max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">Himalayan Trails Nepal</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">Explore the Roof of the World</p>
              <p className="text-gray-400 text-lg mb-8">Expert-guided treks with guaranteed safety, authentic experiences, and lifetime memories</p>
              <button onClick={() => handleScroll('packages')} className="px-8 py-4 bg-orange-500 hover:bg-orange-600 font-bold rounded-lg text-lg transition-all cursor-pointer shadow-lg">
                Book Your Trek Now
              </button>
            </div>
          </section>

          {/* Packages */}
          <section id="packages" className="py-20 px-4 bg-gray-800/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Popular Trek Packages</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <div key={idx} className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/20 group cursor-pointer">
                    <div className="text-4xl mb-3">{pkg.image}</div>
                    <h3 className="text-2xl font-bold text-orange-400 mb-2">{pkg.name}</h3>
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <p>⏱️ Duration: {pkg.duration}</p>
                      <p>⛰️ Altitude: {pkg.altitude}</p>
                      <p>📍 Location: {pkg.location}</p>
                      <p>🗓️ Best Season: {pkg.bestSeason}</p>
                      <p>⭐ Rating: {pkg.reviews}/5</p>
                    </div>
                    <div className="border-t border-gray-700 pt-4 mb-4">
                      <p className="text-xs font-bold text-orange-300 mb-2">Includes:</p>
                      {pkg.included.map((item, i) => <p key={i} className="text-xs text-gray-400">✓ {item}</p>)}
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-3xl font-bold text-orange-500">${pkg.price}</p>
                      <button 
                        onClick={() => {
                          if (!isLoggedIn) {
                            alert('Please login to book a trek!');
                            setCurrentPage('login');
                          } else {
                            setSelectedPackage(pkg);
                            setShowPayment(true);
                          }
                        }}
                        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold transition-all cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-20 px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Get In Touch</h2>
              {submitted && <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">✅ Message sent! We'll respond within 24 hours.</div>}
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 text-white" />
                <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 text-white" />
                <textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required placeholder="Your message..." rows="5" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 text-white resize-none" />
                <button type="submit" className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all cursor-pointer">Send Message</button>
              </form>
            </div>
          </section>
        </>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 max-w-md w-full">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Complete Booking</h2>
            <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
              <p className="text-lg font-bold text-orange-400">{selectedPackage?.name}</p>
              <p className="text-gray-400 mt-2">Duration: {selectedPackage?.duration}</p>
              <p className="text-2xl font-bold text-orange-500 mt-4">${selectedPackage?.price}</p>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">
              <input type="text" placeholder="Cardholder Name" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
              <input type="text" placeholder="Card Number" maxLength="16" value={paymentData.cardNumber} onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})} className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" value={paymentData.expiryDate} onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})} className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
                <input type="text" placeholder="CVV" maxLength="3" value={paymentData.cvv} onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})} className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
              </div>
              <button type="submit" className="w-full py-3 bg-green-500 hover:bg-green-600 font-bold rounded-lg cursor-pointer">Pay $${selectedPackage?.price}</button>
            </form>

            <button onClick={() => setShowPayment(false)} className="w-full mt-4 py-2 border border-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer">Cancel</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Himalayan Trails Nepal. All rights reserved. | 🏔️ Adventure awaits!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
