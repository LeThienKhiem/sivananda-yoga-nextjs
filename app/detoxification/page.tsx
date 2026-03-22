"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoTestimonials from "@/components/VideoTestimonials";
import StudentFeedback from "@/components/StudentFeedback";
import MoreInformation from "@/components/MoreInformation";
import AshramGallery from "@/components/AshramGallery";
import Image from "next/image";
import { Leaf, Flower2, BookOpen } from "lucide-react";

export default function DetoxificationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDFCF8]">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative mt-16 flex h-[50vh] min-h-[400px] flex-col items-center justify-end text-center md:mt-0 md:h-[60vh] md:min-h-[500px]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Ayurveda Detoxification Team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlapping Content Box (No Shadow, blends with background) */}
        <div className="relative z-10 w-[95%] max-w-5xl bg-[#FDFCF8] px-6 py-10 text-center translate-y-1/2 md:py-14">
          <p className="mb-3 text-base font-medium text-gray-600 md:mb-4 md:text-lg">
            Rejuvenate, Recharge, and Reconnect with Your Self in Dalat
          </p>
          <h1 className="font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl lg:text-6xl">
            Ayurveda Detoxification Program
          </h1>
        </div>
      </section>

      {/* Spacer to prevent overlap with the next section due to the translate-y */}
      <div className="h-24 bg-transparent md:h-32" />

      {/* 2. INTRO OVERLAP SECTION */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        {/* Top Row: Text Left, Image Right */}
        <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-20">
          <div className="w-full space-y-4 md:w-1/2">
            <h3 className="mb-4 font-serif text-2xl text-[#4A4A4A]">
              Ancient Practices, Lasting Renewal
            </h3>
            <p className="text-sm leading-relaxed text-[#4A4A4A] md:text-base">
              Experience traditional Ayurveda treatments, a special detox diet
              with herbal teas to support the healing and cleansing process, and
              rejuvenate your body and mind through the ancient techniques of
              Yoga. Gentle daily practices—including Yoga Nidra and
              Pranayama—foster deep relaxation and renewal, while meditation and
              chanting help detoxify the mind and emotions. This holistic
              approach restores balance, eases stress, awakens inner vitality,
              and nurtures lasting well-being.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl md:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800"
                alt="Ayurveda Treatment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Middle Overlap: Green Box */}
        <div className="relative z-20 mx-auto mb-12 mt-12 w-[90%] rounded-sm bg-[#4F6F1F] p-8 text-white shadow-2xl md:ml-20 md:-mb-24 md:-mt-24 md:max-w-xl md:p-12 lg:p-16">
          <h3 className="mb-4 font-serif text-xl text-white">
            Personalized Guidance, Lifelong Wisdom
          </h3>
          <p className="text-sm font-medium leading-relaxed text-white/95 md:text-base">
            Deepen your healing journey with personalized Ayurvedic health
            consultations and enriching workshops on Yoga, Ayurveda, and
            nutrition. Gain practical tools and insights to support your
            well-being. Surrounded by an uplifting community, you&apos;ll feel
            supported, inspired, and empowered to integrate ancient wisdom into
            your modern lifestyle—both during the retreat and beyond.
          </p>
        </div>

        {/* Bottom Row: Image Left, Text Right */}
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse lg:gap-20">
          <div className="w-full space-y-4 md:w-1/2">
            <h3 className="mb-4 font-serif text-2xl text-[#4A4A4A]">
              Nature&apos;s Embrace for Your Detox Journey
            </h3>
            <p className="text-sm leading-relaxed text-[#4A4A4A] md:text-base">
              Set amidst the serene pine forests and overlooking the peaceful
              Tuyen Lam Lake, the Ayurveda House at Sivananda Yoga Dalat Ashram
              offers a tranquil haven for healing and renewal. Surrounded by
              nature&apos;s calming energy, this sacred space supports deep rest
              and inner reflection. Our compassionate and experienced therapists
              provide personalized care, creating a nurturing environment where
              every guest feels supported on their unique journey of
              detoxification and rejuvenation.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl md:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800"
                alt="Detox in Nature"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="w-full bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl">
              Benefits of Detoxification
            </h2>
            <p className="text-lg font-medium text-[#4A4A4A] md:text-xl">
              Experience Peace and Share it with Others
            </p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {/* Top Card */}
            <div className="flex w-full max-w-2xl flex-col items-center rounded-sm border border-gray-100 bg-[#FDFCF8] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:p-12 text-center">
              <div className="mb-6 rounded-full bg-white p-4 shadow-sm">
                <Leaf className="h-8 w-8 text-[#0B3B24]" />
              </div>
              <h3 className="mb-8 font-serif text-xl font-bold text-[#0B3B24] md:text-2xl">
                Enhance Your Holistic Well-Being
              </h3>
              <div className="space-y-4 font-medium leading-relaxed text-[#4A4A4A] text-sm md:text-base">
                <p>Cleanse body, mind, and emotions to restore balance</p>
                <p>Promote deep sleep through calming daily practices</p>
                <p>Nourish your digestive fire (Agni) with a light detox diet</p>
                <p>Boost immunity and support the body&apos;s natural strength</p>
              </div>
            </div>

            {/* Bottom Two Cards */}
            <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* Left Card */}
              <div className="flex flex-col items-center rounded-sm border border-gray-100 bg-[#FDFCF8] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:p-12 text-center">
                <div className="mb-6 rounded-full bg-white p-4 shadow-sm">
                  <Flower2 className="h-8 w-8 text-[#0B3B24]" />
                </div>
                <h3 className="mb-8 font-serif text-xl font-bold text-[#0B3B24] md:text-2xl">
                  Reconnect. Reflect. Recharge.
                </h3>
                <div className="space-y-4 font-medium leading-relaxed text-[#4A4A4A] text-sm md:text-base">
                  <p>Gain clarity and self-awareness by listening to yourself</p>
                  <p>Feel supported and connected to like-minded souls</p>
                  <p>Recharge and restore energy through 5 elements of nature</p>
                </div>
              </div>

              {/* Right Card */}
              <div className="flex flex-col items-center rounded-sm border border-gray-100 bg-[#FDFCF8] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:p-12 text-center">
                <div className="mb-6 rounded-full bg-white p-4 shadow-sm">
                  <BookOpen className="h-8 w-8 text-[#0B3B24]" />
                </div>
                <h3 className="mb-8 font-serif text-xl font-bold text-[#0B3B24] md:text-2xl">
                  Enhance Your Holistic Well-Being
                </h3>
                <div className="space-y-4 font-medium leading-relaxed text-[#4A4A4A] text-sm md:text-base">
                  <p>Get personalized health consultation by Ayurveda experts</p>
                  <p>Learn the wisdom of self-care through Ayurveda foundations</p>
                  <p>Establish awareness, mindful habits and boost inner vitality</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-[#ED7D4D] px-12 py-4 font-bold uppercase tracking-widest text-white shadow-[0_4px_14px_0_rgba(237,125,77,0.3)] transition-colors hover:bg-orange-600 hover:shadow-[0_6px_20px_rgba(237,125,77,0.25)]"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DETOX THROUGH NATURE SECTION */}
      <section className="w-full bg-[#F4F7F0] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center md:mb-20">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl">
              Detox through Nature
            </h2>
            <p className="text-lg font-medium text-[#4A4A4A] md:text-xl">
              Recharge your senses and energy
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
            {/* Card 1: Labyrinth Walk */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800"
                  alt="Labyrinth Walk"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-grow flex-col p-8 md:p-10">
                <h3 className="mb-4 font-serif text-2xl text-[#0B3B24]">
                  Labyrinth Walk
                </h3>
                <p className="text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                  Step inward with each step outward—this mindful walking
                  meditation helps release tension, enhance focus, and support
                  emotional and energetic cleansing.
                </p>
              </div>
            </div>

            {/* Card 2: Sunrise Meditation */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800"
                  alt="Sunrise Meditation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-grow flex-col p-8 md:p-10">
                <h3 className="mb-4 font-serif text-2xl text-[#0B3B24]">
                  Sunrise Meditation
                </h3>
                <p className="text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                  Awaken with the sun and absorb its healing energy, clearing
                  mental fog and gently resetting your internal clock and emotions.
                </p>
              </div>
            </div>

            {/* Card 3: Forest Bathing */}
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800"
                  alt="Forest Bathing"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-grow flex-col p-8 md:p-10">
                <h3 className="mb-4 font-serif text-2xl text-[#0B3B24]">
                  Forest Bathing
                </h3>
                <p className="text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                  Breathe in fresh air and detox through movement and stillness,
                  reconnecting with earth&apos;s rhythm to recharge your body and
                  mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VIDEO TESTIMONIALS */}
      <VideoTestimonials />

      {/* 6. STUDENT FEEDBACK */}
      <StudentFeedback />

      {/* 7. MORE INFORMATION */}
      <MoreInformation />

      {/* 8. GALLERY */}
      <AshramGallery />

      <Footer />
    </main>
  );
}
