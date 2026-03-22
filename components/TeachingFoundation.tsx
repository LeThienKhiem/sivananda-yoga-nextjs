"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const foundations = [
  {
    id: 1,
    title: "4 Path of Yoga",
    description:
      "The four paths of yoga according to Swami Sivananda are Karma Yoga (selfless service), Bhakti Yoga (devotion), Raja Yoga (meditation), and Jnana Yoga (knowledge of the Self).",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/training-04.png",
  },
  {
    id: 2,
    title: "5 Points of Yoga",
    description:
      "The 5 Points of Yoga by Swami Vishnudevananda are: proper exercise, proper breathing, proper relaxation, proper diet, and positive thinking with meditation—forming a complete system for physical and mental well-being.",
    image:
    "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/training-05.png",
  },
];

export default function TeachingFoundation() {
  return (
    <section className="bg-[#FDFCF8] py-24 px-6">
      <h2 className="text-center text-[#0B3B24] text-3xl md:text-4xl font-serif font-bold mb-16">
        Our Teaching Foundation
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {foundations.map((card) => {
          const isFivePoints = card.id === 2;
          const isFourPaths = card.id === 1;
          const cardContent = (
            <>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="p-10 md:p-12 flex flex-col items-center text-center flex-grow">
                <h3 className="text-[#0B3B24] text-2xl md:text-3xl font-serif font-bold mb-6">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 flex-grow">
                  {card.description}
                </p>
                <div
                  className="w-12 h-12 bg-[#ED7D4D] rounded-full flex items-center justify-center text-white hover:bg-[#d66a3d] transition-colors"
                  aria-hidden
                >
                  <ArrowRight size={24} />
                </div>
              </div>
            </>
          );
          return (
            <article
              key={card.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
            >
              {isFivePoints ? (
                <Link
                  href="/5-points-of-yoga"
                  className="flex flex-col h-full"
                  aria-label={`Learn more about ${card.title}`}
                >
                  {cardContent}
                </Link>
              ) : isFourPaths ? (
                <Link
                  href="/4-paths-of-yoga"
                  className="flex flex-col h-full"
                  aria-label={`Learn more about ${card.title}`}
                >
                  {cardContent}
                </Link>
              ) : (
                cardContent
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
