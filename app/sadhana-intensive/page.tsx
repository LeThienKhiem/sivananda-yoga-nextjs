"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccommodationCost from "@/components/AccommodationCost";
import CourseCurriculum from "@/components/CourseCurriculum";
import MoreInformation from "@/components/MoreInformation";
import SeniorTeachers from "@/components/SeniorTeachers";
import StudentFeedback from "@/components/StudentFeedback";
import Image from "next/image";

export default function SadhanaIntensivePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDFCF8]">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative flex w-full flex-col">
        {/* Background Image Container */}
        <div className="relative z-0 h-[50vh] min-h-[400px] w-full md:h-[60vh] md:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Sadhana Intensive"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Seamless Overlapping Content Box (No Shadow, blends with background) */}
        <div className="relative z-10 mx-auto w-[95%] max-w-5xl -mt-16 bg-[#FDFCF8] px-6 pt-10 pb-6 text-center md:-mt-24 md:pt-14 md:pb-10">
          <p className="mb-2 text-lg font-medium text-gray-600 md:mb-4 md:text-xl">
            Advance Pranayama Practice
          </p>
          <h1 className="font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl lg:text-6xl">
            Sadhana Intensive (SI)
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
                Sadhana Intensive (SI)
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                <p>
                  The Sadhana Intensive is a transformative two-week program
                  created by Swami Vishnudevananda, inspired by his own period of
                  deep Hatha Yoga practice in the Himalayas. He shared that six
                  months of this intense discipline gave him the energy and
                  clarity to spread the teachings of Yoga in the West for over
                  four decades.
                </p>
                <p>
                  This unique 14 days course offers participants the rare
                  opportunity to expand their physical, mental, and spiritual
                  capacities. Through disciplined self-practice, students cultivate
                  endurance, self-confidence, and a profound inner strength that
                  lasts long after the course ends.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="rounded-sm bg-[#ED7D4D] px-10 py-4 text-base font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-orange-600"
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
                alt="Sadhana Intensive Practice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to separate Intro and Curriculum */}
      <div className="py-1 md:py-8" />

      {/* 3. CURRICULUM & COST SECTION */}
      <CourseCurriculum />

      {/* Spacer to separate Curriculum and Upcoming Course Banner */}
      <div className="py-4 md:py-8" />

      {/* 4. UPCOMING COURSE BANNER */}
      <section className="relative flex min-h-[500px] w-full items-start justify-center overflow-hidden px-6 pt-12 pb-12 md:pt-16 text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2000"
            alt="Upcoming Sadhana Intensive Course"
            fill
            className="object-cover"
          />
          {/* Gradient overlay fading from the brand background color down to transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto mt-0 flex max-w-4xl flex-col items-center">
          <h2 className="mb-4 font-serif text-3xl text-[#0B3B24] md:text-4xl">
            The Upcoming Course in Dalat, Vietnam
          </h2>
          <p className="mb-12 font-serif text-2xl text-[#0B3B24] md:text-3xl">
            Sadhana Intensive (SI)
          </p>

          <button
            type="button"
            className="rounded-sm bg-[#ED7D4D] px-10 py-4 text-base font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-orange-600"
          >
            Register Now
          </button>
        </div>
      </section>

      {/* Spacer to separate Upcoming Course Banner and Strict Requirements */}
      <div className="py-12 md:py-20" />

      {/* 5. STRICT REQUIREMENTS SECTION */}
      <section className="w-full bg-[#FDFCF8] px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center font-serif text-3xl text-[#0B3B24] md:text-4xl">
            Strict Requirements
          </h2>

          <div className="space-y-12">
            {/* Before the course */}
            <div>
              <h3 className="mb-6 font-medium text-2xl text-slate-500">Before the course</h3>
              <div className="space-y-4 leading-relaxed text-[#4A4A4A]">
                <p>
                  Students with a sound physical and mental health is a prerequisite.
                  <br />
                  Students are advised to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>follow a regular daily hatha yoga practice</li>
                  <li>maintain a sattvic lifestyle</li>
                </ul>
              </div>
            </div>

            {/* During the course */}
            <div>
              <h3 className="mb-6 font-medium text-2xl text-slate-500">During the course</h3>
              <div className="space-y-4 leading-relaxed text-[#4A4A4A]">
                <p>A high level of self-discipline is demanded. Students are expected to:</p>
                <ul className="mb-8 list-disc space-y-2 pl-6">
                  <li>remain within the ashram premises throughout the course with no free day</li>
                  <li>a strict sattvic diet (salt, spice, tea and sugar free)</li>
                  <li>no access to telephone or email</li>
                </ul>
                <p className="pt-4">
                  Sadhana Intensive affords a unique opportunity to extend the limits of
                  our capabilities, strengthen our stamina and develop self-confidence
                  with long lasting effects. The highly controlled environment is vital
                  for this type of practice and students are guided according to
                  individual needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SENIOR TEACHERS SECTION */}
      <SeniorTeachers />

      {/* 7. STUDENT FEEDBACK SECTION */}
      <StudentFeedback />

      {/* 8. ACCOMMODATION & COST SECTION */}
      <AccommodationCost />

      {/* 9. MORE INFORMATION SECTION */}
      <MoreInformation />

      <Footer />
    </main>
  );
}
