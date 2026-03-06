"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6";

const definitions = [
  "taking care of body-mind-spirit, not seeking after fitness or beauty, or health.",
  "finding the cause of our suffering and showing the way to get out of it, to be free from it.",
  "a system of education for the body, the mind, the intellect, and the inner spirit.",
  "helping us to go to the root of our suffering, which is not knowing who we really are.",
  "bringing about individual peace of mind and collective peace",
  "helping us to deal with stress.",
  "helping us to calm emotions.",
  "a balanced, strong and steady mind.",
  "universal, not sectarian or separate.",
  "unity in diversity",
  "self discipline.",
  "life, simple life, moderate life.",
  "a way of life.",
];

export default function YogaDefinition() {
  return (
    <section className="relative w-full py-24 px-6 min-h-screen flex items-center">
      <Image
        src={BACKGROUND_IMAGE}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-black/50 md:bg-black/30"
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-white">
        <h2 className="text-2xl md:text-4xl font-serif font-bold mb-10">
          Yoga is, according to Swami Sivananda...
        </h2>
        <div className="flex flex-col">
          {definitions.map((text, i) => (
            <div key={i} className="flex items-start gap-4 mb-4">
              <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 opacity-80" />
              <span className="text-base md:text-xl font-light tracking-wide opacity-90">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
