"use client";

import Image from "next/image";

const AYURVEDA_IMAGE_URL =
  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21";
export default function AyurvedaIntro() {
  return (
    <section className="bg-[#FDFCF8] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Column — Text */}
        <div className="w-full lg:w-1/2">
          <div className="border-l-[3px] border-[#4A6741] pl-6 md:pl-8 space-y-6">
            <p className="text-[#0B3B24] text-xl md:text-2xl leading-relaxed font-medium">
              Ayurveda is the traditional medical system from India. Meaning the
              &quot;science of life,&quot; Ayurveda has been practiced for more
              than 5,000 years and, like yoga, it is holistic — addressing body,
              mind, and spirituality.
            </p>
            <p className="text-[#0B3B24] text-xl md:text-2xl leading-relaxed font-medium">
              In addition to its treatments and remedies, Ayurveda provides
              guidance on lifestyle, diet, and mindful practices to prevent
              disease or to restore balance when diseases occur. In this way, it
              does not merely treat symptoms but addresses root causes of
              imbalance to support complete healing.
            </p>
          </div>
        </div>

        {/* Right Column — Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm">
            <Image
              src={AYURVEDA_IMAGE_URL}
              alt="Ayurveda consultation or wellness"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
