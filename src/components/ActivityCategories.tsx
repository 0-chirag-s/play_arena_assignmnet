import React from 'react';
import { motion } from 'framer-motion';

interface ActivityCategoryProps {
  title: string;
  description: string;
  color: string;
  icon: string;
  delay: number;
}

const ActivityCategory: React.FC<ActivityCategoryProps> = ({ title, description, color, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${color} rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-800">{description}</p>
      <div className="mt-4">
        <a href="#" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">
          View All Activities
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const ActivityCategories: React.FC = () => {
  const categories = [
    {
      title: "Prime",
      description: "Strategy and action sports for the squad",
      color: "bg-play-yellow",
      icon: "🌟",
      delay: 0.1
    },
    {
      title: "Studio",
      description: "Short format, big thrills served a la carte",
      color: "bg-gray-100",
      icon: "🎬",
      delay: 0.2
    },
    {
      title: "Union",
      description: "Classic favourites for the recreational sport",
      color: "bg-play-cyan",
      icon: "🤝",
      delay: 0.3
    },
    {
      title: "Junior",
      description: "Toddler-sized fun for little champs",
      color: "bg-play-green",
      icon: "👶",
      delay: 0.4
    },
    {
      title: "Pixel",
      description: "Shoot, race and more in the gamer's den",
      color: "bg-play-purple",
      icon: "🎮",
      delay: 0.5
    }
  ];

  return (
    <section id="activities" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Activity</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From high-energy thrills to relaxing recreational games, we've categorized our activities to help you find exactly what you're looking for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ActivityCategory
              key={index}
              title={category.title}
              description={category.description}
              color={category.color}
              icon={category.icon}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityCategories;