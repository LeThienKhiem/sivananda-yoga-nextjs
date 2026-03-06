"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

// Image URLs
const HERO_IMG =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000";
const IMG_DAILY =
  "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800";
const IMG_SCHEDULE_INLINE =
  "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=400";
const IMG_YOGA_CLASS =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800";
const IMG_SAVASANA =
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800";
const IMG_SATSANG =
  "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800";
const IMG_MEALS =
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800";

const schedule = [
  { time: "5:30 am", activity: "Wake up bell" },
  { time: "6:00 am", activity: "Satsang (Meditation, Chanting, Lecture)" },
  { time: "8:00 am", activity: "Asana and Pranayama", hasImage: true },
  { time: "10:00 am", activity: "Vegetarian Brunch" },
  { time: "11:00 am", activity: "Karma Yoga" },
  { time: "12:30 pm", activity: "Mandatory Coaching / Workshop" },
  { time: "4:00 pm", activity: "Asana and Pranayama" },
  { time: "6:00 pm", activity: "Vegetarian Dinner" },
  { time: "8:00 pm", activity: "Satsang (Meditation, Chanting, Lecture)" },
];

const guidelines = [
  "Attendance at all satsangs and classes is mandatory.",
  "Please respect the quiet hours between 10:00 pm and 5:30 am.",
  "Silence is observed during meals and after evening satsang.",
  "Modest dress is required at all times. Shoulders and knees must be covered.",
  "No low-cut shirts, bare midriffs, or see-through clothing.",
  "Meat, fish, eggs, alcohol, tobacco, and drugs are strictly prohibited.",
  "Please refrain from using mobile phones in public areas.",
  "Photography is not allowed during satsang and yoga classes.",
  "Please leave your shoes outside the temples and halls.",
  "Keep your room and personal space clean and tidy.",
  "Participation in daily Karma Yoga (selfless service) is highly encouraged.",
];

