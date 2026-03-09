"use client";

import Image from "next/image";
import Link from "next/link";

const IMG_YOGA_NATURE =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop";
const IMG_MASSAGE_HANDS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-01.png";
const IMG_HERBS_OILS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-02.png";
const IMG_HEAD_MASSAGE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-03.png";
const IMG_LEG_MASSAGE =
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop";

export default function AyurvedaExplore() {
  return (
    <section className="bg-white py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="w-full aspect-square rounded-sm p-6 md:p-8 flex flex-col justify-center bg-[#F4F7F0]">
              <p className="text-black text-base md:text-lg leading-relaxed">
                  At the Yoga Resort, an abundance of natural energies infuses
                  our lives with prana (life force) — the trees, birds, ponds,
                  gardens, forest, sky, butterflies, stars — every living thing
                  contributing to our enhanced well-being.
                  <br />
                  <br />
                  One of Ayurveda&apos;s core tenets is that the body&apos;s own
                  natural wisdom leads to vibrant health and the setting here
                  invites that natural wisdom to emerge.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-sm overflow-hidden">
              <Image
                src={IMG_MASSAGE_HANDS}
                alt="Massage hands"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Center Column */}
          <div className="relative w-full h-full min-h-[500px] md:min-h-0 rounded-sm overflow-hidden">
            <Image
              src={IMG_HERBS_OILS}
              alt="Ayurvedic herbs and oils on table"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="relative w-full aspect-square rounded-sm overflow-hidden">
              <Image
                src={IMG_HEAD_MASSAGE}
                alt="Head massage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="w-full aspect-square rounded-sm p-6 md:p-8 flex flex-col justify-center bg-[#F4F7F0]">
              <p className="text-black text-base md:text-lg leading-relaxed">
                  As daily rhythms and routines are foundational to Ayurveda, we
                  encourage anyone interested in Ayurveda to come for our Yoga
                  Vacation Program and benefit from the combination of the
                  prana-rich natural world and the Daily Schedule of meditation
                  and spiritual teachings; wholesome, nutrition-rich plant-based
                  meals; and Sivananda Yoga classes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center w-full">
          <Link
            href="/yoga-vacation"
            className="border-2 border-[#ED7D4D] text-[#ED7D4D] bg-white px-10 py-4 font-bold tracking-wider uppercase hover:bg-[#ED7D4D] hover:text-white transition-colors rounded-sm inline-block"
          >
            EXPLORE YOGA VACATION
          </Link>
        </div>
      </div>
    </section>
  );
}
