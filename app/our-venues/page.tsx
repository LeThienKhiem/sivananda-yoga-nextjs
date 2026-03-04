"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccommodationCost from "@/components/AccommodationCost";
import Image from "next/image";
import Link from "next/link";

// --- Image URLs ---
const HERO_IMG =
  "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000";
const COLLAGE_LEFT =
  "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=800";
const COLLAGE_MID1 =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800";
const COLLAGE_MID2 =
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800";
const BANNER_MEALS =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000";
const BOUTIQUE_1 =
  "https://images.unsplash.com/photo-1767431199061-3237ddd5de9f";
const BOUTIQUE_2 =
  "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=600";
const BOUTIQUE_WIDE =
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1000";
const CTA_VACATION =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800";
const CTA_TTC =
  "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800";

const VENUE_IMGS = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600",
  "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1600",
  "https://images.unsplash.com/photo-1772536888848-c0e7f0f6cf39",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600",
];

const venues = [
  {
    title: "Lake",
    subtitle: "Nature's tranquil mirror",
    desc: "The serene lake at the heart of the ashram offers a perfect spot for silent contemplation, morning meditation, or simply watching the sunrise reflect on the calm waters. Let the stillness of the water calm your mind.",
    image: VENUE_IMGS[0],
  },
  {
    title: "The Pine Whispers",
    subtitle: "A symphony of rustling needles",
    desc: "Surrounded by ancient pine trees, this area is dedicated to outdoor classes and group gatherings. The fresh, crisp air and the gentle sound of the wind through the branches create an ideal environment for deep breathing and pranayama.",
    image: VENUE_IMGS[1],
  },
  {
    title: "The Labyrinth",
    subtitle: "A winding path to inner reflection",
    desc: "Walk our beautifully designed meditation labyrinth. Unlike a maze, a labyrinth has only one path leading to the center and back out. It is a walking meditation tool that helps center the mind, slow the breath, and bring clarity.",
    image: VENUE_IMGS[2],
  },
  {
    title: "Bonfire & Community",
    subtitle: "Gather around the warmth",
    desc: "Join our evening satsangs around the bonfire. Fire has always been a focal point for community gathering, storytelling, and chanting. Experience the uplifting energy of singing mantras together under the starry night sky.",
    image: VENUE_IMGS[3],
  },
  {
    title: "Mindful Walk with Nature",
    subtitle: "Energize, Uplift and Balance",
    desc: "Explore the numerous walking trails surrounding the ashram. Practicing walking meditation in the lush forest helps ground your energy, connect you deeply with Mother Earth, and bring a profound sense of peace and presence.",
    image: VENUE_IMGS[4],
  },
];

