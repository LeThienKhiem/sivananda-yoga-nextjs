"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const DONATION_URL =
  "https://sivanandayogavietnam.secure.retreat.guru/program/gift-certificate-yoga-peace-and-well-being/?form=1&lang=en";

export default function DonationPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full flex flex-col mt-16 md:mt-0">
        {/* Background Image Container */}
        <div className="relative w-full h-[40vh] min-h-[300px] md:h-[50vh] md:min-h-[450px] z-0">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Support Our Mission"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Seamless Overlapping Content Box */}
        <div className="relative z-10 w-[95%] max-w-5xl mx-auto bg-[#FDFCF8] px-6 pt-10 pb-6 md:pt-14 md:pb-10 text-center -mt-16 md:-mt-24 shadow-[0_-10px_30px_rgba(253,252,248,1)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold">
            Support Our Mission
          </h1>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="max-w-4xl mx-auto py-16 md:py-24 px-6 w-full">
        <div className="border-l-4 border-[#0B3B24] pl-6 md:pl-8">
          <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg">
            Your donation helps us share the timeless teachings of classical yoga, bringing peace and healing to more lives. It supports a mission rooted in service, clarity, and compassion. We welcome all forms of giving—financial contributions, in-kind support. Each act of generosity strengthens our shared commitment to a more conscious and harmonious world. Together, we keep these teachings alive and accessible.
          </p>
        </div>
      </section>

      {/* 3. SUPPORT OPTIONS SECTION */}
      <section className="max-w-6xl mx-auto pb-24 md:pb-32 px-6 w-full space-y-20 md:space-y-32 overflow-hidden">
        {/* Block 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center relative">
          {/* Left Image */}
          <div className="w-full md:w-[45%] relative z-10">
            <div className="aspect-[4/3] shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-sm overflow-hidden relative">
              <Image
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/donation-01.png"
                alt="Support the Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Right Text Box */}
          <div className="w-full md:w-[65%] bg-[#FEF5E7] z-0 p-8 md:p-12 lg:p-16 md:pl-24 lg:pl-32 md:-ml-16 mt-[-3rem] md:mt-0 rounded-sm">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-2">
              Support the Journey - Spread the Light
            </h3>
            <p className="text-[#0B3B24] font-bold text-sm md:text-base mb-4">
              Support tuition assistance for sincere students
            </p>
            <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed mb-8">
              Your donation helps dedicated individuals access transformative yoga education, regardless of their financial circumstances. It supports scholarships for the Yoga Teacher Training Course (TTC) and tuition reductions for other programs, allowing more people to benefit from the tools of self-healing, clarity, and inner peace. By giving, you help spread the light of yoga and empower others to grow, serve, and uplift their communities.
            </p>
            <Link
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ED7D4D] text-white font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-3.5 rounded-sm hover:bg-orange-600 transition-colors shadow-md"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Block 2: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center relative">
          {/* Right Image */}
          <div className="w-full md:w-[45%] relative z-10">
            <div className="aspect-[4/3] shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-sm overflow-hidden relative">
              <Image
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/donation-02.png"
                alt="Sustain the Ashram"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Left Text Box */}
          <div className="w-full md:w-[65%] bg-[#FEF5E7] z-0 p-8 md:p-12 lg:p-16 md:pr-24 lg:pr-32 md:-mr-16 mt-[-3rem] md:mt-0 rounded-sm">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-2">
              Sustain the Ashram&apos;s Living Space
            </h3>
            <p className="text-[#0B3B24] font-bold text-sm md:text-base mb-4">
              Support essential renovations and infrastructure upkeep
            </p>
            <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed mb-8">
              The climate of Đà Lạt—with its moisture and temperature shifts—takes a toll on buildings and furniture. Your donation helps us maintain and improve the Ashram&apos;s facilities to ensure they remain clean, safe, and welcoming for all. Contributions support the renovation of rooms, repair of roofs, upgrading furniture, and maintenance of water and electrical systems—essential elements that allow students and guests to focus on their inner journey in comfort and peace.
            </p>
            <button className="bg-[#ED7D4D] text-white font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-3.5 rounded-sm hover:bg-orange-600 transition-colors shadow-md">
              Donate Now
            </button>
          </div>
        </div>

        {/* Block 3: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center relative">
          {/* Left Image */}
          <div className="w-full md:w-[45%] relative z-10">
            <div className="aspect-[4/3] shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-sm overflow-hidden relative">
              <Image
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/donation-03.png"
                alt="Steward a Vibrant Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Right Text Box */}
          <div className="w-full md:w-[65%] bg-[#FEF5E7] z-0 p-8 md:p-12 lg:p-16 md:pl-24 lg:pl-32 md:-ml-16 mt-[-3rem] md:mt-0 rounded-sm">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-2">
              Steward a Vibrant Community
            </h3>
            <p className="text-[#0B3B24] font-bold text-sm md:text-base mb-4">
              Support the rhythms and long-term growth of the Ashram
            </p>
            <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed mb-8">
              Your general donation helps sustain the living heart of the Ashram—a community dedicated to learning, practice, and inner transformation. It supports the ongoing needs of daily operations. Your gift also contributes to the responsible evolution and future development of this sacred space, ensuring it remains a place of light, discipline, and peace for generations to come.
            </p>
            <Link
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ED7D4D] text-white font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-3.5 rounded-sm hover:bg-orange-600 transition-colors shadow-md"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* 4. IN-KIND DONATION BANNER */}
      <section className="relative w-full py-24 md:py-32 flex items-center justify-center text-white px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/donation-04.png"
            alt="Forest Background for In-kind donation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 uppercase tracking-wide">
            For In-Kind Donation
          </h2>
          <div className="border-l-[3px] border-white/70 pl-6 md:pl-8 text-left space-y-4 text-white/90 text-sm md:text-base mb-12 max-w-2xl">
            <p>
              If you&apos;d like to offer an in-kind donation, please reach out to us—<br />
              Email: vietnamyogaresort@sivananda.org  or  Call: (+84) 02636501100
            </p>
            <p>
              We&apos;d be happy to share how you can best support the Ashram.
            </p>
          </div>
          <button className="bg-[#FEF5E7] text-[#0B3B24] font-bold uppercase tracking-widest text-xs md:text-sm px-10 py-4 rounded-sm hover:bg-white transition-colors shadow-md">
            Contact Us
          </button>
        </div>
      </section>

      {/* 5. PILLARS GRID & FINAL CTA */}
      <section className="bg-[#FDFCF8] py-24 px-6 w-full">
        <div className="max-w-6xl mx-auto">
          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
            {/* Card 1: Our Mission */}
            <div className="bg-white rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/teacher01.png"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-[#0B3B24] font-bold mb-4 uppercase tracking-wide">Our Mission</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed flex-grow">
                  Physical relaxation is achieved through the systematic practice of conscious relaxation (Savasana) and correct posture.
                </p>
              </div>
            </div>

            {/* Card 2: Our Lineage */}
            <div className="bg-white rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Swami-Sivananda-Gazing.jpg"
                  alt="Our Lineage"
                  fill
                  className="object-cover grayscale contrast-125"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-[#0B3B24] font-bold mb-4 uppercase tracking-wide">Our Lineage</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed flex-grow">
                  Our lineage follows the ancient tradition of classical yoga, transmitted from Swami Sivananda to Swami Vishnudevananda, emphasizing service, discipline, devotion, and spiritual knowledge for personal transformation and global harmony.
                </p>
              </div>
            </div>

            {/* Card 3: Our Team */}
            <div className="bg-white rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="relative w-full aspect-square">
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/banner-hero-staff-02.png"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-[#0B3B24] font-bold mb-4 uppercase tracking-wide">Our Team</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed flex-grow">
                  Our senior teachers and dedicated staff are long-time practitioners deeply rooted in the Sivananda tradition.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Button */}
          <div className="text-center">
            <Link
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ED7D4D] text-white font-bold uppercase tracking-widest text-sm md:text-base px-14 py-4 rounded-sm hover:bg-orange-600 transition-colors shadow-lg"
          >
            Donate Now
          </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
