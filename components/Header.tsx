"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const HEADER_BG = "bg-[#0B3B24]";
const ACTIVE_LINK = "text-[#E5F5C8]";

type MegaMenuColumn = { header: string; links: { label: string; href: string }[] };

const MEGA_MENUS: Record<string, MegaMenuColumn[]> = {
  "YOGA VACATION": [
    {
      header: "EXPLORE",
      links: [
        { label: "Yoga Vacation", href: "/yoga-vacation" },
        { label: "Sivananda Teaching", href: "/sivananda-teachings" },
        { label: "5 points of Yoga", href: "/5-points-of-yoga" },
        { label: "4 paths of Yoga", href: "/4-paths-of-yoga" },
      ],
    },
    {
      header: "REGISTRATION",
      links: [
        { label: "Accommodation & Meal", href: "/accommodations" },
        { label: "Our Venue", href: "/our-venues" },
        { label: "Transportation & Arrival", href: "/guest-information" },
        { label: "During Your Stay", href: "/during-your-stay" },
      ],
    },
  ],
  "TEACHER TRAINING": [
    {
      header: "TEACHER TRAINING COURSE (TTC)",
      links: [
        { label: "TTC Program - 200 hours", href: "/yoga-teacher-training-course" },
        { label: "Advanced TTC Program - 300 hours", href: "/advanced-yoga-teacher-training-course" },
        { label: "Sadhana Intensive", href: "/sadhana-intensive" },
        { label: "Vedanta Silence Meditation", href: "/vedanta-silence-meditation" },
        { label: "Other Courses for TTC", href: "/specialty-courses" },
      ],
    },
    {
      header: "HEALTH EDUCATOR TRAINING (SYHET)",
      links: [
        { label: "About SYHET Program", href: "/sivananda-yoga-health-educator-training" },
        { label: "SYHET Practicuum", href: "/syhet-practicuum" },
        { label: "Courses", href: "/syhet-courses" },
      ],
    },
  ],
  AYURVEDA: [
    {
      header: "ABOUT AYURVEDA",
      links: [
        { label: "Traditional Ayurveda Practices", href: "/programs" },
      ],
    },
    {
      header: "AYURVEDA COURSE",
      links: [
        { label: "100 Foundation Ayurveda", href: "/100-foundation-ayurveda" },
        { label: "Detoxification", href: "/detoxification" },
      ],
    },
  ],
  "ABOUT US": [
    {
      header: "OUR TEACHER",
      links: [
        { label: "Our Teachers", href: "/our-teachers" },
        { label: "Mission & Vision", href: "/Mission-Vision" },
        { label: "Sivananda Lineage", href: "/Sivananda-Lineage" },
      ],
    },
    {
      header: "OTHER VIETNAM CENTER",
      links: [
        { label: "Da Lat Health House", href: "/da-lat-ashram-health-house" },
        { label: "Ho Chi Minh City Yoga Center", href: "/ho-chi-minh-center" },
        { label: "Hanoi City Yoga Center", href: "/hanoi-center" },
        { label: "Da Lat City Yoga Center", href: "/sivananda-yoga-dalat-center" },
      ],
    },
    {
      header: "BLOG",
      links: [
        { label: "Blogs", href: "/blog" },
      ],
    },
  ],
  "CONTACT US": [
    {
      header: "CONTACT US",
      links: [
        { label: "Contact Da Lat Ashram", href: "/contact" },
        { label: "International Community", href: "/community" },
      ],
    },
  ],
};

const NAV_LINKS = [
  { href: "/yoga-vacation", label: "YOGA VACATION", active: false },
  { href: "/yoga-teacher-training-course", label: "TEACHER TRAINING", active: false },
  { href: "/programs", label: "AYURVEDA", active: false },
  { href: "/about", label: "ABOUT US", active: false },
  { href: "/contact", label: "CONTACT US", active: false },
  { href: "/frequently-asked-questions", label: "FAQ", active: false },
] as const;

function MegaMenuDropdown({ columns }: { columns: MegaMenuColumn[] }) {
  const widthClass =
    columns.length >= 3
      ? "w-[900px]"
      : columns.length === 2
        ? "w-[700px]"
        : "w-[320px]";
  const gridClass =
    columns.length >= 3
      ? "grid-cols-3"
      : columns.length === 2
        ? "grid-cols-2"
        : "grid-cols-1";
  return (
    <div
      className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out"
      aria-hidden
    >
      <div
        className={`${widthClass} overflow-hidden rounded-2xl border border-gray-100 bg-[#FDFCF8] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative`}
      >
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#0B3B24] via-[#4F6F1F] to-[#ED7D4D]" />
        <div className={`grid gap-8 p-8 ${gridClass}`}>
          {columns.map((col) => (
            <div key={col.header}>
              <h4 className="mb-5 border-b border-gray-200 pb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                {col.header}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, index) => (
                  <li key={`${col.header}-${link.label}-${index}`}>
                    <Link
                      href={link.href}
                      className="group/link flex items-center justify-between rounded-lg p-3 transition-all duration-300 hover:bg-white hover:shadow-sm"
                    >
                      <span className="whitespace-nowrap font-medium text-[#0B3B24] transition-colors group-hover/link:text-[#ED7D4D]">
                        {link.label}
                      </span>
                      <ArrowRight className="h-4 w-4 -translate-x-2 text-[#ED7D4D] opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 bg-[#F4F7F0] p-4 text-center">
          <p className="text-sm italic text-[#4A4A4A]">
            &quot;Health is wealth, peace of mind is happiness, Yoga shows the way.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  }, [pathname]);

  const toggleMobileSubmenu = (menuName: string) =>
    setActiveMobileSubmenu((prev) => (prev === menuName ? null : menuName));

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${HEADER_BG} border-b border-white/10 ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="flex h-20 md:h-24 flex-nowrap items-center justify-between gap-4">
          {/* Left: Image Logo Only */}
          <Link
            href="/"
            className="group flex shrink-0 items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/aae6b3b8-5465-4374-b8d4-7cba4c681418.png"
              alt="Sivananda Yoga Logo"
              className="h-12 w-auto object-contain md:h-14 lg:h-16"
            />
          </Link>

          {/* Center: Navigation (desktop) with mega menu dropdowns */}
          <nav
            aria-label="Main"
            className="hidden md:flex md:items-center md:gap-1 lg:gap-2"
          >
            <ul className="flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map(({ href, label, active }) => {
                const columns = MEGA_MENUS[label];
                const hasDropdown = Boolean(columns?.length);

                return (
                  <li
                    key={href}
                    className={`relative ${hasDropdown ? "group" : ""}`}
                  >
                    <Link
                      href={href}
                      className={`flex items-center gap-1.5 py-2 text-xs font-medium uppercase tracking-wider transition-colors md:text-sm ${
                        active
                          ? `${ACTIVE_LINK} font-bold`
                          : "text-white/90 hover:text-[#ED7D4D]"
                      }`}
                    >
                      {label}
                      {hasDropdown && (
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </Link>
                    {hasDropdown && (
                      <MegaMenuDropdown columns={columns} />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Language selector + Hamburger (mobile) */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              aria-label="Language: English"
              className="hidden items-center gap-1.5 rounded-md px-2 py-1.5 text-white/90 transition-colors hover:text-[#E5F5C8] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0B3B24] lg:flex"
            >
              <span className="text-base leading-none" aria-hidden>
                🇬🇧
              </span>
              <span className="text-sm font-medium uppercase tracking-wide">
                EN
              </span>
            </button>

            {/* Hamburger (mobile only) */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:text-[#E5F5C8] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav panel - expandable submenus */}
      {mobileMenuOpen && (
        <div
          className={`border-t border-[#1a5226] ${HEADER_BG} px-4 py-4 md:hidden`}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-0.5">
            <ul className="flex flex-col gap-0.5">
              {NAV_LINKS.map(({ href, label, active }) => {
                const columns = MEGA_MENUS[label];
                const hasDropdown = Boolean(columns?.length);

                if (hasDropdown) {
                  const isOpen = activeMobileSubmenu === label;
                  return (
                    <li key={href}>
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(label)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
                          active
                            ? `${ACTIVE_LINK} font-bold bg-white/10`
                            : "text-white hover:bg-white/10"
                        }`}
                        aria-expanded={isOpen}
                        aria-controls={`mobile-submenu-${label.replace(/\s+/g, "-")}`}
                      >
                        {label}
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        />
                      </button>
                      {isOpen && (
                        <div
                          id={`mobile-submenu-${label.replace(/\s+/g, "-")}`}
                          className="flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-white/30"
                        >
                          {columns.map((col) =>
                            col.links.map((link, index) => (
                              <Link
                                key={`${col.header}-${link.label}-${index}`}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="block rounded-lg px-3 py-3 text-sm text-white/95 transition-colors hover:bg-white/10 hover:text-white"
                              >
                                {link.label}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMobileMenu}
                      className={`block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
                        active
                          ? `${ACTIVE_LINK} font-bold bg-white/10`
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
