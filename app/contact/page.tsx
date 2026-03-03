import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1712760152151-3c1841a07aa3";

export const metadata = {
  title: "Contact Us | Sivananda Yoga Vietnam",
  description:
    "Get in touch with Sivananda Yoga Resort and Training Center in Da Lat, Vietnam.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Hero banner */}
      <section className="relative flex h-[408px] w-full shrink-0 items-center justify-center overflow-hidden">
        <Image
          src={HERO_IMAGE_URL}
          alt="Serene misty lake"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 z-10 bg-black/40" aria-hidden />
        <h1 className="relative z-20 font-serif text-4xl font-medium uppercase tracking-widest text-white md:text-6xl">
          CONTACT US
        </h1>
      </section>

      <div className="min-h-0 flex-1">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
