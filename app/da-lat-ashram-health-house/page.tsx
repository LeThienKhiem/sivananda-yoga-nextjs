"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function DalatAshramPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDFCF8]">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative mt-16 flex w-full flex-col md:mt-0">
        {/* Background Image Container */}
        <div className="relative z-0 h-[50vh] min-h-[400px] w-full md:h-[65vh] md:min-h-[550px]">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Dalat Ashram Health House"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Seamless Overlapping Content Box (No shadow, blends with background) */}
        <div className="relative z-10 mx-auto w-[95%] max-w-5xl bg-[#FDFCF8] px-6 pb-6 pt-10 text-center -mt-16 md:-mt-24 md:pb-12 md:pt-16">
          <p className="mb-3 text-base font-medium uppercase tracking-widest text-gray-500 md:text-lg">
            A Sanctuary for Healing and Peace
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold text-[#0B3B24] md:text-5xl lg:text-6xl">
            Dalat Ashram & Health House
          </h1>
          <p className="mx-auto max-w-3xl leading-relaxed text-[#4A4A4A] md:text-lg">
            Nestled in the lush pine forests near Tuyen Lam Lake, our Ashram
            offers a perfect retreat from the bustling world. Immerse yourself in
            nature, traditional Yoga, and authentic Ayurvedic healing.
          </p>
        </div>
      </section>

      {/* 2. INTRO / THE SANCTUARY */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-gray-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800"
                alt="Meditation at Dalat Ashram"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full space-y-6 md:w-1/2">
            <h2 className="font-serif text-3xl font-bold text-[#0B3B24] md:text-4xl">
              Return to Your True Nature
            </h2>
            <div className="h-1 w-16 bg-[#ED7D4D]" />
            <div className="space-y-4 pt-4 text-base leading-relaxed text-[#4A4A4A] md:text-lg">
              <p>
                The Dalat Ashram serves as the central hub for Sivananda Yoga in
                Vietnam. Surrounded by vibrant greenery and cool mountain air,
                the environment itself is a powerful healer.
              </p>
              <p>
                We offer a fully integrated yogic lifestyle based on the 5 Points
                of Yoga. Here, you can partake in daily satsangs, deep
                meditation, rejuvenating asana classes, and personalized
                Ayurvedic treatments at our dedicated Health House.
              </p>
              <p>
                Whether you join us for a weekend Yoga Vacation, an intensive
                Teacher Training Course, or a personalized detoxification program,
                the Ashram provides the perfect spiritual container for your
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE OFFERINGS (3-Column Grid) */}
      <section className="w-full bg-[#F4F7F0] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#0B3B24] md:text-4xl">
              What We Offer
            </h2>
            <p className="text-lg font-medium text-[#4A4A4A]">
              Programs tailored for your spiritual and physical well-being
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#FEF5E7] text-[#ED7D4D]">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-[#0B3B24]">
                Yoga Vacations
              </h3>
              <p className="flex-grow text-sm leading-relaxed text-[#4A4A4A]">
                Step away from daily stress. Enjoy daily yoga, meditation, and
                healthy vegetarian meals in a supportive community setting.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#E5F5C8] text-[#4F6F1F]">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-[#0B3B24]">
                Health House & Ayurveda
              </h3>
              <p className="flex-grow text-sm leading-relaxed text-[#4A4A4A]">
                Experience personalized Ayurvedic consultations, detoxification
                programs, and natural therapies to restore your body&apos;s
                balance.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#FEF5E7] text-[#ED7D4D]">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-[#0B3B24]">
                Teacher Training
              </h3>
              <p className="flex-grow text-sm leading-relaxed text-[#4A4A4A]">
                Deepen your practice through our internationally recognized
                200-hour TTC and 500-hour Advanced TTC programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ATMOSPHERE GALLERY */}
      <section className="mx-auto w-full max-w-[1600px] px-6 py-28 md:px-8 lg:px-12">
        <div className="mb-20 text-center md:mb-24">
          <h2 className="font-serif text-3xl font-bold text-[#0B3B24] md:text-4xl lg:text-5xl">
            Glimpses of the Ashram
          </h2>
        </div>
        <div className="columns-2 gap-6 space-y-6 md:columns-2 lg:columns-3 lg:gap-8 lg:space-y-8">
          <div className="group relative aspect-square w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800" alt="Gallery Image 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" alt="Gallery Image 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800" alt="Gallery Image 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="group relative aspect-video w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800" alt="Gallery Image 4" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="group relative aspect-square w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1533228876429-012051c514b8?q=80&w=800" alt="Gallery Image 5" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800" alt="Gallery Image 6" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800" alt="Gallery Image 7" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="group relative aspect-square w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800" alt="Gallery Image 8" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="group relative aspect-video w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800" alt="Gallery Image 9" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 break-inside-avoid hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800" alt="Gallery Image 10" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
        </div>
      </section>

      {/* 5. LOCATION & CONTACT */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row">
          {/* Details */}
          <div className="w-full space-y-8 md:w-1/2">
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-[#0B3B24]">
                Visit Us
              </h2>
              <p className="leading-relaxed text-[#4A4A4A]">
                The ashram is located approximately 40 minutes from Lien Khuong
                Airport and 20 minutes from the Dalat city center.
              </p>
            </div>

            <div className="space-y-6 text-[#4A4A4A]">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#ED7D4D]" />
                <div>
                  <p className="font-bold text-[#0B3B24]">
                    Sivananda Yoga Resort and Training Center
                  </p>
                  <p>
                    K&apos;lan Resort, Hoa Hong Street, Ward 4
                    <br />
                    Tuyen Lam Lake, Dalat, Vietnam
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 shrink-0 text-[#ED7D4D]" />
                <p>(+84) 263 650 1100</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 shrink-0 text-[#ED7D4D]" />
                <p>vietnamyoga@sivananda.org</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 shrink-0 text-[#ED7D4D]" />
                <p>Reception Hours: 8:00 AM - 8:00 PM</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block rounded-sm bg-[#0B3B24] px-8 py-3 font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-[#1a5438]"
            >
              Book Your Stay
            </Link>
          </div>

          {/* Map Image/Placeholder */}
          <div className="w-full md:w-1/2">
            <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-sm border border-gray-300 bg-gray-200 shadow-inner">
              {/* Simulated Map Visual */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), repeating-linear-gradient(45deg, #ccc 25%, #e0e0e0 25%, #e0e0e0 75%, #ccc 75%, #ccc)",
                  backgroundPosition: "0 0, 20px 20px",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative flex flex-col items-center rounded-full bg-white p-4 shadow-lg text-[#0B3B24]">
                <MapPin className="mb-1 h-8 w-8" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Dalat Ashram
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
