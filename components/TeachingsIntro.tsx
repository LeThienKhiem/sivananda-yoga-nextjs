"use client";

import Image from "next/image";

const IMG_PRANAYAMA =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop";
const IMG_STUDY_GROUP =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop";

export default function TeachingsIntro() {
  return (
    <section className="bg-[#FDFCF8] py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Top Left Text Block */}
          <div className="lg:col-span-5 lg:pr-12 lg:row-start-1">
            <p className="text-[#0B3B24] text-sm md:text-base leading-relaxed">
              <strong>Yoga is a complete science of life</strong> that originated in India many thousands of years ago. It is the oldest system of personal development in the world, encompassing in its scope, body, mind and spirit. The ancient yogis had a profound understanding of man&apos;s essential nature and of what he needs to live in harmony with himself and his environment.
            </p>
          </div>

          {/* Top Right Image (Pranayama) */}
          <div className="lg:col-start-7 lg:col-end-13 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-sm lg:row-start-1">
            <Image
              src={IMG_PRANAYAMA}
              alt="Pranayama or alternate nostril breathing practice"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Center Green Box (Floating - overlaps on desktop) */}
          <div className="bg-[#4C6B1F] p-8 md:p-10 text-white z-20 shadow-xl max-w-md -my-8 md:-my-10 lg:my-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-xl">
            <p className="text-sm leading-relaxed italic md:not-italic">
              They perceived the physical body as a vehicle, with the mind as the driver, the soul as man&apos;s true identity, and action, emotion and intelligence as the three forces which pull the body-vehicle. In order to have an integral development, these three forces must be in balance.
            </p>
          </div>

          {/* Bottom Left Image (Study Group) */}
          <div className="lg:col-span-5 mt-12 lg:mt-0 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-sm lg:row-start-2">
            <Image
              src={IMG_STUDY_GROUP}
              alt="Yoga students with teacher - study or class"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Bottom Right Text Block */}
          <div className="lg:col-start-7 lg:col-end-13 flex flex-col justify-center space-y-6 lg:row-start-2">
            <p className="text-[#0B3B24] text-sm md:text-base leading-relaxed">
              Sivananda Yoga teaches the classical method of the four paths of yoga in order for the individual to experience this state of peace and harmony in the body, mind and spirit. The modern Yoga approach emphasizes the physical postures while classical Yoga includes mental, emotional and overall well-being.
            </p>
            <p className="text-[#0B3B24] text-sm md:text-base leading-relaxed">
              Yoga means union or joining. When body-mind-spirit are in harmony the individual transcends separation and egoism and realizes his or her full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
