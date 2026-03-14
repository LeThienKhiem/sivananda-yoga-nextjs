"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { supabase } from "@/utils/supabase";
import { Loader2 } from "lucide-react";

// --- COMPONENT REGISTRY IMPORTS ---
import UpcomingEvents from "@/components/UpcomingEvents";
import StudentFeedback from "@/components/StudentFeedback";
import ContactSection from "@/components/ContactSection";
import MoreInformation from "@/components/MoreInformation";
import AccommodationCost from "@/components/AccommodationCost";
import CourseCurriculum from "@/components/CourseCurriculum";
import SeniorTeachers from "@/components/SeniorTeachers";
import AshramGallery from "@/components/AshramGallery";
import BenefitsTTC from "@/components/BenefitsTTC";
import YogaInsights from "@/components/YogaInsights";
import KarmaYogaTabs from "@/components/KarmaYogaTabs";

const FALLBACK_HERO =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000";

// Map string names from JSON to actual React Components
const COMPONENT_MAP: Record<string, React.FC<any>> = {
  UpcomingEvents,
  StudentFeedback,
  ContactSection,
  MoreInformation,
  AccommodationCost,
  CourseCurriculum,
  SeniorTeachers,
  AshramGallery,
  BenefitsTTC,
  YogaInsights,
  KarmaYogaTabs,
};

export default function DynamicGeneratedPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) fetchPageData();
  }, [slug]);

  const fetchPageData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("custom_pages")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (!error && data) setPageData(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center pt-24">
          <Loader2 className="animate-spin w-10 h-10 text-[#ED7D4D]" />
        </div>
        <Footer />
      </main>
    );
  }

  if (!pageData) {
    return (
      <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center pt-24 text-center">
          <h1 className="text-3xl font-serif text-[#0B3B24] mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-500">
            The page you are looking for does not exist or has been unpublished.
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. STANDARDIZED HERO BANNER */}
      <section className="relative w-full flex flex-col mt-16 md:mt-0">
        <div className="relative w-full h-[40vh] min-h-[300px] md:h-[50vh] md:min-h-[450px] z-0">
          <Image
            src={pageData.hero_image || FALLBACK_HERO}
            alt={pageData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 w-[95%] max-w-5xl mx-auto bg-[#FDFCF8] px-6 pt-10 pb-6 md:pt-14 md:pb-10 text-center -mt-16 md:-mt-24 shadow-[0_-10px_30px_rgba(253,252,248,1)]">
          {pageData.description && (
            <p className="text-base md:text-lg text-gray-500 font-medium mb-3 tracking-widest uppercase">
              {pageData.description}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold">
            {pageData.title}
          </h1>
        </div>
      </section>

      {/* 2. DYNAMIC COMPONENT RENDERER (Reading the JSON) */}
      <div className="w-full flex-grow flex flex-col mt-12 md:mt-20">
        {pageData.components?.map((comp: any, idx: number) => {
          // Handle the Custom Text/Image Block explicitly
          if (comp.type === "CustomTwoColumn") {
            const isEven = idx % 2 === 0;
            return (
              <section
                key={comp.id}
                className="max-w-7xl mx-auto py-16 md:py-24 px-6 w-full"
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-gray-100">
                      {comp.image_url ? (
                        <Image
                          src={comp.image_url}
                          alt={comp.title || "Custom Block"}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                          No Image
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-6">
                    {comp.title && (
                      <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold">
                        {comp.title}
                      </h2>
                    )}
                    {comp.description && (
                      <div
                        className="prose prose-slate max-w-none text-[#4A4A4A] leading-relaxed
                                   [&>h2]:text-2xl [&>h2]:font-serif [&>h2]:text-[#0B3B24] [&>h2]:mb-4
                                   [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>strong]:text-[#0B3B24]"
                        dangerouslySetInnerHTML={{
                          __html: comp.description,
                        }}
                      />
                    )}
                  </div>
                </div>
              </section>
            );
          }

          // Render Pre-built Components from Registry
          const ComponentToRender = COMPONENT_MAP[comp.type];

          if (ComponentToRender) {
            if (comp.type === "ContactSection") {
              return (
                <div key={comp.id} className="bg-white">
                  <ContactSection />
                </div>
              );
            }
            return <ComponentToRender key={comp.id} />;
          }

          return null;
        })}
      </div>

      <Footer />
    </main>
  );
}
