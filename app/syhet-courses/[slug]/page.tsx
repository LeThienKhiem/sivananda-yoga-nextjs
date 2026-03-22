"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/utils/supabase";
import { getCourseImageUrl } from "@/utils/course-images";
import { ArrowLeft, Calendar, MapPin, Mail, Phone } from "lucide-react";

const PROSE_CLASS =
  "prose prose-slate max-w-none text-[#4A4A4A] [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#0B3B24] [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#0B3B24] [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>ul>li]:mb-1 [&>strong]:font-bold [&>strong]:text-[#0B3B24]";

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) fetchCourse(slug);
  }, [slug]);

  const fetchCourse = async (slugOrId: string) => {
    setLoading(true);
    const isUUID =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        slugOrId
      );

    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq(isUUID ? "id" : "slug", slugOrId)
      .eq("is_active", true)
      .single();

    if (error) {
      console.error("Error fetching course:", error);
      setCourse(null);
    } else {
      setCourse(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ED7D4D]"></div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!course) {
    return (
      <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center py-24 px-6">
          <p className="text-[#4A4A4A] text-lg mb-6">
            This course is not available or could not be found.
          </p>
          <Link
            href="/syhet-courses"
            className="inline-flex items-center gap-2 text-[#ED7D4D] font-semibold hover:underline"
          >
            <ArrowLeft size={20} /> Back to Courses
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* Back link */}
      <div className="max-w-4xl mx-auto w-full px-6 pt-8">
        <Link
          href="/syhet-courses"
          className="inline-flex items-center gap-2 text-[#4F6F1F] font-medium hover:text-[#0B3B24] transition-colors"
        >
          <ArrowLeft size={18} /> Back to Courses
        </Link>
      </div>

      {/* Hero Image */}
      <section className="max-w-4xl mx-auto w-full px-6 mt-6">
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-lg bg-gray-100">
          <Image
            src={getCourseImageUrl(course.image_url, course.title)}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
      </section>

      {/* Article */}
      <article className="max-w-4xl mx-auto w-full px-6 py-12">
        <p className="text-xs font-bold text-[#A3B827] uppercase tracking-widest mb-3">
          {course.price_display}
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0B3B24] font-bold leading-tight mb-8">
          {course.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap gap-6 text-sm text-[#4A4A4A] mb-8">
          {course.date_display && (
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#4F6F1F] flex-shrink-0" />
              {course.date_display}
            </span>
          )}
          {course.location && (
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#4F6F1F] flex-shrink-0" />
              {course.location}
            </span>
          )}
        </div>

        {/* Details Card: Venue & Organizer */}
        {(course.venue_name ||
          course.venue_address ||
          course.organizer_name ||
          course.organizer_phone ||
          course.organizer_email ||
          course.start_date ||
          course.end_date) && (
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10 space-y-4">
            {course.start_date && (
              <p>
                <strong className="text-[#0B3B24]">Start:</strong>{" "}
                {course.start_date}
              </p>
            )}
            {course.end_date && (
              <p>
                <strong className="text-[#0B3B24]">End:</strong>{" "}
                {course.end_date}
              </p>
            )}
            {(course.venue_name || course.venue_address) && (
              <p>
                <strong className="text-[#0B3B24]">Venue:</strong>{" "}
                {[course.venue_name, course.venue_address]
                  .filter(Boolean)
                  .join(" — ")}
              </p>
            )}
            {(course.organizer_name ||
              course.organizer_phone ||
              course.organizer_email) && (
              <div>
                <strong className="text-[#0B3B24]">Organizer:</strong>
                <div className="mt-1 space-y-1 pl-4">
                  {course.organizer_name && <p>{course.organizer_name}</p>}
                  {course.organizer_phone && (
                    <p className="flex items-center gap-2">
                      <Phone size={14} /> {course.organizer_phone}
                    </p>
                  )}
                  {course.organizer_email && (
                    <p className="flex items-center gap-2">
                      <Mail size={14} />{" "}
                      <a
                        href={`mailto:${course.organizer_email}`}
                        className="text-[#4F6F1F] hover:underline"
                      >
                        {course.organizer_email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Description (HTML) */}
        {course.description && (
          <div
            className={PROSE_CLASS}
            dangerouslySetInnerHTML={{ __html: course.description }}
          />
        )}

        {/* Register Button */}
        {course.registration_link && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href={course.registration_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0B3B24] hover:bg-[#1a5438] text-white px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-colors"
            >
              Register Now
            </Link>
          </div>
        )}
      </article>

      <div className="max-w-4xl mx-auto w-full px-6 pb-16">
        <Link
          href="/syhet-courses"
          className="inline-flex items-center gap-2 bg-[#E5F5C8] text-[#0B3B24] hover:bg-[#d4e8aa] px-6 py-3 rounded-sm font-bold tracking-widest text-xs uppercase transition-colors"
        >
          <ArrowLeft size={18} /> Back to Courses
        </Link>
      </div>

      <Footer />
    </main>
  );
}
