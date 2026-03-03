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
} from "lucide-react";

const BANNER_URL =
  "https://zjffxjmsumxcdmqslmhw.supabase.co/storage/v1/object/public/Icon/banner-yoga-footer.png";
const LOGO_URL =
  "https://zjffxjmsumxcdmqslmhw.supabase.co/storage/v1/object/public/Icon/True-World-Order-logo-transparent-300x278.png";

const FOOTER_LINK =
  "text-white transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50";

export default function Footer() {
  return (
    <footer
      className="relative -mt-2 w-full overflow-hidden bg-transparent leading-[0]"
      style={{ padding: 0 }}
    >
      <img
        src={BANNER_URL}
        alt="Yoga Landscape"
        className="block h-auto w-full m-0 p-0"
      />

      {/* Bottom-aligned overlay – content pushed to very bottom */}
      <div className="absolute inset-0 z-10 flex w-full flex-col justify-end px-6 pb-8 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-4">
            {/* Column 1: Brand & Contact */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <Image
                  src={LOGO_URL}
                  alt="True World Order logo"
                  width={56}
                  height={52}
                  className="h-14 w-14 shrink-0 object-contain brightness-0 invert"
                />
                <h3 className="whitespace-pre-line font-serif text-xl leading-tight text-white md:text-2xl">
                  Sivananda Yoga Resort{"\n"}and Training Center
                </h3>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span className="whitespace-pre-line text-sm leading-relaxed text-white">
                    Hoa Hong Street{"\n"}Ward 4, Tuyen Lam Lake{"\n"}Da Lat, Vietnam
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-white" />
                  <a href="tel:+842636501100" className={FOOTER_LINK}>
                    02636501100
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-white" />
                  <a
                    href="mailto:vietnamyogaresort@sivananda.org"
                    className={FOOTER_LINK}
                  >
                    vietnamyogaresort@sivananda.org
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: YOGA TEACHING */}
            <div>
              <h4 className="mb-6 font-sans font-bold uppercase tracking-wide text-white">
                YOGA TEACHING
              </h4>
              <nav className="flex flex-col space-y-4 text-sm md:text-base">
                <Link
                  href="/yoga-vacation"
                  className={`${FOOTER_LINK} inline-block w-max rounded-sm border border-white/40 px-3 py-1.5`}
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
              <h4 className="mb-6 font-sans font-bold uppercase tracking-wide text-white">
                YOGA VACATION
              </h4>
              <nav className="flex flex-col space-y-4 text-sm md:text-base">
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
              <nav className="mb-8 flex flex-col space-y-4">
                <Link
                  href="/faqs"
                  className={`${FOOTER_LINK} text-lg font-semibold text-white`}
                >
                  FAQs
                </Link>
                <Link
                  href="/terms"
                  className={`${FOOTER_LINK} text-lg font-semibold text-white`}
                >
                  Terms & Policies
                </Link>
                <Link
                  href="/donation"
                  className={`${FOOTER_LINK} text-lg font-semibold text-white`}
                >
                  Donation
                </Link>
              </nav>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 p-2 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 p-2 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 p-2 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 p-2 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Spotify"
                >
                  <Music className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white">
              © Copyright 2025 Sivananda Yoga Resort and Training Center, Da Lat,
              Vietnam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
