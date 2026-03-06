"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import SeniorTeachers from "@/components/SeniorTeachers";

const IMG_HERO =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000";
const IMG_TEACHER =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600";

const seniorStaffs = [
  { name: "Narayana Chaitanya", role: "Director of Sivananda Center", image: IMG_TEACHER },
  { name: "Yoga Saraswati", role: "Director of Hochiminh Center", image: IMG_TEACHER },
  { name: "Shambho Hari Hari", role: "Director of Yoga Vacation", image: IMG_TEACHER },
  { name: "Radha Thanh Ngoc", role: "Senior Staff", image: IMG_TEACHER },
  { name: "Ambika Chaitanya", role: "Senior Staff", image: IMG_TEACHER },
  { name: "Krishna Chaitanya", role: "Senior Staff", image: IMG_TEACHER },
  { name: "Atmaram Chaitanya", role: "Senior Staff", image: IMG_TEACHER },
  { name: "Anandamayi Chaitanya", role: "Senior Staff", image: IMG_TEACHER },
  { name: "Karuna Chaitanya", role: "Senior Staff", image: IMG_TEACHER },
];

export default function OurTeachersPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_HERO}
            alt="Our Teachers Team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-black/10"></div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="max-w-4xl mx-auto text-center py-20 px-6">
        <h3 className="text-base md:text-lg text-gray-500 tracking-widest uppercase mb-4 font-semibold">
          International Teachers & Dedicated Staffs
        </h3>
        <h1 className="text-4xl md:text-5xl font-serif text-[#0B3B24] font-bold mb-8">
          Our Team
        </h1>
        <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg">
          Our team of international teachers and dedicated staff at Sivananda Yoga Dalat Resort & Training Center, as well as our centers across Vietnam, is committed to carrying forward the authentic lineage of classical yoga. With deep knowledge, compassion, and a spirit of selfless service, they are here to guide your journey of self-discovery, healing, and transformation.
        </p>
      </section>

      {/* 3. SENIOR TEACHERS SECTION */}
      <SeniorTeachers />

      {/* 4. SENIOR STAFFS SECTION */}
      <section className="max-w-6xl mx-auto py-24 px-6 border-t border-gray-100 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-[#0B3B24] font-bold mb-2">
            Senior Staffs
          </h2>
          <p className="text-gray-500 text-base italic">
            Sivananda Yoga Dalat Resort & Training Center
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {seniorStaffs.map((staff, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="relative w-full aspect-square rounded-md overflow-hidden mb-6 shadow-sm group">
                <Image
                  src={staff.image}
                  alt={staff.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-1">
                {staff.name}
              </h3>
              <p className="text-base text-gray-500 uppercase tracking-wide font-semibold">
                {staff.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="w-full bg-[#F4F7F0] mt-12">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-[40%] text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold leading-tight">
              Your Support
              <br />
              Makes
              <br />
              a Difference
            </h2>
          </div>

          <div className="w-full md:w-[60%] flex flex-col items-center md:items-start border-t md:border-t-0 md:border-l border-[#0B3B24]/20 pt-8 md:pt-0 md:pl-12">
            <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
              Your donation supports our mission of spreading classical yoga, health and inner peace. By contributing, you help fund teacher training programs, outreach, ashram maintenance, and scholarship programs. Every offering makes an impact on healing and spiritual growth, empowering individuals and communities to live a life of peace and well-being.{" "}
              <Link href="/about" className="font-semibold underline cursor-pointer">
                Learn more
              </Link>
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#E5F5C8] hover:bg-[#d4e8aa] text-[#0B3B24] px-10 py-3 font-bold tracking-widest text-base uppercase transition-colors shadow-sm rounded-sm"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
