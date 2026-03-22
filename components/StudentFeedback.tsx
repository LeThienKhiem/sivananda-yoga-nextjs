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
      "Escape from the hustle city and spend few nights here, you would find a serenity for yourself. 3 vegan delightful meals per day are provided, plus practicing yoga 2 times per day...",
    author: "Peter - 35",
  },
  {
    quote:
      "A truly life-changing experience. The teachers are incredibly knowledgeable and supportive. The discipline was challenging at first, but exactly what I needed...",
    author: "AnnaGrace - 29",
  },
  {
    quote:
      "The ashram environment provided the perfect setting for deep introspection and physical growth. Waking up to the sound of the bell and practicing surrounded by pine forests is pure magic.",
    author: "David Chen - 42",
  },
  {
    quote:
      "Not just a physical training, but a spiritual journey. The philosophy classes opened my eyes to a completely new way of living and thinking. Highly recommended for anyone seeking truth.",
    author: "Elena R. - 31",
  },
  {
    quote:
      "I came to deepen my physical practice, but I left with a global family. The community and connections you build here are beautiful, welcoming, and long-lasting.",
    author: "Michael S. - 28",
  },
  {
    quote:
      "Excellent curriculum. The anatomy and teaching methodology classes were thorough, practical, and very easy to understand even if you don't have a medical background.",
    author: "Lisa M. - 36",
  },
  {
    quote:
      "I've practiced yoga for over 5 years, but this TTC took my understanding of alignment, breath, and energy to a completely different level. Extremely grateful to the Swamis.",
    author: "Maya K. - 45",
  },
  {
    quote:
      "An authentic, traditional approach to yoga. If you want the real deal—no modern gimmicks, just pure classical teachings—this is definitely the place to be.",
    author: "Johannes B. - 33",
  },
  {
    quote:
      "The food is amazing! I was worried about the vegetarian diet, but the meals were so nutritious, varied, and full of prana. It really supported my intensive practice.",
    author: "Sarah T. - 27",
  },
  {
    quote:
      "Completing this TTC was the hardest and most rewarding month of my life. I walked out stronger physically, clearer mentally, and with a renewed sense of purpose.",
    author: "Daniel V. - 39",
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
              <p className="font-medium text-gray-500">{item.author}</p>
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