export default function OurVenuesPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center text-center px-6">
        <Image
          src={HERO_IMG}
          alt="Our Venues Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-4xl mt-16">
          <p className="uppercase tracking-widest text-xs md:text-sm mb-4 font-semibold">
            Experience the tranquility and natural beauty of our yoga retreat center
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Unleash the Beauty of Ashram
          </h1>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
            Discover the sacred spaces designed to support your spiritual journey, physical well-being, and mental peace.
          </p>
        </div>
      </section>

      {/* 2. INTRO COLLAGE SECTION */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[400px] rounded-sm overflow-hidden shadow-lg col-span-1">
            <Image
              src={COLLAGE_LEFT}
              alt="Hugging Tree"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12 bg-[#FEF5E7] rounded-sm shadow-sm col-span-1 border border-orange-50">
            <h2 className="text-2xl lg:text-3xl font-serif text-[#0B3B24] font-bold mb-6">
              Sacred Spaces
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-4">
              The ashram provides a perfectly balanced environment for your spiritual practices. Every corner of our center is designed in harmony with nature, offering a peaceful sanctuary away from the hustle of modern life.
            </p>
            <p className="text-[#4A4A4A] leading-relaxed">
              Whether you seek quiet solitude by the lake or community connection around the fire, you will find your perfect spot here.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8 col-span-1">
            <div className="relative aspect-video lg:aspect-[4/3] rounded-sm overflow-hidden shadow-md">
              <Image
                src={COLLAGE_MID1}
                alt="Forest Light"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-video lg:aspect-[4/3] rounded-sm overflow-hidden shadow-md">
              <Image
                src={COLLAGE_MID2}
                alt="Sunset View"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. STAGGERED VENUES LIST */}
      <section className="max-w-6xl mx-auto pb-24 px-6 space-y-24">
        {venues.map((venue, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div
              key={index}
              className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 lg:gap-16`}
            >
              <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={venue.image}
                  alt={venue.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-2">
                  {venue.title}
                </h3>
                <h4 className="text-[#ED7D4D] text-sm tracking-widest uppercase font-semibold mb-6">
                  {venue.subtitle}
                </h4>
                <p className="text-[#4A4A4A] leading-relaxed">{venue.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. FULL WIDTH BREAK (MEALS IN NATURE) */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center mt-12 mb-24">
        <Image
          src={BANNER_MEALS}
          alt="Meals in nature"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-lg bg-[#FDFCF8]/95 backdrop-blur-md p-10 shadow-2xl rounded-sm">
            <h2 className="text-3xl font-serif text-[#0B3B24] font-bold mb-4">
              Enjoy your meals in nature
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              Connect with the earth while nourishing your body. Our outdoor dining areas allow you to experience your sattvic meals surrounded by the vibrant energy and fresh air of the pine forest.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BOUTIQUE SECTION */}
      <section className="max-w-7xl mx-auto pb-24 px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-sm overflow-hidden shadow-sm">
              <Image
                src={BOUTIQUE_1}
                alt="Boutique Item 1"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden shadow-sm">
              <Image
                src={BOUTIQUE_2}
                alt="Boutique Item 2"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="col-span-2 relative aspect-[21/9] rounded-sm overflow-hidden shadow-sm">
              <Image
                src={BOUTIQUE_WIDE}
                alt="Boutique Wide"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-14 bg-[#FEF5E7] rounded-sm shadow-sm border border-orange-50">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-6">
              Boutique
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-8 md:text-lg">
              Find your yoga essentials, spiritual books, comfortable clothing, and natural Ayurvedic products in our peaceful ashram boutique. Everything you need to support your practice and take a piece of the ashram home with you.
            </p>
            <Link
              href="/programs"
              className="bg-[#ED7D4D] hover:bg-orange-600 text-white px-8 py-4 w-fit rounded-sm font-bold tracking-widest text-sm uppercase shadow-md transition-all inline-block"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* 6. YOU WOULD LIKE TO... (CARDS) */}
      <section className="bg-[#F4F7F0] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] text-center font-bold mb-16">
            You would like to...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Link
              href="/yoga-vacation"
              className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={CTA_VACATION}
                  alt="Yoga Vacation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-4">
                  Yoga Vacation
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed mb-6 flex-grow">
                  Take a break from daily stress and immerse yourself in a holistic yoga lifestyle. Rejuvenate your body, mind, and spirit.
                </p>
                <span className="text-[#ED7D4D] font-bold uppercase tracking-widest text-sm group-hover:underline">
                  Learn More
                </span>
              </div>
            </Link>

            <Link
              href="/yoga-teacher-training-course"
              className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={CTA_TTC}
                  alt="Teacher Training Course"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-4">
                  Teacher Training Course
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed mb-6 flex-grow">
                  Deepen your practice and learn how to share the teachings of yoga with others in our immersive 4-week certification program.
                </p>
                <span className="text-[#ED7D4D] font-bold uppercase tracking-widest text-sm group-hover:underline">
                  Learn More
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. ACCOMMODATION & COST (reused from yoga-vacation) */}
      <section className="py-12">
        <AccommodationCost />
      </section>

      {/* 8. TESTIMONIAL QUOTE */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-[#0B3B24] font-serif italic leading-relaxed mb-8">
            &quot;This place is a slice of heaven. The energy of the forest, the pure food, and the profound teachings have completely transformed my perspective on life.&quot;
          </p>
          <p className="text-[#4A4A4A] font-bold uppercase tracking-wider text-sm">
            — Sarah M., Retreat Guest
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
