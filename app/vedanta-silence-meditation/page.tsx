"use client";

import React from "react";
import CourseCurriculum from "@/components/CourseCurriculum";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeniorTeachers from "@/components/SeniorTeachers";
import StudentFeedback from "@/components/StudentFeedback";
import Image from "next/image";

export default function VedantaSilenceMeditationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDFCF8]">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative flex w-full flex-col">
        {/* Background Image Container */}
        <div className="relative z-0 h-[50vh] min-h-[400px] w-full md:h-[60vh] md:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Vedanta Philosophy"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Seamless Overlapping Content Box (No Shadow, blends with background) */}
        <div className="relative z-10 mx-auto w-[95%] max-w-5xl -mt-16 bg-[#FDFCF8] px-6 pt-10 pb-6 text-center md:-mt-24 md:pt-14 md:pb-10">
          <p className="mb-2 text-base font-medium text-gray-600 md:mb-4 md:text-lg">
            Advance Pranayama Practice
          </p>
          <h1 className="font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl lg:text-6xl">
            Vedanta Philosophy
          </h1>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-20">
          {/* Left: Text Content & Button */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6 border-l-[3px] border-gray-200 pl-6 md:pl-8">
              <h2 className="mb-4 font-serif text-3xl font-bold text-[#0B3B24] md:text-4xl">
                Ancient Indian Philosophy
              </h2>

              <div className="space-y-4 text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                <p>
                  The Sadhana Intensive is a transformative two-week program created
                  by Swami Vishnudevananda, inspired by his own period of deep Hatha
                  Yoga practice in the Himalayas. He shared that six months of this
                  intense discipline gave him the energy and clarity to spread the
                  teachings of Yoga in the West for over four decades.
                </p>
                <p>
                  This unique 14 days course offers participants the rare opportunity
                  to expand their physical, mental, and spiritual capacities. Through
                  disciplined self-practice, students cultivate endurance,
                  self-confidence, and a profound inner strength that lasts long after
                  the course ends.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="rounded-sm bg-[#ED7D4D] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-orange-600"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex w-full justify-center md:w-1/2 lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
                alt="Ancient Indian Philosophy Practice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to separate Intro and Curriculum */}
      <div className="py-12 md:py-20" />

      {/* 3. CURRICULUM & COST SECTION */}
      <CourseCurriculum />

      {/* 4. SENIOR TEACHERS SECTION */}
      <SeniorTeachers />

      {/* 5. STUDENT FEEDBACK SECTION */}
      <StudentFeedback />

      {/* Spacer for bottom if needed, though footer will follow later */}
      <div className="flex-grow" />

      <Footer />
    </main>
  );
}
