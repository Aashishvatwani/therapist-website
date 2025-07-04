// components/SessionFees.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react'; // Icon for pricing

function SessionFees() {
  const fees = [
    { type: 'Individual Session', price: '$200', description: 'Per 50-minute session' },
    { type: 'Couples Session', price: '$240', description: 'Per 50-minute session' },
  ];

  return (
    <section id="fees" className="relative px-6 md:px-20 py-16 md:py-24 bg-gray-900 text-gray-200 font-inter overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-amber-300 mb-12"
        >
          Session Fees
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fees.map((fee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg shadow-gray-700/50 border border-gray-700 flex flex-col items-center justify-center"
            >
              <DollarSign className="h-12 w-12 text-amber-400 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-100 mb-2">{fee.type}</h3>
              <p className="text-5xl font-bold text-amber-300 mb-2">{fee.price}</p>
              <p className="text-gray-400 text-base">{fee.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Invest in your well-being. Our transparent pricing ensures you know what to expect.
          Contact us for any questions regarding payment options or insurance.
        </motion.p>
      </div>
    </section>
  );
}

export default SessionFees;