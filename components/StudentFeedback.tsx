"use client";

/**
 * Horizontal testimonial strip.
 *
 * Used on: /detoxification, TTC pages, CMS pages with StudentFeedback, etc.
 * NOT used on the homepage — app/page.tsx uses TestimonialsCarousel2 (fade + dots).
 */

import { useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useDragScroll } from "@/hooks/useDragScroll";

const SCROLL_STEP_PX = 424; /* ~400px card + gap-6; arrows still work if off by a few px */

const feedbacks = [
  {
    quote:
      "Before joining SYHET, I struggled with anxiety and irregular sleep. Through the structured practice of asana, pranayama, and meditation, I learned how to regulate my mind and energy. Now, I not only sleep deeply, but I also guide my students to reconnect with their own healing capacity.",
    name: "Linh Tran, 32",
    role: "Yoga Teacher (Vietnam)",
  },
  {
    quote:
      "This program completely shifted my understanding of health. It’s not just about fixing symptoms—it’s about addressing the root cause. Today, I work with clients dealing with chronic stress and burnout, helping them rebuild their lives through simple, consistent yoga practices.",
    name: "David Miller, 45",
    role: "Corporate Consultant (USA)",
  },
  {
    quote:
      "SYHET gave me tools to understand my emotions and long-standing patterns. The integration of Yoga psychology and Ayurveda was life-changing. I now support individuals dealing with depression and anxiety with much more confidence and compassion.",
    name: "Marie Dubois, 38",
    role: "Psychologist (France)",
  },
  {
    quote:
      "I came to this course to improve my own health, especially digestive issues and stress. But I gained so much more. I now help my family and community adopt healthier routines, from conscious breathing to mindful eating.",
    name: "Nguyen Hoang Anh, 29",
    role: "Marketing Executive (Vietnam)",
  },
  {
    quote:
      "What I appreciate most is the depth of the training. It’s not superficial wellness—it’s real transformation. I now work with people recovering from addiction, and the teachings on the root causes of behavior have been incredibly powerful.",
    name: "Carlos Ramirez, 41",
    role: "Recovery Coach (Mexico)",
  },
  {
    quote:
      "I used to feel disconnected from my purpose. Through this training, I found clarity and direction. The practicum gave me real experience, and today I confidently guide clients through personalized yoga therapy programs.",
    name: "Anna Schmidt, 36",
    role: "Wellness Coach (Germany)",
  },
  {
    quote:
      "This course helped me heal from chronic stress and emotional imbalance. More importantly, it taught me how to hold space for others. I now run small group sessions focused on mental health and stress resilience.",
    name: "Mai Phuong, 34",
    role: "HR Manager (Vietnam)",
  },
  {
    quote:
      "The combination of ancient wisdom and modern understanding is unique. I’ve integrated these teachings into my work with corporate clients, helping them manage stress and improve productivity through simple daily practices.",
    name: "James Patel, 42",
    role: "Business Owner (UK)",
  },
  {
    quote:
      "I joined SYHET during a difficult period in my life. The teachings on karma, mind, and healing helped me transform deeply. Now, I support individuals with chronic pain and psychosomatic conditions with a holistic approach.",
    name: "Sofia Rossi, 39",
    role: "Physiotherapist (Italy)",
  },
  {
    quote:
      "Before the training, I lacked discipline and direction. SYHET gave me a structured lifestyle and deeper understanding of myself. Today, I guide others in building sustainable self-care habits and finding meaning in their daily lives.",
    name: "Thao Le, 27",
    role: "Freelancer / Content Creator (Vietnam)",
  },
];

export default function StudentFeedback() {
  const { ref, events, isDragging } = useDragScroll<HTMLDivElement>();

  const scrollByStep = useCallback((delta: number) => {
    ref.current?.scrollBy({ left: delta, behavior: "smooth" });
  }, [ref]);

  return (
    <section className="w-full min-w-0 bg-white py-24">
      {/* Same idea as UpcomingEvents: heading + arrows in a row; track is full-width below (not flex-squeezed between arrows). */}
      <div className="mx-auto mb-12 flex w-full min-w-0 max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-end md:justify-between">
        <h2 className="text-center font-serif text-3xl text-[#0B3B24] md:text-left md:text-4xl">
          What our students are saying
        </h2>
        <div className="flex shrink-0 items-center justify-center gap-2 md:justify-end">
          <button
            type="button"
            aria-label="Previous feedback"
            onClick={() => scrollByStep(-SCROLL_STEP_PX)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next feedback"
            onClick={() => scrollByStep(SCROLL_STEP_PX)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#dcfd8b] text-[#0B3B24] shadow-md transition-colors hover:bg-[#c9f061]"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Full-bleed horizontal strip: matches UpcomingEvents (flex + overflow-x on one full-width row). */}
      <div
        ref={ref}
        {...events}
        className={`scrollbar-hide flex w-full min-w-0 flex-row flex-nowrap gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-8 px-[max(0.5rem,calc(50%-42.5vw))] [scrollbar-width:none] md:px-[calc(50%-200px)] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing scroll-auto select-none" : "cursor-grab select-none"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {feedbacks.map((item, index) => (
          <div
            key={index}
            data-feedback-card
            className="w-[85vw] max-w-[400px] shrink-0 md:w-[400px]"
          >
            <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:p-10">
              <Quote
                className="mb-4 h-10 w-10 shrink-0 rotate-180 text-[#0B3B24] opacity-20"
                strokeWidth={1.5}
              />
              <p className="mb-8 flex-grow leading-relaxed text-gray-600">
                {item.quote}
              </p>
              <div className="space-y-1">
                <p className="font-medium text-gray-700">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center px-6">
        <Link
          href="/accommodations"
          className="inline-block rounded-sm bg-[#ED7D4D] px-12 py-4 font-bold uppercase text-white shadow-lg transition-colors hover:bg-orange-600"
        >
          ENROLL NOW
        </Link>
        <p className="mt-6 text-gray-600">
          Have Questions?{" "}
          <Link
            href="mailto:vietnamyogaresort@sivananda.org"
            className="font-medium underline hover:text-[#0B3B24]"
          >
            Email us.
          </Link>
        </p>
      </div>
    </section>
  );
}
