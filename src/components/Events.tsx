import React from 'react';
import { motion } from 'framer-motion';

const EventCard: React.FC<{ title: string; date: string; description: string; image: string; index: number }> = ({ 
  title, date, description, image, index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{date}</p>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4">
          <a href="#" className="inline-flex items-center text-play-blue hover:text-blue-700 font-semibold">
            Learn more
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Events: React.FC = () => {
  const events = [
    {
      title: "Summer camp",
      date: "1st April, 2025",
      description: "Jump, Dance, Create & Play! Let the summer fun begin!",
      image: "https://images.unsplash.com/photo-1638202951770-2240942c7d1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Glow it & Grow it",
      date: "19th April, 2025",
      description: "Join us for a creative gardening workshop where fun meets nature.",
      image: "https://images.unsplash.com/photo-1729009511403-7e1f3e5e2c07?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Pop-a-bubble party",
      date: "26th - 27th April, 2025",
      description: "Dive into bubbly fun this summer! Enjoy exciting bubble activities.",
      image: "https://images.unsplash.com/photo-1625842258714-0d533c31ad21?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">NOW PLAYING</h2>
          <div className="w-24 h-1 bg-play-blue mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
                image={event.image}
                index={index}
              />
            ))}
          </div>

          <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-2 mt-8">
            <button className="w-3 h-3 rounded-full bg-play-blue"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <a href="#" className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300">
            View All Events
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;