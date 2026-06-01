import React, { useState, useEffect } from 'react';
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
  const [paymentMethod, setPaymentMethod] = useState('esewa'); // esewa or card
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [showLiveLocation, setShowLiveLocation] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [emergencyMode, setEmergencyMode] = useState(false);

  // Mock user database
  const [users, setUsers] = useState([
    { id: 1, email: 'demo@example.com', password: 'demo123', name: 'Demo User', bookings: [], wallet: 5000 }
  ]);

  // Trek packages with stunning images
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
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop'
      ],
      guides: [
        { name: 'Tenzin Sherpa', experience: '15 years', rating: 4.9, languages: ['English', 'Nepali', 'Mandarin'] },
        { name: 'Pemba Norbu', experience: '12 years', rating: 4.8, languages: ['English', 'Nepali'] }
      ]
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
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&h=400&fit=crop'
      ],
      guides: [
        { name: 'Karma Sherpa', experience: '18 years', rating: 4.9, languages: ['English', 'Nepali', 'French'] },
        { name: 'Dorje Lhama', experience: '10 years', rating: 4.7, languages: ['English', 'Nepali'] }
      ]
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
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop'
      ],
      guides: [
        { name: 'Ang Rita Sherpa', experience: '8 years', rating: 4.6, languages: ['English', 'Nepali'] }
      ]
    }
  ];

  // Emergency services
  const emergencyServices = [
    { name: 'Emergency Hotline', number: '+977-1-4261293', description: 'Primary emergency contact' },
    { name: 'Helicopter Rescue', number: '+977-9841234567', description: '24/7 Mountain rescue' },
    { name: 'Medical Support', number: '+977-9848765432', description: 'Trekking medical assistance' },
    { name: 'Police', number: '100', description: 'Local police assistance' }
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
      bookings: [],
      wallet: 1000
    };
    setUsers([...users, newUser]);
    setIsLoggedIn(true);
    setCurrentUser(newUser);
    setAuthForm({ email: '', password: '', name: '' });
    setCurrentPage('home');
    alert(`Welcome, ${newUser.name}! Account created with 1000 wallet points!`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('home');
    alert('Logged out successfully!');
  };

  // Live location handler
  const handleLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setShowLiveLocation(true);
          alert(`📍 Location shared!\nLatitude: ${latitude.toFixed(4)}\nLongitude: ${longitude.toFixed(4)}\n\nGuide has been notified of your location.`);
        },
        (error) => {
          alert('Unable to access location. Please enable location services.');
        }
      );
    }
  };

  // Emergency contact handler
  const handleEmergency = (number) => {
    alert(`📞 Calling ${number}\n\nIn a real app, this would initiate a call.\nEmergency services have been alerted to your location.`);
    setEmergencyMode(true);
  };

  // eSewa payment handler
  const handleESewaPayment = (e) => {
    e.preventDefault();
    const totalAmount = selectedPackage?.price;
    const userWallet = currentUser?.wallet || 0;

    if (userWallet >= totalAmount) {
      // Deduct from wallet
      const updatedUser = {
        ...currentUser,
        wallet: userWallet - totalAmount,
        bookings: [...(currentUser.bookings || []), {
          id: Date.now(),
          packageId: selectedPackage.id,
          packageName: selectedPackage.name,
          date: new Date().toLocaleDateString(),
          price: totalAmount,
          status: 'Confirmed',
          paymentMethod: 'eSewa Wallet'
        }]
      };

      setCurrentUser(updatedUser);
      setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
      setShowPayment(false);
      setPaymentMethod('esewa');
      alert(`✅ Payment Successful via eSewa!\n\nAmount: NPR ${totalAmount}\nRemaining Wallet: NPR ${updatedUser.wallet}\n\nTrek Booking Confirmed!\n\nConfirmation email sent to ${updatedUser.email}`);
      setCurrentPage('bookings');
    } else {
      alert(`❌ Insufficient balance!\nYour wallet: NPR ${userWallet}\nRequired: NPR ${totalAmount}\n\nPlease add funds to your wallet.`);
    }
  };

  // Card payment handler
  const handleCardPayment = (e) => {
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
    setShowPayment(false);
    setPaymentData({ cardNumber: '', expiryDate: '', cvv: '' });
    alert(`🎉 Booking confirmed! Trek: ${selectedPackage.name}\nPrice: $${selectedPackage.price}\nConfirmation email sent!`);
    setCurrentPage('bookings');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We will contact you at ${formData.email} soon.`);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
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
                  <button type="submit" className="w-full py-3 bg-orange-500 hover:bg-orange-600 font-bold rounded-lg transition-colors cursor-pointer">
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
                  <button type="submit" className="w-full py-3 bg-orange-500 hover:bg-orange-600 font-bold rounded-lg transition-colors cursor-pointer">
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
            {isLoggedIn && (
              <>
                <button onClick={() => setCurrentPage('guides')} className="hover:text-orange-400 transition-colors cursor-pointer text-sm">👨‍🏫 Guides</button>
                <button onClick={() => setCurrentPage('bookings')} className="hover:text-orange-400 transition-colors cursor-pointer text-sm">📱 My Bookings</button>
                <div className="text-sm bg-green-500/20 border border-green-500 px-3 py-1 rounded-lg">💰 {currentUser?.wallet} NPR</div>
              </>
            )}
            <button onClick={() => handleScroll('packages')} className="hover:text-orange-400 transition-colors cursor-pointer text-sm">Packages</button>
            <button onClick={() => setCurrentPage('gallery')} className="hover:text-orange-400 transition-colors cursor-pointer text-sm">📸 Gallery</button>
            {isLoggedIn ? (
              <div className="flex gap-2 items-center">
                <span className="text-xs text-gray-400">{currentUser?.name}</span>
                <button onClick={handleLogout} className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-xs font-bold cursor-pointer">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button onClick={() => setCurrentPage('login')} className="px-3 py-1 border border-orange-500 text-orange-400 rounded text-xs font-bold cursor-pointer">
                  Login
                </button>
                <button onClick={() => setCurrentPage('signup')} className="px-3 py-1 bg-orange-500 rounded text-xs font-bold cursor-pointer">
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Gallery Page */}
      {currentPage === 'gallery' && (
        <section className="min-h-screen pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Trek Gallery</h2>
            <div className="space-y-16">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition-all">
                  <div className="p-6 md:p-10">
                    <h3 className="text-3xl font-bold text-orange-400 mb-6">{pkg.name}</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {pkg.gallery.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg">
                          <img src={img} alt={`${pkg.name} ${idx + 1}`} className="w-full h-64 object-cover hover:scale-110 transition-transform cursor-pointer" />
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-400 mt-6">{pkg.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guides Page */}
      {currentPage === 'guides' && isLoggedIn && (
        <section className="min-h-screen pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Our Expert Guides</h2>
            <div className="space-y-8">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-orange-400 mb-6">{pkg.name} - Guides</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {pkg.guides.map((guide, idx) => (
                      <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-all">
                        <div className="text-4xl mb-3">👨‍🏫</div>
                        <h4 className="text-xl font-bold text-orange-400 mb-2">{guide.name}</h4>
                        <p className="text-gray-400 text-sm mb-3">📅 Experience: {guide.experience}</p>
                        <p className="text-gray-400 text-sm mb-3">⭐ Rating: {guide.rating}/5</p>
                        <p className="text-gray-400 text-sm mb-4">🗣️ Languages: {guide.languages.join(', ')}</p>
                        <button onClick={() => alert(`Contact guide: ${guide.name}\n\nEmail: ${guide.name.toLowerCase().replace(' ', '.')}@himalaytrails.com\nPhone: +977-98XXXXXXXX`)} className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold transition-colors cursor-pointer text-sm">
                          Contact Guide
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* My Bookings Page */}
      {currentPage === 'bookings' && isLoggedIn && (
        <section className="min-h-screen pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 gradient-text">My Bookings</h2>
            
            {/* Live Location & Emergency */}
            {(currentUser?.bookings || []).length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <button onClick={handleLiveLocation} className="p-4 bg-blue-500/20 border border-blue-500 rounded-lg hover:bg-blue-500/30 transition-all cursor-pointer">
                  <div className="text-2xl mb-2">📍</div>
                  <p className="font-bold text-blue-400">Share Live Location</p>
                  <p className="text-xs text-blue-300 mt-1">Guides can track your trek progress</p>
                </button>
                <button onClick={() => setEmergencyMode(true)} className="p-4 bg-red-500/20 border border-red-500 rounded-lg hover:bg-red-500/30 transition-all cursor-pointer">
                  <div className="text-2xl mb-2">🆘</div>
                  <p className="font-bold text-red-400">Emergency SOS</p>
                  <p className="text-xs text-red-300 mt-1">Contact emergency services instantly</p>
                </button>
              </div>
            )}

            {/* Emergency Mode */}
            {emergencyMode && (
              <div className="mb-8 p-6 bg-red-500/20 border-2 border-red-500 rounded-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-4">🆘 Emergency Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {emergencyServices.map((service, idx) => (
                    <button key={idx} onClick={() => handleEmergency(service.number)} className="p-4 bg-gray-800 border border-red-500 rounded-lg hover:bg-red-500/10 transition-all cursor-pointer text-left">
                      <p className="font-bold text-white mb-1">{service.name}</p>
                      <p className="text-red-400 font-bold text-lg">{service.number}</p>
                      <p className="text-gray-400 text-xs mt-1">{service.description}</p>
                    </button>
                  ))}
                </div>
                <button onClick={() => setEmergencyMode(false)} className="w-full mt-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer">
                  Close
                </button>
              </div>
            )}

            {/* Bookings List */}
            {(currentUser?.bookings || []).length > 0 ? (
              <div className="space-y-4">
                {(currentUser?.bookings || []).map((booking) => (
                  <div key={booking.id} className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-orange-400 mb-2">{booking.packageName}</h3>
                        <p className="text-gray-400">Booked on: {booking.date}</p>
                        <p className="text-gray-400">Status: <span className="text-green-400 font-bold">{booking.status}</span></p>
                        <p className="text-gray-400">Payment: {booking.paymentMethod}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-orange-500">${booking.price}</p>
                        <button onClick={() => alert(`Itinerary for ${booking.packageName}:\n\n📋 Day-by-day schedule\n🗺️ Detailed route map\n🏨 Accommodation details\n🍽️ Meal information\n📞 Guide contact info\n\nDownload PDF sent to your email!`)} className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-bold cursor-pointer">
                          📥 Download Itinerary
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-gray-900/50 border border-gray-700 rounded-lg text-center">
                <p className="text-gray-400 mb-4">No bookings yet</p>
                <button onClick={() => setCurrentPage('home')} className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold cursor-pointer">
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
          {/* Hero with stunning image */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop" alt="Hero" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">Himalayan Trails Nepal</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">Explore the Roof of the World</p>
              <p className="text-gray-400 text-lg mb-8">Expert-guided treks with live location tracking, emergency support, and unforgettable mountain experiences</p>
              <button onClick={() => handleScroll('packages')} className="px-8 py-4 bg-orange-500 hover:bg-orange-600 font-bold rounded-lg text-lg transition-all cursor-pointer shadow-lg hover:shadow-orange-500/50">
                🏔️ Book Your Trek Now
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 bg-gray-800/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Why Choose Himalayan Trails?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-orange-500 transition-all">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Live Location Tracking</h3>
                  <p className="text-gray-400">Share your real-time location with guides. They always know where you are for your safety.</p>
                </div>
                <div className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-orange-500 transition-all">
                  <div className="text-4xl mb-4">🆘</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">24/7 Emergency Support</h3>
                  <p className="text-gray-400">One-click access to emergency services, guides, and medical support anytime, anywhere on the trek.</p>
                </div>
                <div className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-orange-500 transition-all">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Expert Guides</h3>
                  <p className="text-gray-400">Meet and select from our certified guides with 8-18 years of mountain experience.</p>
                </div>
                <div className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-orange-500 transition-all">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">eSewa Wallet Integration</h3>
                  <p className="text-gray-400">Easy payment with Nepal's most trusted digital wallet. Instant booking confirmation.</p>
                </div>
                <div className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-orange-500 transition-all">
                  <div className="text-4xl mb-4">📸</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Stunning Gallery</h3>
                  <p className="text-gray-400">View breathtaking photos from actual treks to see what awaits you on the mountain.</p>
                </div>
                <div className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-orange-500 transition-all">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Mobile Friendly</h3>
                  <p className="text-gray-400">Book, track, and manage your trek entirely from your smartphone while on the mountain.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Packages */}
          <section id="packages" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Popular Trek Packages</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <div key={idx} className="group overflow-hidden rounded-lg border border-gray-700 hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer">
                    {/* Image */}
                    <div className="overflow-hidden h-48 relative">
                      <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold ${pkg.difficulty === 'Easy' ? 'bg-green-500' : pkg.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                        {pkg.difficulty}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-gray-900/50">
                      <h3 className="text-xl font-bold text-orange-400 mb-2">{pkg.name}</h3>
                      <div className="space-y-2 text-sm text-gray-400 mb-4">
                        <p>⏱️ {pkg.duration}</p>
                        <p>⛰️ {pkg.altitude}</p>
                        <p>⭐ {pkg.reviews}/5 ({Math.floor(Math.random() * 150) + 50} reviews)</p>
                      </div>

                      <div className="border-t border-gray-700 pt-4 mb-4">
                        <p className="text-xs font-bold text-orange-300 mb-2">Includes:</p>
                        {pkg.included.slice(0, 3).map((item, i) => (
                          <p key={i} className="text-xs text-gray-400">✓ {item}</p>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold text-orange-500">${pkg.price}</p>
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
                          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold transition-all cursor-pointer text-sm"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-20 px-4 bg-gray-800/30">
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
              <p className="text-2xl font-bold text-orange-500 mt-4">NPR {selectedPackage?.price * 133}</p>
              {isLoggedIn && <p className="text-green-400 text-sm mt-2">Your Wallet: NPR {currentUser?.wallet}</p>}
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-3 mb-6">
              <label className="flex items-center p-3 border border-gray-700 rounded-lg cursor-pointer hover:border-orange-500 hover:bg-orange-500/10 transition-all">
                <input type="radio" name="payment" value="esewa" checked={paymentMethod === 'esewa'} onChange={(e) => setPaymentMethod(e.target.value)} className="cursor-pointer" />
                <span className="ml-3">
                  <p className="font-bold text-orange-400">💳 eSewa Wallet</p>
                  <p className="text-xs text-gray-400">Pay instantly with your eSewa balance</p>
                </span>
              </label>
              <label className="flex items-center p-3 border border-gray-700 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-500/10 transition-all">
                <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} className="cursor-pointer" />
                <span className="ml-3">
                  <p className="font-bold text-blue-400">🏧 Credit/Debit Card</p>
                  <p className="text-xs text-gray-400">International payment accepted</p>
                </span>
              </label>
            </div>

            {paymentMethod === 'esewa' ? (
              <form onSubmit={handleESewaPayment} className="space-y-4">
                <p className="text-sm text-gray-400 text-center mb-4">Click Pay to complete eSewa payment</p>
                <button type="submit" className="w-full py-3 bg-green-500 hover:bg-green-600 font-bold rounded-lg cursor-pointer text-white">
                  💚 Pay NPR {selectedPackage?.price * 133}
                </button>
              </form>
            ) : (
              <form onSubmit={handleCardPayment} className="space-y-4">
                <input type="text" placeholder="Cardholder Name" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
                <input type="text" placeholder="Card Number" maxLength="16" value={paymentData.cardNumber} onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})} className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM/YY" value={paymentData.expiryDate} onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})} className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
                  <input type="text" placeholder="CVV" maxLength="3" value={paymentData.cvv} onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})} className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
                </div>
                <button type="submit" className="w-full py-3 bg-blue-500 hover:bg-blue-600 font-bold rounded-lg cursor-pointer text-white">Pay ${selectedPackage?.price}</button>
              </form>
            )}

            <button onClick={() => setShowPayment(false)} className="w-full mt-4 py-2 border border-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer">Cancel</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-400 cursor-pointer transition">Packages</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Gallery</li>
                <li className="hover:text-orange-400 cursor-pointer transition">Guides</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Emergency</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📞 +977-1-4261293</li>
                <li>🚁 +977-9841234567</li>
                <li>🏥 +977-9848765432</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-400 cursor-pointer">📍 Live Tracking</li>
                <li className="hover:text-orange-400 cursor-pointer">💳 eSewa Payment</li>
                <li className="hover:text-orange-400 cursor-pointer">🆘 24/7 Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-400 cursor-pointer">Facebook</li>
                <li className="hover:text-orange-400 cursor-pointer">Instagram</li>
                <li className="hover:text-orange-400 cursor-pointer">YouTube</li>
              </ul>
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
