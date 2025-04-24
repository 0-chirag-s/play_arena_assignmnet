import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      
      if (heroContent) {
        const opacity = 1 - (scrollPosition / 500);
        const scale = 1 - (scrollPosition / 2000);
        const translateY = scrollPosition * 0.5;
        
        // Apply parallax effect
        heroContent.setAttribute('style', `opacity: ${Math.max(opacity, 0)}; transform: scale(${Math.max(scale, 0.9)}) translateY(${translateY}px)`);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-20 h-full flex flex-col justify-center items-center text-white px-4 transition-all duration-300">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
        >
          Play, Your Way
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-center max-w-2xl mb-8"
        >
          Bangalore's ultimate sports and adventure destination. Experience thrill like never before.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="#booking"
            className="bg-play-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
          >
            Book Now
          </a>
          <a
            href="#activities"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition duration-300 text-center"
          >
            Explore Activities
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;