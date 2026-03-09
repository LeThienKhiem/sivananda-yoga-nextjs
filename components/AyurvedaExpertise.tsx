"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const expertiseCards = [
  {
    id: 1,
    title: "7-Day Ayurveda Detox Program",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-05.png",
    description:
      "This 7-day detox retreat is a harmonious blend of Yoga – Ayurveda – Meditation – Nutrition – Natural Therapy, designed to help your body rest, cleanse, and restore inner balance.\n\nThis is your opportunity to gift yourself a week of rejuvenation in the peaceful pine forests of Da Lat.",
    link: "#",
  },
  {
    id: 2,
    title: "100-Hour Ayurveda Training",
    image:
      "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ayurveda-06.png",
    description:
      "An intensive training course with a 100-hour certification issued by Vaidyagrama Ayurveda Healing Village (India) in collaboration with Sivananda Yoga. This course is open to anyone wishing to experience the classical Yoga & Ayurveda lifestyle. It offers foundational Ayurvedic knowledge to enhance physical and mental well-being, and equips participants to apply and share these teachings to benefit their communities.",
    link: "#",
  },
];

export default function AyurvedaExpertise() {
  return (
    <section className="bg-[#FDFCF8] py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-8 font-bold">
          Our Expertise
        </h2>
        <div className="border-l border-gray-300 pl-6 md:pl-8 max-w-3xl">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            The Yoga Resort has benefited from the expertise of the doctors at
            Vaidyagrama, an Ayurvedic center in India, to develop our Ayurveda
            courses. Their Ayurvedic doctors (vaidyas) visit the Resort to
            provide training and education to our staff and some of our staff
            have travelled there for health immersion programs. In this way, we
            are growing our expertise in Ayurveda, often called the sister
            science of yoga.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {expertiseCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif text-[#0B3B24] mb-4 font-bold">
                {card.title}
              </h3>
              <div className="text-gray-600 text-base leading-relaxed whitespace-pre-line mb-8 flex-grow">
                {card.description}
              </div>
              <a
                href={card.link}
                className="mx-auto flex items-center justify-center w-12 h-12 bg-[#ED7D4D] text-white rounded-full hover:bg-orange-600 transition-colors"
                aria-label={`Learn more about ${card.title}`}
              >
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
