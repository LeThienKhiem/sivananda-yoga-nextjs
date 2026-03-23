import { Facebook, Instagram, Youtube } from "lucide-react";

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

const socialLinks = [
  {
    href: "https://www.facebook.com/vietnamyogaresort",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/sivanandayoga_dalatashram/?hl=en",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@SivanandaYogaVietnam",
    label: "YouTube",
    Icon: Youtube,
  },
  {
    href: "https://open.spotify.com/show/36HOTjwBmIAK3kXt0jaYPC?si=62a0c9901f104891",
    label: "Spotify",
    Icon: SpotifyIcon,
  },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-16 px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      {/* Left: Brand & Copyright */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2">
        <div className="flex items-center justify-center md:justify-start gap-3 text-[18px] text-gray-800 font-semibold tracking-wide">
          <span>Sivananda Yoga Resort</span>
        </div>
        <p className="text-gray-600 text-[18px]">© 2025 All rights reserved.</p>
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center justify-center md:justify-end gap-6">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </footer>
  );
}
