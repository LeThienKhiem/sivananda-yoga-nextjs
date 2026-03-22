import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeachingsIntro from "@/components/TeachingsIntro";
import ClassicalYogaPurpose from "@/components/ClassicalYogaPurpose";
import YogaDefinition from "@/components/YogaDefinition";
import TeachingFoundation from "@/components/TeachingFoundation";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400&auto=format&fit=crop";

export const metadata = {
  title: "Sivananda Teachings | Science of Life | Sivananda Yoga Vietnam",
  description:
    "Explore the Sivananda Yoga teachings and the science of life at Sivananda Yoga Resort and Training Center in Da Lat, Vietnam.",
};

export default function SivanandaTeachingsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex flex-col">
        {/* Hero Banner — textbox 50% on image / 50% on page bg (matches TeachingsIntro bg-[#FDFCF8]) */}
        <section className="relative w-full h-[500px] md:h-[600px]">
          <Image
            src={HERO_IMAGE_URL}
            alt="Yoga practice in pine forest overlooking lake - Sivananda teachings, Da Lat"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute bottom-0 left-1/2 z-10 w-[90%] max-w-5xl -translate-x-1/2 translate-y-1/2 bg-[#FDFCF8] px-6 py-12 text-center md:py-16">
            <p className="text-[#0B3B24] text-2xl md:text-2xl mb-4 font-medium">
              Sivananda Yoga Teaching
            </p>
            <h1 className="text-[#0B3B24] font-serif text-4xl md:text-6xl font-bold tracking-tight">
              Science of Life
            </h1>
          </div>
        </section>

        {/* Spacer: room for lower half of overlapping hero textbox */}
        <div className="h-28 w-full bg-[#FDFCF8] md:h-36" aria-hidden />

        <TeachingsIntro />

        <ClassicalYogaPurpose />

        <YogaDefinition />

        <TeachingFoundation />
      </div>

      <Footer />
    </main>
  );
}
