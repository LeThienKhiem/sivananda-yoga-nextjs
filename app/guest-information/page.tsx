"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Plus, Navigation } from "lucide-react";
import {
  CONTACT_INFO,
  CONTACT_MAILTO_HREF,
  CONTACT_MAP_EMBED_SRC,
  CONTACT_TEL_HREF,
} from "@/lib/contactInfo";

const HERO_IMG =
  "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2000";
const IMG_REMINDER =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-15.png";
const IMG_MINDFUL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-16.png";

const guestContactLinkClass =
  "text-[#4A4A4A] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7D4D]/40 rounded-sm";

export default function GuestInformationPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] md:min-h-[400px]">
        <Image
          src={HERO_IMG}
          alt="Guest Information Nature Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </section>

      {/* 2. DIRECTION SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-[#0B3B24] font-bold mb-12">
          Direction
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
              {CONTACT_INFO.venueTitle}
            </h3>

            <div className="space-y-4 text-[#4A4A4A]">
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-3 ${guestContactLinkClass}`}
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#ED7D4D]" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </a>
              <a
                href={CONTACT_TEL_HREF}
                className={`flex items-center gap-3 underline ${guestContactLinkClass}`}
              >
                <Phone className="h-5 w-5 shrink-0 text-[#ED7D4D]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <a
                href={CONTACT_MAILTO_HREF}
                className={`flex items-center gap-3 break-all underline ${guestContactLinkClass}`}
              >
                <Mail className="h-5 w-5 shrink-0 text-[#ED7D4D]" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>

            <div className="relative my-6 aspect-video w-full overflow-hidden rounded-2xl border border-gray-100 shadow-inner md:aspect-[21/9]">
              <iframe
                src={CONTACT_MAP_EMBED_SRC}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sivananda Yoga Resort and Training Center - Map"
              />
            </div>

            <div className="flex items-center gap-3 text-base text-[#4A4A4A]">
              <Clock className="h-5 w-5 shrink-0 text-[#ED7D4D]" />
              <p>{CONTACT_INFO.openingHoursDisplay}</p>
            </div>
          </div>

          {/* Right Column - Directions Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-start gap-4">
              <Plus className="w-6 h-6 text-[#0B3B24] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A] leading-relaxed">
                Excellent location. 40 mins drive from Lien Khuong Airport,
                Dalat. Please take a shuttle bus (to Dalat city) or a taxi
                (around 300.000 VND). If you take a shuttle bus, please tell the
                driver to drop you off at Datanla Waterfall and take a taxi to
                the ashram (around 100.000 VND).
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Navigation className="w-6 h-6 text-[#0B3B24] mt-1 flex-shrink-0" />
              <p className="text-[#4A4A4A] leading-relaxed">
                Public bus from Dalat to the Ashram is not available. Taxis are
                generally available from the center of Dalat to the Ashram,
                around 200.000 VND.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT TO BRING SECTION */}
      <section className="bg-[#F4F7F0] py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="border-l-4 border-[#0B3B24] pl-6 md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold uppercase tracking-wide">
              What to bring along
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-[#4A4A4A] mb-6 italic">
              Some important items for your stay:
            </p>
            <ul className="space-y-4 text-[#4A4A4A]">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full border border-[#0B3B24]" />
                Yoga mat (we have for rent $3 for a week)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full border border-[#0B3B24]" />
                Travel mug or thermos (for hot tea)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full border border-[#0B3B24]" />
                Soft comfortable and warm clothes
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full border border-[#0B3B24]" />
                Umbrella or water repellent coat
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full border border-[#0B3B24]" />
                Slip on sandals or slippers (indoor only)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full border border-[#0B3B24]" />
                Walking shoes for relaxed nature walks
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full border border-[#0B3B24]" />
                Mosquito repellent
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. GUIDELINES & REMINDERS */}
      <section className="max-w-7xl mx-auto py-24 px-6 space-y-24 md:space-y-32">
        {/* Helpful Reminder */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif text-[#0B3B24] font-bold">
              Helpful Reminder
            </h2>
            <h3 className="text-xl italic text-gray-500">
              Satsang, Study and Quiet Hours
            </h3>
            <p className="text-[#4A4A4A] leading-relaxed">
              It is important that we keep a sattvic atmosphere in the ashram.
              Attendance at all satsangs and classes is mandatory. Please respect
              the quiet hours between 10:00 pm and 5:30 am to allow rest and
              meditation. Music and loud talking are not permitted in the rooms
              or dorms.
            </p>
            <p className="text-[#4A4A4A] leading-relaxed">
              We also ask that you respect the dress code. Modest dress is
              required at all times. Shoulders and knees must be covered. No
              low-cut shirts, bare midriffs, or see-through clothing. This helps
              to maintain a pure and focused environment for all practitioners
              during their spiritual journey.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] md:aspect-square w-full md:w-4/5 mx-auto rounded-sm overflow-hidden shadow-lg">
              <Image
                src={IMG_REMINDER}
                alt="Helpful Reminder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Practices of Mindful Living */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] md:aspect-square w-full md:w-4/5 mx-auto rounded-sm overflow-hidden shadow-lg">
              <Image
                src={IMG_MINDFUL}
                alt="Mindful Living"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif text-[#0B3B24] font-bold">
              Practices of Mindful Living
            </h2>
            <h3 className="text-xl italic text-gray-500">Ashram etiquette</h3>
            <p className="text-[#4A4A4A] leading-relaxed">
              As a yoga ashram, we promote a pure and sattvic lifestyle.
              Therefore, meat, fish, eggs, alcohol, tobacco, and drugs are
              strictly prohibited. We kindly ask guests to refrain from bringing
              these items onto the premises. Even non-vegetarian food items like
              onions and garlic are not used in our kitchen.
            </p>
            <p className="text-[#4A4A4A] leading-relaxed">
              The Ashram is a place for spiritual growth and self-discovery. We
              encourage guests to engage in karma yoga (selfless service) for
              one hour each day, which is an integral part of ashram life. It
              fosters a sense of community and keeps the mind grounded and
              humble.
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
          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#0B3B24]">Contact Us</h3>
            <p className="text-[#4A4A4A]">
              Have a question about registering our programs and retreats...
              please contact us or send a message to the bottom of this page or
              call <strong>(+84) 263 650 1100</strong>.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#E5F5C8] hover:bg-[#d4e8aa] text-[#0B3B24] font-bold text-base tracking-widest uppercase px-8 py-3 rounded-sm transition-colors shadow-sm mt-2"
            >
              Contact Us
            </Link>
          </div>

          {/* FAQs */}
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
