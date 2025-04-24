import React from 'react';
import { motion } from 'framer-motion';

const HostingOption: React.FC<{ title: string; description: string; icon: React.ReactNode; index: number }> = ({
  title, description, icon, index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-center text-gray-700">{description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 border border-black rounded-lg px-6 py-2 flex items-center"
      >
        Find out more
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </motion.button>
    </motion.div>
  );
};

const HostingOptions: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-play-beige">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Play, Your Way</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            When it comes to get-togethers, the more is always the merrier. You bring the people, 
            we'll take care of the rest. Call us for customized birthdays, farewells, anniversaries 
            and other events or group packages with entertainment, music and a fantastic range of F&B to choose from.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <HostingOption
            title="Birthday Bashes"
            description="Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!"
            icon="🎂"
            index={0}
          />
          <HostingOption
            title="Corporate Events"
            description="Nothing like a game to get the teamwork going. Talk to us to find out more about our corporate packages for offsites, team building activities, leadership meets, outbound learning and more."
            icon="💼"
            index={1}
          />
          <HostingOption
            title="Play Dates"
            description="Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection!"
            icon="❤️"
            index={2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-play-orange rounded-lg p-6 inline-block">
            <a href="#" className="flex items-center text-xl font-bold">
              Have an offbeat idea? Create your own event, fully customised!
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HostingOptions;