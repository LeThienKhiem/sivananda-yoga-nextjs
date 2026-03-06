"use client";

import Image from "next/image";

const teachers = [
  {
    id: 1,
    name: "Swami Sitaramananda",
    role: "Acharya of Asia",
    description:
      "a devoted spiritual teacher, guiding thousands with love, wisdom, and over 40 years of yogic service",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Swami Narayanananda",
    role: "Director of Sivananda Yoga Dalat Resort & Training Center",
    description:
      "a devoted spiritual teacher, with more than 29 years of teaching and practicing",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Swami Pranavananda",
    role: "Spiritual Director of Sivananda Yoga Ho Chi Minh Center",
    description:
      "a devoted spiritual teacher, with more than 30 years of teaching",
    image:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Swami Laskmisatyananda",
    role: "Director of Sivananda Yoga Health House and Dalat Center",
    description: "",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Swami Padmananda",
    role: "Head of Operation of Sivananda Yoga Dalat Resort & Training Center",
    description: "",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Swami Diviyananda",
    role: "Head of Human Resource of SY Dalat Resort & Training Center",
    description: "",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800&auto=format&fit=crop",
  },
];

export default function MainTeachers() {
  return (
    <section className="bg-[#FDFCF8] py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-3">
          Main Teachers
        </h2>
        <p className="text-gray-600 text-xl">
          Sivananda Yoga Dalat Resort & Training Center
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="flex flex-col group">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 shadow-sm">
              <Image
                src={teacher.image}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                alt={teacher.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-2xl font-serif text-[#0B3B24] mb-2">
              {teacher.name}
            </h3>
            <p className="text-gray-600 italic text-base mb-3">{teacher.role}</p>
            {teacher.description ? (
              <p className="text-gray-500 text-base leading-relaxed">
                {teacher.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
