import Image from "next/image";
import Link from "next/link";

const BG_IMAGE_URL =
  "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7";

export default function EnrollTTCSection() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex flex-col">
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE_URL}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="flex-1 min-h-[280px]" aria-hidden />
      <div className="relative md:absolute md:right-0 md:top-0 md:bottom-0 w-full md:w-[50%] lg:w-[45%] bg-black/60 md:bg-black/70 backdrop-blur-sm z-10 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 text-white mt-auto md:mt-0">
        <p className="text-lg md:text-xl leading-relaxed mb-6 font-light text-white/95">
          Located at the Sivananda Yoga Dalat Resort and Training Center, the
          course unfolds in a serene mountain sanctuary near Hồ Tuyền Lâm Lake,
          surrounded by pine forests, fresh air, and natural silence.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6 font-light text-white/95">
          This tranquil ashram setting nurtures deep learning, self-inquiry, and
          inner renewal.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6 font-light text-white/95">
          By completing the course, students become part of a living tradition
          rooted in the authentic lineage of Swami Sivananda and Swami
          Vishnudevananda, joining a global community dedicated to spreading the
          light of Sivananda Yoga worldwide.
        </p>
        <Link
          href="/accommodations"
          className="mt-8 self-start bg-[#ED7D4D] text-white font-bold tracking-wider uppercase px-10 py-4 rounded-sm hover:bg-orange-600 transition-colors shadow-lg inline-block"
        >
          ENROLL TTC
        </Link>
      </div>
    </section>
  );
}
