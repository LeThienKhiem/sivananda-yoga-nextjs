"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Circle } from 'lucide-react';

const timelineData = [
  {
    year: '2000',
    title: 'A Miraculous Beginning',
    subtitle: '',
    text: ['Swami Sitaramananda, originally from Vietnam, returns to her homeland to introduce the teachings of her Guru, Swami Vishnudevananda. She organizes the first yoga retreats and teacher training courses, planting the seeds of Sivananda Yoga in Vietnam.'],
    image: 'https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-06.png',
  },
  {
    year: '2010',
    title: 'Establishing the First Centre',
    subtitle: 'Sivananda Yoga Vedanta Ho Chi Minh Center',
    text: ['In 2010, the first Sivananda Yoga Centre is officially opened in Ho Chi Minh City. This center becomes a vibrant hub for the local community, offering daily yoga classes, workshops, and satsangs.', "It provides a sanctuary for urban dwellers to find peace and balance amidst the busy city life. The center's establishment marks a significant milestone, providing a permanent home for Sivananda Yoga in Vietnam and paving the way for future growth."],
    image: 'https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-09.png',
  },
  {
    year: '2011',
    title: 'Opening the Ashram',
    subtitle: 'Sivananda Yoga Vedanta Dalat Resort & Training',
    text: ['The vision of establishing an ashram in Vietnam is realized with the opening of the Sivananda Yoga Resort and Training Center in Da Lat. Nestled in the serene pine forests and overlooking Tuyen Lam Lake, the ashram provides an ideal environment for deep spiritual practice and intensive training.', "The ashram begins hosting the 200-hour and 500-hour Teachers' Training Courses (TTC and ATTC), drawing students from across Vietnam and internationally. It becomes a central pillar for the Sivananda organization in Asia, fostering a dedicated community of practitioners."],
    image: 'https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-08.png',
  },
  {
    year: '2019',
    title: 'Expansion to Da Lat',
    subtitle: 'Sivananda Yoga Vedanta Da Lat Center',
    text: ['To better serve the local community in Da Lat city, a new center is opened. This allows residents to easily access daily classes and programs without needing to travel to the ashram. The city center complements the ashram by providing a convenient location for continuous practice and community engagement.'],
    image: 'https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-07.png',
  },
  {
    year: '2022',
    title: 'Expansion to Hanoi',
    subtitle: 'Sivananda Yoga Vedanta Hanoi Center',
    text: ['In 2022, Sivananda Yoga expands its presence to the capital city, Hanoi. The new center brings the classical teachings to the northern region, welcoming a growing number of practitioners eager to learn about holistic health and spiritual well-being.', 'The Hanoi center quickly establishes itself as a vital part of the local yoga community, offering a peaceful retreat in the heart of the bustling city.'],
    image: 'https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-10.png',
  },
  {
    year: '2023',
    title: 'Opening the Door to Therapeutic Yoga',
    subtitle: 'Sivananda Yoga The Health House',
    text: ["With a growing emphasis on yoga therapy and holistic health, the Health House is officially opened at the Dalat Ashram. This dedicated facility focuses on Ayurvedic principles and therapeutic yoga, offering personalized treatments, detox programs, and specialized training like the Sivananda Yoga Health Educator Training (SYHET).", "The Health House marks a new chapter in the organization's mission to provide comprehensive and accessible natural healing."],
    image: 'https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-11.png',
  },
];

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full flex flex-col mt-16 md:mt-0">
        <div className="relative w-full h-[40vh] min-h-[300px] md:h-[55vh] md:min-h-[450px] z-0">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Mission and Vision"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Seamless Overlapping Content Box */}
        <div className="relative z-10 w-[95%] max-w-5xl mx-auto bg-[#FDFCF8] px-6 pt-10 pb-6 md:pt-14 md:pb-10 text-center -mt-16 md:-mt-24">
          <p className="text-base md:text-lg text-gray-500 font-medium mb-3 tracking-widest uppercase">
            Sivananda Yoga Resort and Training Center Dalat
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold">
            Our Mission & Vision
          </h1>
        </div>
      </section>

      {/* 2. CORE CONTENT SECTION (Matches Reference Image Exactly) */}
      <section className="bg-[#FDFCF8] py-20 md:py-32 px-6 w-full flex-grow">
        <div className="max-w-5xl mx-auto">

          {/* Top Intro Text */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed font-medium">
              We relate to people as their inner nature and do not judge or value ourselves based on race, gender, occupation, performance, material conditions or personality.
            </p>
          </div>

          {/* Mission & Vision 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
            {/* Mission */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                Practicing and teaching the ancient yogic knowledge of health, peace, unity in diversity and Self-realization.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                To help all realize their highest potential and find inner peace. Inner peace will bring outer peace.
              </p>
            </div>
          </div>

          {/* We Value Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

            {/* Left: Logo */}
            <div className="flex justify-center md:justify-end md:pr-10">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-01.jpg"
                  alt="Sivananda Yoga Resort & Training Center Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Values List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-8">
                We Value
              </h2>
              <ul className="space-y-5 text-[#4A4A4A] text-base md:text-lg">
                <li className="flex items-start gap-4">
                  <Circle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>Be in the world and not of the world</span>
                </li>
                <li className="flex items-start gap-4">
                  <Circle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>Adapt, adjust, accommodate-highest yoga</span>
                </li>
                <li className="flex items-start gap-4">
                  <Circle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>Group positive intentions and prayers make miracles</span>
                </li>
                <li className="flex items-start gap-4">
                  <Circle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>We serve everyone equally with respect</span>
                </li>
                <li className="flex items-start gap-4">
                  <Circle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>We respect traditions and understand there are values in timeless teachings</span>
                </li>
                <li className="flex items-start gap-4">
                  <Circle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>Worship sages, saints and our gurus. The blind can&apos;t lead the blind</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SYVC WORLDWIDE SECTION */}
      <section className="bg-[#F4F7F0] py-24 px-6 w-full border-t border-gray-200/50">
        <div className="max-w-5xl mx-auto">

          {/* Top: Text and Logo */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 lg:gap-20 items-center mb-24 md:mb-32">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-8 font-normal">
                Sivananda Yoga Vedanta Center (SYVC)
              </h2>
              <div className="space-y-6 text-[#4A4A4A] text-sm md:text-base leading-relaxed text-justify md:text-left">
                <p>
                  The International Sivananda Yoga Vedanta Centres is a non-profit organization named after Swami Sivananda, one of the most influential spiritual teachers of the 20th century and founded by his disciple Swami Vishnudevananda. In 1957, Swami Vishnudevananda, on instructions from his guru, Swami Sivananda, came to the West to bring the teachings of yoga. He established the first Sivananda Yoga Vedanta Centre in Montreal, Canada, in 1959.
                </p>
                <p>
                  To date there are close to 60 Sivananda locations (ashrams, yoga centres and affiliated centres) around the world. Over 52,000 teachers have been trained in the TTC programs. The Sivananda Yoga Vedanta Ashrams and Centers are recognized worldwide for teaching yoga authentically, preserving its purity and following a tradition dating back several thousand years. We offer a wide range of programs and the possibility for personal growth through Karma yoga as a temporary or full time staff program participant.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              {/* True World Order Logo */}
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/bc22e5c9-2972-4ed8-b96a-6101212f867b.png"
                  alt="True World Order"
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>

          {/* Bottom: Map and Floating Stats */}
          <div className="relative w-full max-w-5xl mx-auto mt-16 mb-16 md:mb-24">

            {/* Map Image (Using standard img tag to prevent Next.js from removing transparent background) */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[2/1]">
              <img
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-03.png"
                alt="Sivananda World Map"
                className="w-full h-full object-contain scale-110 md:scale-125"
              />
            </div>

            {/* Floating Stat 1: Teachers */}
            <div className="absolute top-0 md:top-[10%] left-0 md:-left-[10%] bg-white/95 backdrop-blur-sm rounded-full w-36 h-36 md:w-56 md:h-56 flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-4 md:p-6 text-center z-10">
              <span className="text-xl md:text-4xl font-serif text-[#111111] mb-1 md:mb-2 font-light">52,000 +</span>
              <span className="text-[9px] md:text-xs text-[#4A4A4A] tracking-wide font-medium">Yoga Teachers Trained</span>
              <span className="text-[10px] md:text-sm text-[#111111] font-bold mt-0.5 md:mt-1">since 1969</span>
            </div>

            {/* Floating Stat 2: Ashrams */}
            <div className="absolute top-[30%] md:top-[20%] right-[-5%] md:-right-[5%] bg-white/95 backdrop-blur-sm rounded-full w-28 h-28 md:w-48 md:h-48 flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-3 md:p-4 text-center z-10">
              <span className="text-xl md:text-4xl font-serif text-[#111111] mb-1 md:mb-2 font-light">11</span>
              <span className="text-[9px] md:text-xs text-[#4A4A4A] tracking-wide font-medium">Ashram Worldwide</span>
            </div>

            {/* Floating Stat 3: Centers */}
            <div className="absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full w-32 h-32 md:w-52 md:h-52 flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-4 text-center z-10">
              <span className="text-xl md:text-4xl font-serif text-[#111111] mb-1 md:mb-2 font-light">31 +</span>
              <span className="text-[9px] md:text-xs text-[#4A4A4A] tracking-wide font-medium">Yoga Centers Worldwide</span>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR HISTORY & IMPACT IN VIETNAM */}
      <section className="bg-[#FDFCF8] py-24 px-6 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* Intro Section */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center mb-32">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-8 font-bold uppercase tracking-wide">
                Our History & Impact In Vietnam
              </h2>
              <div className="space-y-6 text-[#4A4A4A] text-sm md:text-base leading-relaxed">
                <p>
                  The Sivananda Yoga Vedanta Centres have been present in Vietnam since 2000. It was brought to this country by Swami Sitaramananda, who was born in Vietnam and is a senior disciple of Swami Vishnudevananda.
                </p>
                <p>
                  For more than two decades, the organization has continuously expanded its reach, bringing the light of classical yoga to thousands of Vietnamese people. Today, it stands as a cornerstone of holistic health and spiritual wellness in the country.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-08.png"
                alt="Sivananda History in Vietnam"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Timeline Intro */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-6">
              The Journey of Sivananda Yoga in Vietnam
            </h2>
            <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed">
              Over the past two decades, Sivananda Yoga has grown from a single seed of inspiration into a flourishing network of centers and an ashram. This journey is a testament to the dedication of Swami Sitaramananda, the hard work of staff and volunteers, and the transformative power of classical yoga teachings. Here are the key milestones in our ongoing mission.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative w-full max-w-5xl mx-auto mt-16">
            {/* Central Dashed Line */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-orange-200/60 -translate-x-1/2" />

            <div className="space-y-16 md:space-y-12">
              {timelineData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={item.year} className={`relative flex flex-col md:flex-row items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>

                    {/* Timeline Dot & Year */}
                    <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 mt-8 md:mt-[4.5rem]">
                      {/* Desktop Year */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-bold text-[#0B3B24] text-xl ${isEven ? 'left-8' : 'right-8'}`}>
                        {item.year}
                      </div>
                      {/* Circle Indicator */}
                      <div className="w-5 h-5 rounded-full bg-[#E5F5C8] border-4 border-[#A3B827] shadow-sm" />
                    </div>

                    {/* Content Card Container */}
                    <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow">

                        {/* Mobile Year Badge */}
                        <div className="md:hidden inline-block bg-[#E5F5C8] text-[#4F6F1F] font-bold text-xs px-3 py-1 rounded-full mb-4">
                          {item.year}
                        </div>

                        {/* Image */}
                        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-sm border border-gray-50">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        {/* Text */}
                        <h3 className="text-xl md:text-2xl font-serif text-[#0B3B24] font-bold mb-2">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <h4 className="text-xs md:text-sm font-bold text-[#4F6F1F] mb-4 leading-tight">
                            {item.subtitle}
                          </h4>
                        )}

                        <div className="space-y-3 text-[#4A4A4A] text-sm md:text-base leading-relaxed">
                          {item.text.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 5. OUR LINEAGE OF TEACHING SECTION */}
      <section className="bg-[#F4F7F0] py-24 px-6 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-3">
                Our Lineage of Teaching
              </h2>
              <p className="text-lg md:text-xl text-[#6B7280] font-medium mb-6">
                From the Himalayas to Vietnam
              </p>
            </div>

            <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
              Our lineage flows from the great Himalayan tradition, passed down through Master Swami Sivananda and his disciple Swami Vishnudevananda. Rooted in ancient Vedantic wisdom, this living tradition emphasizes selfless service, discipline, devotion, and spiritual knowledge—offering a holistic path to inner transformation, health, and Self-realization for seekers around the world.
            </p>

            <div className="pt-6">
              <Link href="/about">
                <button className="bg-[#E5F5C8] text-[#0B3B24] hover:bg-[#d4e8aa] px-8 py-3.5 rounded-sm font-bold tracking-widest text-sm uppercase transition-colors shadow-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/teacher01.png"
                alt="Our Lineage of Teaching"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. OUR TEAM SECTION */}
      <section className="bg-[#FDFCF8] py-24 px-6 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-3">
                Our Team
              </h2>
              <p className="text-lg md:text-xl text-[#6B7280] font-medium mb-6">
                Senior Teachers and Dedicated Staffs
              </p>
            </div>

            <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
              Our senior teachers and dedicated staff are long-time practitioners deeply rooted in the Sivananda tradition. With years of experience, they embody the spirit of service, devotion, and discipline—guiding students with compassion, wisdom, and authenticity. Together, they uphold the mission of sharing classical yoga for healing, transformation, and inner peace.
            </p>

            <div className="pt-6">
              <Link href="/our-teachers">
                <button className="bg-[#E5F5C8] text-[#0B3B24] hover:bg-[#d4e8aa] px-8 py-3.5 rounded-sm font-bold tracking-widest text-sm uppercase transition-colors shadow-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/mission-vision-04.png"
                alt="Our Team - Senior Teachers and Staffs"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 7. OUR PLACE SECTION */}
      <section className="bg-[#F4F7F0] py-24 px-6 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-3">
                Our Place
              </h2>
              <p className="text-lg md:text-xl text-[#6B7280] font-medium mb-6">
                A Sanctuary for Healing and Practice
              </p>
            </div>

            <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
              Our place is a peaceful sanctuary nestled in nature, designed to support healing, reflection, and spiritual growth. Rooted in the yogic tradition, it offers a nurturing environment where students can retreat from daily stress, reconnect with themselves, and experience the transformative power of classical yoga in a supportive community setting.
            </p>

            <div className="pt-6">
              <Link href="/da-lat-ashram-health-house">
                <button className="bg-[#E5F5C8] text-[#0B3B24] hover:bg-[#d4e8aa] px-8 py-3.5 rounded-sm font-bold tracking-widest text-sm uppercase transition-colors shadow-sm">
                  Explore The Resort
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-sm overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/venue-06.png"
                alt="Our Place - A Sanctuary for Healing and Practice"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 8. DONATION SECTION */}
      <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000"
            alt="Forest Background"
            fill
            className="object-cover"
          />
          {/* Faded overlay to match the reference image */}
          <div className="absolute inset-0 bg-[#FDFCF8]/90 backdrop-blur-[2px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 w-full">

          {/* Left: Title */}
          <div className="w-full md:w-[40%] text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0B3B24] font-bold leading-snug">
              Your Support<br />
              Makes<br />
              a Difference
            </h2>
          </div>

          {/* Right: Text and Button */}
          <div className="w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg mb-8">
              Your donation supports our mission of spreading classical yoga, health, and inner peace. Contributions help fund teacher training, community outreach, ashram maintenance, and scholarship programs. Every offering sustains a space of healing and spiritual growth, empowering more lives to access the timeless wisdom of yoga and the path to self-healing. <a href="#" className="underline font-medium hover:text-[#0B3B24] transition-colors">Learn more</a>
            </p>

            <button className="bg-[#E5F5C8] text-[#0B3B24] hover:bg-[#d4e8aa] px-10 py-3.5 rounded-sm font-bold tracking-widest text-sm uppercase transition-colors shadow-sm">
              Donate
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
