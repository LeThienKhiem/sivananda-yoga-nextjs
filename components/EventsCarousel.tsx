"use client";

import { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";

const CARD_WIDTH = 320;
const GAP = 24;
const CARD_STEP = CARD_WIDTH + GAP;

const EVENTS = [
  {
    title: "Teacher Training Course",
    date: "September 11 – September 23, 2025",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    alt: "Yoga teacher training",
  },
  {
    title: "Positive Thinking",
    date: "October 2 – October 5, 2025",
    image: "https://images.unsplash.com/photo-1772442363851-738a548f6c5c",
    alt: "Meditation and positive thinking",
  },
  {
    title: "Sadhana Intensive",
    date: "October 15 – October 22, 2025",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
    alt: "Sadhana practice",
  },
  {
    title: "Silent Retreat",
    date: "November 1 – November 5, 2025",
    image: "https://images.unsplash.com/photo-1772379929979-483596bc399e",
    alt: "Silent meditation retreat",
  },
  {
    title: "Ayurveda Workshop",
    date: "November 12 – November 14, 2025",
    image: "https://images.unsplash.com/photo-1591343395902-1adcb454c4e2",
    alt: "Ayurveda and wellness",
  },
  {
    title: "Advanced Asana",
    date: "November 20 – November 24, 2025",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
    alt: "Advanced yoga asana",
  },
  {
    title: "Kids Yoga Camp",
    date: "December 5 – December 7, 2025",
    image: "https://images.unsplash.com/photo-1770873263537-fbb8d39b6103",
    alt: "Children yoga",
  },
  {
    title: "Ayurveda Cooking",
    date: "December 18 – December 20, 2025",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b",
    alt: "Ayurvedic cooking",
  },
  {
    title: "Restorative Yoga Weekend",
    date: "January 9 – January 11, 2026",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
    alt: "Restorative yoga",
  },
  {
    title: "Kirtan & Bhakti Evening",
    date: "January 25, 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    alt: "Kirtan and devotion",
  },
];

const spring = { type: "spring" as const, stiffness: 300, damping: 35 };

export default function EventsCarousel() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useLayoutEffect(() => {
    if (!containerRef.current || !stripRef.current) return;
    const max = Math.max(
      0,
      stripRef.current.scrollWidth - containerRef.current.clientWidth
    );
    setMaxScroll(max);
  }, []);

  const snapTo = (targetPx: number) => {
    const clamped = Math.min(maxScroll, Math.max(0, targetPx));
    animate(x, -clamped, spring);
  };

  const scroll = (direction: "left" | "right") => {
    const current = -x.get();
    const next =
      direction === "left"
        ? Math.max(0, current - CARD_STEP)
        : Math.min(maxScroll, current + CARD_STEP);
    snapTo(next);
  };

  const handleDragEnd = () => {
    const current = -x.get();
    const index = Math.round(current / CARD_STEP);
    const target = index * CARD_STEP;
    snapTo(target);
  };

  return (
    <section id="events" className="bg-[#fcfaf5] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header: title left; View All + arrows right */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="font-serif text-3xl font-bold text-[#598234]">
            Upcoming Events
          </h2>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="rounded border-2 border-[#598234] bg-transparent px-5 py-2.5 font-semibold text-[#598234] transition hover:bg-[#598234]/10"
            >
              View All
            </Link>
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll events left"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-stone-300 bg-transparent text-stone-600 transition hover:border-stone-400 hover:bg-stone-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll events right"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-stone-300 bg-transparent text-stone-600 transition hover:border-stone-400 hover:bg-stone-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel: overflow hidden, inner strip draggable with spring snap */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            ref={stripRef}
            className="flex cursor-grab gap-6 py-2 pl-2 pr-2 md:pl-4 md:pr-4 active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -maxScroll, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => {
              if (stripRef.current) stripRef.current.style.cursor = "grabbing";
            }}
            onDragEnd={() => {
              handleDragEnd();
              if (stripRef.current) stripRef.current.style.cursor = "grab";
            }}
          >
            {EVENTS.map((event) => (
              <article
                key={event.title + event.date}
                className="w-[300px] flex-shrink-0 rounded-2xl bg-white shadow-md md:w-[320px]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
                <div className="relative flex flex-col px-5 pb-5 pt-4">
                  <p className="text-left text-sm text-gray-500">
                    {event.date}
                  </p>
                  <h3 className="mt-2 text-left font-bold text-stone-800">
                    {event.title}
                  </h3>
                  <div className="mt-4 flex justify-end">
                    <Link
                      href="#"
                      aria-label={`View ${event.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b85c38] text-white shadow transition hover:bg-[#a04d2e]"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
