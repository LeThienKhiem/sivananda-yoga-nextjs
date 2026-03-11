"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { supabase } from "@/utils/supabase";
import { Loader2, Plus, Minus } from "lucide-react";

const CATEGORIES = [
  "All",
  "Common Questions",
  "Yoga Vacation Program",
  "Courses",
  "Teacher Training Course",
  "Seva-study / Karma Yoga",
];

export default function FAQPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching FAQs:", error);
    else setFaqs(data || []);
    setLoading(false);
  };

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full flex flex-col mt-16 md:mt-0">
        <div className="relative w-full h-[40vh] min-h-[300px] md:h-[50vh] md:min-h-[450px] z-0">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="Frequently Asked Questions"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Seamless Overlapping Content Box */}
        <div className="relative z-10 w-[95%] max-w-4xl mx-auto bg-[#FDFCF8] px-6 pt-10 pb-6 md:pt-14 md:pb-10 text-center -mt-16 md:-mt-24 shadow-[0_-10px_30px_rgba(253,252,248,1)]">
          <p className="text-base md:text-lg text-gray-500 font-medium mb-3 tracking-widest uppercase">
            Everything you need to know
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* 2. FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 w-full flex-grow">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-sm
                ${
                  activeCategory === cat
                    ? "bg-[#0B3B24] text-white"
                    : "bg-white text-gray-500 hover:bg-[#E5F5C8] hover:text-[#0B3B24] border border-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {loading ? (
            <div className="py-20 flex justify-center">
              <Loader2 className="animate-spin w-10 h-10 text-[#ED7D4D]" />
            </div>
          ) : filteredFaqs.length === 0 ? (
            <div className="py-20 text-center text-gray-500 font-medium bg-white rounded-xl border border-gray-100 shadow-sm">
              We are currently updating the questions for this category. Please
              check back later.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white border transition-all duration-300 rounded-xl overflow-hidden shadow-sm
                    ${
                      isOpen
                        ? "border-[#0B3B24] shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span
                      className={`text-lg md:text-xl font-serif font-bold pr-8 transition-colors ${
                        isOpen ? "text-[#ED7D4D]" : "text-[#0B3B24]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? (
                        <div className="w-8 h-8 rounded-full bg-[#ED7D4D]/10 flex items-center justify-center text-[#ED7D4D]">
                          <Minus size={18} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0B3B24]">
                          <Plus size={18} />
                        </div>
                      )}
                    </span>
                  </button>

                  {/* Answer Body (Animated Expand) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="p-6 pt-0 text-[#4A4A4A] leading-relaxed text-sm md:text-base border-t border-gray-50 mt-2
                          [&>p]:mb-4 last:[&>p]:mb-0 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* 3. CONTACT SECTION (Imported Component) */}
      <ContactSection />

      <Footer />
    </main>
  );
}
