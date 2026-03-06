"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Calendar, MapPin, Heart, ChevronUp, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const HERO_IMAGE = "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2000";

// --- MOCK DATA MATCHING DATABASE SCHEMA ---
const mockCourses = [
  {
    id: '1',
    title: 'Teacher Training Course 200 hours Certificate',
    image_url: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800',
    category: ['Teacher Training', 'Upcoming'],
    pricing: 'Paid',
    price_display: 'FROM $1450',
    course_type: 'Offline',
    languages: ['English', 'Vietnamese'],
    date_display: 'JUNE 12 - JULY 11',
    location: 'Sivananda Yoga Resort and Training Center DaLat',
    registration_link: 'https://sivanandayogavietnam.secure.retreat.guru/program/vacation/?form=1&lang=en',
    is_active: true
  },
  {
    id: '2',
    title: 'Advanced Pranayama & Vedanta Retreat',
    image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
    category: ['Yoga Vacation', 'Upcoming'],
    pricing: 'Paid',
    price_display: 'FROM $80',
    course_type: 'Offline and Online',
    languages: ['English'],
    date_display: 'JUNE 12 - JULY 11',
    location: 'Online',
    registration_link: '#',
    is_active: true
  },
  {
    id: '3',
    title: 'Satsang: The Power of Chanting',
    image_url: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800',
    category: ['Workshop'],
    pricing: 'Free',
    price_display: 'FREE',
    course_type: 'Online',
    languages: ['Vietnamese', 'English'],
    date_display: 'TUESDAY, JUNE 29 | 08:00 PM',
    location: 'Online',
    registration_link: '#',
    is_active: true
  },
  {
    id: '4',
    title: 'Ayurveda Foundation 100 Hours',
    image_url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800',
    category: ['Ayurveda', 'Holistic Health'],
    pricing: 'Paid',
    price_display: 'FROM $100',
    course_type: 'Offline',
    languages: ['English', 'Chinese'],
    date_display: 'MONDAY, JUNE 05 | 08:00 PM',
    location: 'Sivananda Yoga Resort and Training Center DaLat',
    registration_link: '#',
    is_active: true
  }
];

