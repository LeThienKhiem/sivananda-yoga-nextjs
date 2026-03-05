"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MoreInformation from "@/components/MoreInformation";
import Image from "next/image";

const courses = [
  {
    title: "Sadhana Intensive",
    subtitle: "Placeholder",
    description:
      "Karma Yoga – the Yoga of action – is the path chosen primarily by those of an outgoing nature. It purifies the heart by teaching you to act selflessly, without thought of gain or reward. By detaching yourself from the fruits of your actions and offering them up to the welfare of others, you learn to sublimate the ego.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
  },
  {
    title: "Vedanta Philosophy",
    subtitle: "Placeholder",
    description:
      "Bhakti Yoga is the path of devotion, which appeals particularly to those of an emotional nature. Bhakti Yogis are motivated chiefly by the power of Love and sees the Universe as the embodiment of Love.",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800",
  },
  {
    title: "Meditation TTC",
    subtitle: "Placeholder",
    description:
      "Raja Yoga is the science of physical and mental control. It offers a comprehensive method for controlling the waves of thought by tuning our mental and physical energy into pure energy.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800",
  },
  {
    title: "Yoga Nidra",
    subtitle: "Placeholder",
    description:
      "Jnana Yoga – the Yoga of Knowledge and wisdom – is the most difficult path, requiring tremendous strength of will and of intellect. Taking the philosophy of Vedanta, the Jnana Yogi uses his intellect to enquire into his own nature, dissolving the veils of ignorance and illusion.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
  },
];

const moreCourses = [
  {
    title: "Kids Yoga",
    subtitle: "Path of Selfless service",
    description:
      "Karma Yoga – the Yoga of action – is the path chosen primarily by those of an outgoing nature. It purifies the heart by teaching you to act selflessly, without thought of gain or reward. By detaching yourself from the fruits of your actions and offering them up to the welfare of others, you learn to sublimate the ego.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
  },
  {
    title: "Gentle Yoga",
    subtitle: "Path of Devotion",
    description:
      "Bhakti Yoga is the path of devotion, which appeals particularly to those of an emotional nature. Bhakti Yogis are motivated chiefly by the power of Love and sees the Universe as the embodiment of Love.",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800",
  },
  {
    title: "Prenatal Yoga",
    subtitle: "Path of Mind control",
    description:
      "Raja Yoga is the science of physical and mental control. It offers a comprehensive method for controlling the waves of thought by tuning our mental and physical energy into pure energy.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800",
  },
  {
    title: "Stress Yoga",
    subtitle: "Path of Knowledge",
    description:
      "Jnana Yoga – the Yoga of Knowledge and wisdom – is the most difficult path, requiring tremendous strength of will and of intellect. Taking the philosophy of Vedanta, the Jnana Yogi uses his intellect to enquire into his own nature, dissolving the veils of ignorance and illusion.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
  },
];

export default function SpecialtyCoursesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDFCF8]">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative flex w-full flex-col">
        {/* Background Image Container */}
        <div className="relative z-0 h-[50vh] min-h-[400px] w-full md:h-[60vh] md:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Training Courses for Yoga Teacher"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Seamless Overlapping Content Box (No Shadow, blends with background) */}
        <div className="relative z-10 mx-auto w-[95%] max-w-5xl -mt-16 bg-[#FDFCF8] px-6 pt-10 pb-6 text-center md:-mt-24 md:pt-14 md:pb-10">
          <p className="mb-3 text-base font-medium text-gray-500 md:mb-4 md:text-lg">
            Deepen Your Practice, Expand Your Impact
          </p>
          <h1 className="mb-10 font-serif text-3xl font-bold text-[#0B3B24] md:mb-16 md:text-5xl lg:text-6xl">
            Training Courses for Yoga Teacher
          </h1>

          {/* Intro Text with left border */}
          <div className="mx-auto max-w-3xl border-l-[3px] border-gray-300 pl-6 text-left text-sm leading-relaxed text-[#4A4A4A] md:pl-8 md:text-base">
            <p>
              After completing the TTC, students can continue their journey through
              advanced training courses designed to deepen understanding and expand
              teaching skills. Rooted in the classical teachings of yoga, these
              programs cater to various student needs—offering specialized knowledge
              in areas such as advanced asanas, philosophy, meditation, and
              therapeutic applications to support a broader, more personalized
              approach to teaching.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COURSE GRID SECTION */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div key={course.title} className="group flex cursor-pointer flex-col">
              {/* Image */}
              <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm border border-gray-100 shadow-sm lg:aspect-square">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <h3 className="mb-1 font-serif text-2xl font-medium text-[#0B3B24] transition-colors group-hover:text-[#ED7D4D]">
                {course.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-gray-500">
                {course.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-[#4A4A4A]">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECOND COURSE GRID SECTION */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {moreCourses.map((course) => (
            <div key={course.title} className="group flex cursor-pointer flex-col">
              {/* Image */}
              <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm border border-gray-100 shadow-sm lg:aspect-square">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <h3 className="mb-1 font-serif text-2xl font-medium text-[#0B3B24] transition-colors group-hover:text-[#ED7D4D]">
                {course.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-gray-500">
                {course.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-[#4A4A4A]">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. QUOTE BANNER SECTION */}
      <section className="relative flex h-[400px] w-full items-center justify-center px-6 text-center md:h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000"
            alt="Forest Path Quote"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-white">
          {/* Quote Icon */}
          <svg
            className="mb-6 h-10 w-10 opacity-80 md:h-12 md:w-12"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <h2 className="mb-6 font-serif text-2xl font-medium leading-tight drop-shadow-md md:text-3xl lg:text-4xl">
            Kindle the light of love in the heart and radiate love and light to
            one and all
          </h2>
          <p className="text-sm tracking-widest opacity-90 drop-shadow-sm md:text-base">
            —Swami Vishnudevananda
          </p>
        </div>
      </section>

      {/* 5. MORE INFORMATION SECTION */}
      <MoreInformation />

      <Footer />
    </main>
  );
}
