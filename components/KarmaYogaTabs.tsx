"use client";

import React, { useState } from "react";
import Image from "next/image";

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

  return (
    <section className="bg-[#FDFCF8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] text-center mb-16 font-bold">
          How to practice Karma Yoga?
        </h2>

        {/* Elegant Container */}
        <div className="flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-3xl overflow-hidden min-h-[550px] bg-white border border-gray-100">
          {/* Left Side: Modern Tabs List */}
          <div className="w-full md:w-[35%] flex flex-col bg-gray-50/50">
            {tabsData.map((tab) => {
              const isActive = activeTab.id === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left px-8 py-5 transition-all duration-300 border-b border-gray-100 last:border-none relative ${
                    isActive
                      ? "bg-white text-[#0B3B24] font-semibold shadow-sm z-10"
                      : "text-gray-500 hover:bg-white hover:text-[#0B3B24]"
                  }`}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4F6F1F] rounded-r-md" />
                  )}
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Right Side: Image with Glassmorphism Content Card */}
          <div className="w-full md:w-[65%] relative min-h-[400px]">
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 65vw"
            />

            {/* Soft Gradient Overlay for better readability just in case */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Elegant Glass Card */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/85 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/40 transform transition-all duration-500">
              <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-4">
                {activeTab.title}
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
                {activeTab.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
