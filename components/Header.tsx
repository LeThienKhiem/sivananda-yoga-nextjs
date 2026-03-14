"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { supabase } from "@/utils/supabase";

const LOGO_URL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/banner-logo-01.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dynamicPages, setDynamicPages] = useState<any[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const fetchPages = async () => {
      const { data } = await supabase
        .from("custom_pages")
        .select("title, slug, parent_page")
        .eq("is_published", true);
      if (data) setDynamicPages(data);
    };
    fetchPages();
  }, []);

  const getPages = (parent: string) =>
    dynamicPages.filter((p) => p.parent_page === parent);

  const yvPages = getPages("Yoga Vacation");
  const ttPages = getPages("Teacher Training");
  const ayPages = getPages("Ayurveda");
  const auPages = getPages("About Us");
  const cuPages = getPages("Contact Us");
  const faqPages = getPages("FAQ");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#0B3B24] shadow-lg" : "bg-[#0B3B24]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group shrink-0 mr-4"
          >
            <div className="p-1.5 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <img
                src={LOGO_URL}
                alt="Sivananda Yoga Logo"
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain filter-none"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 whitespace-nowrap">
            {/* 1. YOGA VACATION */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white/90 group-hover:text-[#ED7D4D] text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-colors py-8">
                Yoga Vacation{" "}
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
                <div
                  className={`bg-[#FDFCF8] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100 ${
                    yvPages.length > 0 ? "w-[800px]" : "w-[550px]"
                  } overflow-hidden text-left relative`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3B24] via-[#4F6F1F] to-[#ED7D4D]" />
                  <div
                    className={`p-8 grid ${
                      yvPages.length > 0 ? "grid-cols-3" : "grid-cols-2"
                    } gap-8`}
                  >
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                        Programs & Stay
                      </h4>
                      <ul className="space-y-2 text-sm font-medium">
                        <li>
                          <Link
                            href="/yoga-vacation"
                            className="group/link flex items-center justify-between p-2.5 -ml-2.5 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D] transition-colors">
                              Yoga Vacation Program
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/accommodations"
                            className="group/link flex items-center justify-between p-2.5 -ml-2.5 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D] transition-colors">
                              Accommodations & Meals
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-venues"
                            className="group/link flex items-center justify-between p-2.5 -ml-2.5 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D] transition-colors">
                              Our Venues
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                        Philosophy & Info
                      </h4>
                      <ul className="space-y-2 text-sm font-medium">
                        <li>
                          <Link
                            href="/4-paths-of-yoga"
                            className="group/link flex items-center justify-between p-2.5 -ml-2.5 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D] transition-colors">
                              4 Paths of Yoga
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/5-points-of-yoga"
                            className="group/link flex items-center justify-between p-2.5 -ml-2.5 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D] transition-colors">
                              5 Points of Yoga
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/during-your-stay"
                            className="group/link flex items-center justify-between p-2.5 -ml-2.5 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D] transition-colors">
                              During Your Stay
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/guest-information"
                            className="group/link flex items-center justify-between p-2.5 -ml-2.5 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D] transition-colors">
                              Guest Information
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {yvPages.length > 0 && (
                      <div>
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                          <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                          Featured Pages
                        </h4>
                        <ul className="space-y-2 text-sm font-medium">
                          {yvPages.map((p) => (
                            <li key={p.slug}>
                              <Link
                                href={`/p/${p.slug}`}
                                className="group/link flex items-center justify-between p-2.5 -ml-2.5 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                              >
                                <span className="group-hover/link:text-[#ED7D4D] transition-colors">
                                  {p.title}
                                </span>
                                <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. TEACHER TRAINING */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white/90 group-hover:text-[#ED7D4D] text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-colors py-8">
                Teacher Training{" "}
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
                <div
                  className={`bg-[#FDFCF8] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100 ${
                    ttPages.length > 0 ? "w-[950px]" : "w-[700px]"
                  } overflow-hidden whitespace-normal relative`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3B24] via-[#4F6F1F] to-[#ED7D4D]" />
                  <div
                    className={`p-8 grid ${
                      ttPages.length > 0 ? "grid-cols-3" : "grid-cols-2"
                    } gap-10`}
                  >
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                        Certification
                      </h4>
                      <ul className="space-y-1">
                        <li>
                          <Link
                            href="/yoga-teacher-training-course"
                            className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          >
                            <span className="text-[#0B3B24] text-sm font-medium group-hover/link:text-[#ED7D4D]">
                              TTC Program (200 hrs)
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/advanced-yoga-teacher-training-course"
                            className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          >
                            <span className="text-[#0B3B24] text-sm font-medium group-hover/link:text-[#ED7D4D]">
                              Advanced TTC (300 hrs)
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/sadhana-intensive"
                            className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          >
                            <span className="text-[#0B3B24] text-sm font-medium group-hover/link:text-[#ED7D4D]">
                              Sadhana Intensive
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/vedanta-silence-meditation"
                            className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          >
                            <span className="text-[#0B3B24] text-sm font-medium group-hover/link:text-[#ED7D4D]">
                              Vedanta Silence
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/specialty-courses"
                            className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          >
                            <span className="text-[#0B3B24] text-sm font-medium group-hover/link:text-[#ED7D4D]">
                              Specialty Courses
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                        SYHET
                      </h4>
                      <ul className="space-y-1">
                        <li>
                          <Link
                            href="/sivananda-yoga-health-educator-training"
                            className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          >
                            <span className="text-[#0B3B24] text-sm font-medium group-hover/link:text-[#ED7D4D]">
                              About SYHET Program
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/syhet-practicuum"
                            className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          >
                            <span className="text-[#0B3B24] text-sm font-medium group-hover/link:text-[#ED7D4D]">
                              SYHET Practicuum
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/syhet-courses"
                            className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          >
                            <span className="text-[#0B3B24] text-sm font-medium group-hover/link:text-[#ED7D4D]">
                              Courses
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {ttPages.length > 0 && (
                      <div>
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                          <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                          Additional Training
                        </h4>
                        <ul className="space-y-1">
                          {ttPages.map((p) => (
                            <li key={p.slug}>
                              <Link
                                href={`/p/${p.slug}`}
                                className="group/link flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                              >
                                <span className="text-[#0B3B24] text-sm font-medium group-hover/link:text-[#ED7D4D]">
                                  {p.title}
                                </span>
                                <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. AYURVEDA */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white/90 group-hover:text-[#ED7D4D] text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-colors py-8">
                Ayurveda{" "}
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
                <div className="bg-[#FDFCF8] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 w-[300px] p-4 flex flex-col gap-1 whitespace-normal relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3B24] via-[#4F6F1F] to-[#ED7D4D]" />
                  <Link
                    href="/100-foundation-ayurveda"
                    className="p-3 rounded-md hover:bg-white hover:shadow-sm text-[#0B3B24] text-sm font-medium hover:text-[#ED7D4D] transition-all flex items-center justify-between group/link"
                  >
                    100 Foundation Ayurveda{" "}
                    <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </Link>
                  <Link
                    href="/detoxification"
                    className="p-3 rounded-md hover:bg-white hover:shadow-sm text-[#0B3B24] text-sm font-medium hover:text-[#ED7D4D] transition-all flex items-center justify-between group/link"
                  >
                    Detoxification Program{" "}
                    <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </Link>
                  {ayPages.length > 0 && (
                    <>
                      <div className="w-full h-px bg-gray-200 my-2" />
                      {ayPages.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/p/${p.slug}`}
                          className="p-3 rounded-md hover:bg-white hover:shadow-sm text-[#0B3B24] text-sm font-medium hover:text-[#ED7D4D] transition-all flex items-center justify-between group/link"
                        >
                          {p.title}{" "}
                          <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* 4. ABOUT US */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white/90 group-hover:text-[#ED7D4D] text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-colors py-8">
                About Us{" "}
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 pt-2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
                <div
                  className={`bg-[#FDFCF8] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 ${
                    auPages.length > 0 ? "w-[1100px]" : "w-[850px]"
                  } overflow-hidden text-left relative`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3B24] via-[#4F6F1F] to-[#ED7D4D]" />
                  <div
                    className={`p-10 grid ${
                      auPages.length > 0 ? "grid-cols-4" : "grid-cols-3"
                    } gap-10`}
                  >
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                        Our Heritage
                      </h4>
                      <ul className="space-y-1 text-sm font-medium">
                        <li>
                          <Link
                            href="/about"
                            className="group/link flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D]">
                              Our Lineage
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-teachers"
                            className="group/link flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D]">
                              Our Teachers
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Mission-Vision"
                            className="group/link flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D]">
                              Mission & Vision
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 transition-all" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                        Locations
                      </h4>
                      <ul className="space-y-1 text-sm font-medium">
                        <li>
                          <Link
                            href="/da-lat-ashram-health-house"
                            className="group/link flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D]">
                              Dalat Ashram
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/ho-chi-minh-center"
                            className="group/link flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D]">
                              HCMC Center
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/hanoi-center"
                            className="group/link flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D]">
                              Hanoi Center
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 transition-all" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/sivananda-yoga-dalat-center"
                            className="group/link flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D]">
                              Dalat City Center
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 transition-all" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                        Resources
                      </h4>
                      <ul className="space-y-1 text-sm font-medium">
                        <li>
                          <Link
                            href="/blog"
                            className="group/link flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                          >
                            <span className="group-hover/link:text-[#ED7D4D]">
                              Blog
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 transition-all" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {auPages.length > 0 && (
                      <div>
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                          <span className="w-4 h-[2px] bg-[#ED7D4D]" />
                          More Information
                        </h4>
                        <ul className="space-y-1 text-sm font-medium">
                          {auPages.map((p) => (
                            <li key={p.slug}>
                              <Link
                                href={`/p/${p.slug}`}
                                className="group/link flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white hover:shadow-sm text-[#0B3B24] transition-all"
                              >
                                <span className="group-hover/link:text-[#ED7D4D]">
                                  {p.title}
                                </span>
                                <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 transition-all" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. CONTACT US */}
            <div className="relative group">
              {cuPages.length > 0 ? (
                <>
                  <button className="flex items-center gap-1 text-white/90 group-hover:text-[#ED7D4D] text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-colors py-8">
                    Contact Us{" "}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full right-0 pt-2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
                    <div className="bg-[#FDFCF8] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 w-[260px] p-3 flex flex-col gap-1 whitespace-normal relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3B24] via-[#4F6F1F] to-[#ED7D4D]" />
                      <Link
                        href="/contact"
                        className="p-3 rounded-md hover:bg-white hover:shadow-sm text-[#0B3B24] text-sm font-medium hover:text-[#ED7D4D] transition-all flex items-center justify-between group/link"
                      >
                        Contact Form{" "}
                        <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </Link>
                      <div className="w-full h-px bg-gray-200 my-2" />
                      {cuPages.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/p/${p.slug}`}
                          className="p-3 rounded-md hover:bg-white hover:shadow-sm text-[#0B3B24] text-sm font-medium hover:text-[#ED7D4D] transition-all flex items-center justify-between group/link"
                        >
                          {p.title}{" "}
                          <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-[#ED7D4D] text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-colors py-8 block"
                >
                  Contact Us
                </Link>
              )}
            </div>

            {/* 6. FAQ */}
            <div className="relative group">
              {faqPages.length > 0 ? (
                <>
                  <button className="flex items-center gap-1 text-white/90 group-hover:text-[#ED7D4D] text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-colors py-8">
                    FAQ{" "}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full right-0 pt-2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
                    <div className="bg-[#FDFCF8] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 w-[260px] p-3 flex flex-col gap-1 whitespace-normal relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3B24] via-[#4F6F1F] to-[#ED7D4D]" />
                      <Link
                        href="/frequently-asked-questions"
                        className="p-3 rounded-md hover:bg-white hover:shadow-sm text-[#0B3B24] text-sm font-medium hover:text-[#ED7D4D] transition-all flex items-center justify-between group/link"
                      >
                        All FAQs{" "}
                        <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </Link>
                      <div className="w-full h-px bg-gray-200 my-2" />
                      {faqPages.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/p/${p.slug}`}
                          className="p-3 rounded-md hover:bg-white hover:shadow-sm text-[#0B3B24] text-sm font-medium hover:text-[#ED7D4D] transition-all flex items-center justify-between group/link"
                        >
                          {p.title}{" "}
                          <ArrowRight className="w-4 h-4 text-[#ED7D4D] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href="/frequently-asked-questions"
                  className="text-white/90 hover:text-[#ED7D4D] text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-colors py-8 block"
                >
                  FAQ
                </Link>
              )}
            </div>
          </nav>

          {/* Right: Language Toggle */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
            <button className="flex items-center gap-2 text-white/90 hover:text-[#E5F5C8] transition-colors font-bold text-[10px] xl:text-xs tracking-widest uppercase">
              <span className="text-sm">🇬🇧</span> EN
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[80px] bg-[#0B3B24] overflow-y-auto transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 text-white">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-4">
            <Link
              href="/yoga-vacation"
              className="text-base font-medium uppercase tracking-widest text-[#ED7D4D]"
            >
              Yoga Vacation
            </Link>
            {yvPages.map((p) => (
              <Link
                key={p.slug}
                href={`/p/${p.slug}`}
                className="pl-4 text-white/80"
              >
                {p.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-b border-white/10 pb-4">
            <span className="text-base font-medium text-[#ED7D4D] uppercase tracking-widest">
              Teacher Training
            </span>
            <Link href="/yoga-teacher-training-course" className="pl-4 text-white/80">
              TTC Program (200 hrs)
            </Link>
            <Link href="/advanced-yoga-teacher-training-course" className="pl-4 text-white/80">
              Advanced TTC (300 hrs)
            </Link>
            <Link href="/sadhana-intensive" className="pl-4 text-white/80">
              Sadhana Intensive
            </Link>
            <Link href="/vedanta-silence-meditation" className="pl-4 text-white/80">
              Vedanta Silence Meditation
            </Link>
            <Link href="/syhet-practicuum" className="pl-4 text-white/80">
              SYHET Program
            </Link>
            {ttPages.map((p) => (
              <Link key={p.slug} href={`/p/${p.slug}`} className="pl-4 text-white/80">
                {p.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-b border-white/10 pb-4">
            <span className="text-base font-medium text-[#ED7D4D] uppercase tracking-widest">
              Ayurveda
            </span>
            <Link href="/100-foundation-ayurveda" className="pl-4 text-white/80">
              100 Foundation Ayurveda
            </Link>
            <Link href="/detoxification" className="pl-4 text-white/80">
              Detoxification Program
            </Link>
            {ayPages.map((p) => (
              <Link key={p.slug} href={`/p/${p.slug}`} className="pl-4 text-white/80">
                {p.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-b border-white/10 pb-4">
            <span className="text-base font-medium text-[#ED7D4D] uppercase tracking-widest">
              About Us
            </span>
            <Link href="/about" className="pl-4 text-white/80">
              Our Lineage
            </Link>
            <Link href="/our-teachers" className="pl-4 text-white/80">
              Our Teachers
            </Link>
            <Link href="/da-lat-ashram-health-house" className="pl-4 text-white/80">
              Locations
            </Link>
            {auPages.map((p) => (
              <Link key={p.slug} href={`/p/${p.slug}`} className="pl-4 text-white/80">
                {p.title}
              </Link>
            ))}
          </div>

          <Link
            href="/blog"
            className="text-base font-medium border-b border-white/10 pb-4 uppercase tracking-widest"
          >
            Blog
          </Link>

          <div className="flex flex-col gap-4 border-b border-white/10 pb-4">
            <Link
              href="/contact"
              className="text-base font-medium uppercase tracking-widest text-[#ED7D4D]"
            >
              Contact Us
            </Link>
            {cuPages.map((p) => (
              <Link key={p.slug} href={`/p/${p.slug}`} className="pl-4 text-white/80">
                {p.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-b border-white/10 pb-4">
            <Link
              href="/frequently-asked-questions"
              className="text-base font-medium uppercase tracking-widest text-[#ED7D4D]"
            >
              FAQ
            </Link>
            {faqPages.map((p) => (
              <Link key={p.slug} href={`/p/${p.slug}`} className="pl-4 text-white/80">
                {p.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-4">
            <button className="flex items-center gap-2 text-white/90 font-bold tracking-widest">
              <span className="text-xl">🇬🇧</span> EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
