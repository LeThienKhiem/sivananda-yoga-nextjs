"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1696915659797-3799781f64a5",
    alt: "Morning yoga at sunrise in the mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b",
    alt: "Zen garden or misty forest in Dalat",
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    alt: "Cozy meditation hall with wooden interior",
  },
];

const INTERVAL_MS = 5000;

export default function PlaceCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex(i);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="place" className="relative w-full">
      <div className="relative min-h-[80vh] w-full overflow-hidden lg:min-h-screen">
        {/* Full-size sliding images – one visible at a time */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((slide) => (
              <div
                key={slide.src}
                className="relative h-full min-w-full flex-shrink-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={slide.src === SLIDES[0].src}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left-side readability gradient – left 50% on desktop, full on mobile */}
        <div
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:w-1/2"
          style={{ zIndex: 1 }}
          aria-hidden
        />

        {/* Content & CTA – above gradient */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 lg:p-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-5xl font-bold leading-tight text-white lg:text-7xl">
              THE PERFECT PLACE TO LEARN AND RELAX
            </h2>
            <div className="mt-6 space-y-4 text-white/95">
              <p className="text-lg leading-relaxed">
                Nestled by Hồ Tuyền Lâm (Tuyen Lam Lake), our center offers a serene setting where the still waters and mountain air create an ideal environment for deepening your practice and finding inner calm.
              </p>
              <p className="text-lg leading-relaxed">
                Surrounded by the pine forests of Dalat, you can unwind in nature, join morning meditation by the lake, and experience the quiet beauty that makes this place perfect for learning and relaxation.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:border-[#598234] hover:bg-[#598234]/90"
              >
                EXPLORE YOGA VACATION
              </a>
            </div>
          </div>
          <p className="text-sm italic text-white/80">
            *subject to weather condition
          </p>
        </div>

        {/* Navigation dots – bottom center, white / semi-transparent */}
        <div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2"
          role="tablist"
          aria-label="Carousel slides"
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-2 w-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                backgroundColor: i === index ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
