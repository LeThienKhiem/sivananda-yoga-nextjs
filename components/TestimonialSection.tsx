"use client";

import Image from "next/image";
import Link from "next/link";

const BANNER_IMAGE_URL =
  "https://images.unsplash.com/photo-1542385151-efd9000785a0";

export default function TestimonialSection() {
  return (
    <section className="relative w-full flex flex-col min-h-[500px] bg-[#FDFCF8] overflow-hidden">
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
          <p className="text-2xl font-light mb-8 opacity-90">
            Yoga Lifestyle Immersion
          </p>
          <div className="max-w-3xl border-l-2 border-white/50 pl-6 text-lg lg:text-xl leading-relaxed italic">
            The residential program provides you with a full immersion in the
            yoga lifestyle. In addition to accommodations at the Resort, you
            participate in all programs and classes…
          </div>
        </div>
      </div>

      {/* CTA (Bottom Section) */}
      <div className="flex flex-col items-center lg:items-end w-full px-6 lg:px-24 xl:px-32 pt-12 pb-16 z-10 flex-1">
          <Link
            href="/accommodations"
            className="border border-[#ED7D4D] text-[#ED7D4D] bg-white px-10 py-4 font-bold tracking-widest uppercase hover:bg-[#ED7D4D] hover:text-white transition-colors mb-4 inline-block text-center"
          >
            REGISTER NOW
          </Link>
          <p className="text-gray-700 text-xl">
            Have Questions?{" "}
            <Link
              href="/contact"
              className="underline font-bold hover:text-[#0B3B24]"
            >
              Contact us.
            </Link>
          </p>
      </div>
    </section>
  );
}
