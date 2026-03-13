"use client";

import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/utils/supabase";

export default function TestimonialsCarousel2() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Fetch from Supabase
  useEffect(() => {
    const fetchFeedbacks = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching testimonials:", error);
      else setFeedbacks(data || []);
      setLoading(false);
    };

    fetchFeedbacks();
  }, []);

  // 2. Auto Scroll Logic (Every 5 seconds)
  useEffect(() => {
    if (feedbacks.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [feedbacks]);

  if (loading) {
    return (
      <div className="py-24 flex justify-center">
        <Loader2 className="animate-spin text-[#ED7D4D] w-10 h-10" />
      </div>
    );
  }

  if (feedbacks.length === 0) return null;

  return (
    <section className="bg-[#FDFCF8] py-24 px-6 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative min-h-[400px] flex flex-col justify-center">
        {/* Decorative Large Quote Icon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-[150px] md:text-[200px] text-gray-200/60 font-serif leading-none select-none z-0">
          &ldquo;
        </div>

        {/* Content Wrapper for Fade Transition */}
        <div className="relative z-10 w-full mt-12">
          {feedbacks.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-1000 ease-in-out w-full
                ${
                  index === activeIndex
                    ? "opacity-100 relative translate-y-0"
                    : "opacity-0 absolute top-0 left-0 -translate-y-4 pointer-events-none"
                }`}
            >
              <p className="text-xl md:text-[26px] lg:text-[28px] font-serif italic text-[#4A4A4A] leading-[1.8] mb-10 px-4 md:px-16">
                {item.description}
              </p>

              <h4 className="text-lg md:text-xl font-bold text-[#0B3B24] mb-2">
                {item.name}
              </h4>

              {item.title && (
                <p className="text-[11px] md:text-xs text-gray-500 uppercase tracking-widest font-medium">
                  {item.title}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2.5 mt-16 relative z-20">
          {feedbacks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-[#0B3B24] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
