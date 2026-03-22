"use client";

import Image from "next/image";

const IMG_HANDS_HERBS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/IMG_9749.jpg";
const IMG_SPA_TOWELS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ORG_DSC01192.jpg";
const IMG_MASSAGE_OIL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/DSC05863.jpg";
const IMG_SPICES =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/IMG_9672.jpg";

export default function HealingHarmony() {
  return (
    <section className="bg-[#FDFCF8] py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-3 gap-4 md:gap-6 lg:h-[800px]">
          {/* Item 1: Left Tall Image (Hands with herbs) */}
          <div className="col-span-1 lg:col-span-4 lg:row-span-2 relative h-[300px] lg:h-auto rounded-sm overflow-hidden">
            <Image
              src={IMG_HANDS_HERBS}
              alt="Hands with herbs - Ayurveda"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              unoptimized
            />
          </div>

          {/* Item 2: Top Right Wide Image (Spa Towels/Shelf) */}
          <div className="col-span-1 lg:col-span-8 lg:row-span-1 relative h-[250px] lg:h-auto rounded-sm overflow-hidden">
            <Image
              src={IMG_SPA_TOWELS}
              alt="Spa towels and shelf"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 67vw"
              unoptimized
            />
          </div>

          {/* Item 3: Middle Center Text Block */}
          <div className="col-span-1 lg:col-span-4 lg:row-span-1 flex flex-col justify-center p-6 lg:p-10 bg-[#FDFCF8]">
            <h3 className="text-2xl lg:text-3xl font-serif text-[#0B3B24] mb-4 font-bold">
            Natural Healing
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Ayurveda is the science of living in sync with nature.
            erived from studying the elements and seasonal rhythms,
            it offers a blueprint for health through natural harmony.
            </p>
          </div>

          {/* Item 4: Right Tall Image (Massage Bags/Oil) */}
          <div className="col-span-1 lg:col-span-4 lg:row-span-2 relative h-[300px] lg:h-auto rounded-sm overflow-hidden">
            <Image
              src={IMG_MASSAGE_OIL}
              alt="Massage oils and bags"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              unoptimized
            />
          </div>

          {/* Item 5: Bottom Wide Image (Spices) */}
          <div className="col-span-1 lg:col-span-8 lg:row-span-1 relative h-[250px] lg:h-auto rounded-sm overflow-hidden">
            <Image
              src={IMG_SPICES}
              alt="Ayurvedic spices"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 67vw"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
