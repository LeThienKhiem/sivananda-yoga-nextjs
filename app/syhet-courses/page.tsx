"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/utils/supabase';
import { getCourseImageUrl } from '@/utils/course-images';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Calendar, MapPin, Heart, ChevronUp, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const HERO_IMAGE = "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2000";

const CATEGORY_OPTIONS = ['All', 'Upcoming', 'Yoga Vacation', 'Ayurveda', 'Workshop', 'Short Courses', 'Holistic Health', 'Teacher Training'];
const PRICING_OPTIONS = ['Free', 'Paid'];
const TYPE_OPTIONS = ['Online', 'Offline', 'Offline and Online'];
const LANGUAGE_OPTIONS = ['English', 'Chinese', 'Japanese', 'Vietnamese'];

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Draft states (updated when checkboxes are toggled)
  const [draftCategories, setDraftCategories] = useState<string[]>(['All']);
  const [draftPricing, setDraftPricing] = useState<string[]>([]);
  const [draftTypes, setDraftTypes] = useState<string[]>([]);
  const [draftLanguages, setDraftLanguages] = useState<string[]>([]);

  // Applied states (updated only when Apply is clicked)
  const [appliedCategories, setAppliedCategories] = useState<string[]>(['All']);
  const [appliedPricing, setAppliedPricing] = useState<string[]>([]);
  const [appliedTypes, setAppliedTypes] = useState<string[]>([]);
  const [appliedLanguages, setAppliedLanguages] = useState<string[]>([]);

  // Pagination: number of courses to display
  const [visibleCount, setVisibleCount] = useState(10);

  // UI: toggle filter sections
  const [filtersOpen, setFiltersOpen] = useState({
    category: true,
    pricing: true,
    type: true,
    language: true
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Error fetching courses:", error);
    } else {
      setCourses(data || []);
    }
    setLoading(false);
  };

  const toggleFilter = (section: keyof typeof filtersOpen) => {
    setFiltersOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Toggle draft state for a single option
  const toggleDraft = (
    key: 'categories' | 'pricing' | 'types' | 'languages',
    value: string
  ) => {
    const setters = {
      categories: setDraftCategories,
      pricing: setDraftPricing,
      types: setDraftTypes,
      languages: setDraftLanguages,
    };
    const getters = {
      categories: draftCategories,
      pricing: draftPricing,
      types: draftTypes,
      languages: draftLanguages,
    };
    const current = getters[key];
    const setter = setters[key];

    if (key === 'categories' && value === 'All') {
      setter(current.includes('All') ? [] : ['All']);
      return;
    }
    if (key === 'categories' && current.includes('All')) {
      setter([value]);
      return;
    }
    if (key === 'categories' && value !== 'All') {
      if (current.includes(value)) {
        const next = current.filter((x) => x !== value);
        setter(next.length === 0 ? ['All'] : next);
      } else {
        setter([...current, value]);
      }
      return;
    }

    if (current.includes(value)) {
      setter(current.filter((x) => x !== value));
    } else {
      setter([...current, value]);
    }
  };

  const handleApply = () => {
    setAppliedCategories([...draftCategories]);
    setAppliedPricing([...draftPricing]);
    setAppliedTypes([...draftTypes]);
    setAppliedLanguages([...draftLanguages]);
    setVisibleCount(10);
  };

  const handleClearAll = () => {
    setDraftCategories(['All']);
    setDraftPricing([]);
    setDraftTypes([]);
    setDraftLanguages([]);
    setAppliedCategories(['All']);
    setAppliedPricing([]);
    setAppliedTypes([]);
    setAppliedLanguages([]);
    setVisibleCount(10);
  };

  // Filter logic: applied to courses based on applied states
  const filteredCourses = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    return courses.filter((course) => {
      // Category filter
      const hasCategoryFilter = appliedCategories.length > 0 && !appliedCategories.every((c) => c === 'All');
      if (hasCategoryFilter) {
        const hasUpcoming = appliedCategories.includes('Upcoming');
        const otherCats = appliedCategories.filter((c) => c !== 'All' && c !== 'Upcoming');

        if (hasUpcoming) {
          const startDate = course.start_date ? new Date(course.start_date) : null;
          if (!startDate || startDate < now) return false;
        }
        if (otherCats.length > 0) {
          const courseCats = Array.isArray(course.category) ? course.category : [];
          const intersects = otherCats.some((c) => courseCats.includes(c));
          if (!intersects) return false;
        }
      }

      // Pricing filter
      if (appliedPricing.length > 0) {
        const pricing = (course.pricing || '').toString().toLowerCase();
        const matches = appliedPricing.some((p) =>
          pricing.includes(p.toLowerCase())
        );
        if (!matches) return false;
      }

      // Type filter
      if (appliedTypes.length > 0) {
        const courseType = (course.course_type || '').toString();
        const matches = appliedTypes.some((t) =>
          courseType.toLowerCase().includes(t.toLowerCase())
        );
        if (!matches) return false;
      }

      // Language filter (gracefully ignore if property doesn't exist)
      if (appliedLanguages.length > 0 && course.language != null) {
        const courseLang = (course.language || '').toString();
        const matches = appliedLanguages.some((l) =>
          courseLang.toLowerCase().includes(l.toLowerCase())
        );
        if (!matches) return false;
      }

      return true;
    });
  }, [courses, appliedCategories, appliedPricing, appliedTypes, appliedLanguages]);

  const displayedCourses = filteredCourses.slice(0, visibleCount);

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

          {/* Filter Actions - top */}
          <div className="flex items-center gap-4 mb-8">
            <button onClick={handleClearAll} className="flex-1 py-3 text-sm font-bold text-[#A3B827] hover:text-[#8e9f22] transition-colors">
              Clear all
            </button>
            <button onClick={handleApply} className="flex-1 py-3 bg-[#A3B827] hover:bg-[#8e9f22] text-white rounded text-sm font-bold transition-colors">
              Apply
            </button>
          </div>
          <div className="w-full h-px bg-gray-100 my-6" />

          <div className="space-y-6">
            {/* CATEGORY */}
            <div className="border-b border-gray-200 pb-6">
              <button onClick={() => toggleFilter('category')} className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest text-[#4A4A4A] mb-4">
                Category
                {filtersOpen.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {filtersOpen.category && (
                <div className="space-y-3">
                  {CATEGORY_OPTIONS.map((item) => {
                    const checked = draftCategories.includes(item) || (draftCategories.length === 0 && item === 'All');
                    return (
                      <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleDraft('categories', item)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${checked ? 'bg-[#A3B827] border-[#A3B827]' : 'border-gray-300 group-hover:border-[#A3B827]'}`}>
                          {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                        </div>
                        <span className="text-sm text-[#4A4A4A]">{item}</span>
                      </label>
                    );
                  })}
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
                  {PRICING_OPTIONS.map((item) => {
                    const checked = draftPricing.includes(item);
                    return (
                      <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleDraft('pricing', item)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${checked ? 'bg-[#A3B827] border-[#A3B827]' : 'border-gray-300 group-hover:border-[#A3B827]'}`}>
                          {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                        </div>
                        <span className="text-sm text-[#4A4A4A]">{item}</span>
                      </label>
                    );
                  })}
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
                  {TYPE_OPTIONS.map((item) => {
                    const checked = draftTypes.includes(item);
                    return (
                      <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleDraft('types', item)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${checked ? 'bg-[#A3B827] border-[#A3B827]' : 'border-gray-300 group-hover:border-[#A3B827]'}`}>
                          {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                        </div>
                        <span className="text-sm text-[#4A4A4A]">{item}</span>
                      </label>
                    );
                  })}
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
                  {LANGUAGE_OPTIONS.map((item) => {
                    const checked = draftLanguages.includes(item);
                    return (
                      <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleDraft('languages', item)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${checked ? 'bg-[#A3B827] border-[#A3B827]' : 'border-gray-300 group-hover:border-[#A3B827]'}`}>
                          {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                        </div>
                        <span className="text-sm text-[#4A4A4A]">{item}</span>
                      </label>
                    );
                  })}
                  <button className="text-xs text-gray-500 hover:text-[#0B3B24] pt-2">Show more</button>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* RIGHT: COURSE LIST */}
        <div className="flex-1">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#0B3B24] mb-6">Upcoming Courses</h2>
          
          <div className="space-y-6">
            {loading ? (
              <div className="py-20 flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ED7D4D]"></div>
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="py-20 text-center text-gray-500 bg-white rounded-xl border border-gray-100">
                {courses.length === 0
                  ? 'No courses available at the moment.'
                  : 'No courses match your filters. Try adjusting your selection.'}
              </div>
            ) : (
              <>
              {displayedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden group hover:shadow-md transition-shadow">
                
                {/* Course Image (Clickable to detail) */}
                <Link href={`/syhet-courses/${course.slug || course.id}`} className="relative w-full md:w-[35%] lg:w-[40%] aspect-video md:aspect-auto min-h-[220px] overflow-hidden bg-gray-100 block shrink-0">
                  <Image 
                    src={getCourseImageUrl(course.image_url, course.title)} 
                    alt={course.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    unoptimized
                  />
                  {/* Favorite Icon */}
                  <button onClick={(e) => e.preventDefault()} className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm z-10">
                    <Heart size={16} />
                  </button>
                </Link>

                {/* Course Details */}
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
                  <p className="text-xs font-bold text-[#A3B827] uppercase tracking-widest mb-2">
                    {course.price_display}
                  </p>
                  
                  {/* Title (Clickable to detail) */}
                  <Link href={`/syhet-courses/${course.slug || course.id}`} className="w-fit">
                    <h3 className="text-xl md:text-2xl font-serif text-[#0B3B24] font-bold mb-6 line-clamp-2 hover:text-[#ED7D4D] transition-colors">
                      {course.title}
                    </h3>
                  </Link>
                  
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

                  {/* Buttons Area */}
                  <div className="mt-auto flex flex-wrap justify-end gap-3 pt-4 border-t border-gray-50">
                    <Link href={`/syhet-courses/${course.slug || course.id}`}>
                      <button className="bg-gray-50 text-gray-600 hover:bg-gray-200 px-6 py-2.5 rounded font-bold text-xs tracking-widest uppercase transition-all shadow-sm">
                        Details
                      </button>
                    </Link>
                    
                    {course.registration_link && course.registration_link !== '#' && (
                      <a href={course.registration_link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-transparent border-2 border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24] hover:text-white px-6 py-2 rounded font-bold text-xs tracking-widest uppercase transition-all">
                          Register Now
                        </button>
                      </a>
                    )}
                  </div>
                </div>

              </div>
              ))}
              {visibleCount < filteredCourses.length && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 10)}
                    className="px-6 py-2 border border-[#8BAA36] text-[#8BAA36] hover:bg-[#8BAA36] hover:text-white rounded-md transition-colors font-medium"
                  >
                    See more
                  </button>
                </div>
              )}
              </>
            )}
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
