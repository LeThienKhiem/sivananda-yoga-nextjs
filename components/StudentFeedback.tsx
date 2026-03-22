"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 424;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] text-center mb-16">
        What our students are saying
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Carousel wrapper: arrows + track, relative for arrow positioning */}
        <div className="relative min-h-[320px] md:min-h-[360px]">
          {/* Arrows - inside relative container, outside scroll track, vertically centered to cards */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous feedback"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next feedback"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 z-20 w-12 h-12 rounded-full bg-[#dcfd8b] text-[#0B3B24] items-center justify-center shadow-md hover:bg-[#c9f061] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scroll track */}
          <div
            ref={scrollContainerRef}
            className="flex flex-row flex-nowrap gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {feedbacks.map((item, index) => (
              <div
                key={index}
                className="shrink-0 w-[85vw] md:w-[400px] snap-center bg-white border border-gray-100 p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col"
              >
              <Quote
                className="w-10 h-10 text-[#0B3B24] opacity-20 rotate-180 shrink-0 mb-4"
                strokeWidth={1.5}
              />
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {item.quote}
              </p>
              <p className="text-gray-500 font-medium">{item.author}</p>
            </div>
          ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center mt-12">
          <Link
            href="/accommodations"
            className="bg-[#ED7D4D] text-white uppercase px-12 py-4 font-bold shadow-lg rounded-sm hover:bg-orange-600 transition-colors inline-block"
          >
            ENROLL NOW
          </Link>
          <p className="mt-6 text-gray-600">
            Have Questions?{" "}
            <Link
              href="mailto:vietnamyogaresort@sivananda.org"
              className="underline font-medium hover:text-[#0B3B24]"
            >
              Email us.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
