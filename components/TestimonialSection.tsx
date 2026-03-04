"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const BANNER_IMAGE_URL =
  "https://images.unsplash.com/photo-1542385151-efd9000785a0";

const testimonials = [
  {
    id: 0,
    quote:
      "My stay at the Resort was perfect, allowing me to ground in my spiritual practices in a beautiful location with amazing people. I felt right at home, and there was a nice balance of community time and me-time.",
    author: "Annapurna Grace, Utah",
  },
  {
    id: 1,
    quote:
      "A truly life-changing experience. The daily schedule brought so much peace and clarity to my mind. The food, the teachings, and the nature walks were exactly what I needed to reset.",
    author: "David M., London",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((i) => (i <= 0 ? testimonials.length - 1 : i - 1));
  };
  const goNext = () => {
    setCurrentIndex((i) => (i >= testimonials.length - 1 ? 0 : i + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative w-full flex flex-col min-h-[800px] lg:min-h-[700px] bg-[#FDFCF8] overflow-hidden">
      {/* Top Banner - Image & Program Info */}
      <div className="relative w-full h-[50vh] min-h-[400px] text-white px-6 lg:px-24 py-16 flex flex-col justify-start z-0">
        <Image
          src={BANNER_IMAGE_URL}
          fill
          className="object-cover object-center"
          alt="Forest"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 z-[1]" aria-hidden />
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl font-serif mb-2">
            One-Month Residency Program
          </h2>
          <p className="text-xl font-light mb-8 opacity-90">
            Yoga Lifestyle Immersion
          </p>
          <div className="max-w-3xl border-l-2 border-white/50 pl-6 text-base lg:text-lg leading-relaxed italic">
            The residential program provides you with a full immersion in the
            yoga lifestyle. In addition to accommodations at the Resort, you
            participate in all programs and classes…
          </div>
        </div>
      </div>

      {/* Overlapping Testimonial Box (Green Box) */}
      <div className="relative lg:absolute lg:top-[350px] lg:left-24 xl:left-32 w-[90%] md:w-[500px] mx-auto lg:mx-0 -mt-24 lg:mt-0 bg-[#4F6F1F] text-white p-10 shadow-2xl z-20">
        <Quote className="w-10 h-10 text-white/30 mb-4 fill-current" />
        <h3 className="text-2xl font-serif mb-6">Testimonials</h3>
        <p className="text-lg leading-relaxed mb-8">{current.quote}</p>
        <p className="font-mono text-sm uppercase tracking-wider opacity-80">
          — {current.author}
        </p>
      </div>

      {/* Arrows & CTA (Bottom Section) */}
      <div className="flex flex-col lg:flex-row justify-between items-end w-full px-6 lg:px-24 xl:px-32 pt-12 lg:pt-32 pb-16 z-10 flex-1">
        <div className="flex gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#dcfd8b] hover:border-[#4F6F1F] hover:text-[#4F6F1F] transition-all text-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#dcfd8b] hover:border-[#4F6F1F] hover:text-[#4F6F1F] transition-all text-gray-700"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col items-center lg:items-end mt-12 lg:mt-0">
          <Link
            href="/accommodations"
            className="border border-[#ED7D4D] text-[#ED7D4D] bg-white px-10 py-4 font-bold tracking-widest uppercase hover:bg-[#ED7D4D] hover:text-white transition-colors mb-4 inline-block text-center"
          >
            REGISTER NOW
          </Link>
          <p className="text-gray-700 text-lg">
            Have Questions?{" "}
            <Link
              href="/contact"
              className="underline font-bold hover:text-[#0B3B24]"
            >
              Contact us.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
