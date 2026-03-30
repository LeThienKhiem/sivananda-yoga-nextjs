import Link from "next/link";

const INCLUDED = [
  "Accommodation for 28 nights and Tuition",
  "3 Daily Vegetarian Meals",
  "2 yoga pants, 2 t-shirts",
  "TTC Manual",
];

const EXCLUDED = [
  '"The Complete Illustrated Book of Yoga" by Swami Vishnudevananda',
  '"Bhagavad Gita" with a commentary by Swami Sivananda',
  "Kriya set (including Neti Pot)",
  "Notebook and pen",
  "Yoga mat",
];

export default function CoursePackageSection() {
  return (
    <section className="w-full bg-[#FDFCF8]">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-14 text-center">
          What Includes in the Package
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-14">
          {INCLUDED.map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full border-2 border-[#0B3B24] shrink-0" />
              <span className="text-gray-700 text-lg">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-base mb-6 leading-relaxed">
          ***Other required materials, excluded from the course fee, but
          available in our boutique for purchase:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-14">
          {EXCLUDED.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0B3B24] shrink-0 mt-1.5" />
              <span className="text-gray-600 text-base">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/accommodations"
            className="bg-[#ED7D4D] text-white font-bold tracking-wider uppercase px-14 py-4 rounded-sm hover:bg-orange-600 transition-colors shadow-lg inline-block"
          >
            ENROLL NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
