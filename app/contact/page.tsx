"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

const HERO_IMAGE = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full flex flex-col mt-16 md:mt-0">
        <div className="relative w-full h-[40vh] min-h-[350px] md:h-[50vh] md:min-h-[450px] z-0">
          <Image 
            src={HERO_IMAGE}
            alt="Contact Sivananda Yoga Resort"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 w-[95%] max-w-4xl mx-auto bg-[#FDFCF8] px-6 pt-10 pb-6 md:pt-14 md:pb-10 text-center -mt-16 md:-mt-24 shadow-[0_-10px_30px_rgba(253,252,248,1)]">
          <p className="text-base md:text-lg text-gray-500 font-medium mb-3 tracking-widest uppercase">
            We are here to help
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* 2. CONTACT SECTION */}
      <ContactSection />

      <div className="flex-grow"></div>

      <Footer />
    </main>
  );
}
