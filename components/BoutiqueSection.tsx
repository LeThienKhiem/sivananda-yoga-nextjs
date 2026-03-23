import Image from "next/image";
import Link from "next/link";

const IMG_BOUTIQUE_SHELF =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/vacation-02.png";
const IMG_CLOTHES_BROWSING =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/vacation-01.png";

export default function BoutiqueSection() {
  return (
    <section className="w-full bg-[#FDFCF8] py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
        {/* Desktop / tablet editorial split panel */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 items-center">
          <div className="text-left">
            <div className="mb-8 h-px w-24 bg-[#0B3B24]/25" />
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#0B3B24] md:text-base">
              WE&apos;VE GOT YOU COVERED!
            </p>
            <h2 className="mb-8 font-serif text-4xl font-light text-[#0B3B24] md:text-5xl">
              The Boutique
            </h2>
            <div className="border-l-2 border-orange-200 pl-6">
              <p className="text-lg leading-loose text-[#666666]">
                From authentic Sivananda texts and meditation cushions to yoga mats,
                sustainable clothing, and locally sourced gifts, our carefully curated
                boutique has everything you need to support your practice. We believe in
                providing quality, ethically sourced products that enhance your
                well-being. Come explore and find the perfect item to take home a piece
                of your retreat experience.
              </p>
            </div>
            <Link
              href="/accommodations"
              className="mt-8 inline-block text-sm font-bold uppercase tracking-wider text-[#ED7D4D] transition-colors hover:text-orange-600"
            >
              COME EXPLORE AND FIND THE PERFECT ITEM -&gt;
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="relative col-span-9 col-start-4 aspect-[4/5] overflow-hidden rounded-sm shadow-md">
              <Image
                src={IMG_BOUTIQUE_SHELF}
                alt="Boutique shelf with snacks and books"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="relative col-span-7 col-start-1 aspect-square overflow-hidden rounded-sm shadow-lg">
              <Image
                src={IMG_CLOTHES_BROWSING}
                alt="Guests browsing clothes at the boutique"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 30vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
