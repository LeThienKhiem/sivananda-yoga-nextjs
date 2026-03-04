"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SCROLL_AMOUNT = 400;

const fundamentalData = [
  {
    id: 1,
    title: "Udwaethanam",
    description:
      "Udwaethanam is a detoxifying deep tissue massage using herbal powders and oils. It involves upward massage strokes and is used to regulate blood circulation and improve metabolism. Among its numerous benefits, Udwaethanam removes toxins from the skin, eliminates excess fat accumulated under the skin, and improves skin complexion. It is also used to relieve stress and improve joint mobility issues.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Abhyanga",
    description:
      "Abhyanga is the application of warm oil over the entire body and is recommended as a daily practice. Specific oils are selected, penetrating through the skin to affect the organs and systems of the body. Abhyanga supports circulation and relieves dry skin as well as joint and muscle pain. A deeply restorative practice, it helps to relax the body, mind, and nervous system, supports the immune system, reduces stress, and improves sleep.",
    image:
      "https://images.unsplash.com/photo-1608283288151-5121b65b6f3b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Dinacharya",
    description:
      "Dinacharya focuses on the five sense organs: eyes, nose, mouth, ears, and skin. It is a practice that helps to release toxins and cleanse the senses using specific herb-enhanced oils and other natural ingredients. As we interact with and take in information from the outside world through our five senses, Dinacharya is a profound practice for restoring the body's primary sensors to natural health.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Shirodhara",
    description:
      "Shirodhara involves the gentle, continuous pouring of warm medicated oil on the forehead. This divine treatment works directly on the nervous system to calm the mind, relieve stress, and improve sleep quality. It is widely recognized for its effectiveness in treating headaches, anxiety, and mental fatigue.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Pizhichil",
    description:
      "Often referred to as the 'King of Ayurvedic Treatments,' Pizhichil involves squeezing warm medicated oil from a cloth over the entire body while performing a light massage. It combines heat and oil therapy to strengthen muscles, lubricate joints, and boost the immune system.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Kizhi",
    description:
      "Kizhi uses warm herbal powder or leaf bundles (boluses) dipped in medicated oil to massage the body. This rhythmic treatment is excellent for reducing inflammation, relieving joint pain, and improving circulation in specific areas of tension.",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Nasya",
    description:
      "Nasya is the administration of medicated oil through the nasal passages. As the nose is the gateway to the brain, this treatment is essential for clearing sinuses, improving respiratory health, and enhancing mental clarity and sensory function.",
    image:
      "https://plus.unsplash.com/premium_photo-1682098137061-37ad1237ce57",
  },
];

export default function AyurvedicFundamentals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="flex flex-row items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold">
          Ayurvedic Fundamentals
        </h2>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="border border-gray-200 text-gray-400 p-3 rounded-full hover:bg-gray-50 hover:text-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="bg-[#dcfd8b] text-[#0B3B24] p-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 scroll-smooth [&::-webkit-scrollbar]:hidden"
      >
        {fundamentalData.map((item) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[300px] md:w-[400px] flex flex-col group"
          >
            <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
            <div className="bg-white p-8 border border-gray-100 rounded-b-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex-grow">
              <h3 className="text-2xl font-serif text-[#0B3B24] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
