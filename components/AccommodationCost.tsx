"use client";

import { useState } from "react";
import Image from "next/image";

const accommodations = [
  {
    id: 0,
    type: "Private Room",
    capacity: "Single person",
    price: "US$50",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    description:
      "Whether you come on your own or with family or friends, you'll enjoy simple accommodations in villa-style buildings that have several stand-alone rooms, each with its own bathroom. All accommodations are walking distance from the dining hall, yoga hall, and the rest of the ashram property. Please note that in the tradition of yoga ashrams, accommodations are comfortable, yet basic. Bedding and towels are provided; housekeeping services, air conditioning, and heaters are not.",
  },
  {
    id: 1,
    type: "Shared Room",
    capacity: "For 2 people",
    price: "US$35",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    description:
      "Share your journey with a friend, partner, or a fellow yogi. Our double shared rooms offer a peaceful environment to rest and reflect after a day of practice. Each room features two comfortable single beds, simple furnishings, and an en-suite bathroom. Enjoy the shared energy while still having your personal space to unwind. Bedding and towels are provided.",
  },
  {
    id: 2,
    type: "Shared Room",
    capacity: "For 4 people",
    price: "US$25",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
    description:
      "Experience the true ashram community spirit in our 4-person shared rooms. Perfect for budget-conscious travelers or those looking to connect deeply with like-minded individuals. The rooms are spacious, clean, and segregated by gender. Shared bathroom facilities are located conveniently nearby. Lockers are available for your valuables. Bedding is provided.",
  },
];

export default function AccommodationCost() {
  const [activeTab, setActiveTab] = useState(0);
  const current = accommodations[activeTab];

  return (
    <section className="py-24 px-6 bg-[#FDFCF8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#0B3B24] font-serif text-4xl md:text-5xl mb-2">
          Accommodation & Cost
        </h2>
        <p className="text-gray-700 text-lg mb-12">Simple Living, High Thinking</p>

        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto min-h-[500px] shadow-sm">
          {/* Left Column - Tabs */}
          <div className="w-full md:w-64 flex flex-col z-20">
            {accommodations.map((acc, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={acc.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 flex flex-col justify-center px-8 py-6 cursor-pointer transition-all duration-300 relative text-left border-b border-white/20 min-h-[100px] md:min-h-0 ${
                    isActive
                      ? "bg-[#0B3B24] text-white shadow-[10px_0_15px_-3px_rgba(0,0,0,0.3)] md:scale-x-105 md:origin-left z-10"
                      : "bg-[#4F6F1F] text-white/80 hover:bg-[#3D5A16] z-0"
                  }`}
                >
                  <span className="font-bold text-lg">{acc.type}</span>
                  <span className="w-6 border-b border-white my-2 block" />
                  <span className="font-light text-sm">{acc.capacity}</span>
                </button>
              );
            })}
          </div>

          {/* Center Column - Image */}
          <div className="flex-grow relative h-64 md:h-auto min-h-[256px] md:min-h-[500px] z-10 bg-gray-200">
            <Image
              src={current.image}
              fill
              className="object-cover"
              alt={`${current.type} accommodation`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 right-0 bg-black/80 text-white p-6 min-w-[140px] text-center">
              <p className="text-sm">Starting From</p>
              <p className="text-3xl font-bold">{current.price}</p>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="w-full md:w-[350px] bg-[#4F6F1F] text-white p-10 flex flex-col justify-between z-10">
            <p className="text-sm leading-relaxed whitespace-pre-line text-white/90">
              {current.description}
            </p>
            <button
              type="button"
              className="mt-8 self-start bg-[#ED7D4D] text-white font-bold uppercase px-8 py-3 rounded-sm hover:bg-orange-600 transition-colors"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
