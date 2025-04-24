import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setSelectedDate, setSelectedActivity } from '../store/slices/bookingSlice';
import { motion } from 'framer-motion';


const Booking: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state: RootState) => state.booking);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  const activities = [
    { id: 'off-road', name: 'Off-Road ATV Adventure' },
    { id: 'archery', name: 'Archery' },
    { id: 'trampoline', name: 'Trampoline Park' },
    { id: 'bowling', name: 'Bowling Alley' },
    { id: 'laser-tag', name: 'Laser Tag' },
    { id: 'go-karting', name: 'Go-Karting' }
  ];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedDate(e.target.value));
  };
  
  const handleActivityClick = (id: string) => {
    dispatch(setSelectedActivity(id));
  };

  return (
    <section id="booking" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book your slots</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To find special offers, occupancy rates and free time
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full md:w-auto mb-4 md:mb-0 md:mr-6"
            >
              <div className="relative">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="bg-play-yellow px-4 py-3 rounded-lg pr-10 w-full md:w-64"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1"
            >
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-gray-700 font-medium">
                    Average wait time 5-10mins, pre booking activities is recommended
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <h3 className="text-lg font-semibold mb-4">PLAN YOUR DAY AT PLAY</h3>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-4 rounded-lg flex items-center"
            >
              <div className="bg-play-blue rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">Activities</p>
                <p className="text-sm text-gray-600">6:00 AM – 11:00 PM</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-4 rounded-lg flex items-center"
            >
              <div className="bg-play-blue rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">Booking Duration</p>
                <p className="text-sm text-gray-600">1-2 hours per activity</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-4 rounded-lg flex items-center"
            >
              <div className="bg-play-blue rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">Payments</p>
                <p className="text-sm text-gray-600">Card, Cash, Digital</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-4 rounded-lg flex items-center"
            >
              <div className="bg-play-blue rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">Group Size</p>
                <p className="text-sm text-gray-600">1-15 people</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Select an Activity</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-play-yellow cursor-pointer rounded-lg p-4 text-center hover:shadow-md transition-all"
                  onClick={() => handleActivityClick(activity.id)}
                >
                  <h4 className="font-medium">{activity.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <button className="bg-play-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;