export default function DuringYourStayPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] flex flex-col items-center justify-end text-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt="During Your Stay Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Subtle dark overlay so the white box stands out */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Overlapping Content Box (translate-y-1/2 pushes it 50% outside the bottom edge) */}
        <div className="relative z-10 w-[90%] max-w-4xl px-8 py-10 md:py-14 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-sm translate-y-1/2 text-center">
          <p className="text-base md:text-base text-[#0B3B24] tracking-widest uppercase mb-4 font-bold opacity-80">
            Experience your best at Sivananda Yoga Resort Centre
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold">
            During Your Stay
          </h1>
        </div>
      </section>

      {/* Spacer to prevent overlap with the next section due to the translate-y */}
      <div className="h-32 md:h-48 bg-transparent"></div>

      {/* 2. DAILY SCHEDULE */}
      <section className="max-w-7xl mx-auto py-24 px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          <div className="w-full lg:w-[45%]">
            <h2 className="text-3xl font-serif text-[#0B3B24] font-bold mb-6">
              Daily Schedule
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-10">
              Our ashram daily schedule is based on the traditional gurukula system, providing a structured environment that supports your spiritual growth. The balanced daily routine of exercise, breathing, relaxation, diet, and meditation helps to calm the mind and energize the body.
            </p>
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
              <Image
                src={IMG_DAILY}
                alt="Daily Yoga Practice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          <div className="w-full lg:w-[55%] flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-10 md:pt-0 md:pl-10 lg:pl-16">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 pb-6 border-b border-gray-100 last:border-0 relative"
                >
                  <div className="w-24 flex-shrink-0 font-bold text-[#0B3B24] pt-1">
                    {item.time}
                  </div>
                  <div className="flex-grow text-[#4A4A4A] pt-1">
                    {item.activity}
                    {item.hasImage && (
                      <div className="mt-4 relative w-48 h-24 rounded-sm overflow-hidden shadow-sm hidden md:block">
                        <Image
                          src={IMG_SCHEDULE_INLINE}
                          alt="Yoga Class"
                          fill
                          className="object-cover"
                          sizes="192px"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT TO EXPECT SECTION */}
      <section className="py-24 px-6 w-full relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#0B3B24] font-bold text-center mb-20">
            What to Expect
          </h2>

          <div className="space-y-32 relative">
            {/* Block 1: In Yoga Class */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-6">
                  In Yoga Class
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    Sivananda Yoga is a classical, holistic approach to Hatha Yoga that stretches and tones the whole body.
                  </p>
                  <p>
                    Classes are 2 hours long. Both the morning and afternoon classes follow the same sequence of breathing exercises (Pranayama), warm-ups (Sun Salutation), and 12 basic postures (Asanas) with relaxation in between.
                  </p>
                  <p>
                    The sequence is designed to move the energy through the chakras, keeping the spine flexible and the mind focused. Classes are suitable for all levels, as modifications are always provided.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                  <Image
                    src={IMG_YOGA_CLASS}
                    alt="Yoga Class"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Overlapping Green Box */}
            <div className="absolute top-[22%] md:top-[25%] left-1/2 z-20 w-[90%] md:w-[420px] bg-[#4F6F1F] text-white p-8 md:p-10 shadow-2xl rounded-sm transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <h4 className="font-bold text-2xl mb-4">
                Rooted in an authentic <span className="italic">Yoga Lineage</span>,
              </h4>
              <div className="border-l-[3px] border-white/60 pl-5">
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  The general philosophy of this system of teaching is promoting self awareness, gentleness, and balance between effort and relaxation.
                </p>
              </div>
            </div>

            {/* Block 2: Respect Limitations */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 relative z-10 mt-32 md:mt-40 lg:mt-48">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-6">
                  Respect Your Body Limitations
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    Yoga is not a competition. Listen to your body and respect its limits. Do not force or push yourself into any posture.
                  </p>
                  <p>
                    Pain is a signal to stop. If you have any injuries or medical conditions, please inform the teacher before the class begins so they can offer alternatives.
                  </p>
                  <p>
                    The goal is steady, mindful practice, not physical perfection. Relax and breathe.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                  <Image
                    src={IMG_SAVASANA}
                    alt="Savasana"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Block 3: Satsang */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-6">
                  Satsang
                </h3>
                <p className="italic text-gray-500 mb-4 font-serif">
                  Association with the wise
                </p>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    Satsang is the heart of the ashram experience. It means &quot;association with the truth&quot; or &quot;company of the wise.&quot;
                  </p>
                  <p>
                    Held twice daily, satsang consists of 30 minutes of silent meditation, 30 minutes of joyous mantra chanting (Kirtan), and a reading or lecture on yoga philosophy.
                  </p>
                  <p>
                    It is a time to come together as a community, elevate the mind, and recharge spiritually. Attendance is required for all guests.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                  <Image
                    src={IMG_SATSANG}
                    alt="Satsang Gathering"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Block 4: Meals */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-6">
                  Organic Vegetarian Meals
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    We serve two delicious, wholesome vegetarian meals daily at 10:00 am and 6:00 pm. The diet is based on Ayurvedic principles, designed to be easily digestible and highly nutritious.
                  </p>
                  <p>
                    Meals are prepared with love and care (Karma Yoga) using fresh, locally sourced, and often organic ingredients. The diet excludes meat, fish, eggs, garlic, and onions to keep the mind calm (Sattvic).
                  </p>
                  <p>
                    Herbal tea is available throughout the day. Please inform us in advance if you have severe food allergies.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                  <Image
                    src={IMG_MEALS}
                    alt="Vegetarian Meal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GUIDELINES & PAYMENT POLICY */}
      <section className="bg-[#F4F7F0] py-24 px-6 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-14 shadow-md rounded-sm">
            <h2 className="text-2xl font-serif text-[#0B3B24] font-bold mb-8 uppercase tracking-widest border-b border-gray-200 pb-4">
              Guidelines
            </h2>

            <ul className="space-y-4 mb-16">
              {guidelines.map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-[#4A4A4A] text-base md:text-lg"
                >
                  <Check className="w-5 h-5 text-[#4F6F1F] flex-shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-serif text-[#0B3B24] font-bold mb-4">
              Payment Policy
            </h3>
            <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              Full payment is required upon registration to secure your booking. Payments are non-refundable but may be transferred to another program within one year, provided cancellation is made at least 48 hours prior to arrival. We accept bank transfers, credit cards, and cash (VND/USD).
            </p>
          </div>
        </div>
      </section>

      {/* 5. MORE INFORMATION */}
      <section className="max-w-4xl mx-auto py-20 px-6 w-full">
        <div className="border-l-4 border-[#0B3B24] pl-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold uppercase tracking-wide">
            More Information
          </h2>
        </div>

        <div className="space-y-12 pl-6 md:pl-10 border-l border-gray-200">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#0B3B24]">Contact Us</h3>
            <p className="text-[#4A4A4A]">
              Have a question about registering our programs and retreats... please contact us or send a message to the bottom of this page or call <strong>(+84) 263 650 1100</strong>.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#E5F5C8] hover:bg-[#d4e8aa] text-[#0B3B24] font-bold text-base tracking-widest uppercase px-8 py-3 rounded-sm transition-colors shadow-sm mt-2"
            >
              Contact Us
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#0B3B24]">
              Frequently Asked Questions
            </h3>
            <p className="text-[#4A4A4A]">
              We have fully detailed answers to common Yoga retreat FAQ.
            </p>
            <Link
              href="/frequently-asked-questions"
              className="inline-block bg-[#E5F5C8] hover:bg-[#d4e8aa] text-[#0B3B24] font-bold text-base tracking-widest uppercase px-8 py-3 rounded-sm transition-colors shadow-sm mt-2"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
