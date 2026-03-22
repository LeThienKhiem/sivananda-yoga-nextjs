"use client";

import React from "react";
import Header from "@/components/Header";
import KarmaYogaTabs from "@/components/KarmaYogaTabs";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600";
const IMG_INTRO =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-01.png";
const IMG_KARMA =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-12.png";
const IMG_BHAKTI =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-13.png";
const IMG_RAJA =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-14.png";
const IMG_JNANA =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-15.png";
const IMG_TESTIMONIAL_BG =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop";
const IMG_KARMA_AERIAL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-02.png";
const IMG_KARMA_TRAIL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-03.png";
const IMG_BHAKTI_QUOTE =
  "https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1600";
const IMG_BHAKTI_LILY =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-05.png";
const IMG_BHAKTI_LOVE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-16.png";
const IMG_RAJA_TOP =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-07.png";
const IMG_RAJA_BOTTOM =
  "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1600";
const IMG_RAJA_DISCIPLINE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-08.png";
const IMG_RAJA_CONCENTRATION =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-09.png";
const IMG_ASHTANGA_FOREST =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600";
const IMG_JNANA_LOTUS =
  "https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?q=80&w=1600";
const IMG_JNANA_CONTENT =
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop";
const IMG_JNANA_WISDOM =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop";

export default function FourPathsOfYogaPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="4 Paths of Yoga Hero - Serene Nature"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Overlapping Content Box - positioned at bottom, 50% over image / 50% over page */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-[95%] max-w-4xl p-8 md:p-16 bg-[#FDFCF8] text-center rounded-sm">
          <p className="text-[#0B3B24] uppercase tracking-widest text-base mb-4 font-medium">
            Ancient Wisdom for Modern Life
          </p>
          <h1 className="text-[#0B3B24] font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The 4 Paths of Yoga
          </h1>
          <div className="w-20 h-1 bg-[#ED7D4D] mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif italic">
            Karma, Bhakti, Raja, Jnana — Four distinct paths to unify body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* Spacer for overlapping box */}
      <div className="h-24 md:h-32" />

      {/* The Four Paths of Yoga — Intro and Grid */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Part 1: Introduction — 2-column (Text ~60% | Image ~40%) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B3B24] mb-6">
                The Four Paths of Yoga: A Complete Synthesis for Inner Peace
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                What kind of Yoga does Swami Sivananda teach? Swami Sivananda teaches the synthesis of yoga. He promotes complete yoga life by combining the practice of Karma Yoga (selfless service), Bhakti Yoga (devotion), Hatha Yoga and Raja Yoga (systematic control of body, breath, and mind, culminating in meditation), and, last but not least, Jnana Yoga (or Vedanta philosophy), which is the philosophical teachings of the True Nature of the Self and of the Universe.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                His teaching is summarized in his most well known slogan: &quot;Serve, Love, Give, Purify, Meditate, Realize&quot;. The tenets and practices of these 4 paths of Yoga are further explained in subsequent sections. It is important to remember however that all the paths lead ultimately to the same destination: ultimate peace and health.
              </p>
            </div>
            <div className="lg:col-span-2 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={IMG_INTRO}
                alt="Serene nature — waterfall and bridge, synthesis of yoga"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                unoptimized
              />
            </div>
          </div>

          {/* Part 2: The 4 Paths Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Karma Yoga */}
            <article className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src={IMG_KARMA}
                  alt="Karma Yoga — path of selfless service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B3B24]">
                Karma Yoga
              </h3>
              <p className="text-base text-gray-500 mb-4 uppercase tracking-wider">
                Path of Selfless service
              </p>
              <p className="text-base text-[#4A4A4A] leading-relaxed flex-grow">
                Karma Yoga – the Yoga of action – is the path chosen primarily by those of an outgoing nature. It purifies the heart by teaching you to act selflessly, without thought of gain or reward. By detaching yourself from the fruits of your actions and offering them up to the welfare of others, you learn to sublimate the ego.
              </p>
            </article>

            {/* Card 2: Bhakti Yoga */}
            <article className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src={IMG_BHAKTI}
                  alt="Bhakti Yoga — path of devotion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B3B24]">
                Bhakti Yoga
              </h3>
              <p className="text-base text-gray-500 mb-4 uppercase tracking-wider">
                Path of Devotion
              </p>
              <p className="text-base text-[#4A4A4A] leading-relaxed flex-grow">
                Bhakti Yoga is the path of devotion, which appeals particularly to those of an emotional nature. Bhakti Yogis are motivated chiefly by the power of Love and sees the Universe as the embodiment of Love.
              </p>
            </article>

            {/* Card 3: Raja Yoga */}
            <article className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src={IMG_RAJA}
                  alt="Raja Yoga — path of mind control"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B3B24]">
                Raja Yoga
              </h3>
              <p className="text-base text-gray-500 mb-4 uppercase tracking-wider">
                Path of Mind control
              </p>
              <p className="text-base text-[#4A4A4A] leading-relaxed flex-grow">
                Raja Yoga is the science of physical and mental control. It offers a comprehensive method for controlling the waves of thought by tuning our mental and physical energy into pure energy.
              </p>
            </article>

            {/* Card 4: Jnana Yoga */}
            <article className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src={IMG_JNANA}
                  alt="Jnana Yoga — path of knowledge"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B3B24]">
                Jnana Yoga
              </h3>
              <p className="text-base text-gray-500 mb-4 uppercase tracking-wider">
                Path of Knowledge
              </p>
              <p className="text-base text-[#4A4A4A] leading-relaxed flex-grow">
                Jnana Yoga – the Yoga of Knowledge and wisdom – is the most difficult path, requiring tremendous strength of will and of intellect. Taking the philosophy of Vedanta, the Jnana Yogi uses his intellect to enquire into his own nature, dissolving the veils of ignorance and illusion.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Karma Yoga Testimonial */}
      <section className="relative w-full py-24 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_TESTIMONIAL_BG}
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gray-50/90 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-8">
            KARMA YOGA – Path of Devotion
          </h2>
          <p className="text-xl md:text-2xl font-serif text-gray-800 mb-6">
            &quot;The first step in the spiritual path is the selfless service to Humanity&quot;
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-10">
            – Swami Sivananda in &quot;Sivananda Upanishad&quot;
          </p>
          <button
            type="button"
            className="inline-block px-8 py-3 bg-[#FDFCF8]/80 text-[#ED7D4D] border border-[#ED7D4D]/30 font-bold text-base tracking-wider uppercase rounded-sm hover:bg-[#ED7D4D] hover:text-white transition-colors cursor-pointer backdrop-blur-sm"
          >
            KARMA YOGA PATH
          </button>
        </div>
      </section>

      {/* Karma & What is Karma Yoga — Staggered layout */}
      <section className="bg-[#FDFCF8]">
        <div className="max-w-6xl mx-auto py-24 px-6 relative">
          {/* Part 1: What is Karma? — Text left, Image right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-6 font-bold">
                What is Karma?
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Karma literally means &quot;action&quot;. Action always comes with the consequence of the action.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                The law of karma is the law of action and reaction, illustrated by the well known saying &quot;what we reap is what we sow&quot;, and also the law of retribution, which explains that &quot;what we receive is the result of what we did in the past&quot;.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Nothing is by accident, merit, demerit, honor, or dishonor; any happening in our lives is the result of karma.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg">
              <Image
                src={IMG_KARMA_AERIAL}
                alt="Aerial forest — what is karma"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>

          {/* Part 2: 3 Kinds of Karma — Overlapping box */}
          <div className="relative z-20 bg-[#4F6F1F] text-white p-8 md:p-12 max-w-md shadow-2xl md:-mt-32 md:-mb-16 md:ml-24 mx-auto mt-8 mb-8 rounded-sm">
            <h3 className="text-2xl font-serif mb-4">3 Kinds of Karma</h3>
            <p className="text-white/90 leading-relaxed mb-4 text-base md:text-lg">
              There are three kinds of karma: past karma, present karma and future karma.
            </p>
            <p className="text-white/90 leading-relaxed text-base md:text-lg">
              They are inter-related. The present karma is the result of the past karma, and our reaction to the present karma will determine our future karma.
            </p>
          </div>

          {/* Part 3: What is Karma Yoga? — Image left, Text right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src={IMG_KARMA_TRAIL}
                alt="Pine forest trail — karma yoga"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-6 font-bold">
                What is Karma Yoga?
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                &quot;Work done in the right attitude becomes consecrated; becomes a sacred act. A life consecrated in doing selfless acts will become a divine life.&quot; – Swami Sivananda.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                The problem is that we are very attached to our actions and our works; we constantly identify with our actions and take pride in what we are doing.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Our ego is very much invested in our talents, skills, knowledge and activities. It takes detachment towards our actions in order to see ourselves and our actions in a different light.
              </p>
            </div>
          </div>
        </div>
      </section>

      <KarmaYogaTabs />

      {/* Bhakti Yoga Transition / Quote */}
      <section className="relative py-32 px-6 flex items-center justify-center min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_BHAKTI_QUOTE}
            alt="Bhakti Yoga — path of devotion, light nature background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold mb-8">
            Bhakti Yoga – Path of Devotion
          </h2>

          <p className="text-xl md:text-2xl text-[#0B3B24] leading-relaxed mb-6 font-medium px-4">
            &quot;Love is divine. Love is nectar. Love is the greatest power on earth. Love alone can transform the world. Love alone can bring peace on this earth. Love alone can conquer hearts of others.&quot;
          </p>

          <p className="text-base md:text-lg text-[#0B3B24] mb-12 opacity-80 font-medium">
            – Swami Sivananda in &quot;Bliss Divine&quot;
          </p>

          <Link
            href="/yoga-vacation"
            className="inline-block bg-white/40 hover:bg-white text-[#ED7D4D] border border-white/50 px-8 py-3 rounded-sm font-semibold tracking-widest text-base uppercase transition-all shadow-sm"
          >
            Explore Bhakti Yoga
          </Link>
        </div>
      </section>

      {/* What is Bhakti Yoga & Satsanga */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Block 1: What is Bhakti Yoga? — Text left, Image right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-6 font-bold">
                What is Bhakti Yoga?
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Swami Sivananda says in Bliss Divine, &quot;Bhakti is continuity of devotion. Bhakti is attraction to the Divine, just as there is attraction of the needle to the magnet.&quot;
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Bhakti is love for love&apos;s sake. There is neither selfish expectation nor fear. Bhakti is no emotionalism, but it is tuning the will and the intellect as well towards the Divine.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg">
              <Image
                src={IMG_BHAKTI_LILY}
                alt="Water lilies — Bhakti Yoga, devotion"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>

          {/* Block 2: What is Love? — Image left, Text right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src={IMG_BHAKTI_LOVE}
                alt="Community in nature — what is love, connection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-6 font-bold">
                What is Love?
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Swami Sivananda says, &quot;Love is the law of life. To love is to fulfill the law. To live is to love. To love is to live. You live so that you may learn to love. You love so that you may learn to live in the Eternal.&quot;
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                This world needs leaders filled with sympathy, cooperation, love, sacrifice, compassion, and tolerance. The saints, seers and prophets of all religions have spoken of love as the end and aim or goal of life.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Live in love. Breathe in Love. Sing in Love. Eat in Love. Drink in Love. Talk in Love. Pray in Love. Meditate in Love. Think in Love. Move in Love. Die in Love.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Purify your thoughts, speeches and actions in the fire of love. You will become a changed being. You will enjoy the highest peace and bliss.
              </p>
            </div>
          </div>

          {/* Block 3: Satsanga */}
          <div className="max-w-4xl mx-auto text-center mt-32 pt-16 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-6 font-bold">
              Satsanga – Community, Friendship, and Respect
            </h2>
            <p className="text-xl text-[#4A4A4A] leading-relaxed mb-10">
              Yoga encourages pure love and respect to others. The yoga resort provides an opportunity to develop good relationships with others as well as to develop love and support in selfless relationships.
            </p>
            <Link
              href="/yoga-vacation"
              className="inline-block bg-[#ED7D4D] text-white px-10 py-4 rounded-sm font-bold tracking-widest text-base uppercase hover:bg-orange-600 transition-colors shadow-md"
            >
              EXPLORE YOGA VACATION
            </Link>
          </div>
        </div>
      </section>

      {/* Raja Yoga Transition Section */}
      <section className="w-full flex flex-col mt-24">
        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            src={IMG_RAJA_TOP}
            alt="Raja Yoga Community — group of yoga students"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="bg-[#FDFCF8] py-20 px-6 text-center flex flex-col items-center justify-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold mb-6">
            Raja Yoga – Path of Mind Control
          </h2>

          <p className="text-xl md:text-2xl text-[#4A4A4A] italic mb-6 font-medium max-w-2xl mx-auto">
            &quot;Raja Yoga is the royal road to freedom and bliss&quot;
          </p>

          <p className="text-base md:text-lg text-[#4A4A4A] mb-12 opacity-80 font-medium">
            – Swami Sivananda
          </p>

          <button
            type="button"
            className="bg-white hover:bg-[#FDFCF8] text-[#ED7D4D] border border-[#ED7D4D]/20 px-10 py-4 rounded-sm font-semibold tracking-widest text-base uppercase transition-all shadow-[0_4px_14px_0_rgba(237,125,77,0.1)] hover:shadow-[0_6px_20px_rgba(237,125,77,0.15)]"
          >
            EXPLORE YOGA PROGRAM
          </button>
        </div>

        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            src={IMG_RAJA_BOTTOM}
            alt="Cherry blossoms — nature, Raja Yoga"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Raja Yoga Content — Self Discipline & Concentration */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Block 1: Self Discipline and Self Control — Text left, Image right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-6 font-bold">
                Self Discipline and Self Control
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Raja Yoga is the path of systematic analysis and control of the mind. Compiled by Patanjali Maharishi, Raja Yoga is also known as Ashtanga Yoga, because its practices can be divided into eight limbs.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Hatha Yoga, Kundalini Yoga, and Mantra Yoga are all parts of Raja Yoga. The goal is to control the chitta vrittis, or thought waves, and thus attain the super-conscious state of mind, the final goal.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg">
              <Image
                src={IMG_RAJA_DISCIPLINE}
                alt="Advanced yoga practitioner — self discipline, Raja Yoga"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>

          {/* Block 2: Practice of Concentration — Image left, Text right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src={IMG_RAJA_CONCENTRATION}
                alt="Meditation outdoors — practice of concentration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-6 font-bold">
                Practice of Concentration
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Concentration is holding one thought in the mind for a period of time. Concentration brings power to the mind and makes the mind one-pointed, thus allowing peace and happiness to shine through. Concentration implies effort and perseverance to bring the mind back to focus.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                There are many exercises for concentration; for example, allowing the mind to think on a topic and everything related to the topic but nothing outside of the topic. The mind is like a sheep tied to a post, and has to move in a smaller circle. The fewer thoughts you have in the mind, the more Peace you have. The more thoughts in the mind, the less Peace you have.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Concentration is like gathering the rays of the mind and applying them on a particular topic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ashtanga Yoga – The 8 Limbs Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-stretch">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_ASHTANGA_FOREST}
            alt="Misty pine forest with sun rays — Ashtanga Yoga"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 w-full md:w-[45%] lg:w-[40%] bg-[#1A1A1A]/85 backdrop-blur-sm p-8 md:p-14 lg:p-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-10">
            Ashtanga Yoga – The 8 Limbs
          </h2>

          <div className="space-y-5 text-white/90 text-base md:text-lg font-light">
            <p><span className="font-semibold">#1 Yamas</span> – The restrictions, what not to do</p>
            <p><span className="font-semibold">#2 Niyamas</span> – The observances, what to do</p>
            <p><span className="font-semibold">#3 Asana</span> – Steady pose</p>
            <p><span className="font-semibold">#4 Pranayama</span> – Control of the vital energy</p>
            <p><span className="font-semibold">#5 Pratyahara</span> – Withdrawal of the senses</p>
            <p><span className="font-semibold">#6 Dharana</span> – Concentrating the mind and exclusion of all other thoughts.</p>
            <p><span className="font-semibold">#7 Dhyana</span> – Meditation with the exclusion of other sensual perception</p>
            <p><span className="font-semibold">#8 Samadhi</span> – Super-conscious state</p>
          </div>
        </div>
      </section>

      {/* Jnana Yoga Transition Section */}
      <section className="relative py-32 px-6 flex items-start justify-center min-h-[500px] md:min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_JNANA_LOTUS}
            alt="White lotus flowers — Jnana Yoga, path of knowledge"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-12">
          <h2 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold mb-6">
            Jnana Yoga – Path of Knowledge
          </h2>

          <p className="text-xl md:text-2xl text-[#0B3B24] leading-relaxed mb-6 font-medium px-4">
            &quot;Solve first the, &quot;Who am I?&quot; problem. All other problems will be automatically solved.&quot;
          </p>

          <p className="text-base md:text-lg text-[#0B3B24] mb-12 opacity-80 font-medium">
            – Swami Sivananda in &quot;Sivananda Upanishad&quot;
          </p>

          <Link
            href="/yoga-vacation"
            className="inline-block bg-white/95 hover:bg-white text-[#ED7D4D] border border-[#ED7D4D]/20 px-10 py-4 rounded-sm font-semibold tracking-widest text-base uppercase transition-all shadow-[0_4px_14px_0_rgba(237,125,77,0.1)] hover:shadow-[0_6px_20px_rgba(237,125,77,0.15)]"
          >
            EXPLORE YOGA PROGRAM
          </Link>
        </div>
      </section>

      {/* Jnana Yoga Content Section */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Block 1: The Most Challenging Path of All — Text left, Image right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-6 font-bold">
                The Most Challenging Path of All
              </h3>
              <div className="space-y-6 text-[#4A4A4A] leading-relaxed">
                <p>
                  Vedanta literally means &quot;the end of knowledge&quot;. The Philosophy Vedanta is so called because it explains what the end is and how to achieve it.
                </p>
                <p>
                  It is a philosophy that teaches the unity of life, or oneness of consciousness. It is the sublime philosophy which boldly proclaims that the individual Soul (the jiva) is identical with the Supreme Soul or Brahman.
                </p>
                <p>
                  The practice of Self Enquiry, or &quot;Who am I?&quot; and the practice of discrimination between the real and the unreal form the core of this path.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg">
              <Image
                src={IMG_JNANA_CONTENT}
                alt="Jnana Yoga — path of knowledge, Vedanta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Block 2: Vedanta and the Goal — Image left, Text right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src={IMG_JNANA_WISDOM}
                alt="Nature and wisdom — Jnana Yoga, knowledge of the Self"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-6 font-bold">
                Knowledge of the Self
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Jnana Yoga requires sharp intellect and the ability to discriminate between the permanent and the impermanent. Through study of the scriptures, reflection, and meditation on the nature of the Self, the practitioner seeks to realize the identity of the individual soul with the universal Brahman.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Swami Sivananda taught that the path of knowledge, when pursued with devotion and discipline, leads to the same goal as the other paths—liberation and supreme peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24" aria-label="Upcoming events">
        <UpcomingEvents />
      </section>

      <Footer />
    </main>
  );
}
