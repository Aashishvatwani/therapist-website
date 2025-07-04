"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn science-backed coping techniques to manage stress and anxiety. Build inner resilience through mindfulness, CBT, and breathwork.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYML1mA2Xg601d8DVTouithBzbRsk3Y1ic1Q&s",
  },
  {
    title: "Relationship Counseling",
    description:
      "Navigate complex relationship dynamics — couples, family, or friendships. Gain tools for deeper connection, understanding, and communication.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UK003_CRDnBPm1MiZxxGebTDsvP06NiEQg&s",
  },
  {
    title: "Trauma Recovery",
    description:
      "Heal from past experiences with evidence-based therapy and deep compassion. Reclaim your story and find emotional freedom.",
    image:
      "https://media.self.com/photos/627eb44273c15497f35beb3d/4:3/w_2560%2Cc_limit/MHAM-trauma-recovery.jpg",
  },
  {
    title: "Self-Esteem & Confidence Building",
    description:
      "Unlock your inner strength and rediscover your worth. Through guided sessions, we help you silence self-doubt and build lasting confidence.",
    image:
      "https://img.freepik.com/free-photo/young-woman-raising-arms-enjoying-nature_23-2149356922.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-[#0f172a] to-[#0c0c0c] text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-14 text-amber-400"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Services & Specialties
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group bg-[#1e293b] border border-[#2e3c52] rounded-3xl overflow-hidden shadow-xl transform transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
            transition={{ delay: index * 0.2, duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden h-64 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172aee] to-transparent opacity-80" />
            </div>

            <div className="p-6">
              <motion.h3
                className="text-2xl font-semibold mb-3 text-amber-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-300 text-md leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
