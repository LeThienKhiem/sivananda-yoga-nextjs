"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const scheduleData = [
  {
    time: "05:30 am",
    title: "Wake Up Bell",
    desc: "Start your day early to sync with the natural rhythms of the sun. A gentle bell will ring across the ashram.",
  },
  {
    time: "06:00 am",
    title: "Morning Satsang",
    desc: "Gather for silent meditation, joyful chanting (kirtan), and an inspiring reading or lecture to elevate the mind.",
  },
  {
    time: "08:00 am",
    title: "Asana & Pranayama Class",
    desc: "A 2-hour traditional Sivananda yoga class focusing on breathing exercises (pranayama), sun salutations, and the 12 basic postures.",
  },
  {
    time: "10:00 am",
    title: "Vegetarian Brunch",
    desc: "Enjoy a wholesome, sattvic (pure) vegetarian meal prepared with love to nourish your body and soul.",
  },
  {
    time: "11:00 am",
    title: "Karma Yoga",
    desc: "Selfless service. Guests are invited to help with small ashram tasks for 1 hour, integrating the practice of yoga into daily action.",
  },
  {
    time: "02:00 pm",
    title: "Workshop / Free Time",
    desc: "Attend a holistic health workshop, explore the beautiful Tuyen Lam lake, or simply rest and read.",
  },
  {
    time: "04:00 pm",
    title: "Asana Class",
    desc: "Afternoon yoga practice to stretch, strengthen, and deeply relax the body before dinner.",
  },
  {
    time: "06:00 pm",
    title: "Vegetarian Dinner",
    desc: "A light, nutritious vegetarian dinner to end the day gently, aiding in good digestion and deep sleep.",
  },
  {
    time: "08:00 pm",
    title: "Evening Satsang",
    desc: "Conclude the day with evening meditation and chanting. A beautiful time to absorb the peaceful energy of the ashram.",
  },
  {
    time: "10:30 pm",
    title: "Lights Out",
    desc: "Rest and rejuvenate in silence.",
  },
];

export default function DailySchedule() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <h2 className="text-4xl md:text-5xl font-serif text-[#0B3B24] text-center mb-16">
        Daily Schedule
      </h2>
      <div className="max-w-3xl mx-auto">
        {scheduleData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`border-t border-gray-200 ${index === scheduleData.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(isActive ? null : index)}
                className="w-full flex items-center justify-between py-5 cursor-pointer group text-left"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-[#ED7D4D] font-medium w-20 shrink-0">
                    {item.time}
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-[#4F6F1F] transition-colors">
                    {item.title}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-[#4F6F1F] border-[#4F6F1F]" : ""}`}
                >
                  <ChevronDown
                    className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${isActive ? "rotate-180 text-white" : ""}`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-64" : "max-h-0"}`}
              >
                <p className="pl-28 md:pl-32 pb-6 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
