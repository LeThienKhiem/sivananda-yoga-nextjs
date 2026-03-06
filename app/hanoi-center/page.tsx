"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function HanoiCenterPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDFCF8]">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative mt-16 flex w-full flex-col md:mt-0">
        {/* Background Image Container */}
        <div className="relative z-0 h-[50vh] min-h-[400px] w-full md:h-[65vh] md:min-h-[550px]">
          <Image
            src="https://images.unsplash.com/photo-1710141968276-1461538e8bc9"
            alt="Hanoi City Yoga Center"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Seamless Overlapping Content Box (No shadow, blends with background) */}
        <div className="relative z-10 mx-auto w-[95%] max-w-5xl bg-[#FDFCF8] px-6 pb-6 pt-10 text-center -mt-16 md:-mt-24 md:pb-12 md:pt-16">
          <p className="mb-3 text-base font-medium uppercase tracking-widest text-gray-500 md:text-lg">
            A Peaceful Retreat in the Capital
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold text-[#0B3B24] md:text-5xl lg:text-6xl">
            Hanoi City Yoga Center
          </h1>
          <p className="mx-auto max-w-3xl leading-relaxed text-[#4A4A4A] md:text-lg">
            Find your center of gravity in the heart of Hanoi. Step away from
            the busy streets into a warm, welcoming space dedicated to
            traditional yoga practices, deep relaxation, and spiritual growth.
          </p>
        </div>
      </section>

      {/* 2. INTRO / THE OASIS */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-gray-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
                alt="Yoga Class in Hanoi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full space-y-6 md:w-1/2">
            <h2 className="font-serif text-3xl font-bold text-[#0B3B24] md:text-4xl">
              Find Balance in the City
            </h2>
            <div className="h-1 w-16 bg-[#ED7D4D]" />
            <div className="space-y-4 pt-4 text-base leading-relaxed text-[#4A4A4A] md:text-lg">
              <p>
                Situated in the historic district of Ba Dinh, our Hanoi center
                offers a tranquil environment for practitioners of all levels to
                study classical Yoga and Vedanta philosophy.
              </p>
              <p>
                We believe that peace of mind is the greatest wealth. Our
                schedule is thoughtfully designed to accommodate the busy lives
                of Hanoians, providing a sanctuary where you can recharge your
                body and calm your mind before or after work.
              </p>
              <p>
                Join our daily open classes, structured beginner courses, or
                weekly Satsangs to connect with a supportive community and
                deepen your understanding of a holistic yogic lifestyle.
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
              Classes & Programs
            </h2>
            <p className="text-lg font-medium text-[#4A4A4A]">
              Daily practices to keep your body and mind in harmony
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-[#0B3B24]">
                Daily Open Classes
              </h3>
              <p className="flex-grow text-sm leading-relaxed text-[#4A4A4A]">
                A complete 90-minute classical yoga session including Pranayama
                (breathing exercises), Sun Salutations, 12 basic postures, and
                deep relaxation.
              </p>
            </div>
            {/* Card 2 */}
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
                Beginner Courses
              </h3>
              <p className="flex-grow text-sm leading-relaxed text-[#4A4A4A]">
                New to Yoga? Our systematic 4-week Yoga 1 and Yoga 2 courses
                provide a strong and safe foundation for your ongoing practice.
              </p>
            </div>
            {/* Card 3 */}
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-[#0B3B24]">
                Workshops & Satsangs
              </h3>
              <p className="flex-grow text-sm leading-relaxed text-[#4A4A4A]">
                Deepen your knowledge with specialized weekend workshops, cooking
                classes, and free weekly group meditations (Satsang).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ATMOSPHERE GALLERY */}
      <section className="mx-auto w-full max-w-[1600px] px-6 py-28 md:px-8 lg:px-12">
        <div className="mb-20 text-center md:mb-24">
          <h2 className="font-serif text-3xl font-bold text-[#0B3B24] md:text-4xl lg:text-5xl">
            Inside the Center
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
                We are conveniently located in Ba Dinh District, providing a
                tranquil escape easily accessible from anywhere in the city.
              </p>
            </div>

            <div className="space-y-6 text-[#4A4A4A]">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#ED7D4D]" />
                <div>
                  <p className="font-bold text-[#0B3B24]">
                    Sivananda Yoga Center Hanoi
                  </p>
                  <p>
                    Floor 2, 22 Đội Cấn, Ba Đình District
                    <br />
                    Hanoi, Vietnam
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 shrink-0 text-[#ED7D4D]" />
                <p>(+84) 24 6680 5410</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 shrink-0 text-[#ED7D4D]" />
                <p>hanoi@sivananda.org</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 shrink-0 text-[#ED7D4D]" />
                <p>Open Daily: 6:00 AM - 9:00 PM</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block rounded-sm bg-[#0B3B24] px-8 py-3 font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-[#1a5438]"
            >
              View Class Schedule
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
                <MapPin className="mb-1 h-8 w-8 text-[#ED7D4D]" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Hanoi Center
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
