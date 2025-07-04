// components/Faq.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'; // Assuming Shadcn UI Accordion component path

const faqItems = [
  {
    question: "What is MindCare's approach to therapy?",
    answer: "MindCare employs a holistic and evidence-based approach, integrating cognitive-behavioral therapy (CBT), mindfulness practices, and person-centered techniques. Our goal is to provide personalized care that addresses your unique needs and promotes lasting well-being.",
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes, Dr. Serena Blake offers virtual sessions via Zoom, providing a convenient and confidential way to access therapy from the comfort of your home. In-person sessions are also available at our Maplewood Drive office.",
  },
  {
    question: "What types of issues do you specialize in?",
    answer: "Dr. Blake specializes in helping clients manage anxiety, strengthen interpersonal relationships, and recover from trauma. We also address a range of other concerns, including stress management, self-esteem, and personal growth.",
  },
  {
    question: "How long does a typical therapy session last?",
    answer: "Standard therapy sessions are typically 50 minutes long. Initial consultations may be slightly longer to allow for a comprehensive assessment of your needs and goals.",
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. Confidentiality is a cornerstone of our practice. All client information and session content are kept strictly confidential in accordance with professional ethical guidelines and legal requirements.",
  },
];

function Faq() {
  return (
    <section id="faq" className="relative px-6 md:px-20 py-16 md:py-24 bg-gray-950 text-gray-200 font-inter overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-amber-300 text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg shadow-gray-700/50 border border-gray-700"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-b border-gray-700 last:border-b-0" // Darker border for separation
              >
                <AccordionTrigger className="text-lg font-semibold text-gray-200 hover:text-amber-300 transition-colors py-4"> {/* Light text, amber hover */}
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4"> {/* Lighter gray for answer text */}
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;