export default function CoursesPage() {
  // Simple state to toggle filter sections (UI only for now)
  const [filtersOpen, setFiltersOpen] = useState({
    category: true,
    pricing: true,
    type: true,
    language: true
  });

  const toggleFilter = (section: keyof typeof filtersOpen) => {
    setFiltersOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full flex flex-col mt-16 md:mt-0">
        <div className="relative w-full h-[40vh] min-h-[300px] md:h-[50vh] md:min-h-[400px] z-0">
          <Image 
            src={HERO_IMAGE}
            alt="Sivananda Yoga Courses"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Seamless Overlapping Content Box */}
        <div className="relative z-10 w-[95%] max-w-4xl mx-auto bg-[#FDFCF8] px-6 pt-10 pb-6 md:pt-14 md:pb-10 text-center -mt-16 md:-mt-24">
          <p className="text-base md:text-lg text-gray-600 font-medium mb-2 md:mb-4">
            Sivananda Yoga Resort and Training Center Dalat
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold">
            Our Courses
          </h1>
        </div>
      </section>

      {/* 2. MAIN CONTENT (FILTER + LIST) */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* LEFT: FILTER SIDEBAR */}
        <aside className="w-full lg:w-[280px] shrink-0">
          <h2 className="text-xl font-bold text-[#4A4A4A] mb-8">Filter</h2>

          <div className="space-y-6">
            {/* CATEGORY */}
            <div className="border-b border-gray-200 pb-6">
              <button onClick={() => toggleFilter('category')} className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest text-[#4A4A4A] mb-4">
                Category
                {filtersOpen.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {filtersOpen.category && (
                <div className="space-y-3">
                  {['All', 'Upcoming', 'Yoga Vacation', 'Ayurveda', 'Workshop', 'Short Courses', 'Holistic Health', 'Teacher Training'].map((item, idx) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${idx === 0 || idx === 1 ? 'bg-[#A3B827] border-[#A3B827]' : 'border-gray-300 group-hover:border-[#A3B827]'}`}>
                        {(idx === 0 || idx === 1) && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                      </div>
                      <span className="text-sm text-[#4A4A4A]">{item}</span>
                    </label>
                  ))}
                  <button className="text-xs text-gray-500 hover:text-[#0B3B24] pt-2">Show more</button>
                </div>
              )}
            </div>

            {/* PRICING */}
            <div className="border-b border-gray-200 pb-6">
              <button onClick={() => toggleFilter('pricing')} className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest text-[#4A4A4A] mb-4">
                Pricing
                {filtersOpen.pricing ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {filtersOpen.pricing && (
                <div className="flex gap-6">
                  {['Free', 'Paid'].map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-gray-300 group-hover:border-[#A3B827]"></div>
                      <span className="text-sm text-[#4A4A4A]">{item}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* TYPE */}
            <div className="border-b border-gray-200 pb-6">
              <button onClick={() => toggleFilter('type')} className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest text-[#4A4A4A] mb-4">
                Type
                {filtersOpen.type ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {filtersOpen.type && (
                <div className="space-y-3">
                  {['Online', 'Offline', 'Offline and Online'].map((item, idx) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${idx === 2 ? 'bg-[#A3B827] border-[#A3B827]' : 'border-gray-300 group-hover:border-[#A3B827]'}`}>
                        {idx === 2 && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                      </div>
                      <span className="text-sm text-[#4A4A4A]">{item}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* LANGUAGE */}
            <div className="pb-6">
              <button onClick={() => toggleFilter('language')} className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest text-[#4A4A4A] mb-4">
                Language
                {filtersOpen.language ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {filtersOpen.language && (
                <div className="space-y-3">
                  {['English', 'Chinese', 'Japanese', 'Vietnamese'].map((item, idx) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${idx === 0 ? 'bg-[#A3B827] border-[#A3B827]' : 'border-gray-300 group-hover:border-[#A3B827]'}`}>
                        {idx === 0 && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                      </div>
                      <span className="text-sm text-[#4A4A4A]">{item}</span>
                    </label>
                  ))}
                  <button className="text-xs text-gray-500 hover:text-[#0B3B24] pt-2">Show more</button>
                </div>
              )}
            </div>

            {/* Filter Actions */}
            <div className="flex items-center gap-4 pt-4">
              <button className="flex-1 py-3 text-sm font-bold text-gray-500 hover:text-[#0B3B24] transition-colors">
                Clear all
              </button>
              <button className="flex-1 py-3 bg-[#A3B827] hover:bg-[#8e9f22] text-white rounded text-sm font-bold transition-colors">
                Apply
              </button>
            </div>
          </div>
        </aside>

        {/* RIGHT: COURSE LIST */}
        <div className="flex-1">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#0B3B24] mb-6">Upcoming Courses</h2>
          
          <div className="space-y-6">
            {mockCourses.map((course, idx) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden group hover:shadow-md transition-shadow">
                
                {/* Course Image */}
                <div className="relative w-full md:w-[35%] lg:w-[40%] aspect-video md:aspect-auto min-h-[220px] overflow-hidden">
                  <Image 
                    src={course.image_url} 
                    alt={course.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  {/* Favorite Icon */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                    <Heart size={16} className={idx === 1 ? 'fill-red-500 text-red-500' : ''} />
                  </button>
                </div>

                {/* Course Details */}
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
                  <p className="text-xs font-bold text-[#A3B827] uppercase tracking-widest mb-2">
                    {course.price_display}
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-serif text-[#0B3B24] font-bold mb-6 line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-[#4A4A4A]">
                      <Calendar className="w-4 h-4 text-[#4F6F1F] flex-shrink-0" />
                      <span className="font-medium">{course.date_display}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#4A4A4A]">
                      <MapPin className="w-4 h-4 text-[#4F6F1F] flex-shrink-0" />
                      <span>{course.location}</span>
                    </div>
                  </div>

                  {/* Register Button/Link */}
                  <div className="mt-auto flex justify-end">
                    <Link href={course.registration_link}>
                      <button className="bg-transparent border border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24] hover:text-white px-6 py-2 rounded font-bold text-xs tracking-widest uppercase transition-all">
                        Register Now
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
