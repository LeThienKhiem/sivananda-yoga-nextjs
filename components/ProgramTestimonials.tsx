"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop";

const testimonials = [
  {
    quote:
      "A powerful reset. The serene setting, expert guidance, and gentle detox revived my body and spirit. I returned energized, more mindful, and equipped with tools for lasting health and balance.",
    author: "Adam, 52 Doctor",
  },
  {
    quote:
      "The Ayurveda program provided exactly what I needed to find my center again. The combination of treatments and the natural environment of the ashram is truly healing.",
    author: "Sarah J., Yoga Teacher",
  },
  {
    quote:
      "I learned more about my health in 7 days here than in years of searching. The wisdom shared by the teachers is profound and practical for daily life.",
    author: "Michael R., Entrepreneur",
  },
];

const ROTATE_INTERVAL_MS = 5000;

export default function ProgramTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % testimonials.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center text-white min-h-[450px] overflow-hidden">
      {/* Background image */}
      <Image
        src={BACKGROUND_IMAGE}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#0B3B24]/50"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-8">
          Testimonials
        </h2>

        <div className="w-full flex flex-col items-center min-h-[180px] md:min-h-[140px]">
          <p
            key={currentIndex}
            className="text-lg md:text-2xl max-w-4xl leading-relaxed mb-6 font-light italic transition-opacity duration-500"
          >
            &quot;{currentTestimonial.quote}&quot;
          </p>
          <p className="text-sm md:text-base font-medium opacity-90">
            — {currentTestimonial.author}
          </p>
        </div>

        {/* Pagination dots */}
        <div className="flex gap-2 mt-10" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-opacity ${
                i === currentIndex ? "bg-white opacity-100" : "bg-white opacity-50 hover:opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
