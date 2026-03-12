"use client";

import Image from "next/image";

const fundamentalData = [
  {
    id: 1,
    title: "Udwaethanam",
    description:
      "Udwarthanam is a detoxifying deep tissue massage using herbal powders and oils. It involves upward massage strokes and is used to regulate blood circulation and improve metabolism. Among its numerous benefits, Udwarthanam removes toxins from the skin, eliminates excess fat accumulated under the skin, and improves skin complexion. It is also used to relieve stress and improve joint mobility issues.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-07.png",
  },
  {
    id: 2,
    title: "Abhyanga",
    description:
      "Abhyanga is the application of warm oil over the entire body and is recommended as a daily practice. Specific oils are selected, penetrating through the skin to affect the organs and systems of the body. Abhyanga supports circulation and relieves dry skin as well as joint and muscle pain. A deeply restorative practice, it helps to relax the body, mind, and nervous system, supports the immune system, reduces stress, and improves sleep.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-08.png",
  },
  {
    id: 3,
    title: "Dinacharya",
    description:
      "Dinacharya focuses on the five sense organs: eyes, nose, mouth, ears, and skin. It is a practice that helps to release toxins and cleanse the senses using specific herb-enhanced oils and other natural ingredients. As we interact with and take in information from the outside world through our five senses, Dinacharya is a profound practice for restoring the body’s primary sensors to natural health.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-09.png",
  },
  {
    id: 4,
    title: "Shirodhara",
    description:
      "Often referred to as the 'King of Ayurvedic Treatments,' Podikizhi involves squeezing warm medicated oil from a cloth over the entire body while performing a light massage. It combines heat and oil therapy to strengthen muscles, lubricate joints, and boost the immune system.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-10.png",
  },
  {
    id: 5,
    title: "Pizhichil",
    description:
      "Often referred to as the 'King of Ayurvedic Treatments,' Pizhichil involves squeezing warm medicated oil from a cloth over the entire body while performing a light massage. It combines heat and oil therapy to strengthen muscles, lubricate joints, and boost the immune system.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-11.png",
  },
  {
    id: 6,
    title: "Kizhi",
    description:
      "Kizhi uses warm herbal powder or leaf bundles (boluses) dipped in medicated oil to massage the body. This rhythmic treatment is excellent for reducing inflammation, relieving joint pain, and improving circulation in specific areas of tension.",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-12.png",
  },
];

export default function AyurvedicFundamentals() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold">
          Ayurvedic Fundamentals
        </h2>
      </div>

      <div className="flex justify-center gap-6 overflow-x-auto snap-x snap-mandatory pb-12 scroll-smooth [&::-webkit-scrollbar]:hidden">
        {fundamentalData.map((item) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[300px] md:w-[400px] flex flex-col group"
          >
            <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
            <div className="bg-white p-8 border border-gray-100 rounded-b-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex-grow">
              <h3 className="text-2xl font-serif text-[#0B3B24] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
