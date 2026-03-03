import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import FaqDuringStay from "@/components/FaqDuringStay";
import ContactUs from "@/components/ContactUs";
import EventsCarousel from "@/components/EventsCarousel";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843";

export const metadata = {
  title: "Frequently Asked Questions | Sivananda Yoga Vietnam",
  description:
    "Find answers to commonly asked questions about Sivananda Yoga Resort and Training Center in Da Lat, Vietnam.",
};

export default function FrequentlyAskedQuestionsPage() {
  return (
    <>
      <Header />
      {/* Hero banner */}
      <section className="relative h-[408px] w-full overflow-hidden">
        <Image
          src={HERO_IMAGE_URL}
          alt="Green ferns - yoga retreat nature"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-black/40"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-3xl font-medium uppercase tracking-wider text-white md:text-5xl">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
      </section>

      <main className="mb-0 bg-[#fcfaf5]">
        <FaqAccordion />
        <FaqDuringStay />
        <ContactUs />
        <EventsCarousel
          title="Ready for your Own Transformation"
          subtitle="Join us for life-changing experience"
        />
        <Footer />
      </main>
    </>
  );
}
