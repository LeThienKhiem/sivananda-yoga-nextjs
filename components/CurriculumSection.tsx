"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const curriculumData = [
  {
    id: 0,
    title: "Asanas – Yoga Postures",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    content:
      "Each day you will study and practice yoga poses as the senior teachers guide you how to teach asanas and pranayama. The daily practice with individual corrections includes:\n\n• Sun salutation\n• 12 basic Yoga postures\n• 125 Asana variations, from intermediate to advanced level\n• Postural alignment\n• Concentration techniques\n• Deep relaxation with autosuggestion",
  },
  {
    id: 1,
    title: "Pranayama – Yogic Breathing",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    content:
      "Expand your capacity to absorb prana (vital energy) and control your mind through classical breathing exercises.\n\n• Kapalabhati (lung cleansing exercise)\n• Anuloma Viloma (alternate nostril breathing)\n• Advanced variations of Pranayama\n• The mechanics of breathing and its effect on the nervous system\n• How to teach Pranayama safely",
  },
  {
    id: 2,
    title: "Nutrition – Yogic Diet",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    content:
      "Understand the deep connection between what you eat and the state of your mind. We serve and study the pure, vegetarian (Sattvic) diet.\n\n• Principles of a Sattvic, Rajasic, and Tamasic diet\n• Influence of diet on the mind and meditation\n• Ethical, health, and ecological reasons for vegetarianism\n• How to transition to a yogic diet",
  },
  {
    id: 3,
    title: "Meditation and Mantra",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
    content:
      "Learn how to steady the mind, focus your energy, and experience inner peace through daily guided practice and theory.\n\n• What is meditation and why practice it?\n• The 12-step guide to daily meditation\n• Mantra initiation (optional)\n• Overcoming obstacles in meditation practice",
  },
  {
    id: 4,
    title: "Anatomy and Physiology",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5",
    content:
      "Gain a foundational understanding of the human body to teach yoga safely and effectively.\n\n• The 8 major bodily systems\n• The effects of asanas and pranayama on these systems\n• The subtle body: Prana, Nadis, and Chakras\n• Injury prevention and modifications",
  },
  {
    id: 5,
    title: "Kirtan and Chanting",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
    content:
      "Open your heart and elevate your spirit through Bhakti Yoga. Daily chanting is a joyous part of ashram life.\n\n• Positive effects of chanting on emotions\n• Proper pronunciation of Sanskrit mantras\n• Leading kirtan (call and response)\n• Developing a devotional attitude",
  },
  {
    id: 6,
    title: "Kriyas",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e",
    content:
      "Purify the physical body to prepare for deeper practices of pranayama and meditation.\n\n• Tratak (steady gazing)\n• Neti (nasal cleansing)\n• Kapalabhati (lung cleansing)\n• Dhauti, Nauli, and Basti (theory)\n• Importance of physical purity",
  },
];

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTabForModal, setSelectedTabForModal] = useState(0);
  const current = curriculumData[activeTab];
  const modalItem = curriculumData[selectedTabForModal];

  const openModal = (index: number) => {
    setSelectedTabForModal(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  return (
    <section className="py-24 px-6 bg-[#FDFCF8]">
      <h2 className="text-4xl md:text-5xl font-serif text-[#0B3B24] text-center mb-2">
        Curriculum
      </h2>
      <p className="text-xl text-gray-600 text-center mb-12">
        Rooted in Tradition, Designed for Transformation
      </p>

      {/* Desktop Layout - 3 columns (hidden on mobile) */}
      <div className="hidden md:flex flex-col md:flex-row w-full max-w-7xl mx-auto shadow-sm min-h-[600px]">
        {/* Left Column - Tabs */}
        <div className="w-full md:w-72 flex flex-col z-20">
          {curriculumData.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`flex-1 flex items-center px-6 py-5 cursor-pointer transition-colors border-b border-white/20 text-left font-bold text-base md:text-lg min-h-[60px] ${
                  isActive
                    ? "bg-[#0B3B24] text-white shadow-md z-10"
                    : "bg-[#4F6F1F] text-white/90 hover:bg-[#3D5A16]"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Center Column - Image */}
        <div className="flex-grow relative h-64 md:h-auto min-h-[256px] md:min-h-[600px] z-10 bg-gray-200">
          <Image
            src={current.image}
            fill
            className="object-cover"
            alt={current.title}
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-[350px] lg:w-[400px] bg-[#4F6F1F] text-white p-8 md:p-10 flex flex-col justify-between z-10">
          <div className="text-base md:text-lg leading-relaxed whitespace-pre-line text-white/95">
            {current.content}
          </div>
          <Link
            href="/accommodations"
            className="mt-10 self-start md:self-end bg-[#ED7D4D] text-white font-bold uppercase px-8 py-3 rounded-sm hover:bg-orange-600 transition-colors shadow-lg inline-block"
          >
            ENROLL NOW
          </Link>
        </div>
      </div>

      {/* Mobile Layout - Horizontal carousel + CTA (visible only on mobile) */}
      <div className="md:hidden w-full max-w-7xl mx-auto px-2">
        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-2 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {curriculumData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openModal(index)}
              className="snap-center shrink-0 w-[78vw] flex flex-col rounded-xl overflow-hidden border-2 border-[#4F6F1F] bg-[#4F6F1F] shadow-lg active:scale-[0.98] transition-transform"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="78vw"
                  unoptimized
                />
              </div>
              <div className="p-4 flex items-center justify-center min-h-[72px]">
                <span className="text-white font-bold text-base leading-snug text-center">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        <Link
          href="/accommodations"
          className="mt-10 flex justify-center w-full md:hidden"
        >
          <span className="bg-[#ED7D4D] text-white font-bold uppercase px-8 py-3 rounded-sm hover:bg-orange-600 transition-colors shadow-lg inline-block">
            ENROLL NOW
          </span>
        </Link>
      </div>

      {/* Mobile Modal - Tap outside to close, scale-up + fade-in animation */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden animate-curriculum-modal-overlay-in"
          onClick={closeModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
          aria-modal="true"
          aria-label="Close modal"
        >
          {/* Semi-transparent dark overlay - tap to close */}
          <div className="absolute inset-0 bg-black/50" aria-hidden />

          {/* White content card - scale-up + fade-in, entire content scrollable */}
          <div
            className="relative bg-white rounded-xl shadow-xl shadow-black/25 max-h-[85vh] w-full max-w-md overflow-hidden flex flex-col animate-curriculum-modal-in"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modal-title"
          >
            <div className="overflow-y-auto overscroll-contain flex-1 min-h-0">
              <div className="relative aspect-[4/3] w-full bg-gray-200">
                <Image
                  src={modalItem.image}
                  alt={modalItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3
                  id="modal-title"
                  className="text-xl font-bold text-[#0B3B24] mb-4 font-serif text-center"
                >
                  {modalItem.title}
                </h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                  {modalItem.content}
                </div>
                <div className="mt-8 flex justify-center">
                  <Link
                    href="/accommodations"
                    className="bg-[#ED7D4D] text-white font-bold uppercase px-8 py-3 rounded-sm hover:bg-orange-600 transition-colors shadow-lg inline-block"
                  >
                    ENROLL NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
