import React from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Faq from "@/components/Faq";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SessionFees from "@/components/SessionFees";

export default function HomePage() {
  return (
    <main  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    
     <Hero/>

     <About/>
      <Service/>
      <Faq/>
      <SessionFees/>
      <Contact/>
      <Footer/>
    </main>
  );
}