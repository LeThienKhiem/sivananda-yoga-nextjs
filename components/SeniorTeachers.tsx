import Image from "next/image";

const IMG_TEACHER =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600";

const seniorTeachers = [
  {
    name: "Swami Sitaramananda",
    role: "Acharya of Asia",
    bio: "A devoted disciple of Swami Vishnudevananda since 1982, serves as the Acharya (senior teacher) for Sivananda centers in the West, including the U.S. and Asia.",
    image: IMG_TEACHER,
  },
  {
    name: "Swami Narayanananda",
    role: "Director of Sivananda Yoga Ashram",
    bio: "A devoted disciple of Swami Vishnudevananda with over 20 years of teaching experience worldwide.",
    image: IMG_TEACHER,
  },
  {
    name: "Swami Pranavananda",
    role: "Senior Teacher of Sivananda Yoga",
    bio: "A devoted disciple with over 20 years of teaching experience, dedicated to spreading the teachings of Vedanta.",
    image: IMG_TEACHER,
  },
  {
    name: "Swami Lalitananda",
    role: "Director of Sivananda Yoga Hochiminh Center",
    bio: "A devoted practitioner guiding the community with deep knowledge of Hatha Yoga and Ayurveda.",
    image: IMG_TEACHER,
  },
  {
    name: "Swami Dharmananda",
    role: "Director of Sivananda Yoga Dalat Center",
    bio: "Guiding students with wisdom and compassion, focusing on the practical application of yoga in daily life.",
    image: IMG_TEACHER,
  },
  {
    name: "Swami Vidyananda",
    role: "Director of Sivananda Yoga Hanoi Center",
    bio: "Dedicated to sharing the light of yoga philosophy and establishing a strong spiritual community in the capital.",
    image: IMG_TEACHER,
  },
];

export default function SeniorTeachers() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-[#0B3B24] font-bold mb-2">
          Senior Teachers
        </h2>
        <p className="text-gray-500 text-sm italic">
          Sivananda Yoga Dalat Resort & Training Center
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {seniorTeachers.map((teacher, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="relative w-full aspect-square rounded-md overflow-hidden mb-6 shadow-sm group">
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mb-1">
              {teacher.name}
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-4 font-semibold h-8">
              {teacher.role}
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">{teacher.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
