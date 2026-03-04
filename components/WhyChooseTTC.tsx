import Image from "next/image";

const IMG_SUNRISE_URL =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470";

export default function WhyChooseTTC() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[700px] py-24">
      {/* Left Column: Image & Title Overlay */}
      <div className="relative w-full md:w-1/2 h-[500px] md:h-auto min-h-[500px] flex items-center justify-center p-12 text-center text-white">
        <Image
          src={IMG_SUNRISE_URL}
          alt="Sunrise over mountains - Da Lat"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/30 z-[1]" aria-hidden />
        <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-md">
          Why Choose Sivananda Yoga Teacher Training Course?
        </h2>
      </div>

      {/* Right Column: Text Content - White Background */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
        <div>
          <h3 className="text-xl md:text-2xl font-serif text-[#0B3B24] mb-3">
            A Legacy Rooted in Authenticity
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-10">
            For over 50 years, the Sivananda Yoga Vedanta organization has been at
            the heart of classical yoga education worldwide. Founded by Swami
            Vishnudevananda — a direct disciple of Swami Sivananda, a great sage
            in 20th century — our approach is grounded in the ancient yogic
            tradition, not trends. This is the original Yoga Teacher Training
            Course first taught in the West.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-serif text-[#0B3B24] mb-3">
            Transformative, Not Just Informative
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-10">
            Our training goes beyond technical skills. It&apos;s a full immersion
            into the yogic lifestyle, combining practice, philosophy, community,
            and discipline. Students often say the inner growth they experience is
            as powerful as the certification itself.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-serif text-[#0B3B24] mb-3">
            Global Recognition & Certification
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-10">
            Over 52,000 graduates have earned their certification through the
            Sivananda TTC, making it one of the most trusted and widely
            recognized programs. Upon completion, you&apos;ll receive a Yoga
            Alliance 200-Hour Certificate, enabling you to teach worldwide.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-serif text-[#0B3B24] mb-3">
            A Living Gurukula Experience
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-10 last:mb-0">
            Unlike weekend or online courses, the Sivananda TTC is a true live-in
            experience. You&apos;ll stay in the serene Sivananda Ashram in Dalat,
            Vietnam, surrounded by mountains, Ho Tuyền Lâm lake, pine forests, and
            stillness. This setting supports deep transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
