"use client";

import Image from "next/image";

const IMG_COBRA_POSE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/training-06.png";
const IMG_GURUS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/sivanada_master02.jpg";
const IMG_PINE_FOREST =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4FxIi7Ms.jpeg";

export default function ClassicalYogaPurpose() {
  return (
    <section className="bg-[#FDFCF8] py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto relative flex flex-col gap-20">
        {/* Top Layout — Classical Yoga */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[#0B3B24] text-3xl font-serif font-bold">
              Classical Yoga
            </h2>
            <p className="text-gray-500 italic mb-6">
              Timeless Wisdom for Modern Life&apos;s Challenges
            </p>
            <p className="text-[#0B3B24] text-base leading-relaxed max-w-md">
              Classical Yoga is a systematic and complete system of self development handed down by a lineage of teachers. It was not created by any one individual. Classical Yoga is universal and not sectarian, and can be practiced by all. It is a complete system in itself, with many different facets. It is a systematic approach, practiced over a long time, and not a quick fix. The goal is peace and well-being. Its teaching needs to be selfless, to ensure the purity of the teaching.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm order-1 lg:order-2">
            <Image
              src={IMG_COBRA_POSE}
              alt="Students practicing Bhujangasana (Cobra pose) outdoors"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Centerpiece — Historical B&W Photo (overlaps top and bottom) */}
        <div className="relative z-20 mx-auto w-full max-w-lg -my-16 md:-my-24 px-4">
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5] border-[12px] border-white shadow-xl rounded-sm overflow-hidden">
            <Image
              src={IMG_GURUS}
              alt="Swami Sivananda and Swami Vishnudevananda — lineage of classical yoga"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 512px"
            />
          </div>
        </div>

        {/* Bottom Layout — Real Purpose of Yoga */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm order-2 lg:order-1">
            <Image
              src={IMG_PINE_FOREST}
              alt="Teachers and students walking in pine forest with yoga mats"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-[#0B3B24] text-3xl font-serif font-bold">
              Real Purpose of Yoga
            </h2>
            <p className="text-gray-500 italic mb-6">
              Evolving Through Life with Balance, Growth, and Inner Fulfillment
            </p>
            <p className="text-[#0B3B24] text-base leading-relaxed max-w-md">
              We practice Yoga in order to evolve and succeed in life. Yoga is not separate from life. It is possible to integrate the practices in our daily routine using the <strong>5 Points of Yoga</strong>, no matter our conditions in life (rich or poor, single or with family duties, old or young, healthy or ill), because everyone has potential for growth and everyone wants to evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
