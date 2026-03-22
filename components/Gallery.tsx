"use client";

import Image from "next/image";

export type GalleryImageItem = {
  id: string | number;
  src: string;
  alt: string;
  /** Tailwind aspect class, e.g. aspect-[4/3] */
  aspect?: string;
};

export interface GalleryProps {
  title?: string;
  subtitle?: string;
  images: GalleryImageItem[];
  className?: string;
}

const defaultAspect = "aspect-[4/3]";

/**
 * Masonry-style image gallery (columns layout). Pass `images` from the page for context-specific assets.
 */
export default function Gallery({
  title = "Gallery",
  subtitle,
  images,
  className = "",
}: GalleryProps) {
  if (!images?.length) return null;

  return (
    <section
      className={`w-full bg-[#FDFCF8] ${className}`.trim()}
      aria-label={title}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24]">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid relative rounded-xl overflow-hidden group bg-gray-100"
            >
              <div
                className={`relative w-full ${img.aspect ?? defaultAspect}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
