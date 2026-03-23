"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { supabase } from "@/utils/supabase";
import { getCourseImageUrl } from "@/utils/course-images";
import { useDragScroll } from "@/hooks/useDragScroll";

const DEFAULT_SUBTITLE = "PROGRAMS AND RETREAT";
const DEFAULT_TITLE = "Upcoming Events & Courses";
const DEFAULT_CTA_TEXT = "View all Courses";
const DEFAULT_CTA_LINK = "/syhet-courses";

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

  const { ref, events: dragEvents, isDragging } =
    useDragScroll<HTMLDivElement>();

  useEffect(() => {
    fetchLatestCourses();
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h3 className="text-[#ED7D4D] font-bold tracking-widest text-sm uppercase mb-3">
            {subtitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold">
            {title}
          </h2>
        </div>

        <div
          ref={ref}
          {...dragEvents}
          className={`scrollbar-hide flex flex-row flex-nowrap gap-6 overflow-x-auto overflow-y-hidden pb-8 select-none ${
            isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab"
          }`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
        {events.map((course) => {
          const categoryDisplay =
            course.category && course.category.length > 0
              ? course.category[0]
              : "Course";

          return (
            <div
              key={course.id}
              className="w-[85vw] shrink-0 md:w-[400px]"
            >
              <Link
                href={`/syhet-courses/${course.slug || course.id}`}
                className="block flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg"
                draggable={false}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={getCourseImage(course)}
                    alt={course.title}
                    fill
                    draggable={false}
                    className="pointer-events-none object-cover"
                    sizes="(max-width: 768px) 85vw, 400px"
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

        <div className="flex justify-center mt-12">
          <Link href={ctaLink} draggable={false}>
            <button className="bg-transparent border-2 border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24] hover:text-white px-10 py-3 rounded-sm font-bold tracking-widest text-sm uppercase transition-all shadow-sm">
              {ctaText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
