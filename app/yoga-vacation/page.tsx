import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DailySchedule from "@/components/DailySchedule";
import EventsCarousel from "@/components/EventsCarousel";
import AccommodationCost from "@/components/AccommodationCost";
import BoutiqueSection from "@/components/BoutiqueSection";
import TestimonialSection from "@/components/TestimonialSection";

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
        {/* Hero Banner */}
        <section className="relative w-full min-h-[600px] flex items-center justify-center text-center px-6">
          <Image
            src={HERO_IMAGE_URL}
            alt="Majestic mountain sunset - Yoga Vacation in Da Lat"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 z-10" aria-hidden />
          <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto mt-16">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight">
              Find Your Inner Peace in Da Lat
            </h1>
            <p className="text-white text-xl md:text-2xl leading-relaxed mb-10 max-w-xl">
              A Yoga Vacation at the Sivananda Resort
              <br />
              connects you with inner peace and
              <br />
              empowering practices
              <br />
              in a setting of unparalleled beauty
            </p>
            <Link
              href="/accommodations"
              className="inline-block bg-[#ED7D4D] text-white font-bold uppercase px-8 py-3.5 tracking-wider rounded-sm hover:bg-orange-600 transition-colors"
            >
              BOOK YOUR STAY
            </Link>
          </div>
        </section>

        {/* Content Section - Staggered Layout */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            {/* Block One: Yoga Practice */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
              <div>
                <h2 className="text-[#0B3B24] text-3xl font-serif mb-6">
                  Immerse and nourish your body and mind
                </h2>
                <div className="border-l-2 border-gray-300 pl-6 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    In the company of like-hearted people, Immerse a vacation that
                    supports you in returning home with more energy, more positivity,
                    and practical skills to sustain your well-being — no matter how
                    fast, demanding, and stressful life becomes. Immerse yourself here.
                  </p>
                </div>
                <Link
                  href="/accommodations"
                  className="inline-block bg-[#ED7D4D] text-white font-bold px-8 py-3 rounded-sm hover:bg-orange-600 transition-colors"
                >
                  BOOK YOUR STAY
                </Link>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={IMG_YOGA_GRASS}
                  alt="People doing yoga on grass"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Block Two: The Lineage - Overlapping */}
            <div className="relative mb-32">
              <div className="relative z-20 -mb-20 ml-auto mr-20 max-w-lg bg-[#4F6F1F] text-white p-10">
                <h2 className="text-2xl md:text-3xl font-serif mb-6">
                  Rooted in an authentic <em>Yoga Lineage</em>
                </h2>
                <div className="border-l-2 border-white/50 pl-6">
                  <p className="leading-relaxed">
                    The Sivananda Yoga Vacation was designed in the 1960s by Swami
                    Vishnudevananda of India, following in the footsteps of his Guru,
                    Swami Sivananda. It was brought to Vietnam in 2009 by his disciple
                    Swami Sitaramananda, who is originally from Da Lat.
                  </p>
                </div>
              </div>
              <div className="relative z-10 flex justify-end">
                <Image
                  src={IMG_LINEAGE}
                  alt="Historical image of the Gurus"
                  width={1000}
                  height={600}
                  className="max-w-2xl w-full h-auto object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
            </div>

            {/* Block Three: Nature Path */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative rounded-lg overflow-hidden h-[600px] order-2 lg:order-1">
                <Image
                  src={IMG_FOREST_PATH}
                  alt="Sunlit forest path at the resort"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-[#0B3B24] text-3xl font-serif mb-6">
                  Step into the beauty of our mountain-top sanctuary
                </h2>
                <div className="border-l-2 border-gray-300 pl-6 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    Where you feel yourself relax the moment you arrive. Take in the
                    abundant energy of the natural world and gain perspective — with
                    views of Tuyen Lam Lake below, peaceful ponds, quiet places to sit
                    outside, and star-filled night skies. At Sivananda Yoga Dalat
                    Resort, healing unfolds through nature, nourishing vegetarian
                    meals, and uplifting satsanga.
                  </p>
                </div>
                <Link
                  href="/accommodations"
                  className="inline-block bg-[#ED7D4D] text-white font-bold px-8 py-3 rounded-sm hover:bg-orange-600 transition-colors"
                >
                  BOOK YOUR STAY
                </Link>
              </div>
            </div>
          </div>
        </section>

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

        {/* Breathe out... section - staggered grid */}
        <section className="bg-[#FDFCF8] py-24 md:py-32 px-6">
          <h2 className="text-gray-900 font-serif text-4xl md:text-5xl text-center mb-16 md:mb-24">
            Breathe out...
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="flex flex-col gap-12 md:gap-20">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Learn and practice
                </h3>
                <p className="text-gray-600 leading-relaxed text-xl">
                  as you engage in daily meditation, Sivananda Yoga classes with
                  daily wisdom and well-being workshops designed to bring your
                  mind and body into harmony — All will provide skills for you to
                  continue to live well at home.
                </p>
              </div>
              <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src={IMG_MEDITATION_NATURE}
                  alt="Person meditating in nature overlooking a landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="relative w-full h-[500px] md:h-[750px] rounded-sm overflow-hidden shadow-md mt-0 md:-mt-12">
              <Image
                src={IMG_YOGA_HEADSTAND}
                alt="Yoga headstand pose outdoors"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <DailySchedule />
        <EventsCarousel title="Upcoming Events" />
        <AccommodationCost />
        <BoutiqueSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
