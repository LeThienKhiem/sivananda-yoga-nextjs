"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate, type PanInfo } from "framer-motion";

const CARD_WIDTH = 420;
const CARD_GAP = 28;
const CARD_SPACING = CARD_WIDTH + CARD_GAP;

const fundamentalData = [
  {
    id: 1,
    title: "Abhyanga",
    description:
      "Abhyanga is the application of warm oil over the entire body and is recommended as a daily practice. Specific oils are selected, penetrating through the skin to affect the organs and systems of the body. Abhyanga supports circulation and relieves dry skin as well as joint and muscle pain. A deeply restorative practice, it helps to relax the body, mind, and nervous system, supports the immune system, reduces stress, and improves sleep.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-08.png",
  },
  {
    id: 2,
    title: "Udwarthanam",
    description:
      "Udwarthanam is a detoxifying deep tissue massage using herbal powders and oils. It involves upward massage strokes and is used to regulate blood circulation and improve metabolism. Among its numerous benefits, Udwarthanam removes toxins from the skin, eliminates excess fat accumulated under the skin, and improves skin complexion. It is also used to relieve stress and improve joint mobility issues.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-07.png",
  },
  {
    id: 3,
    title: "Dinacharya",
    description:
      "Dinacharya focuses on the five sense organs: eyes, nose, mouth, ears, and skin. It is a practice that helps to release toxins and cleanse the senses using specific herb-enhanced oils and other natural ingredients. As we interact with and take in information from the outside world through our five senses, Dinacharya is a profound practice for restoring the body's primary sensors to natural health.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-09.png",
  },
  {
    id: 4,
    title: "Podikizhi",
    description:
      "Often referred to as the 'King of Ayurvedic Treatments,' Podikizhi involves squeezing warm medicated oil from a cloth over the entire body while performing a light massage. It combines heat and oil therapy to strengthen muscles, lubricate joints, and boost the immune system.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-10.png",
  },
];

export default function AyurvedicFundamentals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerCenter, setContainerCenter] = useState(0);
  const dragOffset = useMotionValue(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setContainerCenter(el.offsetWidth / 2);
    });
    ro.observe(el);
    setContainerCenter(el.offsetWidth / 2);
    return () => ro.disconnect();
  }, []);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;
    const threshold = 50;
    const velocityThreshold = 300;
    let next = activeIndex;
    if (offset.x < -threshold || velocity.x < -velocityThreshold) {
      next = Math.min(activeIndex + 1, fundamentalData.length - 1);
    } else if (offset.x > threshold || velocity.x > velocityThreshold) {
      next = Math.max(activeIndex - 1, 0);
    }
    setActiveIndex(next);
    animate(dragOffset, 0, { type: "spring", stiffness: 350, damping: 35 });
  };

  const stripX = containerCenter - CARD_WIDTH / 2 - activeIndex * CARD_SPACING;

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold">
          Ayurvedic Fundamentals
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative w-full mx-auto overflow-hidden touch-pan-y select-none min-h-[620px] md:min-h-[680px]"
      >
        <motion.div
          className="relative h-full flex items-center"
          style={{
            width: fundamentalData.length * CARD_SPACING - CARD_GAP,
            left: stripX,
            x: dragOffset,
          }}
          initial={false}
          animate={{ left: stripX }}
          transition={{ type: "spring", stiffness: 350, damping: 35 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDrag={(_, info) => dragOffset.set(info.offset.x)}
          onDragEnd={handleDragEnd}
        >
          {fundamentalData.map((item, index) => {
            const isCenter = index === activeIndex;
            return (
              <motion.div
                key={item.id}
                className="absolute top-0 flex flex-col shrink-0 cursor-grab active:cursor-grabbing"
                style={{
                  left: index * CARD_SPACING,
                  width: CARD_WIDTH,
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 10 : 1,
                  filter: isCenter ? "none" : "grayscale(0.3)",
                }}
                initial={false}
                animate={{
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : 0.5,
                  filter: isCenter ? "none" : "grayscale(0.3)",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 35 }}
                onClick={() => !isCenter && setActiveIndex(index)}
              >
                <div className="flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
                  <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="420px"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-serif text-[#0B3B24] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {fundamentalData.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to card ${i + 1}`}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === activeIndex
                ? "bg-[#0B3B24] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
