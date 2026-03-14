"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { supabase } from "@/utils/supabase";
import { Loader2 } from "lucide-react";

import UpcomingEvents from "@/components/UpcomingEvents";
import StudentFeedback from "@/components/StudentFeedback";
import CustomTwoColumn from "@/components/CustomTwoColumn";
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
          switch (comp.type) {
            case "UpcomingEvents": {
              const data = comp.data ?? {};
              return (
                <UpcomingEvents
                  key={comp.id}
                  subtitle={data.subtitle}
                  title={data.title}
                  ctaText={data.ctaText}
                  ctaLink={data.ctaLink}
                />
              );
            }
            case "StudentFeedback":
              return <StudentFeedback key={comp.id} />;
            case "CustomTwoColumn": {
              const data = comp.data ?? comp;
              return (
                <CustomTwoColumn
                  key={comp.id}
                  title={data?.title}
                  description={data?.description}
                  imageUrl={data?.image_url}
                  imageFirst={idx % 2 === 0}
                />
              );
            }
            case "ContactSection":
              return (
                <div key={comp.id} className="bg-white">
                  <ContactSection />
                </div>
              );
            case "MoreInformation":
              return <MoreInformation key={comp.id} />;
            case "AccommodationCost":
              return <AccommodationCost key={comp.id} />;
            case "CourseCurriculum":
              return <CourseCurriculum key={comp.id} />;
            case "SeniorTeachers":
              return <SeniorTeachers key={comp.id} />;
            case "AshramGallery":
              return <AshramGallery key={comp.id} />;
            case "BenefitsTTC":
              return <BenefitsTTC key={comp.id} />;
            case "YogaInsights":
              return <YogaInsights key={comp.id} />;
            case "KarmaYogaTabs":
              return <KarmaYogaTabs key={comp.id} />;
            default:
              return (
                <div
                  key={comp.id}
                  className="px-6 py-4 text-gray-400 text-xs"
                >
                  [Missing component: {comp.type}]
                </div>
              );
          }
        })}
      </div>

      <Footer />
    </main>
  );
}
