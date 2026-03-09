"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

const HERO_IMAGE = "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/20200522_180511-min.jpg";

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
      </section>

      {/* 2. CONTACT SECTION */}
      <ContactSection />

      <div className="flex-grow"></div>

      <Footer />
    </main>
  );
}
