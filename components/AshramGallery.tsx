"use client";

import Image from "next/image";

/* Tailwind aspect classes used dynamically: aspect-[4/3] aspect-[3/4] aspect-square aspect-[4/5] aspect-[3/2] aspect-[16/9] */
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    alt: "Yoga practice",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    alt: "Mountain sunrise",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    alt: "Healthy food",
    aspect: "aspect-square",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800&auto=format&fit=crop",
    alt: "Outdoor practice",
    aspect: "aspect-[4/5]",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop",
    alt: "Meditation",
    aspect: "aspect-[3/2]",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=800&auto=format&fit=crop",
    alt: "Ashram environment",
    aspect: "aspect-[4/5]",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    alt: "Breathing exercise",
    aspect: "aspect-[3/4]",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop",
    alt: "Anatomy study",
    aspect: "aspect-square",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop",
    alt: "Kirtan chanting",
    aspect: "aspect-[16/9]",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=800&auto=format&fit=crop",
    alt: "Community",
    aspect: "aspect-[3/4]",
  },
];

export default function AshramGallery() {
  return (
    <section className="w-full py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] text-center mb-4">
          Explore the Beauty of the Ashram
        </h2>
        <p className="text-gray-500 text-lg text-center mb-16">
          A serene sanctuary in Dalat, Vietnam, dedicated to peace, practice,
          and self-discovery.
        </p>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer bg-gray-100"
            >
              <div className={`relative w-full ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
