"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const tabsData = [
  {
    id: "attitude",
    title: "Right Attitude",
    content:
      "It is not what you do that counts, it is the attitude while doing it that determines whether it is a job or Karma Yoga (i.e., a binding or a liberating job).",
    image:
      "https://images.unsplash.com/photo-1758599879795-536d5f203de9",
  },
  {
    id: "motive",
    title: "Right Motive",
    content:
      "Mockup content for Right Motive. This section will be updated later with detailed teachings.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600",
  },
  {
    id: "duty",
    title: "Do Your Duty (Swadharma)",
    content:
      "Mockup content for Do Your Duty. This section will be updated later with detailed teachings.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600",
  },
  {
    id: "best",
    title: "Do your best",
    content:
      "Mockup content for Do your best. This section will be updated later with detailed teachings.",
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1600",
  },
  {
    id: "results",
    title: "Give up results",
    content:
      "Mockup content for Give up results. This section will be updated later with detailed teachings.",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600",
  },
  {
    id: "serve",
    title: "Serve the Self in All",
    content:
      "Mockup content for Serve the Self in All. This section will be updated later with detailed teachings.",
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1600",
  },
  {
    id: "discipline",
    title: "Follow the Discipline of the Job",
    content:
      "Mockup content for Follow the Discipline of the Job. This section will be updated later with detailed teachings.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600",
  },
  {
    id: "qualifications",
    title: "Qualifications of a Karma Yogi",
    content:
      "Mockup content for Qualifications of a Karma Yogi. This section will be updated later with detailed teachings.",
    image:
      "https://images.unsplash.com/photo-1444312645910-ffa973656eba?q=80&w=1600",
  },
];

export default function KarmaYogaTabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0]);
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const [selectedMobileTab, setSelectedMobileTab] = useState<typeof tabsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (tab: typeof tabsData[0]) => {
    setSelectedMobileTab(tab);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMobileTab(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsModalOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTabs = (direction: "left" | "right") => {
    const el = tabsScrollRef.current;
    if (!el) return;
    const scrollAmount = 180;
    el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#FDFCF8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] text-center mb-16 font-bold">
          How to practice Karma Yoga?
        </h2>

        {/* Desktop Layout - hidden on mobile */}
        <div className="hidden md:flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-3xl overflow-hidden min-h-[550px] bg-white border border-gray-100">
          {/* Left Side: Modern Tabs List — horizontal scroll on mobile, vertical on desktop */}
          <div className="w-full md:w-[35%] bg-gray-50/50">
            <div className="relative md:h-full">
              {/* Mobile scroll arrows — inside relative wrapper, outside scrollable area */}
              <button
                type="button"
                onClick={() => scrollTabs("left")}
                aria-label="Scroll tabs left"
                className="absolute left-0 top-0 bottom-0 z-20 w-8 flex items-center justify-center bg-gradient-to-r from-white via-white/80 to-transparent hover:bg-white text-[#4F6F1F] md:hidden"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollTabs("right")}
                aria-label="Scroll tabs right"
                className="absolute right-0 top-0 bottom-0 z-20 w-8 flex items-center justify-center bg-gradient-to-l from-white via-white/80 to-transparent hover:bg-white text-[#4F6F1F] md:hidden"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
              </button>

              <div
                ref={tabsScrollRef}
                className="flex flex-row overflow-x-auto flex-nowrap md:flex-col md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
            {tabsData.map((tab) => {
              const isActive = activeTab.id === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 whitespace-nowrap text-left px-6 py-5 md:px-8 transition-all duration-300 relative ${
                    isActive
                      ? "bg-white text-[#0B3B24] font-semibold shadow-sm z-10 border-b-2 border-[#4F6F1F] md:border-b-0 md:border-l-4 md:border-l-[#4F6F1F]"
                      : "text-gray-500 hover:bg-white hover:text-[#0B3B24] border-b-2 border-transparent md:border-b md:border-b-gray-100 md:last:border-none md:border-l-4 md:border-l-transparent"
                  }`}
                >
                  {tab.title}
                </button>
              );
            })}
              </div>
            </div>
          </div>

          {/* Right Side: Image with Glassmorphism Content Card */}
          <div className="w-full md:w-[65%] relative min-h-[400px]">
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 65vw"
              unoptimized
            />

            {/* Soft Gradient Overlay for better readability just in case */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Elegant Glass Card — glassmorphism effect */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/60 backdrop-blur-md border border-white/40 shadow-lg rounded-xl p-8 md:p-10 transform transition-all duration-500">
              <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-4">
                {activeTab.title}
              </h3>
              <p className="text-gray-900 leading-relaxed text-base md:text-lg">
                {activeTab.content}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - horizontal carousel + modal (visible only on mobile) */}
        <div className="md:hidden w-full mt-8">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          >
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => openModal(tab)}
                className="snap-center shrink-0 w-[80vw] sm:w-[300px] min-h-[200px] flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white shadow-none active:scale-[0.98] transition-transform"
              >
                <div className="relative aspect-[4/3] w-full bg-gray-100">
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    fill
                    className="object-cover"
                    sizes="80vw"
                    unoptimized
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-center min-h-[80px]">
                  <span className="text-[#0B3B24] font-bold text-base leading-snug text-center">
                    {tab.title}
                  </span>
                  <span className="text-gray-500 text-sm mt-1 line-clamp-2 text-center">
                    {tab.content}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Modal - tap overlay to close, X button to close */}
        {isModalOpen && selectedMobileTab && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden"
            onClick={closeModal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Escape" && closeModal()}
            aria-modal="true"
            aria-label="Close modal"
          >
            <div className="absolute inset-0 bg-black/70" aria-hidden />
            <div
              className="relative bg-white rounded-xl shadow-none border border-gray-200 max-h-[80vh] w-full max-w-md overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="modal-title"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="overflow-y-auto max-h-[80vh] overscroll-contain">
                <div className="relative aspect-[4/3] w-full bg-gray-100">
                  <Image
                    src={selectedMobileTab.image}
                    alt={selectedMobileTab.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3
                    id="modal-title"
                    className="text-xl font-serif font-bold text-[#0B3B24] mb-4 pr-10"
                  >
                    {selectedMobileTab.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                    {selectedMobileTab.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
