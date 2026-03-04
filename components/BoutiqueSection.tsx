import Image from "next/image";

const IMG_BOUTIQUE_SHELF =
  "https://images.unsplash.com/photo-1542838132-92c53300491e";
const IMG_CLOTHES_BROWSING =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8";

export default function BoutiqueSection() {
  return (
    <section className="bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0B3B24] mb-2">
              The Boutique
            </h2>
            <p className="text-2xl md:text-3xl font-serif text-[#0B3B24] mb-8">
              — We&apos;ve got you covered!
            </p>
            <p className="text-gray-600 leading-relaxed text-lg max-w-md">
              Located in the Main Hall, our small, well-stocked boutique offers an
              array of products — snacks (chocolate, ice cream, nuts, and more),
              books (yoga books, notebooks), clothes (socks, pants, hoodies, tee
              shirts), and sundries like clothing detergent. Its limited hours make
              it a popular destination after meals!
            </p>
          </div>

          {/* Right - Overlapping images */}
          <div className="relative w-full min-h-[320px] lg:min-h-[400px]">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10 ml-auto">
              <Image
                src={IMG_BOUTIQUE_SHELF}
                alt="Boutique shelf with snacks and books"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 md:-left-24 lg:-left-32 z-20 w-2/3 aspect-video rounded-xl overflow-hidden shadow-2xl border-[12px] border-white">
              <Image
                src={IMG_CLOTHES_BROWSING}
                alt="Guests browsing clothes at the boutique"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 66vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
