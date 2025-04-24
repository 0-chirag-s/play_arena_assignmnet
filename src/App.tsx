import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ActivityCategories from './components/ActivityCategories';
import Booking from './components/Booking';
import Membership from './components/Membership';
import Events from './components/Events';
import HostingOptions from './components/HostingOptions';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const checkScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ActivityCategories />
      <Booking />
      <Membership />
      <Events />
      <HostingOptions />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;