"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Peaceful and beautiful place, with real yogi life My experience was fantastic. I was able to learn a lot about theory, meditation and Asana practice. People were very kind, helpful and keen to share knowledge. The training center is located in a gorgeous area in the mountains of Da Lat. The food was also great. I can't wait to come back and my daily life has changed with the new things I learnt there.",
    name: "Deborah B",
    details: "Chef | Rio de Janeiro | October 8, 2017",
  },
  {
    quote:
      "The nature, the prana (energy), the staff and the knowledge available here cannot be described in words as words have too little power to convey the whole. This is where one has to come and to experience to believe that such a great place does actually exist.",
    name: "Kenny Lam",
    details: "Ceo 4U Tour | March 23, 2017",
  },
  {
    quote:
      "I went to the Sivananda Ashram in Dalat with the intention to cement my meditation practice. What I got was a lot more. With the help from the staff I discovered an inclination for selfless service and attained tools to be affirmative with my mind. I learned about how the mind works, how I work and got deeper into my yoga practice. After a week, I decided to go back. The food is delicious, the space is amazing, the people are amazing.",
    name: "Jane",
    details: "Marketing | San Diego, California | June 30, 2017",
  },
] as const;

const INTERVAL_MS = 8000;

export default function TestimonialsCarousel2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setTimerKey((k) => k + 1); // Reset the 8-second timer
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next, timerKey]);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials2"
      className="relative overflow-hidden bg-[#f9f8f6] py-24"
    >
      {/* Large decorative quote mark */}
      <div
        className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 select-none font-serif text-[12rem] leading-none text-[#1e5c2b]/10"
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-4xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-center"
          >
            <blockquote className="font-serif text-xl italic leading-relaxed text-stone-700 md:text-2xl">
              {current.quote}
            </blockquote>
            <p className="mt-8 text-lg font-bold text-[#1e5c2b]">{current.name}</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              {current.details}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="mt-12 flex justify-center gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className="h-3 w-3 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e5c2b] focus-visible:ring-offset-2"
              style={{
                backgroundColor: index === activeIndex ? "#1e5c2b" : "rgba(0,0,0,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
