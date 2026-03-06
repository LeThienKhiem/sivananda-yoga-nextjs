"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Yoga Teacher Training Course (TTC)",
    date: "15 Oct - 12 Nov, 2026",
    location: "Sivananda Ashram, Dalat",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800",
    category: "Certification",
  },
  {
    id: 2,
    title: "Sadhana Intensive (SI)",
    date: "20 Nov - 04 Dec, 2026",
    location: "Sivananda Ashram, Dalat",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
    category: "Advanced Practice",
  },
  {
    id: 3,
    title: "Ayurveda Wellness Retreat",
    date: "10 Dec - 15 Dec, 2026",
    location: "Sivananda Ashram, Dalat",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?q=80&w=800",
    category: "Retreat",
  },
  {
    id: 4,
    title: "Meditation & Silence Retreat",
    date: "05 Jan - 12 Jan, 2027",
    location: "Sivananda Ashram, Dalat",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800",
    category: "Spiritual",
  },
  {
    id: 5,
    title: "Kids Yoga Camp",
    date: "01 Jun - 07 Jun, 2027",
    location: "Sivananda Ashram, Dalat",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
    category: "Youth",
  },
];

export interface EventsCarouselProps {
  title?: string;
  subtitle?: string;
}

export default function EventsCarousel({
  title = "Upcoming Events",
  subtitle,
}: EventsCarouselProps) {
  const displaySubtitle = subtitle ?? "Join our transformational programs and retreats";
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, scrollLeft: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragRef.current = {
      startX: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    };
    scrollRef.current.style.scrollSnapType = "none";
    scrollRef.current.style.userSelect = "none";
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = "x mandatory";
      scrollRef.current.style.userSelect = "";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragRef.current.startX) * 2;
    scrollRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  // Detect which card is in the center of the screen
  const handleScroll = () => {
    if (!scrollRef.current) return;

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
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const handleGlobalMouseUp = () => handleMouseLeaveOrUp();
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, [isDragging]);

  // Smooth scroll to a specific index
  const scrollTo = (index: number) => {
    if (!scrollRef.current || !cardRefs.current[index]) return;
    const card = cardRefs.current[index];
    const container = scrollRef.current;

    const scrollPosition =
      card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <section id="events" className="w-full overflow-hidden bg-[#FDFCF8] py-24">
      <div className="mx-auto mb-12 flex max-w-7xl flex-col px-6 md:flex-row md:items-end md:justify-between md:gap-6">
        <div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl">
            {title}
          </h2>
          <p className="text-xl font-medium text-[#4A4A4A]">
            {displaySubtitle}
          </p>
        </div>
      </div>

      {/* Coverflow Slider Container with Absolute Arrows */}
      <div className="group relative w-full">
        {/* Left Arrow (Absolute) */}
        <button
          type="button"
          onClick={() => activeIndex > 0 && scrollTo(activeIndex - 1)}
          className={`absolute left-4 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 md:flex lg:left-12 ${
            activeIndex === 0
              ? "pointer-events-none opacity-0"
              : "border-[#0B3B24] text-[#0B3B24] opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-[#0B3B24] hover:text-white"
          }`}
          aria-label="Previous event"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow (Absolute) */}
        <button
          type="button"
          onClick={() =>
            activeIndex < events.length - 1 && scrollTo(activeIndex + 1)
          }
          className={`absolute right-4 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 md:flex lg:right-12 ${
            activeIndex === events.length - 1
              ? "pointer-events-none opacity-0"
              : "border-[#0B3B24] text-[#0B3B24] opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-[#0B3B24] hover:text-white"
          }`}
          aria-label="Next event"
        >
          <ChevronRight size={28} />
        </button>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex min-h-[550px] items-center overflow-x-auto touch-pan-x snap-x snap-mandatory px-[calc(50%-140px)] [&::-webkit-scrollbar]:hidden md:px-[calc(50%-200px)] [-ms-overflow-style:none] [scrollbar-width:none] ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {events.map((event, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={event.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={() => !isDragging && scrollTo(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") scrollTo(index);
                }}
                className={`mx-2 shrink-0 w-[280px] snap-center origin-center transition-all duration-500 ease-out md:mx-4 md:w-[400px] ${
                  isActive ? "z-20 scale-100 opacity-100" : "z-10 scale-[0.85] opacity-40 hover:opacity-70"
                }`}
              >
                {/* Event Card */}
                <div
                  className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-500 pointer-events-none md:pointer-events-auto ${
                    isActive ? "border-2 border-[#0B3B24]/30" : "border-gray-200"
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 400px"
                      draggable={false}
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-base font-bold uppercase tracking-widest text-[#0B3B24] backdrop-blur-sm">
                      {event.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-grow flex-col p-6 md:p-8">
                    <h3 className="mb-6 line-clamp-2 font-serif text-2xl font-bold leading-tight text-[#0B3B24] md:text-2xl">
                      {event.title}
                    </h3>

                    <div className="mt-auto space-y-3">
                      <div className="flex items-center gap-3 text-base text-[#4A4A4A]">
                        <Calendar className="h-4 w-4 shrink-0 text-[#ED7D4D]" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-base text-[#4A4A4A]">
                        <MapPin className="h-4 w-4 shrink-0 text-[#ED7D4D]" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div
                      className={`mt-8 overflow-hidden transition-all duration-500 ${
                        isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <button
                        type="button"
                        className="group flex w-full items-center justify-center gap-2 rounded-md bg-[#F4F7F0] py-3 text-base font-bold uppercase tracking-widest text-[#0B3B24] transition-colors hover:bg-[#ED7D4D] hover:text-white"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Pagination Dots */}
      <div className="mt-8 flex justify-center gap-2 md:hidden">
        {events.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? "w-8 bg-[#0B3B24]" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to event ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
