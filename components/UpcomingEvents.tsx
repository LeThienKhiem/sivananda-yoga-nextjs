"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { supabase } from "@/utils/supabase";
import { getCourseImageUrl } from "@/utils/course-images";

const DEFAULT_SUBTITLE = "PROGRAMS AND RETREAT";
const DEFAULT_TITLE = "Upcoming Events & Courses";
const DEFAULT_CTA_TEXT = "View all Courses";
const DEFAULT_CTA_LINK = "/syhet-courses";

/** Pixels moved before we treat the gesture as a drag (suppresses card link click). */
const DRAG_CLICK_THRESHOLD = 8;

const SCROLL_STEP_PX = 350;

const formatCourseDate = (start?: string, end?: string) => {
  if (!start) return "Date TBA";
  const startDate = new Date(start).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
  if (!end || start === end)
    return `${startDate} ${new Date(start).getFullYear()}`;
  const endDate = new Date(end).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return `${startDate} - ${endDate}`;
};

export interface UpcomingEventsProps {
  subtitle?: string;
  title?: string;
  ctaText?: string;
  ctaLink?: string;
  /** Override vertical padding on the outer section (default: py-24). Use e.g. pt-12 pb-24 to tighten top spacing. */
  sectionPaddingClass?: string;
  /** Passed to the outer `<section>` for accessibility. */
  "aria-label"?: string;
}

export default function UpcomingEvents({
  subtitle = DEFAULT_SUBTITLE,
  title = DEFAULT_TITLE,
  ctaText = DEFAULT_CTA_TEXT,
  ctaLink = DEFAULT_CTA_LINK,
  sectionPaddingClass = "py-24",
  "aria-label": ariaLabel,
}: UpcomingEventsProps = {}) {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const didDragRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    fetchLatestCourses();
  }, []);

  useEffect(() => {
    return () => {
      dragCleanupRef.current?.();
      dragCleanupRef.current = null;
    };
  }, []);

  const fetchLatestCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      console.error("Error fetching latest courses:", error);
    } else {
      setEvents(data || []);
    }
    setLoading(false);
  };

  const getCourseImage = (course: any) =>
    getCourseImageUrl(course.image_url, course.title);

  /** 1:1 drag: scrollLeft tracks mouse delta from mousedown. */
  const applyDragFromPageX = (pageX: number) => {
    if (!isDownRef.current || !containerRef.current) return;
    const dx = pageX - startXRef.current;
    if (Math.abs(dx) > DRAG_CLICK_THRESHOLD) didDragRef.current = true;
    containerRef.current.scrollLeft = scrollLeftRef.current - dx;
  };

  const endMouseDrag = () => {
    dragCleanupRef.current?.();
    dragCleanupRef.current = null;
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleSliderMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0 || !containerRef.current) return;
    const el = containerRef.current;
    isDownRef.current = true;
    startXRef.current = e.pageX;
    scrollLeftRef.current = el.scrollLeft;
    didDragRef.current = false;
    setIsDragging(true);

    const onDocumentMove = (moveEvent: MouseEvent) => {
      applyDragFromPageX(moveEvent.pageX);
    };

    const onDocumentUp = () => {
      document.removeEventListener("mousemove", onDocumentMove);
      document.removeEventListener("mouseup", onDocumentUp);
      endMouseDrag();
    };

    dragCleanupRef.current = () => {
      document.removeEventListener("mousemove", onDocumentMove);
      document.removeEventListener("mouseup", onDocumentUp);
    };

    document.addEventListener("mousemove", onDocumentMove);
    document.addEventListener("mouseup", onDocumentUp);
  };

  const handleSliderMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDownRef.current) return;
    applyDragFromPageX(e.pageX);
  };

  const handleSliderMouseUp = () => {
    endMouseDrag();
  };

  /** Does not end drag — user may exit the strip while dragging; `mouseup` on `document` ends it. */
  const handleSliderMouseLeave = () => {};

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (didDragRef.current) {
      e.preventDefault();
      e.stopPropagation();
      didDragRef.current = false;
    }
  };

  const scrollByStep = (delta: number) => {
    containerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  if (loading) {
    return (
      <section
        aria-label={ariaLabel}
        className={`bg-[#FDFCF8] ${sectionPaddingClass} w-full flex justify-center items-center min-h-[400px]`}
      >
        <Loader2 className="animate-spin text-[#ED7D4D] w-12 h-12" />
      </section>
    );
  }

  if (events.length === 0) return null;

  return (
    <section
      aria-label={ariaLabel}
      className={`bg-[#FDFCF8] ${sectionPaddingClass} w-full overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <h3 className="text-[#ED7D4D] font-bold tracking-widest text-sm uppercase mb-3">
            {subtitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
          <button
            type="button"
            aria-label="Scroll carousel left"
            onClick={() => scrollByStep(-SCROLL_STEP_PX)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0B3B24] text-[#0B3B24] transition-colors hover:bg-[#0B3B24] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B24]"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Scroll carousel right"
            onClick={() => scrollByStep(SCROLL_STEP_PX)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0B3B24] text-[#0B3B24] transition-colors hover:bg-[#0B3B24] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B24]"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className={`flex flex-row flex-nowrap gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-8 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-[max(0.5rem,calc(50%-42.5vw))] md:px-[calc(50%-175px)] cursor-grab active:cursor-grabbing ${
          isDragging ? "cursor-grabbing scroll-auto select-none" : ""
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseDown={handleSliderMouseDown}
        onMouseMove={handleSliderMouseMove}
        onMouseUp={handleSliderMouseUp}
        onMouseLeave={handleSliderMouseLeave}
      >
        {events.map((course) => {
          const categoryDisplay =
            course.category && course.category.length > 0
              ? course.category[0]
              : "Course";

          return (
            <div
              key={course.id}
              className="w-[85vw] md:w-[350px] flex-shrink-0 snap-start"
            >
              <Link
                href={`/syhet-courses/${course.slug || course.id}`}
                className="bg-white rounded-2xl overflow-hidden flex flex-col h-full border border-gray-200 shadow-md hover:shadow-lg transition-shadow block"
                onClick={handleCardClick}
                draggable={false}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={getCourseImage(course)}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 350px"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0B3B24] tracking-widest uppercase">
                    {categoryDisplay}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <p className="text-xs font-bold text-[#A3B827] uppercase tracking-widest mb-2">
                    {course.price_display}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif text-[#0B3B24] font-bold mb-6 line-clamp-2 leading-tight">
                    {course.title}
                  </h3>
                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center gap-3 text-sm text-[#4A4A4A]">
                      <Calendar className="w-4 h-4 text-[#ED7D4D] flex-shrink-0" />
                      <span className="font-medium line-clamp-1">
                        {course.start_date
                          ? formatCourseDate(course.start_date, course.end_date)
                          : (course.date_display || "Date TBA")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#4A4A4A]">
                      <MapPin className="w-4 h-4 text-[#ED7D4D] flex-shrink-0" />
                      <span className="line-clamp-1">
                        {course.venue_name ||
                          course.location ||
                          "Sivananda Yoga Resort, Da Lat"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <span className="flex items-center justify-center gap-2 w-full bg-[#F4F7F0] text-[#0B3B24] py-3 rounded-md font-bold text-sm tracking-widest uppercase">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12 px-4 md:px-6">
        <Link href={ctaLink}>
          <button className="bg-transparent border-2 border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24] hover:text-white px-10 py-3 rounded-sm font-bold tracking-widest text-sm uppercase transition-all shadow-sm">
            {ctaText}
          </button>
        </Link>
      </div>
    </section>
  );
}
