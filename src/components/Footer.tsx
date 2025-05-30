import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerLinks = {
    play: ['Prime', 'Pixel', 'Studio', 'Union', 'Junior'],
    participate: ['Up Your Game', 'Events'],
    host: ['Birthdays at PLaY', 'Corporate events', 'Make an Enquiry'],
    fnb: ['Food Court', 'Restaurant'],
    contact: ['99000 999 22', 'info@playarena.in', 'Get Directions']
  };

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="mb-6">
              <a href="/" className="flex items-center">
                <div className="text-white font-bold text-3xl">
                  <span className="text-play-blue">PL</span>
                  <span className="text-play-blue">&#x25B6;</span>
                  <span>Y</span>
                </div>
                <div className="ml-2 text-white text-sm tracking-widest uppercase">Arena</div>
              </a>
            </div>
            <div className="mb-6">
              <p className="text-gray-300">Play Arena Sports & Adventure Pvt. Ltd.</p>
              <p className="text-gray-300">Sy#75, Hosa Road, off Sarjapur Road,</p>
              <p className="text-gray-300">opp Silverwood Regency Apartments,</p>
              <p className="text-gray-300">Kasavanahalli, Bangalore 560035</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-play-blue transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-play-blue transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-play-blue transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-play-blue transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Play</h3>
            <ul className="space-y-2">
              {footerLinks.play.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-play-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Participate</h3>
            <ul className="space-y-2">
              {footerLinks.participate.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-play-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-4">Host</h3>
            <ul className="space-y-2">
              {footerLinks.host.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-play-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Food & Beverages</h3>
            <ul className="space-y-2">
              {footerLinks.fnb.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-play-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-play-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-4">About Us</h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>Copyright © 2025. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-play-blue transition-colors mx-2">Disclaimer</a>
            <span>|</span>
            <a href="#" className="text-gray-400 hover:text-play-blue transition-colors mx-2">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="text-gray-400 hover:text-play-blue transition-colors mx-2">About Us</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;