"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Asana: Proper Exercise — The stable postures",
    category: "Lifestyle",
    excerpt:
      "Discover how the physical postures of yoga support strength, flexibility, and inner calm. A foundational practice for body and mind.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Dinacharya: Daily rhythms for balance",
    category: "Health",
    excerpt:
      "Align with nature's cycles. Simple morning and evening routines that help regulate digestion, sleep, and energy throughout the day.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Herbal teas and Ayurvedic wellness",
    category: "Wellness",
    excerpt:
      "From calming chamomile to invigorating ginger, learn which herbs support your dosha and how to brew the perfect cup for your constitution. A short guide to get you started.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Abhyanga: The art of self-massage",
    category: "Health",
    excerpt:
      "Warm oil massage is one of the most nourishing daily practices in Ayurveda. It soothes the nervous system, supports the skin, and prepares the body for rest.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-03.png",
  },
  {
    id: 5,
    title: "Prana and the five elements in Ayurveda",
    category: "Lifestyle",
    excerpt:
      "Earth, water, fire, air, and space—how the five elements shape your constitution and how to balance them through diet, routine, and breath.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Understanding your dosha",
    category: "Wellness",
    excerpt:
      "Vata, Pitta, and Kapha: a brief introduction to the three doshas and how knowing your type can guide your choices for food, exercise, and rest.",
    image:
      "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Seasonal eating in Ayurveda",
    category: "Health",
    excerpt:
      "Eat with the seasons to stay in balance. Why lighter, cooling foods support you in summer, and why grounding, warming meals help in winter. Practical tips for each season.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Sleep and rest as medicine",
    category: "Lifestyle",
    excerpt:
      "Quality sleep is a pillar of health in Ayurveda. Simple habits for a better night's rest: timing, environment, and wind-down rituals that calm the mind.",
    image:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800&auto=format&fit=crop",
  },
];

export default function AyurvedaArticles() {
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

        {/* Masonry grid: 1 col mobile, 2 tablet, 3 desktop — pure Tailwind columns + break-inside-avoid */}
        <div className="columns-1 md:columns-2 lg:columns-3 [column-gap:1rem]">
          {articles.map((article) => (
            <Link
              key={article.id}
              href="#"
              className="break-inside-avoid block mb-4 group"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8C9A5B] bg-[#FDF9EB] border border-[#E5DFCC] px-2.5 py-1 rounded mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-serif text-[#0B3B24] leading-snug mb-2 group-hover:text-[#4F6F1F] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#0B3B24] font-medium text-sm group-hover:text-[#ED7D4D] transition-colors">
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
