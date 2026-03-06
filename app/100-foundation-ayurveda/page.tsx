"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

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
          <p className="mb-3 text-lg font-medium text-[#0B3B24] md:mb-4 md:text-xl">
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
              <p className="text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                This 100-hour program offers a unique opportunity to gain authentic
                and comprehensive knowledge of Ayurveda — from foundational
                principles to advanced applications. Participants will study and
                receive direct guidance from Ayurveda experts from{" "}
                <strong>Vaidyagrama Healing Village, India</strong>, supported by
                an experienced team of instructors in Vietnam.
              </p>
              <p className="text-sm leading-relaxed text-[#4A4A4A] md:text-base">
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
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
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
          <p className="mb-12 max-w-3xl text-sm leading-relaxed text-[#666666] md:text-base">
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
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
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
              <p className="text-sm leading-relaxed md:text-base">
                Immerse yourself in the classical lifestyle of Yoga and Ayurveda,
                including daily meditation, yoga practice, nutritious vegetarian
                meals, mindful self-care routines, herbal tea preparation, and
                Ayurvedic cooking for detox and rejuvenation. Through these
                immersive experiences, participants will cultivate holistic
                well-being — nurturing body, mind, and spirit in harmony with
                nature.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                Located at the Sivananda Yoga Dalat Resort and Training Center,
                the course unfolds in a serene mountain sanctuary near Hồ Tuyền
                Lâm Lake, surrounded by pine forests, fresh air, and natural
                silence.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0B3B24] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#0B3B24]/90"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-grow" />

      <Footer />
    </main>
  );
}
