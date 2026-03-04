import Image from "next/image";
import Link from "next/link";
import {
  User,
  PersonStanding,
  Globe,
  GraduationCap,
  Accessibility,
} from "lucide-react";

const BG_IMAGE_URL =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470";

const BENEFITS = [
  {
    id: "classical",
    title: "Classical Tradition",
    description:
      "Connect to a tradition and be supported in your own practice and teaching",
    icon: User,
    position: "top",
    positionClass: "top-[-40px] md:top-0 left-1/2 -translate-x-1/2 w-[300px]",
  },
  {
    id: "confidence",
    title: "Develop Confidence",
    description:
      "Develop the intuition, knowledge and confidence to teach others",
    icon: PersonStanding,
    position: "right",
    positionClass: "top-[22%] right-[-20px] md:right-0 w-[260px]",
  },
  {
    id: "certificate",
    title: "International Certificate",
    description:
      "Receive certification from the International Sivananda Yoga Vedanta Centers qualified as 200-hour Yoga Alliance teachers",
    icon: Globe,
    position: "bottom-right",
    positionClass: "bottom-[5%] right-[20px] md:right-[50px] w-[280px]",
  },
  {
    id: "lifestyle",
    title: "Yoga Lifestyle",
    description:
      "Experience a Yogic lifestyle (applying the 5 points of yoga) and learn how to teach it to others",
    icon: GraduationCap,
    position: "bottom-left",
    positionClass: "bottom-[5%] left-[20px] md:left-[50px] w-[280px]",
  },
  {
    id: "deepen",
    title: "Deepen Your Practice",
    description:
      "Improve your health and regain vitality and clarity",
    icon: Accessibility,
    position: "left",
    positionClass: "top-[22%] left-[-20px] md:left-0 w-[260px]",
  },
];

export default function BenefitsOfTTC() {
  return (
    <section className="relative w-full overflow-visible">
      <div className="absolute inset-0 z-0">
        <Image
          src={BG_IMAGE_URL}
          alt=""
          fill
          className="object-cover object-center opacity-[0.12]"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Mobile: vertical list — no circle, no absolute */}
        <div className="flex flex-col gap-12 lg:hidden">
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100"
              >
                <Icon
                  className="w-10 h-10 text-gray-800 mb-3"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                />
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Desktop: circular layout */}
        <div className="hidden lg:block relative w-full max-w-6xl mx-auto h-[700px] md:h-[850px] flex items-center justify-center overflow-visible">
          <div className="relative w-full h-full">
            {/* 5 orbital items — precise coordinates */}
            {BENEFITS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`absolute flex flex-col items-center text-center z-20 ${item.positionClass}`}
                >
                  <div className="flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <Icon
                      className="w-10 h-10 text-gray-800 mb-2 shrink-0"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                    />
                    <h3 className="font-bold text-gray-800 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Center hub — pale yellow circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[400px] md:h-[400px] bg-[#FDF7E7]/60 rounded-full flex flex-col items-center justify-center text-center p-10 backdrop-blur-sm z-10 shadow-inner">
              <h2 className="text-[#0B3B24] font-serif text-3xl md:text-4xl font-bold mb-2">
                Benefits of TTC
              </h2>
              <p className="text-gray-500 italic text-lg mb-8">
                Experience Peace. Share with Others
              </p>
              <Link
                href="/accommodations"
                className="bg-[#ED7D4D] text-white px-10 py-3.5 font-bold uppercase tracking-wider rounded-sm shadow-md hover:bg-orange-600 transition-all"
              >
                ENROLL NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
