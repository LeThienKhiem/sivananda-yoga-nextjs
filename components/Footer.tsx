import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import {
  CONTACT_ADDRESS_MOBILE_FOOTER,
  CONTACT_ADDRESS_MULTILINE,
  CONTACT_INFO,
  CONTACT_MAILTO_HREF,
  CONTACT_TEL_HREF,
} from "@/lib/contactInfo";

/** Spotify logo - three curved bars in a circle */
function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

const BANNER_URL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/banner_footer_02.jpg  ";
const FOOTER_LOGO_URL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/banner_footer-03.png";

const FOOTER_LINK =
  "text-white transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50";

/** Contact rows: same white/inherit as body text; underline + slight fade on hover */
const footerContactClass = `${FOOTER_LINK} text-inherit hover:opacity-90`;

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#022402]">
      {/* Mobile-only: solid green layout */}
      <div className="flex flex-col items-center gap-8 px-4 py-12 text-center text-white md:hidden bg-[#022402]">
        <div className="flex w-full justify-center">
          <img
            src={FOOTER_LOGO_URL}
            alt="Sivananda Yoga Footer Logo"
            className="mx-auto block h-28 w-auto max-w-48 object-contain"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-4 text-left">
          <a
            href={CONTACT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-row items-start gap-3 ${footerContactClass}`}
          >
            <MapPin className="mt-1 h-6 w-6 shrink-0" />
            <span className="text-left leading-relaxed">
              {CONTACT_ADDRESS_MOBILE_FOOTER}
            </span>
          </a>
          <a
            href={CONTACT_TEL_HREF}
            className={`flex flex-row items-center gap-3 ${footerContactClass}`}
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a href={CONTACT_MAILTO_HREF} className={`flex flex-row items-center gap-3 ${footerContactClass}`}>
            <Mail className="h-5 w-5 shrink-0" />
            <span>{CONTACT_INFO.email}</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-white">
          <a
            href="https://www.facebook.com/vietnamyogaresort"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-transform hover:scale-110 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <Facebook className="h-9 w-9 text-white" />
          </a>
          <a
            href="https://www.instagram.com/sivanandayoga_dalatashram/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:scale-110 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <Instagram className="h-9 w-9 text-white" />
          </a>
          <a
            href="https://www.youtube.com/@SivanandaYogaVietnam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="transition-transform hover:scale-110 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <Youtube className="h-9 w-9 text-white" />
          </a>
          <a
            href="https://open.spotify.com/show/36HOTjwBmIAK3kXt0jaYPC?si=62a0c9901f104891"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="transition-transform hover:scale-110 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <SpotifyIcon className="h-9 w-9 text-white" />
          </a>
        </div>

        <p className="px-4 mt-4 text-center text-base leading-relaxed">
          © Copyright 2025 Sivananda Yoga Resort and Training Center, Da Lat,
          Vietnam
        </p>
      </div>

      {/* Tablet + Desktop: scenic band (md: 75/25 split), green fill below */}
      <div className="relative z-0 mt-auto hidden w-full overflow-hidden md:min-h-[600px] md:block">
        <img
          src={BANNER_URL}
          className="pointer-events-none absolute left-0 top-0 z-0 h-[500px] w-full object-cover object-top md:h-[600px] lg:relative lg:left-auto lg:top-auto lg:z-0 lg:h-auto lg:w-full"
          alt="Footer Background"
        />
        {/* md: unified centered column + 75% offset; lg: unchanged overlay bottom alignment */}
        <div className="relative z-10 flex w-full flex-col items-center pb-12 pt-10 md:pt-[450px] lg:pointer-events-none lg:absolute lg:inset-0 lg:flex lg:flex-col lg:items-stretch lg:justify-end lg:pb-0 lg:pt-0">
          <div className="pointer-events-auto mx-auto flex w-full max-w-7xl flex-col items-center gap-y-6 px-4 pb-12 md:gap-y-8 md:px-8 md:pb-20 lg:items-stretch lg:px-16 lg:pb-20 lg:pt-32">
            {/* Asymmetric 12-Column Grid — md: single centered column; lg: two-column desktop */}
            <div className="grid w-full grid-cols-1 items-center gap-y-20 md:items-center lg:grid-cols-12 lg:items-start">
              {/* Column 1: Identity Block (Contact) */}
              <div className="flex w-full flex-col items-center text-center md:items-center md:text-center lg:col-span-5 lg:block lg:items-start lg:text-left">
                <h5 className="mb-6 text-[10px] uppercase tracking-[0.5em] text-orange-500">
                  CONNECT
                </h5>
                <div className="flex w-full flex-col items-center space-y-8 text-center text-lg leading-relaxed tracking-wide text-white md:items-center md:text-center lg:items-start lg:text-left">
                  <a
                    href={CONTACT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 transition-opacity hover:opacity-90 md:flex-col md:items-center md:text-center lg:flex-row lg:items-start lg:text-left"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500 lg:mt-0.5" />
                    <span className="whitespace-pre-line">
                      {CONTACT_ADDRESS_MULTILINE}
                    </span>
                  </a>
                  <a
                    href={CONTACT_TEL_HREF}
                    className="flex items-center gap-3 transition-opacity hover:opacity-90 md:flex-col md:items-center lg:flex-row"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-orange-500" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                  <a
                    href={CONTACT_MAILTO_HREF}
                    className="flex items-center gap-3 transition-opacity hover:opacity-90 md:flex-col md:items-center lg:flex-row"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-orange-500" />
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                </div>
              </div>

              {/* Column 2: Navigation Cluster */}
              <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-y-12 px-4 md:grid-cols-1 lg:col-span-7 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 lg:px-0">
                {/* Yoga Teaching */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <h4 className="mb-10 text-xs font-light uppercase tracking-[0.3em] text-orange-500 md:text-white lg:text-orange-500">
                    Yoga Teaching
                  </h4>
                  <nav className="flex flex-col space-y-4 md:items-center lg:items-start">
                    <Link href="/yoga-vacation" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Explore Yoga Vacation
                    </Link>
                    <Link href="/sivananda-teachings" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Classical Yoga Teaching
                    </Link>
                    <Link href="/programs" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Ancient Yoga Foundation
                    </Link>
                    <Link href="/programs" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      5 points 4 paths of Yoga
                    </Link>
                  </nav>
                </div>

                {/* Yoga Vacation */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <h4 className="mb-10 text-xs font-light uppercase tracking-[0.3em] text-orange-500 md:text-white lg:text-orange-500">
                    Yoga Vacation
                  </h4>
                  <nav className="flex flex-col space-y-4 md:items-center lg:items-start">
                    <Link href="/accommodations" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Accommodation
                    </Link>
                    <Link href="/guest-information" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Transportation & Arrival
                    </Link>
                    <Link href="/guest-information" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Planning Your Stay
                    </Link>
                    <Link href="/accommodations" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Dining & Boutique
                    </Link>
                  </nav>
                </div>

                {/* Information */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <h4 className="mb-10 text-xs font-light uppercase tracking-[0.3em] text-orange-500 md:text-white lg:text-orange-500">
                    Information
                  </h4>
                  <nav className="flex flex-col space-y-4 md:items-center lg:items-start">
                    <Link href="/frequently-asked-questions" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      FAQs
                    </Link>
                    <Link href="/misconduct-policy" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Misconduct Policy
                    </Link>
                    <Link href="/privacy-policy" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Privacy Policy
                    </Link>
                    <Link href="/donation" className="text-center text-sm text-gray-400 transition-all duration-500 hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:text-left">
                      Donation
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            {/* Bottom Bar: The Horizon */}
            <div className="flex flex-col items-center justify-center gap-6 border-t border-white/5 pt-12 md:flex-row lg:justify-end">
              <div className="flex gap-8 text-white">
                <a
                  href="https://www.facebook.com/vietnamyogaresort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform hover:scale-110 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Facebook"
                >
                  <Facebook className="h-[30px] w-[30px] text-white" />
                </a>
                <a
                  href="https://www.instagram.com/sivanandayoga_dalatashram/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform hover:scale-110 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Instagram"
                >
                  <Instagram className="h-[30px] w-[30px] text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@SivanandaYogaVietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform hover:scale-110 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="YouTube"
                >
                  <Youtube className="h-[30px] w-[30px] text-white" />
                </a>
                <a
                  href="https://open.spotify.com/show/36HOTjwBmIAK3kXt0jaYPC?si=62a0c9901f104891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform hover:scale-110 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Spotify"
                >
                  <SpotifyIcon className="h-[30px] w-[30px] text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sivananda Logo - majestic watermark at base */}
      <div className="relative z-10 mt-12 hidden w-full flex-col items-center justify-center bg-[#022402] px-8 pb-24 pt-10 md:mt-20 md:flex md:px-12 md:pb-28 md:pt-12 lg:mt-10 lg:px-16 lg:pb-20 lg:pt-8">
        <img
          src={FOOTER_LOGO_URL}
          alt="Sivananda Yoga Footer Logo"
          className="mx-auto h-auto w-full max-w-[1000px] opacity-[0.45] grayscale brightness-200 pointer-events-none"
        />
      </div>
    </footer>
  );
}
