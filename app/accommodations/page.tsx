"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery, { type GalleryImageItem } from "@/components/Gallery";
import Image from "next/image";
import Link from "next/link";
import { Wifi, Wind, Users, Droplets, Coffee } from "lucide-react";

const BOOK_TTC_URL =
  "https://sivanandayogavietnam.secure.retreat.guru/program/yoga-teachers-training-course-march-2026-2027/?form=1&lang=en";

// --- IMAGE URLS (plain) ---
const HERO_IMG =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/accom-07.png";
const ROOM1_IMGS = [
  "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1600",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
  "https://images.unsplash.com/photo-1595576508898-0ad5c879a061",
];
const ROOM2_IMGS = [
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600",
  "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=800",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800",
  "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=800",
];
const MEAL_IMGS = [
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/accom-01.png",
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/accom-02.png",
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/accom-03.png",
];

/** Masonry gallery above footer — resort rooms, grounds, and practice spaces */
const ACCOMMODATION_GALLERY_IMAGES: GalleryImageItem[] = [
  {
    id: "ag-1",
    src: MEAL_IMGS[0],
    alt: "Resort accommodation and dining pavilion surrounded by trees",
    aspect: "aspect-[4/3]",
  },
  {
    id: "ag-2",
    src: MEAL_IMGS[1],
    alt: "Garden paths and green spaces at the yoga resort",
    aspect: "aspect-[3/4]",
  },
  {
    id: "ag-3",
    src: MEAL_IMGS[2],
    alt: "Peaceful outdoor area for rest between classes",
    aspect: "aspect-square",
  },
  {
    id: "ag-4",
    src: HERO_IMG,
    alt: "Yoga resort nestled in the hills of Dalat",
    aspect: "aspect-[4/5]",
  },
  {
    id: "ag-5",
    src: ROOM1_IMGS[0],
    alt: "Bright shared room with natural light",
    aspect: "aspect-[3/4]",
  },
  {
    id: "ag-6",
    src: ROOM2_IMGS[0],
    alt: "Private villa room with serene forest views",
    aspect: "aspect-[16/9]",
  },
  {
    id: "ag-7",
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
    alt: "Yoga and meditation hall",
    aspect: "aspect-[4/3]",
  },
  {
    id: "ag-8",
    src: "https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?q=80&w=800",
    alt: "Lotus pond and tropical gardens",
    aspect: "aspect-square",
  },
];

// --- MOCK DATA ---
const rooms = [
  {
    id: "om-shanti",
    name: "OM & SHANTI VILLA",
    type: "Shared Room",
    overview:
      "Our shared rooms offer a peaceful, communal living experience. Designed for spiritual seekers, these rooms provide a comfortable resting space after a day of intensive yoga and meditation. Enjoy the harmonious atmosphere of ashram living.",
    amenities: [
      { icon: <Wifi size={18} />, label: "Free Wifi" },
      { icon: <Users size={18} />, label: "Up to 4 people" },
      { icon: <Droplets size={18} />, label: "Shared Bathroom" },
      { icon: <Wind size={18} />, label: "Fan / Natural Air" },
    ],
    price: "from $45/night",
    images: ROOM1_IMGS,
  },
  {
    id: "c-villa",
    name: "C VILLA",
    type: "Private Room",
    overview:
      "For those seeking a more private retreat, the C Villa offers a serene private space surrounded by nature. Perfect for couples or individuals who need quiet time for deep reflection and personal practice.",
    amenities: [
      { icon: <Wifi size={18} />, label: "Free Wifi" },
      { icon: <Users size={18} />, label: "1 - 2 people" },
      { icon: <Droplets size={18} />, label: "Private Bathroom" },
      { icon: <Coffee size={18} />, label: "Tea/Coffee Maker" },
    ],
    price: "from $85/night",
    images: ROOM2_IMGS,
  },
];

const meals = [
  {
    title: "Nourishing Meals Rooted in Yogic Wisdom",
    desc: "Our daily vegetarian meals are prepared following Ayurvedic principles, using fresh, locally sourced ingredients. These sattvic meals are designed to nourish the body, calm the mind, and support your yoga practice without making you feel heavy.",
    image: MEAL_IMGS[0],
  },
  {
    title: "Wholesome Nutrition in Every Bite",
    desc: "Eating is a spiritual practice. We take time to appreciate our food, eating in a calm environment. Our diet excludes meat, fish, eggs, garlic, and onions, focusing instead on grains, fresh vegetables, fruits, legumes, and nuts.",
    image: MEAL_IMGS[1],
  },
  {
    title: "Food Made with Love, Served with Purpose",
    desc: "Every meal is cooked with pure intentions and love. In ashram life, preparing and serving food is a form of Karma Yoga (selfless service). This positive energy transfers into the food, providing deep nourishment for the soul.",
    image: MEAL_IMGS[2],
  },
];

