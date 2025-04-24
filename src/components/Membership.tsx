import React from 'react';
import { motion } from 'framer-motion';

const Membership: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-play-beige">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Play it cool</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We call this our Royalty Programme.</p>
          <div className="mt-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-play-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Become a member
              <span className="ml-2">→</span>
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDdmZmluanhpZzVvZDczczI2bnV0YnJrYmk2d3Yzc2I5M3FuYWVxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JlpA2pRTbz1OLLIMw9/giphy.gif" alt="Skip the queue" />
            </div>
            <h3 className="text-xl font-bold mb-2">SKIP THE QUEUE</h3>
            <p className="text-gray-600">No ticketing. Just load your card and go play.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZwbGxuem9tam9kaHhxMDd2ZDNyeTFvMjF1dDVpamh5a2oxZ21xOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xBkRsgPTnbK1GM/giphy.gif" alt="Treats on us" />
            </div>
            <h3 className="text-xl font-bold mb-2">TREATS ON US</h3>
            <p className="text-gray-600">Get exclusive offers across our F&B outlets</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21ucWlzNTlra3N6bnhmMng4dmJyb2tjbHMwbmRkYnc2cTVoY3NzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pmXtcxHNTAVqb83V0L/giphy.gif" alt="Big discounts" />
            </div>
            <h3 className="text-xl font-bold mb-2">BIG DISCOUNTS</h3>
            <p className="text-gray-600">The more you load the bigger your discounts</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Membership;