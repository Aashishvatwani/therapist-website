// components/Footer.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'; // Social media icons

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { section: 'About Us', links: [{ name: 'Our Mission', href: '#about' }] },
    { section: 'Services', links: [{ name: 'Therapy', href: '#services' }, { name: 'Consultation', href: '#services' }] },
    { section: 'Support', links: [{ name: 'FAQ', href: '#faq' }, { name: 'Contact', href: '#contact' }] },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/mindcare' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/mindcare' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/mindcare' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/mindcare' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-gray-400 py-12 md:py-16 font-inter border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Company Info / Logo */}
        <div className="col-span-full md:col-span-1 text-center md:text-left">
          <Link href="#" className="text-3xl font-bold text-amber-300 hover:text-amber-200 transition-colors">
            MindCare
          </Link>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Supporting your journey toward emotional well-being and resilience.
          </p>
        </div>

        {/* Navigation Links */}
        {footerLinks.map((section, index) => (
          <div key={index} className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">{section.section}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-300 transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media */}
        <div className="col-span-full md:col-span-1 text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {currentYear} MindCare. All rights reserved.</p>
        <p className="mt-1">Designed with <span className="text-red-500">&hearts;</span> by [Your Name/Company Name if desired]</p>
      </div>
    </motion.footer>
  );
}

export default Footer;