// --- SUB-COMPONENT: Room Gallery ---
function RoomGallery({ images }: { images: string[] }) {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative w-full aspect-[4/3] md:aspect-video rounded-md overflow-hidden shadow-sm">
        <Image
          src={mainImg}
          alt="Room View"
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.slice(1, 5).map((img, idx) => (
          <div
            key={idx}
            onClick={() => setMainImg(img)}
            className={`relative aspect-square cursor-pointer rounded-sm overflow-hidden border-2 transition-all ${mainImg === img ? "border-[#ED7D4D]" : "border-transparent opacity-70 hover:opacity-100"}`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 12vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function AccommodationsPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      <Header />

      {/* 1. HERO — textbox 50% on image / 50% on page bg (matches main bg-[#FDFCF8]) */}
      <section className="relative h-[60vh] min-h-[500px] w-full text-center">
        <Image
          src={HERO_IMG}
          alt="Yoga Resort Dalat"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

        <div className="absolute bottom-0 left-1/2 z-10 w-[90%] max-w-3xl -translate-x-1/2 translate-y-1/2 px-6 py-12 bg-[#FDFCF8] rounded-sm">
          <p className="text-base md:text-lg text-gray-600 tracking-widest uppercase mb-4 font-medium">
            Enjoy a relaxing stay at our Yoga Resort in Dalat
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#0B3B24] font-bold mb-6">
            Accommodation
          </h1>
          <p className="text-[#4A4A4A] leading-relaxed">
            Immerse yourself in nature and find deep rest. Our accommodations are
            designed to provide a peaceful haven for your physical and spiritual
            rejuvenation.
          </p>
        </div>
      </section>

      {/* Spacer: room for lower half of overlapping hero textbox */}
      <div className="h-28 w-full bg-[#FDFCF8] md:h-40" aria-hidden />

      {/* 2. ACCOMMODATION LIST */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        {/* Room 1: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <RoomGallery images={rooms[0].images} />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-[#FEF5E7] p-8 md:p-12 shadow-lg rounded-sm">
              <h2 className="text-3xl font-serif text-[#0B3B24] font-bold mb-2 uppercase">{rooms[0].name}</h2>
              <p className="text-[#ED7D4D] font-medium tracking-wider uppercase text-base mb-6">{rooms[0].type}</p>

              <div className="mb-8 space-y-4">
                <h4 className="font-bold text-[#0B3B24]">Overview</h4>
                <p className="text-gray-600 text-base leading-relaxed">{rooms[0].overview}</p>
              </div>

              <div className="mb-10">
                <h4 className="font-bold text-[#0B3B24] mb-4">Amenities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rooms[0].amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-base text-gray-700">
                      <span className="text-[#0B3B24]">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-200 gap-4">
                <p className="text-xl font-serif font-bold text-[#0B3B24]">{rooms[0].price}</p>
                <Link href={BOOK_TTC_URL} target="_blank" rel="noopener noreferrer" className="bg-[#ED7D4D] text-white px-8 py-3 font-bold text-base tracking-widest uppercase rounded-sm hover:bg-orange-600 transition-colors w-full sm:w-auto text-center shadow-md inline-block">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Room 2: Text Left, Image Right */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="bg-[#FEF5E7] p-8 md:p-12 shadow-lg rounded-sm">
              <h2 className="text-3xl font-serif text-[#0B3B24] font-bold mb-2 uppercase">{rooms[1].name}</h2>
              <p className="text-[#ED7D4D] font-medium tracking-wider uppercase text-base mb-6">{rooms[1].type}</p>

              <div className="mb-8 space-y-4">
                <h4 className="font-bold text-[#0B3B24]">Overview</h4>
                <p className="text-gray-600 text-base leading-relaxed">{rooms[1].overview}</p>
              </div>

              <div className="mb-10">
                <h4 className="font-bold text-[#0B3B24] mb-4">Amenities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rooms[1].amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-base text-gray-700">
                      <span className="text-[#0B3B24]">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-200 gap-4">
                <p className="text-xl font-serif font-bold text-[#0B3B24]">{rooms[1].price}</p>
                <Link href={BOOK_TTC_URL} target="_blank" rel="noopener noreferrer" className="bg-[#ED7D4D] text-white px-8 py-3 font-bold text-base tracking-widest uppercase rounded-sm hover:bg-orange-600 transition-colors w-full sm:w-auto text-center shadow-md inline-block">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <RoomGallery images={rooms[1].images} />
          </div>
        </div>

      </section>

      {/* 3. MEALS & NUTRITIONS TITLE */}
      <section className="pt-16 pb-12 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-[#0B3B24] font-bold mb-4">
          Meals & Nutritions
        </h2>
        <p className="text-gray-600 italic font-medium">
          Wholesome vegetarian food for a healthy body and mind
        </p>
      </section>

      {/* 4. MEALS OVERLAPPING BLOCKS */}
      <section className="pb-32 px-6 max-w-6xl mx-auto space-y-24 md:space-y-32">
        {meals.map((meal, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
            >
              <div className="w-full md:w-2/3 relative h-[300px] md:h-[450px] shadow-lg rounded-sm overflow-hidden z-10">
                <Image
                  src={meal.image}
                  alt={meal.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>

              <div
                className={`w-[90%] md:w-1/2 bg-[#FEF5E7] p-8 md:p-12 shadow-xl z-20 -mt-16 md:mt-0 rounded-sm ${isEven ? "md:-mr-24" : "md:-ml-24"}`}
              >
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-4 leading-tight">
                  {meal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {meal.desc}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* 5. GALLERY */}
      <section className="py-16 md:py-20 w-full">
        <Gallery
          title="Resort Gallery"
          subtitle="Rooms, gardens, and spaces for practice at our Dalat yoga resort."
          images={ACCOMMODATION_GALLERY_IMAGES}
        />
      </section>

      <Footer />
    </main>
  );
}
