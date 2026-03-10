"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ChevronLeft, ChevronRight, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/utils/supabase';

export default function UpcomingEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Slider & Drag States
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // 1. FETCH COURSES FROM SUPABASE
  useEffect(() => {
    fetchLatestCourses();
  }, []);

  const fetchLatestCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      console.error("Error fetching latest courses:", error);
    } else {
      setEvents(data || []);
      cardRefs.current = new Array(data?.length || 0).fill(null);
    }
    setLoading(false);
  };

  // Helper: use course image from DB; placeholder only when image_url is not set (set via /admin/courses)
  const getCourseImage = (course: any) => {
    return course?.image_url || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800";
  };

  // 2. SLIDER & DRAG LOGIC
  const handleScroll = () => {
    if (!scrollRef.current || events.length === 0) return;
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef && events.length > 0) {
      currentRef.addEventListener('scroll', handleScroll, { passive: true });
      setTimeout(() => handleScroll(), 100);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, [events]);

  const scrollTo = (index: number) => {
    if (!scrollRef.current || !cardRefs.current[index]) return;
    const card = cardRefs.current[index];
    const container = scrollRef.current;
    const scrollPosition = card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollSnapType = 'none';
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  if (loading) {
    return (
      <section className="bg-[#FDFCF8] py-24 w-full flex justify-center items-center min-h-[400px]">
        <Loader2 className="animate-spin text-[#ED7D4D] w-12 h-12" />
      </section>
    );
  }

  if (events.length === 0) return null;

  return (
    <section className="bg-[#FDFCF8] py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold mb-4">
            Upcoming Events & Courses
          </h2>
          <p className="text-[#4A4A4A] text-lg font-medium">
            Join our transformational programs and retreats
          </p>
        </div>
      </div>

      <div className="relative w-full group">
        <button onClick={() => activeIndex > 0 && scrollTo(activeIndex - 1)} className={`hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 lg:left-12 z-30 w-14 h-14 rounded-full border bg-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] items-center justify-center transition-all duration-300 ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24] hover:text-white hover:scale-110 opacity-0 group-hover:opacity-100'}`}><ChevronLeft size={28} /></button>
        <button onClick={() => activeIndex < events.length - 1 && scrollTo(activeIndex + 1)} className={`hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 lg:right-12 z-30 w-14 h-14 rounded-full border bg-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] items-center justify-center transition-all duration-300 ${activeIndex === events.length - 1 ? 'opacity-0 pointer-events-none' : 'border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24] hover:text-white hover:scale-110 opacity-0 group-hover:opacity-100'}`}><ChevronRight size={28} /></button>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeaveOrUp} onMouseUp={handleMouseLeaveOrUp} onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto snap-x snap-mandatory touch-pan-x items-stretch min-h-[500px] px-[calc(50%-140px)] md:px-[calc(50%-200px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          {events.map((course, index) => {
            const isActive = activeIndex === index;
            // Get first category or fallback
            const categoryDisplay = course.category && course.category.length > 0 ? course.category[0] : "Course";

            return (
              <div key={course.id} ref={(el) => { cardRefs.current[index] = el; }} onClick={() => !isDragging && scrollTo(index)} className={`snap-center shrink-0 w-[280px] md:w-[400px] mx-2 md:mx-4 transition-all duration-500 ease-out transform origin-center py-8 ${isActive ? 'scale-100 opacity-100 z-20' : 'scale-[0.85] opacity-40 hover:opacity-70 z-10'}`}>
                <Link href={`/syhet-courses/${course.slug || course.id}`} onClick={(e) => { if (isDragging) e.preventDefault(); }} className={`bg-white rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full border md:pointer-events-auto ${isActive ? 'border-[#0B3B24]/30 border-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] block' : 'border-gray-200 shadow-md block pointer-events-none'}`}>
                  <div className="relative w-full aspect-[4/3]">
                    <Image src={getCourseImage(course)} alt={course.title} fill className="object-cover" draggable={false} />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0B3B24] tracking-widest uppercase">
                      {categoryDisplay}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <p className="text-xs font-bold text-[#A3B827] uppercase tracking-widest mb-2">{course.price_display}</p>
                    <h3 className="text-xl md:text-2xl font-serif text-[#0B3B24] font-bold mb-6 line-clamp-2 leading-tight group-hover:text-[#ED7D4D] transition-colors">{course.title}</h3>
                    <div className="space-y-3 mt-auto">
                      <div className="flex items-center gap-3 text-sm text-[#4A4A4A]">
                        <Calendar className="w-4 h-4 text-[#ED7D4D] flex-shrink-0" />
                        <span className="font-medium line-clamp-1">{course.date_display || "TBA"}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[#4A4A4A]">
                        <MapPin className="w-4 h-4 text-[#ED7D4D] flex-shrink-0" />
                        <span className="line-clamp-1">{course.location || "Sivananda Ashram"}</span>
                      </div>
                    </div>
                    <div className={`mt-8 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <button className="flex items-center justify-center gap-2 w-full bg-[#F4F7F0] hover:bg-[#ED7D4D] hover:text-white text-[#0B3B24] py-3 rounded-md font-bold text-sm tracking-widest uppercase transition-colors group">
                        View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-2 md:hidden">
        {events.map((_, idx) => <button key={idx} onClick={() => scrollTo(idx)} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#0B3B24]' : 'w-2 bg-gray-300'}`} />)}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/syhet-courses">
          <button className="bg-transparent border-2 border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24] hover:text-white px-10 py-3 rounded-sm font-bold tracking-widest text-sm uppercase transition-all shadow-sm">
            View All Courses
          </button>
        </Link>
      </div>
    </section>
  );
}
