'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative px-6 md:px-20 py-16 md:py-24 bg-gray-900 text-gray-200 font-inter overflow-hidden"
    >
      {/* Wrap outer section in a fixed height to prevent flicker */}
      <div
        className="flex justify-center items-center w-full min-h-[calc(80vh-80px)]"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <motion.div
          layout
          className={`max-w-7xl mx-auto cursor-pointer ${
            expanded
              ? 'flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20 w-full bg-gray-800 p-6 md:p-10 rounded-xl shadow-2xl shadow-gray-700/50'
              : 'w-full md:w-[600px] p-6 bg-gray-800 rounded-xl '
          }`}
          animate={{ scale: expanded ? 1.02 : 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }} // Helps prevent flicker on hover
        >
          {/* Text Content */}
          <motion.div
            className={expanded ? 'w-full md:w-2/3' : ''}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-amber-300 mb-4 leading-tight">
              About Dr. Serena Blake
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed text-lg">
              {expanded
                ? "Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, California. With over eight years of professional experience and more than 500 client sessions, she is dedicated to supporting individuals on their journey toward emotional well-being and resilience."
                : "Dr. Serena Blake is a licensed clinical psychologist helping individuals build emotional resilience."}
            </p>

            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                  She specializes in helping clients manage anxiety, strengthen interpersonal relationships, and recover from trauma. Dr. Blake incorporates evidence-based techniques, including cognitive-behavioral therapy and mindfulness practices, while providing personalized and compassionate care tailored to each individual’s needs.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Whether you meet in person at her Maplewood Drive office or connect virtually via Zoom, Dr. Blake fosters a welcoming, confidential, and supportive environment for healing and growth.
                </p>
                <div className="mt-6 text-base text-gray-400 leading-relaxed bg-gray-700 p-4 rounded-lg shadow-inner border border-gray-600">
                  <p><strong> Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
                  <p><strong> Phone:</strong> (323) 555-0192</p>
                  <p>
                    <strong> Email:</strong>{' '}
                    <a href="mailto:serena@blakepsychology.com" className="text-amber-400 underline">
                      serena@blakepsychology.com
                    </a>
                  </p>
                  <p><strong> Office Hours:</strong> In-person (Tue & Thu: 10 AM – 6 PM), Virtual (Mon, Wed & Fri: 1 PM – 5 PM)</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            className={expanded ? 'w-full md:w-1/3 flex justify-center items-center' : 'mt-6 flex justify-center'}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-700 w-full max-w-sm md:max-w-none md:w-auto">
              <Image
                src="/doctor.jpg"
                alt="Dr. Serena Blake"
                width={500}
                height={600}
                className="object-cover w-full h-auto max-h-[400px] md:max-h-[unset] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Always render the glow, but animate its opacity */}
      <motion.div
        className="absolute -top-10 -right-20 w-96 h-96 bg-amber-900 rounded-full blur-3xl pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: expanded ? 0.1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
    </section>
  );
}