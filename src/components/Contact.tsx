// components/ContactSection.jsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox'; // Shadcn UI Checkbox
import { Mail, Phone, MapPin, User, Clock, MessageSquare, CheckCircle } from 'lucide-react'; // Icons for fields and success

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
};

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agreeToContact?: string;
};

type SubmitStatus = 'success' | 'error' | null;

export default function ContactSection() {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false,
  });

  // State for validation errors
  const [errors, setErrors] = useState<FormErrors>({});
  // State for submission status (e.g., loading, success, error)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null); // 'success', 'error', null

  // Function to handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { id: string; value?: string; type: string; checked?: boolean } }
  ) => {
    const target = e.target;
    const id = target.id;
    const type = target.type;
    let value: string | boolean = '';
    if (type === 'checkbox') {
      // For checkbox, safely access checked property
      value = (target as HTMLInputElement).checked ?? false;
    } else {
      value = target.value ?? '';
    }
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // Clear error for the field as user types
    if (errors[id as keyof FormErrors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: undefined }));
    }
  };

  // Function to validate the form
  const validateForm = () => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Basic phone number regex (can be more complex based on region)
    const phoneRegex = /^\+?\d{10,15}$/; // Allows + and 10-15 digits

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Invalid phone number format.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred time is required.';
    }
    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null); // Reset status

    const isValid = validateForm();
    if (isValid) {
      // Simulate API call
      console.log('Form Data Submitted:', formData);
      try {
        // In a real app, you'd send formData to your backend here
        // const response = await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData),
        // });
        // if (!response.ok) throw new Error('Submission failed');

        setSubmitStatus('success');
        setFormData({ // Clear form on success
          name: '',
          phone: '',
          email: '',
          message: '',
          preferredTime: '',
          agreeToContact: false,
        });
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus('error');
      }
    } else {
      setSubmitStatus('error'); // Indicate validation errors
    }
  };

  return (
    <section id="contact" className="relative px-6 md:px-20 py-16 md:py-24 bg-gray-950 text-gray-200 font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-amber-300 text-center mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"> {/* Changed items-center to items-start for better alignment with long forms */}
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8 p-8 bg-gray-800 rounded-xl shadow-lg shadow-gray-700/50 border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-amber-300">Reach Out to Us</h3>
            <p className="text-gray-300 leading-relaxed">
              We are here to help and answer any question you might have. We look forward to hearing from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-amber-400" />
                <a href="mailto:serena@blakepsychology.com" className="hover:underline text-amber-400">serena@blakepsychology.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-amber-400" />
                <a href="tel:+13235550192" className="hover:underline text-amber-400">(323) 555-0192</a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-amber-400 mt-1" />
                <p>1287 Maplewood Drive, <br /> Los Angeles, CA 90026</p>
              </div>
            </div>
            {/* You can add an illustration here if desired */}
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 bg-gray-800 rounded-xl shadow-lg shadow-gray-700/50 border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-amber-300 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <Label htmlFor="name" className="text-gray-300 flex items-center">
                  <User className="h-4 w-4 mr-2 text-gray-400" /> Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className={`mt-1 bg-gray-700 border-gray-600 text-gray-200 placeholder:text-gray-400 ${errors.name ? 'border-red-500 ring-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Phone Field */}
              <div>
                <Label htmlFor="phone" className="text-gray-300 flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" /> Phone Number
                </Label>
                <Input
                  type="tel" // Use type="tel" for phone numbers
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className={`mt-1 bg-gray-700 border-gray-600 text-gray-200 placeholder:text-gray-400 ${errors.phone ? 'border-red-500 ring-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-gray-300 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-400" /> Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`mt-1 bg-gray-700 border-gray-600 text-gray-200 placeholder:text-gray-400 ${errors.email ? 'border-red-500 ring-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* "What brings you here?" Textarea */}
              <div>
                <Label htmlFor="message" className="text-gray-300 flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2 text-gray-400" /> What brings you here?
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your needs or questions..."
                  rows={5}
                  className={`mt-1 bg-gray-700 border-gray-600 text-gray-200 placeholder:text-gray-400 ${errors.message ? 'border-red-500 ring-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* "Preferred time to reach you" Field */}
              <div>
                <Label htmlFor="preferredTime" className="text-gray-300 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" /> Preferred time to reach you
                </Label>
                <Input
                  type="text"
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  placeholder="e.g., Weekdays 9 AM - 5 PM PST"
                  className={`mt-1 bg-gray-700 border-gray-600 text-gray-200 placeholder:text-gray-400 ${errors.preferredTime ? 'border-red-500 ring-red-500' : ''}`}
                />
                {errors.preferredTime && <p className="text-red-400 text-sm mt-1">{errors.preferredTime}</p>}
              </div>

              {/* "I agree to be contacted" Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToContact"
                  checked={formData.agreeToContact}
                  onCheckedChange={(checked) =>
                    handleChange({
                      target: {
                        id: 'agreeToContact',
                        type: 'checkbox',
                        checked: checked === true,
                      },
                    })
                  }
                  className={`border-gray-600 data-[state=checked]:bg-amber-500 data-[state=checked]:text-white ${errors.agreeToContact ? 'border-red-500' : ''}`}
                />
                <Label htmlFor="agreeToContact" className="text-gray-300 cursor-pointer">
                  I agree to be contacted by MindCare.
                </Label>
                {errors.agreeToContact && <p className="text-red-400 text-sm mt-1">{errors.agreeToContact}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Send Message
              </Button>

              {/* Submission Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-900 text-green-300 rounded-md flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Thank you for your message! We will get back to you soon.</span>
                </motion.div>
              )}
              {submitStatus === 'error' && Object.keys(errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-red-900 text-red-300 rounded-md flex items-center space-x-2"
                >
                  <span>Please correct the errors above and try again.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
