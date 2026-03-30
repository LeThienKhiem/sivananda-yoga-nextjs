"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const SCHEDULE_IMAGE_URL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/daily-schedule.png";

/** Inline image for the morning yoga slot (e.g. split layout / during-your-stay). */
const SCHEDULE_INLINE_IMG =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/during-stay-02.png";

const TITLE_COLOR = "#093C0C";

const INTRO_DEFAULT =
  "Experience a yogic lifestyle that supports natural well-being — good sleep, healthy digestion, and plenty of positive energy — with a balance of activity and rest, participation in community and time for yourself. The Daily Schedule, created by yoga master Swami Vishnudevananda, is the same for all ashram residents, guests, and students.";

export type DailyScheduleProps = {
  /** Centered single column (default) vs two-column layout for During Your Stay. */
  variant?: "default" | "split";
  /** Optional override for section heading. */
  title?: string;
  /** Optional intro paragraph (defaults to Swami Vishnudevananda copy). */
  introText?: string;
  /** Left-column image when `variant="split"`. */
  splitSideImageUrl?: string;
  splitSideImageAlt?: string;
};

const scheduleData = [
  {
    time: "6:00 AM",
    title: "Satsang - Meditation, Kirtan, Philosophy Sharing",
    desc: "Wake up surrounded by the quiet beauty of the pine forest and start your day with meditation and inspiring spiritual practices in community.",
  },
  {
    time: "7:30 AM",
    title: "Breakfast",
    desc: "Enjoy a light porridge, perhaps sitting outside listening to birdsong or talking with friends.",
  },
  {
    time: "8:00 AM",
    title: "Hatha Yoga and Pranayama",
    desc: "Participate in the 2-hour morning Sivananda Yoga class of postures, breathing, and relaxation to balance and energize you for the day.",
    expandedImageUrl: SCHEDULE_INLINE_IMG,
    expandedImageAlt: "Morning Hatha Yoga class",
  },
  {
    time: "10:00 AM",
    title: "Vegetarian Brunch",
    desc: "Eat a delicious, nourishing brunch prepared with local produce in accordance with a yogic, plant-based diet, and the opportunity to sit inside or outdoors.",
  },
  {
    time: "11:00 AM",
    title: "Karma Yoga",
    desc: "Spend an hour contributing to the community through karma yoga — a powerful practice of selfless service.",
  },
  {
    time: "2:00 PM",
    title: "Yoga Vacation Workshop",
    desc: "Learn inspiring approaches to health, well-being, and spiritual life in an afternoon workshop with resident and visiting teachers.",
  },
  {
    time: "4:00 PM",
    title: "Hatha Asanas and Pranayama",
    desc: "Take a second yoga class or take some time to relax, maybe discover beautiful spots on the property or treat yourself to a nap, a good book, or a good conversation.",
  },
  {
    time: "6:00 PM",
    title: "Vegetarian Dinner",
    desc: "Nourish yourself with a delicious, nutritional dinner, then stop by the boutique for some chocolate, a gift, or a little personal shopping.",
  },
  {
    time: "7:30 PM",
    title: "Satsang – Meditation, Kirtan and Sharing",
    desc: "End your day with meditation and inspiring spiritual practices in the community.",
  },
];

export default function DailySchedule({
  variant = "default",
  title = "Daily Schedule",
  introText = INTRO_DEFAULT,
  splitSideImageUrl = "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/during-stay-01.png",
  splitSideImageAlt = "Daily Yoga Practice",
}: DailyScheduleProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionList = (
    <div className={variant === "split" ? "space-y-0" : "max-w-3xl mx-auto"}>
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
              className="w-full flex items-center justify-between gap-3 py-5 cursor-pointer group text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 md:gap-12 min-w-0 flex-1">
                <span
                  className="font-medium w-24 shrink-0"
                  style={{ color: variant === "split" ? TITLE_COLOR : "#ED7D4D" }}
                >
                  {item.time}
                </span>
                <span
                  className="text-lg md:text-xl font-bold group-hover:opacity-90 transition-opacity min-w-0"
                  style={{ color: TITLE_COLOR }}
                >
                  {item.title}
                </span>
              </div>
              <div
                className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-[#4F6F1F] border-[#4F6F1F]" : ""}`}
                aria-hidden
              >
                <ChevronDown
                  className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${isActive ? "rotate-180 text-white" : ""}`}
                />
              </div>
            </button>
            <motion.div
              initial={false}
              animate={{
                height: isActive ? "auto" : 0,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div
                className={
                  variant === "split"
                    ? "pb-6 pl-0 sm:pl-[7.5rem] md:pl-32 text-[#4A4A4A] leading-relaxed"
                    : "pl-0 sm:pl-28 md:pl-32 pb-6 text-gray-600 leading-relaxed"
                }
              >
                <p>{item.desc}</p>
                {"expandedImageUrl" in item && item.expandedImageUrl && (
                  <div className="mt-4 relative w-full max-w-xs aspect-[2/1] rounded-sm overflow-hidden shadow-sm">
                    <Image
                      src={item.expandedImageUrl}
                      alt={
                        "expandedImageAlt" in item && item.expandedImageAlt
                          ? item.expandedImageAlt
                          : ""
                      }
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                      unoptimized
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );

  if (variant === "split") {
    return (
      <section className="max-w-7xl mx-auto py-24 px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          <div className="w-full lg:w-[45%]">
            <h2
              className="text-3xl font-serif font-bold mb-6"
              style={{ color: TITLE_COLOR }}
            >
              {title}
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-10">{introText}</p>
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
              <Image
                src={splitSideImageUrl}
                alt={splitSideImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                unoptimized
              />
            </div>
          </div>

          <div className="w-full lg:w-[55%] flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-10 md:pt-0 md:pl-10 lg:pl-16">
            {accordionList}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-white">
      <h2
        className="text-4xl md:text-5xl font-serif text-center mb-16"
        style={{ color: TITLE_COLOR }}
      >
        {title}
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
          {introText}
        </p>
      </div>
      {accordionList}
    </section>
  );
}
