"use client";

import React, { useState } from "react";
import Image from "next/image";

const accommodations = [
  {
    id: "private",
    tabTitle: "Private Room",
    tabSubtitle: "Single person",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600",
    price: "US$ 85",
    description: [
      "Whether you come on your own or with family or friends, you'll enjoy simple accommodations in villa-style buildings that have several stand-alone rooms, each with its own bathroom.",
      "All accommodations are walking distance from the dining hall, yoga hall, and the rest of the ashram property and buildings.",
      "Please note that in the tradition of yoga ashrams, accommodations are comfortable, yet basic. Bedding and towels are provided; housekeeping services, air conditioning, and heaters are not.",
    ],
  },
  {
    id: "shared-2",
    tabTitle: "Shared Room",
    tabSubtitle: "For 2 people",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1600",
    price: "US$ 50",
    description: [
      "Share a peaceful space with a fellow practitioner. Our double rooms offer a harmonious balance of community and privacy, featuring comfortable beds and a shared en-suite bathroom.",
      "All accommodations are walking distance from the dining hall, yoga hall, and the rest of the ashram property and buildings.",
      "Please note that in the tradition of yoga ashrams, accommodations are comfortable, yet basic. Bedding and towels are provided; housekeeping services, air conditioning, and heaters are not.",
    ],
  },
  {
    id: "shared-4",
    tabTitle: "Shared Room",
    tabSubtitle: "For 4 people",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600",
    price: "US$ 35",
    description: [
      "Experience authentic ashram living in our spacious 4-person shared rooms. Perfect for those who want to fully immerse themselves in the community aspect of the yoga lifestyle.",
      "All accommodations are walking distance from the dining hall, yoga hall, and the rest of the ashram property and buildings.",
      "Please note that in the tradition of yoga ashrams, accommodations are comfortable, yet basic. Bedding and towels are provided; housekeeping services, air conditioning, and heaters are not.",
    ],
  },
];

export default function AccommodationCost() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAcc = accommodations[activeIndex];

  return (
    <section className="w-full bg-[#FDFCF8] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="mb-3 font-serif text-3xl font-bold text-[#0B3B24] md:text-4xl">
            Accommodation & Cost
          </h2>
          <p className="font-medium italic text-[#4A4A4A]">
            Simple Living, High Thinking
          </p>
        </div>

        {/* Tabs - horizontal scroll on mobile, flex on desktop */}
        <div className="scrollbar-hide mb-8 flex flex-row gap-2 overflow-x-auto md:overflow-visible md:gap-4">
          {accommodations.map((acc, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={acc.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`min-w-[140px] shrink-0 rounded-t-sm border-b-4 px-6 py-4 text-center transition-all duration-300 md:min-w-0 md:flex-1
                  ${isActive
                    ? "border-[#0B3B24] bg-[#F4F7F0] text-[#0B3B24]"
                    : "border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:shadow-md md:border-transparent"
                  }`}
              >
                <div className="font-serif text-lg font-bold md:text-xl">{acc.tabTitle}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider opacity-80 md:text-sm">
                  {acc.tabSubtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex min-h-[500px] flex-col overflow-hidden rounded-sm bg-[#4F6F1F] shadow-2xl md:flex-row">
          {/* Left: Image (Top on mobile) */}
          <div className="relative aspect-[4/3] w-full md:w-[60%] md:aspect-auto">
            <Image
              src={activeAcc.image}
              alt={activeAcc.tabTitle}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          {/* Right: Description & Price (Bottom on mobile) */}
          <div className="flex w-full flex-col justify-between p-8 text-white md:w-[40%] md:p-12">
            <div className="mb-10 space-y-6 text-sm leading-relaxed text-white/90 md:text-base">
              {activeAcc.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-auto flex flex-row items-center justify-between gap-4 border-t border-white/20 pt-6">
              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-white/70">
                  Starting From
                </p>
                <p className="font-serif text-2xl font-bold md:text-3xl">
                  {activeAcc.price}
                </p>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-sm bg-[#ED7D4D] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-orange-600 md:px-8 md:py-4 md:text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Tab Indicators (Dots) for mobile */}
        <div className="mt-8 flex justify-center gap-2 md:hidden">
          {accommodations.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${activeIndex === index ? "bg-[#0B3B24]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
