import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setActiveMenu, toggleMobileMenu } from '../store/slices/uiSlice';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { activeMenu, mobileMenuOpen } = useSelector((state: RootState) => state.ui);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { id: 'play', label: 'Play' },
    { id: 'participate', label: 'Participate' },
    { id: 'host', label: 'Host' },
    { id: 'fnb', label: 'F&B' },
    { id: 'about', label: 'About Us' },
  ];

  const handleHover = (id: string) => {
    dispatch(setActiveMenu(id));
  };

  const handleMenuClick = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg' : 'bg-black'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="/" className="flex items-center">
                <div className="text-white font-bold text-2xl">
                  <span className="text-play-blue">PL</span>
                  <span className="text-play-blue">&#x25B6;</span>
                  <span>Y</span>
                </div>
                <div className="ml-2 text-white text-sm tracking-widest">ARENA_Test</div>
              </a>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: menuItems.indexOf(item) * 0.1 }}
              >
                <button
                  className={`text-white hover:text-play-blue transition-colors relative ${activeMenu === item.id ? 'font-bold' : ''}`}
                  onMouseEnter={() => handleHover(item.id)}
                  onMouseLeave={() => handleHover("")}
                >
                  {item.label}
                  {activeMenu === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-play-blue"
                      layoutId="underline"
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuClick}
              className="text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black py-2"
          >
            <div className="flex flex-col space-y-4 pb-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-white hover:text-play-blue px-4 py-2 transition-colors"
                  onClick={() => dispatch(toggleMobileMenu())}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;