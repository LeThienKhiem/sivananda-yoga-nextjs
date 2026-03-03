"use client";

import Link from "next/link";
import { useState } from "react";
import { User, Menu, X, ChevronDown } from "lucide-react";

const HEADER_BG = "bg-[#1e5c2b]";
const ACTIVE_LINK = "text-[#d4e08b]";

type MegaMenuColumn = { header: string; links: { label: string; href: string }[] };

const MEGA_MENUS: Record<string, MegaMenuColumn[]> = {
  "YOGA VACATION": [
    {
      header: "EXPLORE",
      links: [
        { label: "Yoga Vacation", href: "/yoga-vacation" },
        { label: "Sivananda Teaching", href: "/sivananda-teachings" },
        { label: "5 points of Yoga", href: "/programs" },
        { label: "4 paths of Yoga", href: "/programs" },
      ],
    },
    {
      header: "REGISTRATION",
      links: [
        { label: "Accommodation & Meal", href: "/accommodations" },
        { label: "Our Venue", href: "/yoga-vacation" },
        { label: "Transportation & Arrival", href: "/guest-information" },
        { label: "During Your Stay", href: "/guest-information" },
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
        { label: "Vedanta Silence Meditation", href: "/programs" },
        { label: "Other Courses for TTC", href: "/specialty-courses" },
      ],
    },
    {
      header: "HEALTH EDUCATOR TRAINING (SYHET)",
      links: [
        { label: "About SYHET Program", href: "/yoga-health-educator-training" },
        { label: "SYHET Practicuum", href: "/syhet-landing-page" },
        { label: "Courses", href: "/yoga-health-educator-training" },
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
        { label: "100 Foundation Ayurveda", href: "/programs" },
        { label: "Detoxification", href: "/programs" },
      ],
    },
  ],
  "ABOUT US": [
    {
      header: "OUR TEACHER",
      links: [
        { label: "GURU", href: "/about" },
        { label: "Our Teachers", href: "/about" },
      ],
    },
    {
      header: "OTHER VIETNAM CENTER",
      links: [
        { label: "Da Lat Health House", href: "/da-lat-ashram-health-house" },
        { label: "Ho Chi Minh City Yoga Center", href: "/ho-chi-minh-center" },
        { label: "Hanoi City Yoga Center", href: "/programs" },
        { label: "Da Lat City Yoga Center", href: "/sivananda-yoga-dalat-center" },
      ],
    },
    {
      header: "BLOG",
      links: [
        { label: "Ayurveda", href: "/blog" },
      ],
    },
  ],
};

const NAV_LINKS = [
  { href: "/yoga-vacation", label: "YOGA VACATION", active: true },
  { href: "/yoga-teacher-training-course", label: "TEACHER TRAINING", active: false },
  { href: "/programs", label: "AYURVEDA", active: false },
  { href: "/about", label: "ABOUT US", active: false },
  { href: "/contact", label: "CONTACT US", active: false },
  { href: "/frequently-asked-questions", label: "FAQ", active: false },
] as const;

function MegaMenuDropdown({ columns }: { columns: MegaMenuColumn[] }) {
  return (
    <div
      className="absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-0 opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto"
      aria-hidden
    >
      <div className="bg-white p-8 shadow-2xl rounded-xl border-t-4 border-[#1e5c2b]">
        <div className="flex gap-12">
          {columns.map((col) => (
            <div key={col.header} className="min-w-[200px]">
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
                {col.header}
              </p>
              <ul className="space-y-0">
                {col.links.map((link, index) => (
                  <li key={`${col.header}-${link.label}-${index}`}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-gray-600 transition-all duration-300 hover:text-[#1e5c2b] hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (menuName: string) =>
    setActiveMobileSubmenu((prev) => (prev === menuName ? null : menuName));

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full ${HEADER_BG} border-b border-[#1a5226]`}
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Brand + circular logo placeholder */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white"
              aria-hidden
            >
              <div className="h-6 w-6 rounded-full bg-[#1e5c2b] ring-2 ring-white flex items-center justify-center">
                <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-white" />
              </div>
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-bold uppercase leading-tight text-white">
                Sivananda Yoga Resort and Training Center
              </p>
              <p className="truncate text-sm font-normal uppercase text-white/95">
                Da Lat, Vietnam
              </p>
            </div>
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
                      className={`block py-2 text-xs font-medium uppercase tracking-wider transition-colors md:text-sm ${
                        active
                          ? `${ACTIVE_LINK} font-bold`
                          : "text-white hover:text-[#d4e08b]"
                      }`}
                    >
                      {label}
                    </Link>
                    {hasDropdown && (
                      <MegaMenuDropdown columns={columns} />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Language selector (UK flag + EN) + User icon */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              aria-label="Language: English"
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1e5c2b]"
            >
              <span className="text-base leading-none" aria-hidden>
                🇬🇧
              </span>
              <span className="text-sm font-medium uppercase tracking-wide">
                EN
              </span>
            </button>
            <button
              type="button"
              aria-label="User profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1e5c2b]"
            >
              <User className="h-4 w-4" aria-hidden />
            </button>

            {/* Hamburger (mobile only) - white icon */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
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
