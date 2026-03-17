"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import SeniorTeachers from "@/components/SeniorTeachers";
import TTCTestimonials from "@/components/TTCTestimonials";
import StudentFeedback from "@/components/StudentFeedback";
import MoreInformation from "@/components/MoreInformation";
import {
  BookOpen,
  Activity,
  Leaf,
  Brain,
  Users,
  GraduationCap,
  Globe,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

const IMG_HERO =
  "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2000";
const IMG_LOTUS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/syhet-01.png";
const IMG_NATURE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-16.png";

const timelineData = [
  {
    isYearBreak: true,
    title: "Year 1: In-Contact Learning",
    description:
      "Three times 2-week residential immersion programs (440 hours)\nat the Sivananda Yoga Resort and Training Center, Dalat, Vietnam",
  },
  {
    module: "Module 1",
    duration: "(17 days residential/ 149 hours)",
    month: "January",
    title: "Yoga and the Mind, Psychology and Mental Health",
    icon: <BookOpen className="w-8 h-8 text-[#0B3B24]" strokeWidth={1.5} />,
    align: "left",
  },
  {
    module: "Module 2",
    duration: "(17 days residential/ 146 hours)",
    month: "April",
    title:
      "Ayurveda and Healing, Anatomy and Physiology, and Yoga effects on specific conditions, pathologies of different systems",
    icon: <BookOpen className="w-8 h-8 text-[#0B3B24]" strokeWidth={1.5} />,
    align: "right",
  },
  {
    module: "Module 3",
    duration: "(17 days residential/ 145 hours)",
    month: "October",
    title: "Yoga Health Techniques and Yoga therapy to manage different conditions",
    icon: <BookOpen className="w-8 h-8 text-[#0B3B24]" strokeWidth={1.5} />,
    align: "left",
  },
  {
    isYearBreak: true,
    title: "Year 2: Distant Learning & Practicum",
    description:
      "Distance learning online courses (109 hours) and\nmentored practicum (251 hours) in medical clinic and Yoga centers",
  },
  {
    module: "Module 4",
    duration: "(Distance Learning/ 109 hours)",
    title: "Therapeutic Relationship, Ayurveda, Addiction",
    icon: <Globe className="w-8 h-8 text-[#0B3B24]" strokeWidth={1.5} />,
    align: "right",
  },
  {
    module: "Module 5",
    duration: "(251 hours)",
    title: "Yoga Health Techniques application.\nPracticum under Mentor's supervisor",
    description:
      "Applied knowledge and techniques to educate individuals and groups under the guidance of a mentor in a medical clinic or yoga teacher",
    icon: <Users className="w-8 h-8 text-[#0B3B24]" strokeWidth={1.5} />,
    align: "left",
  },
];

const therapeuticData = [
  {
    title: "Psychological and nervous system disorders",
    items: [
      "Psychosomatic diseases",
      "Sleep disorders",
      "Anxiety",
      "Insomnia",
      "Depression",
      "Stress",
      "Trauma (PTSD)",
      "Addiction",
      "Chronic pain",
    ],
  },
  {
    title: "Health and Lifestyle",
    items: [
      "Burnout",
      "Chronic fatigue",
      "Poor digestion",
      "Lifestyle management",
      "Dietary adjustments",
    ],
  },
  {
    title: "Cardiovascular Conditions",
    items: [
      "Hypertension (High blood pressure)",
      "Heart disease management",
      "Poor circulation",
    ],
  },
  {
    title: "Metabolic Conditions",
    items: ["Diabetes (Type 2)", "Obesity", "Thyroid imbalances"],
  },
  {
    title: "Respiratory Disorders",
    items: [
      "Asthma",
      "Allergies",
      "Chronic bronchitis",
      "Shallow breathing patterns",
    ],
  },
  {
    title: "Musculoskeletal Conditions",
    items: [
      "Lower back pain",
      "Arthritis",
      "Joint stiffness",
      "Sciatica",
      "Scoliosis management",
    ],
  },
  {
    title: "Special Populations",
    items: [
      "Seniors (Healthy aging)",
      "Pregnant women (Prenatal care)",
      "Postpartum recovery",
    ],
  },
  {
    title: "Lack of Spiritual Health",
    items: [
      "Loss of purpose or meaning",
      "Grief and bereavement",
      "Existential crisis",
      "Disconnection from self",
    ],
  },
];

const beneficiaries = [
  "Nurse",
  "Hospital",
  "Life Coach",
  "Yoga Teacher",
  "Social Worker",
  "Physical Therapist",
  "Acupuncture Clinic",
  "Chiropractic Office",
  "Health Care Provider",
  "At-risk Youth Counselor",
  "Corporate Wellness Program",
  "Health and wellness Enthusiast",
];

function AccordionItem({
  title,
  items,
  isOpen,
  onClick,
}: {
  title: string;
  items: string[];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="bg-white rounded-md mb-4 shadow-sm overflow-hidden transition-all duration-300">
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <CheckCircle2 className="w-5 h-5 text-[#4F6F1F] flex-shrink-0" />
          <h4 className="font-bold text-[#0B3B24] text-base md:text-lg">
            {title}
          </h4>
        </div>
        <div className="text-gray-400">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-2 pl-14">
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="text-[#4A4A4A] text-base flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full border border-gray-400"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function SYHETPage() {
  const [openAccordionIdx, setOpenAccordionIdx] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordionIdx(openAccordionIdx === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full flex flex-col">
        {/* Background Image Container */}
        <div className="relative w-full h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] z-0">
          <Image
            src={IMG_HERO}
            alt="Sivananda Yoga Health Educator Training"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Seamless Overlapping Content Box (No Shadow, blends with background) */}
        <div className="relative z-10 w-[95%] max-w-6xl mx-auto bg-[#FDFCF8] px-6 pt-10 pb-6 md:pt-14 md:pb-10 text-center -mt-16 md:-mt-24">
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-2 md:mb-4">
            Empower Healing through Yoga Therapeutic Practice
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0B3B24] font-bold">
            Sivananda Yoga Health Educator Training (SYHET)
          </h1>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="bg-[#FDFCF8] py-24 px-6 w-full">
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {/* Block 1: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-2">
                  Become a Health Educator
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-500 font-medium">
                  With 800-hour Professional Yoga Health Training
                </h3>
              </div>
              <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                <p>
                  Over the course of this 800-hour professional yoga health training, the student becomes versed in the therapeutic application of the Five Points of Yoga and the Four Paths of Yoga.
                </p>
                <p className="font-bold text-[#0B3B24]">
                  &quot;The goal of the Sivananda Yoga Health Educator is to empower participants in their own Self-healing through the practice of asana, pranayama, conscious relaxation techniques, vegetarian diet, positive thinking tools, and meditation practices.&quot;
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={IMG_LOTUS}
                  alt="Lotus flowers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-4">
                Yoga Therapeutic Approach
              </h2>
              <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                <p>
                  Practical tools, foundational concepts and philosophical knowledge are gained to create the framework for more advanced study as one progresses through the program. Emphasis is placed on understanding the subtler aspects of the causes of disease and stress in the individual.
                </p>
                <p className="font-bold text-[#0B3B24]">
                  &quot;Common health conditions addressed include respiratory disorders, cardiovascular conditions, diabetes, auto-immune disorders, musculoskeletal conditions, mental health such as depression, anxiety, trauma, etc...&quot;
                </p>
                <p>
                  Intensive study in Yoga psychology, the therapeutic effects of meditation practice, the theory of karma and disease, counseling techniques based in the Vedic sciences, Ayurveda psychology, as well as understanding the root cause of addiction and behaviors are covered in the curriculum. Thus, the Yoga Health Educator has the knowledge and intuitive capacity to be a positive and healthy instrument of healing.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={IMG_NATURE}
                  alt="Nature healing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IAYT CERTIFICATE SECTION */}
      <section className="bg-[#ECEFE6] py-20 px-6 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Logo Placeholder */}
          <div className="relative w-64 h-24 md:w-80 md:h-32 mb-8">
            <Image
              src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/ecb80e53-340a-46e2-a653-cfef8f045b21.jpg"
              alt="IAYT Accredited Yoga Therapy Training Program"
              fill
              className="object-contain mix-blend-multiply"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0B3B24] mb-6">
            International Association of Yoga Therapists (IAYT) Certified
          </h2>

          {/* Description */}
          <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg max-w-3xl">
            SYHET is fully accredited by the International Association of Yoga Therapists (IAYT),
            meeting rigorous educational and ethical standards. Upon completion, graduates are
            eligible to <a href="#" className="text-[#5B95A6] hover:underline font-medium">apply for the C-IAYT certification</a>,
            a globally recognized credential in the field of yoga therapy. This ensures that you&apos;re
            not only trained to serve diverse populations but also respected across wellness, clinical,
            and therapeutic domains.
          </p>

        </div>
      </section>

      {/* 4. PROGRAM OVERVIEW (TIMELINE) SECTION */}
      <section className="bg-white py-24 px-6 w-full relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">

          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-4">
              Program Overview
            </h2>
            <p className="text-[#4A4A4A] md:text-xl font-light max-w-2xl mx-auto">
              800-hour, 2-year yoga therapy program combining residential retreats, distance learning, and supervised practicum with expert mentorship for certification.
            </p>
          </div>

          {/* Dotted Line Separator */}
          <div className="w-full max-w-3xl mx-auto border-t-2 border-dashed border-[#ED7D4D] mb-16 opacity-50"></div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-[1px] border-l border-dashed border-gray-300 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineData.map((item, index) => {
                // Render Year Break
                if ("isYearBreak" in item && item.isYearBreak) {
                  return (
                    <div key={index} className="relative z-10 flex flex-col items-center text-center py-8">
                      <div className="bg-white px-6">
                        <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] mb-4">
                          {item.title}
                        </h3>
                        <p className="text-[#4A4A4A] text-base md:text-lg font-light whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                }

                // Render Module Items
                const moduleItem = item as {
                  module: string;
                  duration: string;
                  month?: string;
                  title: string;
                  description?: string;
                  icon: React.ReactNode;
                  align: string;
                };
                return (
                  <div key={index} className="relative z-10 flex items-start w-full">

                    {/* Left Column (Content if align left, empty if right) */}
                    <div className={`w-1/2 pr-8 md:pr-16 text-right ${moduleItem.align === "left" ? "block" : "invisible"}`}>
                      <div className="flex flex-col items-end">
                        <div className="mb-4 text-[#0B3B24]">
                          {moduleItem.icon}
                        </div>
                        <h4 className="text-2xl md:text-3xl font-serif text-[#0B3B24] mb-1">
                          {moduleItem.module}{" "}
                          <span className="text-base md:text-lg text-gray-500 font-sans font-normal ml-1">
                            {moduleItem.duration}
                          </span>
                        </h4>
                        {moduleItem.month && (
                          <h5 className="text-xl md:text-2xl font-bold text-[#0B3B24] mb-3 mt-4">
                            {moduleItem.month}
                          </h5>
                        )}
                        <p className="text-[#4A4A4A] font-medium text-base md:text-lg leading-relaxed mb-4 max-w-sm whitespace-pre-line">
                          {moduleItem.title}
                        </p>
                        {moduleItem.description && (
                          <p className="text-gray-500 text-base leading-relaxed max-w-sm mb-4">
                            {moduleItem.description}
                          </p>
                        )}
                        <button type="button" className="text-base font-bold uppercase tracking-widest text-[#0B3B24] flex items-center gap-1 hover:text-[#ED7D4D] transition-colors">
                          Detail{" "}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-[50%] transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#E5F5C8] border-4 border-white shadow-sm flex items-center justify-center z-20 mt-2"></div>

                    {/* Right Column (Content if align right, empty if left) */}
                    <div className={`w-1/2 pl-8 md:pl-16 text-left ${moduleItem.align === "right" ? "block" : "invisible"}`}>
                      <div className="flex flex-col items-start">
                        <div className="mb-4 text-[#0B3B24]">
                          {moduleItem.icon}
                        </div>
                        <h4 className="text-2xl md:text-3xl font-serif text-[#0B3B24] mb-1">
                          {moduleItem.module}{" "}
                          <span className="text-base md:text-lg text-gray-500 font-sans font-normal ml-1">
                            {moduleItem.duration}
                          </span>
                        </h4>
                        {moduleItem.month && (
                          <h5 className="text-xl md:text-2xl font-bold text-[#0B3B24] mb-3 mt-4">
                            {moduleItem.month}
                          </h5>
                        )}
                        <p className="text-[#4A4A4A] font-medium text-base md:text-lg leading-relaxed mb-4 max-w-sm whitespace-pre-line">
                          {moduleItem.title}
                        </p>
                        {moduleItem.description && (
                          <p className="text-gray-500 text-base leading-relaxed max-w-sm mb-4">
                            {moduleItem.description}
                          </p>
                        )}
                        <button type="button" className="text-base font-bold uppercase tracking-widest text-[#0B3B24] flex items-center gap-1 hover:text-[#ED7D4D] transition-colors">
                          Detail{" "}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Graduation */}
            <div className="relative z-10 flex flex-col items-center text-center mt-24">
              <div className="bg-white p-2">
                <GraduationCap className="w-12 h-12 text-[#0B3B24] mx-auto mb-2" strokeWidth={1} />
                <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24]">
                  Graduation
                </h3>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THERAPEUTIC APPLICATION OF YOGA SECTION */}
      <section className="bg-white py-24 px-6 w-full relative">
        <div className="max-w-3xl mx-auto relative z-10">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-4">
              Therapeutic Application of Yoga
            </h2>
            <p className="text-[#4A4A4A] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The Sivananda Yoga Health Educator is trained to empower participants in their own Self-healing through practices that have positive effects on the following health conditions:
            </p>
          </div>

          {/* Accordion List */}
          <div className="w-full">
            {therapeuticData.map((data, index) => (
              <AccordionItem
                key={index}
                title={data.title}
                items={data.items}
                isOpen={openAccordionIdx === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 6. WHO BENEFITS SECTION (PYRAMID) */}
      <section className="relative bg-[#FDFCF8] py-24 md:py-32 px-6 w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Faint Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="People benefiting from SYHET"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/80 to-[#FDFCF8]"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">

          {/* Title placed cleanly ABOVE the pyramid */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0B3B24] font-bold mb-12 text-center">
            Who Benefits from SYHET Knowledge?
          </h2>

          {/* Pyramid Container - Isolates the SVG to only wrap the text */}
          <div className="relative w-full max-w-[800px] flex flex-col items-center pt-16 pb-12 px-4">

            {/* Faint Yellow Pyramid Background SVG - Fits exactly to this container */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full opacity-[0.25] z-0 pointer-events-none text-[#FBBF24]"
              aria-hidden
            >
              <polygon points="50,0 100,100 0,100" fill="currentColor" />
            </svg>

            {/* Pyramid Text Stack */}
            <div className="relative z-10 flex flex-col items-center space-y-3 md:space-y-4 text-[#4A4A4A] font-medium text-base md:text-lg tracking-wide w-full">
              {beneficiaries.map((role, idx) => (
                <div
                  key={idx}
                  className="hover:text-[#ED7D4D] transition-colors cursor-default text-center"
                >
                  {role}
                </div>
              ))}

              <div className="pt-2 text-2xl tracking-widest opacity-50">...</div>

              <div className="pt-2 pb-2 text-base md:text-lg italic text-[#4A4A4A] font-serif text-center w-full px-4">
                And those with a true passion for health and well-being
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TUITION & DATES SECTION */}
      <section className="bg-[#FDFCF8] py-24 px-6 w-full">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: Tuition Details */}
          <div className="w-full lg:w-[60%] space-y-16">

            {/* Tuition Block */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-6">
                Tuition
              </h2>
              <h3 className="text-2xl text-gray-600 font-medium mb-6">
                2-Year Program Tuition
              </h3>

              <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg mb-8">
                <p>
                  For 2026-2028, the full tuition for the Sivananda Yoga Health Educator Training is starting from $10,000 with additional fees for residential option.
                </p>
                <p>
                  Deposit at time of application: $1,000 (non-refundable). Full tuition payment is due before the start of the 1st module in January 2026
                </p>
                <p>
                  Payment plans are available for students in need with a 10% surcharge on the tuition. Please contact us for more details.
                </p>
              </div>

              {/* Pricing Card */}
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-gray-100 max-w-md">
                <h4 className="font-bold text-[#0B3B24] mb-8">
                  Tuition with Residential Options
                </h4>

                <div className="space-y-6 text-[#4A4A4A] font-medium text-base md:text-lg mb-8">
                  <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                    <span>Single Room</span>
                    <span className="text-[#0B3B24] font-bold">$12,983</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                    <span>Share Room (2 people)</span>
                    <span className="text-[#0B3B24] font-bold">$11,975</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Share Room (4 people)</span>
                    <span className="text-[#0B3B24] font-bold">$10,535</span>
                  </div>
                </div>

                <p className="text-base text-gray-500 leading-relaxed">
                  ***Deposit 1000$ is required on application date and must pay in full before the start of the first Module.
                </p>
              </div>
            </div>

            {/* Studying Affordably Block */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-6">
                Studying Affordably
              </h2>
              <h3 className="text-xl text-gray-600 font-medium mb-8">
                Financial Aid Opportunities for your education
              </h3>

              <ul className="space-y-6 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#0B3B24] mt-0.5 flex-shrink-0" aria-hidden>
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  <span>
                    <strong className="text-[#0B3B24]">Discount:</strong> We are offering an <strong>Early Bird discount of 10%</strong> off for those that sign up by April 30th, 2025
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#0B3B24] mt-0.5 flex-shrink-0" aria-hidden>
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  <span>
                    <strong className="text-[#0B3B24]">Payment Plans:</strong> We do offer an installment payment plan that allows you to finish the payment one year after the start date. Please <a href="#" className="underline font-medium hover:text-[#ED7D4D] transition-colors">contact us</a> for more details.
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Dates Card */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg border border-gray-100 lg:sticky lg:top-24">

              <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-8">Dates</h3>

              <div className="space-y-6 mb-12">
                {/* Module 1 */}
                <div>
                  <h4 className="font-bold text-[#0B3B24] mb-1">Module 1: January 8 – 24, 2026</h4>
                  <p className="text-base text-[#4A4A4A]">Yoga and the Mind, Psychology and Mental Health</p>
                </div>

                {/* Module 2 */}
                <div>
                  <h4 className="font-bold text-[#0B3B24] mb-1">Module 2: April 14 – 30, 2026</h4>
                  <p className="text-base text-[#4A4A4A]">Ayurveda and Healing; Disease Process, Management and Prevention</p>
                </div>

                {/* Module 3 */}
                <div>
                  <h4 className="font-bold text-[#0B3B24] mb-1">Module 3: October 1 – 17, 2026</h4>
                  <p className="text-base text-[#4A4A4A]">Yoga Health Techniques: Therapeutic Application of Asana, Pranayama, and Relaxation</p>
                </div>

                {/* Module 4 */}
                <div>
                  <h4 className="font-bold text-[#0B3B24] mb-1">Module 4: Distance Learning</h4>
                  <p className="text-base text-[#4A4A4A]">Online Anatomy, Physiology and Pathology/ Biomedical Foundations</p>
                </div>

                {/* Practicum */}
                <div>
                  <h4 className="font-bold text-[#0B3B24] mb-1">Practicum</h4>
                  <p className="text-base text-[#4A4A4A] mb-2">Applied knowledge and techniques to educate individuals and groups under the guidance of a mentor in a medical clinic or yoga center.</p>
                  <p className="text-base text-gray-500 italic underline decoration-gray-300">There will be a final exam at the end of the course</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="font-bold text-[#0B3B24] mb-4">*** Important Requirement</h4>
                <p className="text-base text-[#4A4A4A] leading-relaxed">
                  The completion of an approved 200-hour Yoga Teacher Training Course is a per-requisite for the Sivananda Yoga Health Educator Training (SYHET)
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. SENIOR TEACHERS SECTION */}
      <SeniorTeachers />

      {/* 9. TTC TESTIMONIALS SECTION */}
      <TTCTestimonials />

      {/* 10. STUDENT FEEDBACK SECTION */}
      <StudentFeedback />

      {/* 11. MORE INFORMATION SECTION */}
      <MoreInformation />

      {/* Future sections will go here */}
      <div className="flex-grow"></div>

      <Footer />
    </main>
  );
}
