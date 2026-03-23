import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DailySchedule from "@/components/DailySchedule";
import UpcomingEvents from "@/components/UpcomingEvents";
import AccommodationCost from "@/components/AccommodationCost";
import BoutiqueSection from "@/components/BoutiqueSection";
import TestimonialSection from "@/components/TestimonialSection";
import YogaVacationBreathSections from "@/components/YogaVacationBreathSections";

const HERO_IMAGE_URL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-vacation-01.png";
const IMG_YOGA_GRASS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-vacation-02.png";
const IMG_LINEAGE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/sivanada_master02.jpg";
const IMG_FOREST_PATH =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-vacation-03.png";
const IMG_QUOTE_BANNER =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-vacation-04.png";
const IMG_MEDITATION_NATURE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-vacation-06.png";
const IMG_YOGA_HEADSTAND =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-vacation-05.png";

export const metadata = {
  title: "Yoga Vacation | Sivananda Yoga Vietnam",
  description:
    "Explore our Yoga Vacation program at Sivananda Yoga Resort and Training Center in Da Lat, Vietnam.",
};

export default function YogaVacationPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        {/* 1. HERO BANNER (Exact clone of Home Page structure) */}
        <section className="relative w-full overflow-hidden pt-20 md:pt-24">
          <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden md:h-[80vh] md:min-h-[640px]">
            <Image
              src={HERO_IMAGE_URL}
              alt="Yoga Vacation in Da Lat"
              fill
              className="block h-full w-full object-cover animate-zoom-out-8s"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0 z-10 bg-black/40"
              aria-hidden
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
              <div className="max-w-4xl">
                <p className="text-sm md:text-base font-bold tracking-widest uppercase text-white/95 mb-4">
                  A Journey of Self-Discovery
                </p>
                <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                  Yoga Vacation
                </h1>
                <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white md:text-xl">
                  Take a break from daily stress and immerse yourself in a holistic yoga lifestyle. Rejuvenate your body, mind, and spirit in the serene pine forests of Da Lat.
                </p>
                <Link
                  href="/accommodations"
                  className="mt-6 inline-block rounded-lg border-2 border-white bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#ED7D4D] hover:bg-[#ED7D4D] hover:text-white hover:shadow-[0_0_20px_rgba(237,125,77,0.6)] md:px-8 md:py-4"
                >
                  Book Your Stay
                </Link>
              </div>
            </div>
          </div>
        </section>

        <YogaVacationBreathSections
          imgYogaGrass={IMG_YOGA_GRASS}
          imgLineage={IMG_LINEAGE}
          imgForestPath={IMG_FOREST_PATH}
          imgMeditationNature={IMG_MEDITATION_NATURE}
          imgYogaHeadstand={IMG_YOGA_HEADSTAND}
        />

        {/* Testimonial / Quote Banner - full width */}
        <section className="relative w-full min-h-[420px] py-24 md:py-32 px-6 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={IMG_QUOTE_BANNER}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" aria-hidden />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center">
            <span className="text-6xl md:text-7xl font-serif text-white/60 leading-none -mb-4">
              "
            </span>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium leading-relaxed mb-6">
              Health is wealth, Peace of mind is happiness, Yoga shows the way.
            </blockquote>
            <p className="text-xl md:text-2xl font-light tracking-wide">
              — Swami Vishnudevananda
            </p>
          </div>
        </section>

        <DailySchedule />
        <UpcomingEvents />
        <AccommodationCost />
        <BoutiqueSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
