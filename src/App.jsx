import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import TrekkingPackages from './components/sections/TrekkingPackages';
import WhyChooseUs from './components/sections/WhyChooseUs';
import InteractiveMap from './components/sections/InteractiveMap';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Statistics from './components/sections/Statistics';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="bg-himalayan-dark-blue text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrekkingPackages />
      <WhyChooseUs />
      <Statistics />
      <InteractiveMap />
      <Gallery />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
