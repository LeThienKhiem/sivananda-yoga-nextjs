"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const SCROLL_AMOUNT = 380;

const articles = [
  {
    id: 1,
    title: "Asana: Proper Exercise — The stable postures",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    readers: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
    ],
    views: "+ 2,231",
  },
  {
    id: 2,
    title: "Dinacharya: Daily rhythms for balance",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    readers: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    ],
    views: "+ 1,845",
  },
  {
    id: 3,
    title: "Herbal teas and Ayurvedic wellness",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop",
    readers: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    ],
    views: "+ 3,102",
  },
  {
    id: 4,
    title: "Abhyanga: The art of self-massage",
    image:
      "https://images.unsplash.com/photo-1608283288151-5121b65b6f3b?q=80&w=800&auto=format&fit=crop",
    readers: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    ],
    views: "+ 2,567",
  },
  {
    id: 5,
    title: "Prana and the five elements in Ayurveda",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    readers: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=150&auto=format&fit=crop",
    ],
    views: "+ 1,923",
  },
];

export default function AyurvedaArticles() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#FDFCF8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl font-serif text-[#0B3B24] font-bold">
            Ayurveda Articles
          </h2>
          <Link
            href="#"
            className="bg-[#FDF9EB] text-[#8C9A5B] px-6 py-2 rounded-md text-base font-medium border border-[#E5DFCC] hover:bg-[#F2ECD8] transition-colors shrink-0"
          >
            View All
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden"
          >
            {articles.map((article) => (
              <article
                key={article.id}
                className="snap-start shrink-0 w-[300px] md:w-[350px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <Link href="#" className="block">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 300px, 350px"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-[200px]">
                    <h3 className="text-2xl font-serif text-[#0B3B24] leading-snug flex-grow mb-4">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center min-w-0">
                        <div className="flex -space-x-2">
                          {article.readers.map((avatar, i) => (
                            <div
                              key={i}
                              className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shrink-0"
                            >
                              <Image
                                src={avatar}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="32px"
                              />
                            </div>
                          ))}
                        </div>
                        <span className="text-gray-400 text-base ml-3 truncate">
                          {article.views}
                        </span>
                      </div>
                      <div className="w-10 h-10 bg-[#ED7D4D] rounded-full flex items-center justify-center text-white shrink-0">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white/90 text-gray-600 flex items-center justify-center hover:bg-white hover:border-gray-300 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white/90 text-gray-600 flex items-center justify-center hover:bg-white hover:border-gray-300 transition-colors shadow-sm"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
