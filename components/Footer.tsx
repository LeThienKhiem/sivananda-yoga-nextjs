import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Music,
} from "lucide-react";

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

/** Google Maps short link for Sivananda Yoga Resort Vietnam */
const MAPS_URL = "https://maps.app.goo.gl/35p4WpG6yA4Kz9h88";
const TEL_HREF = "tel:02636501100";
const MAILTO_HREF = "mailto:vietnamyogaresort@sivananda.org";

/** Contact rows: same white/inherit as body text; underline + slight fade on hover */
const footerContactClass = `${FOOTER_LINK} text-inherit hover:opacity-90`;

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#072212]">
      {/* Mobile-only: solid green layout */}
      <div className="flex flex-col items-center gap-8 px-4 py-12 text-center text-white md:hidden bg-[#6B894E]">
        <div className="flex w-full justify-center">
          <img
            src={FOOTER_LOGO_URL}
            alt="Sivananda Yoga Footer Logo"
            className="mx-auto block h-28 w-auto max-w-48 object-contain"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-4 text-left">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-row items-start gap-3 ${footerContactClass}`}
          >
            <MapPin className="mt-1 h-6 w-6 shrink-0" />
            <span className="text-left leading-relaxed">
              Hoa Hong Street Ward 4, Tuyen Lam Lake Da Lat, Vietnam
            </span>
          </a>
          <a
            href={TEL_HREF}
            className={`flex flex-row items-center gap-3 ${footerContactClass}`}
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span>02636501100</span>
          </a>
          <a href={MAILTO_HREF} className={`flex flex-row items-center gap-3 ${footerContactClass}`}>
            <Mail className="h-5 w-5 shrink-0" />
            <span>vietnamyogaresort@sivananda.org</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.facebook.com/vietnamyogaresort"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/sivanandayoga_dalatashram/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.youtube.com/@SivanandaYogaVietnam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="h-6 w-6" />
          </a>
          <a
            href="https://open.spotify.com/show/36HOTjwBmIAK3kXt0jaYPC?si=62a0c9901f104891"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
          >
            <SpotifyIcon className="h-6 w-6" />
          </a>
        </div>

        <p className="px-4 mt-4 text-center text-base leading-relaxed">
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
          <div className="w-full max-w-7xl mx-auto pt-32 pb-20 px-8 md:px-16 pointer-events-auto">
            {/* Asymmetric 12-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 items-start">
              {/* Column 1: Identity Block (Contact) */}
              <div className="lg:col-span-5">
                <h5 className="text-[10px] tracking-[0.5em] text-orange-500 mb-6 uppercase">
                  CONNECT
                </h5>
                <div className="flex flex-col space-y-8 text-white text-lg leading-relaxed tracking-wide">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:opacity-90 transition-opacity"
                  >
                    <MapPin className="mt-0.5 w-4 h-4 shrink-0 text-orange-500" />
                    <span className="whitespace-pre-line">
                      Hoa Hong Street{"\n"}Ward 4, Tuyen Lam Lake{"\n"}Da Lat, Vietnam
                    </span>
                  </a>
                  <a
                    href={TEL_HREF}
                    className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-4 h-4 shrink-0 text-orange-500" />
                    <span>02636501100</span>
                  </a>
                  <a
                    href={MAILTO_HREF}
                    className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-orange-500" />
                    <span>vietnamyogaresort@sivananda.org</span>
                  </a>
                </div>
              </div>

              {/* Column 2: Navigation Cluster */}
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Yoga Teaching */}
                <div className="border-t border-white/20 pt-4">
                  <h4 className="text-orange-500 text-xs font-light tracking-[0.3em] uppercase mb-10">
                    Yoga Teaching
                  </h4>
                  <nav className="flex flex-col space-y-4">
                    <Link href="/yoga-vacation" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Explore Yoga Vacation
                    </Link>
                    <Link href="/sivananda-teachings" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Classical Yoga Teaching
                    </Link>
                    <Link href="/programs" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Ancient Yoga Foundation
                    </Link>
                    <Link href="/programs" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      5 points 4 paths of Yoga
                    </Link>
                  </nav>
                </div>

                {/* Yoga Vacation */}
                <div className="border-t border-white/20 pt-4">
                  <h4 className="text-orange-500 text-xs font-light tracking-[0.3em] uppercase mb-10">
                    Yoga Vacation
                  </h4>
                  <nav className="flex flex-col space-y-4">
                    <Link href="/accommodations" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Accommodation
                    </Link>
                    <Link href="/guest-information" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Transportation & Arrival
                    </Link>
                    <Link href="/guest-information" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Planning Your Stay
                    </Link>
                    <Link href="/accommodations" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Dining & Boutique
                    </Link>
                  </nav>
                </div>

                {/* Information */}
                <div className="border-t border-white/20 pt-4">
                  <h4 className="text-orange-500 text-xs font-light tracking-[0.3em] uppercase mb-10">
                    Information
                  </h4>
                  <nav className="flex flex-col space-y-4">
                    <Link href="/frequently-asked-questions" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      FAQs
                    </Link>
                    <Link href="/misconduct-policy" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Misconduct Policy
                    </Link>
                    <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Privacy Policy
                    </Link>
                    <Link href="/donation" className="text-gray-400 hover:text-white transition-all duration-500 text-sm hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                      Donation
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            {/* Bottom Bar: The Horizon */}
            <div className="border-t border-white/5 pt-12 mt-10 flex flex-col md:flex-row justify-end items-center gap-6">
              <div className="flex gap-8 text-gray-500">
                <a
                  href="https://www.facebook.com/vietnamyogaresort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-all text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/sivanandayoga_dalatashram/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-all text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@SivanandaYogaVietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-all text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://open.spotify.com/show/36HOTjwBmIAK3kXt0jaYPC?si=62a0c9901f104891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-all text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Spotify"
                >
                  <SpotifyIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sivananda Logo - majestic watermark at base */}
      <div className="hidden md:flex w-full justify-center mt-0 relative z-10 bg-[#072212] pb-20">
        <img
          src={FOOTER_LOGO_URL}
          alt="Sivananda Yoga Footer Logo"
          className="w-full max-w-[1000px] h-auto opacity-[0.45] grayscale brightness-200 pointer-events-none"
        />
      </div>
    </footer>
  );
}
