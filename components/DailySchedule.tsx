"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const SCHEDULE_IMAGE_URL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/daily-schedule.png";

const scheduleData = [
  {
    time: "6:00am",
    title: "Satsang – Meditation, Kirtan, Philosophy Sharing",
    desc: "Wake up surrounded by the quiet beauty of the pine forest and start your day with meditation and inspiring spiritual practices in community.",
  },
  {
    time: "7:30am",
    title: "Breakfast",
    desc: "Enjoy a light porridge, perhaps sitting outside listening to birdsong or talking with friends.",
  },
  {
    time: "8:00am",
    title: "Hatha Yoga and Pranayama",
    desc: "Participate in the 2-hour morning Sivananda Yoga class of postures, breathing, and relaxation to balance and energize you for the day.",
  },
  {
    time: "10:00am",
    title: "Vegetarian Brunch",
    desc: "Eat a delicious, nourishing brunch prepared with local produce in accordance with a yogic, plant-based diet, and the opportunity to sit inside or outdoors.",
  },
  {
    time: "11:00am",
    title: "Karma Yoga",
    desc: "Spend an hour contributing to the community through karma yoga — a powerful practice of selfless service.",
  },
  {
    time: "2:00pm",
    title: "Yoga Vacation Workshop",
    desc: "Learn inspiring approaches to health, well-being, and spiritual life in an afternoon workshop with resident and visiting teachers.",
  },
  {
    time: "4:00pm",
    title: "Hatha Asanas and Pranayama",
    desc: "Take a second yoga class or take some time to relax, maybe discover beautiful spots on the property or treat yourself to a nap, a good book, or a good conversation.",
  },
  {
    time: "6:00pm",
    title: "Vegetarian Dinner",
    desc: "Nourish yourself with a delicious, nutritional dinner, then stop by the boutique for some chocolate, a gift, or a little personal shopping.",
  },
  {
    time: "7:30pm",
    title: "Satsang – Meditation, Kirtan and Sharing",
    desc: "End your day with meditation and inspiring spiritual practices in the community.",
  },
];

export default function DailySchedule() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <h2 className="text-4xl md:text-5xl font-serif text-[#0B3B24] text-center mb-16">
        Daily Schedule
      </h2>
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden mb-8">
          <Image
            src={SCHEDULE_IMAGE_URL}
            alt="Daily Schedule"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center">
          Experience a yogic lifestyle that supports natural well-being — good sleep, healthy digestion, and plenty of positive energy — with a balance of activity and rest, participation in community and time for yourself. The Daily Schedule, created by yoga master Swami Vishnudevananda, is the same for all ashram residents, guests, and students.
        </p>
      </div>
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
