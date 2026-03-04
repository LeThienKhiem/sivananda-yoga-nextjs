import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AyurvedaIntro from "@/components/AyurvedaIntro";
import HealingHarmony from "@/components/HealingHarmony";
import AyurvedaExplore from "@/components/AyurvedaExplore";
import AyurvedaExpertise from "@/components/AyurvedaExpertise";
import AyurvedicFundamentals from "@/components/AyurvedicFundamentals";
import AyurvedaArticles from "@/components/AyurvedaArticles";
import ProgramTestimonials from "@/components/ProgramTestimonials";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-end justify-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
          alt="Ayurveda Team"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlapping White Box */}
        <div className="relative z-10 bg-white w-[90%] max-w-4xl py-10 md:py-14 px-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-center -mb-16 md:-mb-20">
          <h2 className="text-[#0B3B24] text-xl md:text-2xl mb-3 font-medium">
            Learn The Ancient Wisdom of Healthy Living
          </h2>
          <h1 className="text-[#0B3B24] font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
            Ayurveda
          </h1>
        </div>
      </section>

      {/* Spacer for overlapping box */}
      <div className="h-24 md:h-32 bg-transparent w-full" />

      <AyurvedaIntro />

      <HealingHarmony />

      <AyurvedaExplore />

      <AyurvedaExpertise />

      <AyurvedicFundamentals />

      <AyurvedaArticles />

      <ProgramTestimonials />

      <Footer />
    </main>
  );
}
