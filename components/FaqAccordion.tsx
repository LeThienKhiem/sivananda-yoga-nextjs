"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "Do non-Vietnamese citizens need a visa?",
    a: 'The short answer is "yes." Since mid-August 2023, Vietnam grants e-visas for citizens of all countries and territories with 90-day stay duration and valid for multiple entry. Please see the government website for further information: https://evisa.gov.vn/',
  },
  {
    q: "What is the weather like?",
    a: "Da Lat has a temperate climate. It is generally cool year-round, with average temperatures ranging from 15°C to 24°C (59°F - 75°F). We recommend bringing layers, including a light jacket or sweater for chilly mornings and evenings.",
  },
  {
    q: "How can I get to the Sivananda Yoga Center from the airport?",
    a: "Lien Khuong Airport (DLI) is about 45 minutes away. We can arrange an airport pick-up taxi for you upon request. Alternatively, you can take a shuttle bus to Da Lat city center and then a short taxi ride to Tuyen Lam Lake.",
  },
  {
    q: "What should I bring for my yoga practice?",
    a: "Please bring comfortable, modest clothing suitable for yoga asanas. A personal yoga mat is recommended, though we do have mats available. Also, bring a reusable water bottle, a shawl for meditation, and slip-on shoes.",
  },
  {
    q: "Are the meals suitable for vegans?",
    a: "Yes, we serve two nutritious, pure vegetarian (yogic/sattvic) meals a day. While our meals naturally include many vegan options, please let us know of any strict dietary requirements upon registration so we can best accommodate you.",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#FAF9F6] py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-[#1e5c2b]">
          General Questions
        </h2>
        <p className="mb-16 text-center text-lg text-gray-600">
          Everything you need to know before your stay
          <br />
          at the Sivananda Yoga Vietnam Resort & Training Center.
        </p>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-6 text-left cursor-pointer"
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-bold text-lg text-gray-900 pr-4">
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
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="pb-6 text-gray-600 leading-relaxed"
                  >
                    {item.a}
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
