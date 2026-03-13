"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import BenefitsTTC from "@/components/BenefitsTTC";
import CourseCurriculum from "@/components/CourseCurriculum";
import SeniorTeachers from "@/components/SeniorTeachers";
import StudentFeedback from "@/components/StudentFeedback";
import AshramGallery from "@/components/AshramGallery";
import TestimonialVideoSection from "@/components/TestimonialVideoSection";
import Footer from "@/components/Footer";
import Image from "next/image";

const schedule = [
  { time: "5:30 am", activity: "Wake up bell" },
  { time: "6:00 am", activity: "Satsang (Meditation, Chanting, Lecture)" },
  { time: "8:00 am", activity: "Yoga Asana & Pranayama" },
  { time: "10:00 am", activity: "Vegetarian Brunch" },
  { time: "11:00 am", activity: "Karma Yoga" },
  { time: "12:00 pm", activity: "Ayurveda Lecture / Workshop" },
  { time: "4:00 pm", activity: "Yoga Asana & Pranayama" },
  { time: "6:00 pm", activity: "Vegetarian Dinner" },
  { time: "8:00 pm", activity: "Satsang (Meditation, Chanting, Lecture)" },
];

export default function AyurvedaFoundationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDFCF8]">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative flex w-full flex-col">
        {/* Background Image Container */}
        <div className="relative z-0 h-[50vh] min-h-[400px] w-full md:h-[60vh] md:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000"
            alt="100-hours Ayurveda Foundation Course"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Seamless Overlapping Content Box (No Shadow, blends with background) */}
        <div className="relative z-10 mx-auto w-[95%] max-w-6xl bg-[#FDFCF8] px-6 pb-6 pt-10 text-center -mt-16 md:-mt-24 md:pb-12 md:pt-14">
          <p className="mb-3 text-xl font-medium text-[#0B3B24] md:mb-4 md:text-2xl">
            The Ancient Wisdom of Healthy Living
          </p>
          <h1 className="font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl lg:text-6xl">
            100-hours Ayurveda Foundation Course
          </h1>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="mx-auto max-w-6xl w-full px-6 py-16 md:py-24">
        <div className="flex flex-col items-center gap-12 lg:gap-20 md:flex-row">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6 border-l-[3px] border-gray-300 pl-6 md:pl-8">
              <p className="text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                This 100-hour program offers a unique opportunity to gain authentic
                and comprehensive knowledge of Ayurveda — from foundational
                principles to advanced applications. Participants will study and
                receive direct guidance from Ayurveda experts from{" "}
                <strong>Vaidyagrama Healing Village, India</strong>, supported by
                an experienced team of instructors in Vietnam.
              </p>
              <p className="text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                The course focuses on applying traditional Ayurvedic wisdom to
                enhance physical and mental well-being, while empowering
                participants to share their knowledge and contribute positively
                to their communities.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/100-01.png"
                alt="Ayurveda Class in Nature"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPECIAL PROGRAM & CERTIFICATION SECTION */}
      <section className="flex w-full flex-col">
        {/* Top Block with Logos */}
        <div className="flex flex-col items-center justify-center border-t border-gray-200 bg-white px-6 py-16 text-center md:py-20">
          <h2 className="mb-4 max-w-4xl font-serif text-2xl font-medium tracking-wide text-[#7C9A6A] md:text-3xl">
            A Special Program by Vaidyagrama Healing Village, India & Sivananda
            Yoga Vietnam
          </h2>
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-[#666666] md:text-lg">
            Upon completion, participants will receive an official certificate
            from Sivananda Yoga Vietnam, opening doors to further study, practice,
            and professional opportunities in the field of Ayurveda and holistic
            health.
          </p>

          {/* Logos */}
          <div className="flex items-center justify-center gap-8 md:gap-16">
            <div className="flex w-40 items-center justify-center md:w-56">
              <img
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/8d58f9c6-6b9d-41ac-9c16-570ed2738b3c.png"
                alt="Vaidyagrama Logo"
                className="h-auto w-full object-contain opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
            <div className="flex w-16 items-center justify-center md:w-20">
              <img
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/bc22e5c9-2972-4ed8-b96a-6101212f867b.png"
                alt="Sivananda Yoga Logo"
                className="h-auto w-full object-contain opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Bottom Block: Image with Text Overlay */}
        <div className="relative h-[50vh] min-h-[400px] w-full md:h-[70vh] md:min-h-[600px]">
          <Image
            src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/100-03.png"
            alt="Yoga Meditation in Forest"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark gradient overlay for readability */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"
            aria-hidden
          />
          {/* Text content on left */}
          <div className="absolute inset-0 flex items-center px-6 py-12 md:px-12 md:py-16 lg:px-20">
            <div className="max-w-2xl space-y-6 text-white">
              <p className="text-base leading-relaxed md:text-lg">
                Immerse yourself in the classical lifestyle of Yoga and Ayurveda,
                including daily meditation, yoga practice, nutritious vegetarian
                meals, mindful self-care routines, herbal tea preparation, and
                Ayurvedic cooking for detox and rejuvenation. Through these
                immersive experiences, participants will cultivate holistic
                well-being — nurturing body, mind, and spirit in harmony with
                nature.
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                Located at the Sivananda Yoga Dalat Resort and Training Center,
                the course unfolds in a serene mountain sanctuary near Hồ Tuyền
                Lâm Lake, surrounded by pine forests, fresh air, and natural
                silence.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0B3B24] px-8 py-3.5 text-base font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#0B3B24]/90"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <BenefitsTTC />

      {/* 5. CURRICULUM SECTION */}
      <CourseCurriculum />

      {/* 6. SENIOR TEACHERS SECTION */}
      <SeniorTeachers />

      {/* 7. DAILY SCHEDULE SECTION */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          <div className="w-full lg:w-[45%]">
            <h2 className="mb-6 font-serif text-3xl font-bold text-[#0B3B24]">
              Daily Schedule
            </h2>
            <p className="mb-10 leading-relaxed text-[#4A4A4A]">
              The daily schedule follows the traditional ashram routine,
              integrating Ayurveda workshops with classical Yoga practices. This
              balanced routine of learning, practice, selfless service, and
              meditation is designed to elevate your prana and restore inner
              harmony.
            </p>
            <div className="relative aspect-square w-full overflow-hidden rounded-sm shadow-lg md:aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800"
                alt="Daily Practice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center border-t border-gray-200 pt-10 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:w-[55%] lg:pl-16">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col gap-2 border-b border-gray-100 pb-6 last:border-0 sm:flex-row sm:items-start sm:gap-6"
                >
                  <div className="w-24 shrink-0 pt-1 font-bold text-[#0B3B24]">
                    {item.time}
                  </div>
                  <div className="flex-grow pt-1 text-[#4A4A4A]">
                    {item.activity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHAT INCLUDES IN THE PACKAGE SECTION */}
      <section className="border-t border-gray-200/60 bg-[#FDFCF8] px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:gap-24">
          <div className="w-full lg:w-[60%]">
            <h2 className="mb-10 font-serif text-3xl font-bold text-[#0B3B24] md:text-4xl">
              What Includes in the Package
            </h2>
            <ul className="mb-12 space-y-6 text-base text-[#4A4A4A] md:text-lg">
              <li className="flex items-center gap-4">
                <div className="h-5 w-5 shrink-0 rounded-full border-2 border-[#0B3B24]" />
                <span>Accommodation and Tuition</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-5 w-5 shrink-0 rounded-full border-2 border-[#0B3B24]" />
                <span>2 Daily Vegetarian/Ayurvedic Meals</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-5 w-5 shrink-0 rounded-full border-2 border-[#0B3B24]" />
                <span>Uniform and Study Manual</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-5 w-5 shrink-0 rounded-full border-2 border-[#0B3B24]" />
                <span>Personal Ayurvedic Consultation</span>
              </li>
            </ul>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-500">Important Note</h4>
              <ul className="space-y-3 text-base text-[#4A4A4A] md:text-lg">
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mt-1 h-4 w-4 shrink-0 text-[#0B3B24]"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>
                    This course requires a commitment to the ashram schedule and a
                    sattvic lifestyle.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-[40%]">
            <div className="rounded-sm border border-gray-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] md:p-10 lg:sticky lg:top-24">
              <h3 className="mb-2 font-bold uppercase tracking-widest text-[#0B3B24] md:text-base">
                Program Cost
              </h3>
              <p className="mb-8 text-gray-400 md:text-base">
                *** incl. Deposit (due at time of registration)
              </p>

              <div className="mb-8 space-y-6 font-medium text-[#4A4A4A] md:text-lg">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span>Single Room</span>
                  <span className="font-bold text-[#0B3B24]">US$ XXX</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span>Shared Room (2 people)</span>
                  <span className="font-bold text-[#0B3B24]">US$ XXX</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shared Room (4 people)</span>
                  <span className="font-bold text-[#0B3B24]">US$ XXX</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full rounded-sm bg-[#ED7D4D] px-8 py-4 text-center font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-orange-600"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIAL VIDEO SECTION */}
      <TestimonialVideoSection title="Experience the Journey" />

      {/* 10. STUDENT FEEDBACK SECTION */}
      <StudentFeedback />

      {/* 11. ASHRAM GALLERY SECTION */}
      <AshramGallery />

      <div className="flex-grow" />

      <Footer />
    </main>
  );
}
