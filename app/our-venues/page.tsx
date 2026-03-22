"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccommodationCost from "@/components/AccommodationCost";
import TestimonialsCarousel2 from "@/components/TestimonialsCarousel2";
import Gallery, { type GalleryImageItem } from "@/components/Gallery";
import Image from "next/image";
import Link from "next/link";

// --- Image URLs ---
const HERO_IMG =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/venue-06.png";
const COLLAGE_LEFT =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-16.png";
const COLLAGE_MID1 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-04.png";
const COLLAGE_MID2 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-15.png";
const BANNER_MEALS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/venue-07.png";
const BOUTIQUE_1 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/boutique-01.png";
const BOUTIQUE_2 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/vacation-02.png";
const BOUTIQUE_WIDE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/vacation-01.png";
const CTA_VACATION =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-vacation-03.png";
const CTA_TTC =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-11.png";

const VENUE_IMGS = [
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/venue-01.png",
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/venue-02.png",
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/venue-03.png",
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/venue-04.png",
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/venue-05.png",
];

/** Masonry gallery — ashram venues & spaces (reuses page imagery) */
const VENUES_GALLERY_IMAGES: GalleryImageItem[] = [
  { id: "g1", src: VENUE_IMGS[0], alt: "Lake and tranquil waters at the ashram", aspect: "aspect-[4/3]" },
  { id: "g2", src: VENUE_IMGS[1], alt: "Pine forest and outdoor practice area", aspect: "aspect-[3/4]" },
  { id: "g3", src: VENUE_IMGS[2], alt: "Meditation labyrinth path", aspect: "aspect-square" },
  { id: "g4", src: VENUE_IMGS[3], alt: "Bonfire and community gathering space", aspect: "aspect-[4/5]" },
  { id: "g5", src: VENUE_IMGS[4], alt: "Forest walking trails", aspect: "aspect-[3/4]" },
  { id: "g6", src: COLLAGE_LEFT, alt: "Sacred nature at the retreat center", aspect: "aspect-[4/3]" },
  { id: "g7", src: COLLAGE_MID1, alt: "Light through the trees", aspect: "aspect-[16/9]" },
  { id: "g8", src: COLLAGE_MID2, alt: "Sunset and valley views", aspect: "aspect-square" },
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
      <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] flex flex-col items-center justify-end text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt="Our Venues Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 w-[90%] max-w-4xl px-8 py-10 md:py-14 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-sm translate-y-1/2 text-center">
          <p className="text-base md:text-base text-[#0B3B24] tracking-widest uppercase mb-4 font-bold opacity-80">
            Experience the tranquility and natural beauty of our yoga retreat center
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold mb-6">
            Unleash the Beauty of Ashram
          </h1>
          <p className="text-[#4A4A4A] leading-relaxed md:text-xl max-w-2xl mx-auto font-medium">
            Discover the sacred spaces designed to support your spiritual journey, physical well-being, and mental peace.
          </p>
        </div>
      </section>

      {/* Spacer to prevent overlap with the next section due to the translate-y */}
      <div className="h-32 md:h-48 bg-transparent" />

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
                <h4 className="text-[#ED7D4D] text-base tracking-widest uppercase font-semibold mb-6">
                  {venue.subtitle}
                </h4>
                <p className="text-[#4A4A4A] leading-relaxed">{venue.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. DINING IN HARMONY WITH NATURE */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-stretch mb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={BANNER_MEALS}
            alt="Dining in Harmony with Nature"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 w-full md:w-[50%] lg:w-[45%] bg-[#1A1A1A]/70 backdrop-blur-sm p-8 md:p-14 lg:p-20 flex flex-col justify-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Dining in Harmony with Nature
          </h2>

          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10">
            Our dining area opens to peaceful views of the pine forest, with rustic picnic tables nestled in fresh air and birdsong. Meals are unhurried and nourishing—an invitation to slow down, be present, and return to the simple joy of eating in connection with nature&apos;s rhythm and care.
          </p>

          <Link
            href="/accommodations"
            className="border border-white/80 text-white hover:bg-white hover:text-[#0B3B24] px-8 py-3 rounded-sm font-bold tracking-widest text-base uppercase transition-colors w-fit inline-block"
          >
            Book Your Stay
          </Link>
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
            <p className="text-[#4A4A4A] leading-relaxed mb-8 md:text-xl">
              Find your yoga essentials, spiritual books, comfortable clothing, and natural Ayurvedic products in our peaceful ashram boutique. Everything you need to support your practice and take a piece of the ashram home with you.
            </p>
            <Link
              href="/programs"
              className="bg-[#ED7D4D] hover:bg-orange-600 text-white px-8 py-4 w-fit rounded-sm font-bold tracking-widest text-base uppercase shadow-md transition-all inline-block"
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
                <span className="text-[#ED7D4D] font-bold uppercase tracking-widest text-base group-hover:underline">
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
                <span className="text-[#ED7D4D] font-bold uppercase tracking-widest text-base group-hover:underline">
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

      {/* 8. VENUE GALLERY + STUDENT TESTIMONIALS (shared components) */}
      <div className="py-16 md:py-20">
        <div className="flex flex-col gap-16 md:gap-20">
          <Gallery
            title="Ashram Gallery"
            subtitle="Sacred spaces, nature, and gathering places across our retreat center."
            images={VENUES_GALLERY_IMAGES}
          />
          <TestimonialsCarousel2 />
        </div>
      </div>

      <Footer />
    </main>
  );
}
