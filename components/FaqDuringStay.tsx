"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DURING_STAY_BRING_ITEMS = [
  "Yoga mat (we have for rent $5 for a week)",
  "Comfortable, modest clothing for yoga and meditation",
  "Reusable water bottle",
  "Shawl or blanket for meditation and cool evenings",
  "Slip-on shoes (easy to remove for yoga hall)",
  "Eco-friendly toiletries and personal items",
];

const duringStayData = [
  {
    q: "What should I bring for my stay?",
    a: "We suggest that guests bring:",
    isList: true,
  },
  {
    q: "Enim dolore veniam labore commodo mollit enim?",
    a: "While our schedule is structured, you will have free time during the day to relax, read, explore the beautiful surroundings of Tuyen Lam Lake, or enjoy a silent walk in the pine forest.",
    isList: false,
  },
  {
    q: "Eu ex officia nostrud excepteur qui?",
    a: "Participation in all scheduled activities, including Satsang and yoga classes, is highly recommended to get the full benefit of the ashram experience and maintain the collective energy.",
    isList: false,
  },
  {
    q: "Sint occaecat dolor ea officia dolore veniam minim aliquip?",
    a: "We offer two wholesome, vegetarian meals a day. If you have specific dietary restrictions or allergies, please inform our reception upon arrival.",
    isList: false,
  },
  {
    q: "Velit nulla ex nostrud consequat incididunt sint qui sint?",
    a: "To maintain a peaceful and contemplative environment, we encourage a digital detox. Wi-Fi is available in designated areas only at specific times of the day.",
    isList: false,
  },
];

export default function FaqDuringStay() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#FAF9F6] pb-20 pt-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-[#1e5c2b]">
          During Your Stay
        </h2>
        <p className="mb-16 text-center text-xl text-gray-600">
          Preparing for Your Ashram Experience
        </p>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {duringStayData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between py-6 text-left"
                  aria-expanded={isActive}
                  aria-controls={`during-stay-answer-${index}`}
                  id={`during-stay-question-${index}`}
                >
                  <span className="pr-4 font-bold text-xl text-gray-900">
                    {item.q}
                  </span>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors ${
                      isActive ? "bg-[#6B8E4E] text-white" : "bg-transparent text-gray-500"
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </div>
                </button>
                {isActive && (
                  <div
                    id={`during-stay-answer-${index}`}
                    role="region"
                    aria-labelledby={`during-stay-question-${index}`}
                  >
                    {index === 0 ? (
                      <>
                        <p className="mb-4 text-gray-600">
                          We suggest that guests bring:
                        </p>
                        <div className="grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-2">
                          {DURING_STAY_BRING_ITEMS.map((listItem, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2"
                            >
                              <div className="h-4 w-4 shrink-0 rounded-full border border-gray-400" />
                              <span>{listItem}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pb-6" />
                      </>
                    ) : (
                      <p className="pb-6 leading-relaxed text-gray-600">
                        {item.a}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
