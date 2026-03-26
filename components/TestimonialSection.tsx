"use client";

import Image from "next/image";

const BANNER_IMAGE_URL =
  "https://images.unsplash.com/photo-1542385151-efd9000785a0";

export default function TestimonialSection() {
  return (
    <section className="relative w-full flex flex-col min-h-[500px] bg-[#FDFCF8] overflow-hidden">
      {/* Top Banner - Image & Program Info */}
      <div className="relative z-0 flex min-h-[600px] h-[70vh] w-full flex-col justify-start px-6 pb-12 pt-16 text-white lg:px-24">
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
            The residential program provides you with a full immersion in the yoga lifestyle. In addition to accommodations at the Resort, you participate in all programs and classes. This includes a daily schedule of yoga asana classes, morning and evening meditation and devotional practices, daily workshops, and selfless service/Karma Yoga for one hour per day. During your stay, you are exposed to classical Vedic philosophy and teachings. Previous experience with yoga or Sivananda Yoga is not required, simply a willingness to learn and fully participate.
          </div>
          <a
            href="https://sivanandayogavietnam.secure.retreat.guru/program/vacation/?form=1&lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block text-center"
          >
            <button
              type="button"
              className="inline-block bg-[#ED7D4D] px-10 py-4 font-bold uppercase tracking-widest text-white transition-colors hover:bg-orange-600"
            >
              REGISTER NOW
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
