import Image from "next/image";

const IMG_SHELVES = "/boutique-shelves.png";
const IMG_CLOTHES = "/browsing-clothes.png";

export default function TheBoutique() {
  return (
    <section
      className="w-full bg-[#FDFCF8] py-16 md:py-24"
      aria-labelledby="the-boutique-heading"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-4 md:grid-cols-3 md:gap-12 md:px-8">
        <div className="text-left">
            <h2
              id="the-boutique-heading"
              className="mb-2 font-serif text-4xl text-[#0B3B24]"
            >
              The Boutique
            </h2>
            <h3 className="mb-6 font-serif text-2xl text-[#0B3B24]">
              — We&apos;ve got you covered!
            </h3>
            <p className="font-sans leading-relaxed text-gray-600">
              Located in the Main Hall, our small, well-stocked boutique offers an
              array of products — snacks (chocolate, ice cream, nuts, and more),
              books (yoga books, notebooks), clothes (socks, pants, hoodies, tee
              shirts), and sundries like clothing detergent. Its limited hours make
              it a popular destination after meals!
            </p>
          </div>

          <div className="w-full">
            <Image
              src={IMG_CLOTHES}
              alt="Two guests browsing pastel hoodies on a rack; Good wall art visible in the background"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="w-full">
            <Image
              src={IMG_SHELVES}
              alt="Boutique wooden shelves with snacks including Marlou, Pocky, Tok, Gung-Gung, chocolates, and crafts"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
      </div>
    </section>
  );
}
