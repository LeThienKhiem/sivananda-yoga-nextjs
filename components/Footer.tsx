import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Music,
  Twitter,
} from "lucide-react";

const BANNER_URL =
  "https://zjffxjmsumxcdmqslmhw.supabase.co/storage/v1/object/public/Icon/banner-footer-yoga-course.png";
const LOGO_URL =
  "https://zjffxjmsumxcdmqslmhw.supabase.co/storage/v1/object/public/Icon/True-World-Order-logo-transparent-300x278.png";

const FOOTER_LINK =
  "text-white transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50";

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Mobile-only: solid green layout – keep completely untouched */}
      <div className="flex flex-col items-center gap-8 px-4 py-12 text-center text-white md:hidden bg-[#6B894E]">
        <div className="flex items-center justify-center gap-4">
          <Image
            src={LOGO_URL}
            alt="True World Order logo"
            width={64}
            height={59}
            className="h-16 w-16 shrink-0 object-contain brightness-0 invert"
          />
          <h2 className="text-left font-serif text-xl font-bold leading-snug">
            Sivananda Yoga Resort and
            <br />
            Training Center
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex max-w-sm items-start justify-center gap-3 text-left">
            <MapPin className="mt-1 h-6 w-6 shrink-0" />
            <p>Hoa Hong Street Ward 4, Tuyen Lam Lake Da Lat, Vietnam</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone className="h-5 w-5" />
            <a href="tel:+842636501100">02636501100</a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Mail className="h-5 w-5" />
            <a href="mailto:vietnamyogaresort@sivananda.org">
              vietnamyogaresort@sivananda.org
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>

        <p className="px-4 mt-4 text-center text-sm leading-relaxed">
          © Copyright 2025 Sivananda Yoga Resort and Training Center, Da Lat,
          Vietnam
        </p>
      </div>

      {/* Desktop: natural full-size image, content overlay; no crop, no phantom line */}
      <div className="hidden md:block relative w-full mt-auto">
        <img
          src={BANNER_URL}
          className="w-full h-auto block m-0 p-0 align-bottom"
          alt="Footer Background"
        />
        <div className="absolute inset-0 w-full h-full flex flex-col justify-end z-10 pointer-events-none">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-4 lg:pb-8 pointer-events-auto">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:gap-x-8 lg:gap-y-8 md:grid-cols-4">
            {/* Column 1: Brand & Contact */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 lg:gap-3">
                <Image
                  src={LOGO_URL}
                  alt="True World Order logo"
                  width={64}
                  height={59}
                  className="w-12 h-12 shrink-0 object-contain brightness-0 invert lg:w-16 lg:h-16"
                />
                  <h3 className="whitespace-pre-line font-serif text-sm leading-tight text-white lg:text-xl xl:text-2xl">
                    Sivananda Yoga Resort{"\n"}and Training Center
                  </h3>
                </div>
                <div className="mt-3 space-y-2 lg:mt-6 lg:space-y-3">
                  <div className="flex gap-2 lg:gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white lg:h-5 lg:w-5" />
                    <span className="whitespace-pre-line text-xs leading-relaxed text-white lg:text-sm">
                      Hoa Hong Street{"\n"}Ward 4, Tuyen Lam Lake{"\n"}Da Lat, Vietnam
                    </span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-white lg:h-5 lg:w-5" />
                    <a href="tel:+842636501100" className={`${FOOTER_LINK} text-xs lg:text-sm`}>
                      02636501100
                    </a>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-white lg:h-5 lg:w-5" />
                    <a
                      href="mailto:vietnamyogaresort@sivananda.org"
                      className={`${FOOTER_LINK} text-xs lg:text-sm`}
                    >
                      vietnamyogaresort@sivananda.org
                    </a>
                  </div>
                </div>
            </div>

            {/* Column 2: YOGA TEACHING */}
            <div>
              <h4 className="mb-3 font-sans text-xs font-bold uppercase tracking-wide text-white lg:mb-6 lg:text-sm">
                YOGA TEACHING
              </h4>
              <nav className="flex flex-col space-y-2 lg:space-y-4 text-xs lg:text-sm">
                <Link
                  href="/yoga-vacation"
                  className={`${FOOTER_LINK} inline-block w-max rounded-sm border border-white/40 px-2 py-1 lg:px-3 lg:py-1.5`}
                >
                  Explore Yoga Vacation
                </Link>
                <Link href="/sivananda-teachings" className={FOOTER_LINK}>
                  Classical Yoga Teaching
                </Link>
                <Link href="/programs" className={FOOTER_LINK}>
                  Ancient Yoga Foundation
                </Link>
                <Link href="/programs" className={FOOTER_LINK}>
                  5 points 4 paths of Yoga
                </Link>
                <Link href="/programs" className={FOOTER_LINK}>
                  Karma Yoga Program
                </Link>
              </nav>
            </div>

            {/* Column 3: YOGA VACATION */}
            <div>
              <h4 className="mb-3 font-sans text-xs font-bold uppercase tracking-wide text-white lg:mb-6 lg:text-sm">
                YOGA VACATION
              </h4>
              <nav className="flex flex-col space-y-2 lg:space-y-4 text-xs lg:text-sm">
                <Link href="/guest-information" className={FOOTER_LINK}>
                  Registration & Arrival
                </Link>
                <Link href="/accommodations" className={FOOTER_LINK}>
                  Accommodation & Cost
                </Link>
                <Link href="/guest-information" className={FOOTER_LINK}>
                  Transportation & Arrival
                </Link>
                <Link href="/guest-information" className={FOOTER_LINK}>
                  Planning Your Stay
                </Link>
                <Link href="/accommodations" className={FOOTER_LINK}>
                  Dining & Boutique
                </Link>
              </nav>
            </div>

            {/* Column 4: Links & Socials */}
            <div>
              <nav className="mb-4 flex flex-col space-y-2 lg:mb-8 lg:space-y-4 text-xs lg:text-sm">
                <Link
                  href="/faqs"
                  className={`${FOOTER_LINK} font-semibold text-white`}
                >
                  FAQs
                </Link>
                <Link
                  href="/terms"
                  className={`${FOOTER_LINK} font-semibold text-white`}
                >
                  Terms & Policies
                </Link>
                <Link
                  href="/donation"
                  className={`${FOOTER_LINK} font-semibold text-white`}
                >
                  Donation
                </Link>
              </nav>
              <div className="flex gap-2 lg:gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 p-1.5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:p-2"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 lg:h-5 lg:w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 p-1.5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:p-2"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 p-1.5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:p-2"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4 lg:h-5 lg:w-5" />
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 p-1.5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:p-2"
                  aria-label="Spotify"
                >
                  <Music className="h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              </div>
            </div>
          </div>

            {/* Copyright bar */}
            <div className="mt-4 border-t border-white/10 pt-4 lg:mt-8 lg:pt-8">
              <p className="text-center text-xs text-white lg:text-sm">
                © Copyright 2025 Sivananda Yoga Resort and Training Center, Da Lat,
                Vietnam
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
