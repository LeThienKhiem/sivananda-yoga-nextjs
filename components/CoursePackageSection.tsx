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

const PRICING = [
  { label: "Single Room", price: "US$ 3,850" },
  { label: "Shared Room (2 people)", price: "US$ 3,400" },
  { label: "Shared Room (4 people)", price: "US$ 2,400" },
];

export default function CoursePackageSection() {
  return (
    <section className="w-full bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-12">
          What Includes in the Package
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Inclusions & Exclusions */}
          <div>
            <ul className="space-y-4 mb-10 text-gray-700 text-lg">
              {INCLUDED.map((item) => (
                <li key={item}>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full border-2 border-black shrink-0" />
                    <span>{item}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-base mb-6 leading-relaxed">
              ***Other required materials, excluded from the course fee, but
              available in our boutique for purchase:
            </p>

            <ul className="space-y-3 text-gray-600 text-base">
              {EXCLUDED.map((item) => (
                <li key={item}>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#0B3B24] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Pricing Card & CTA */}
          <div>
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] mb-8">
              {PRICING.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center text-gray-700 text-lg mb-6 last:mb-0"
                >
                  <span>{row.label}</span>
                  <span className="font-semibold">{row.price}</span>
                </div>
              ))}
              <p className="text-gray-400 text-sm mt-8 pt-6 border-t border-gray-100">
                *** incl. Deposit US$ 250 (due at time of registration)
              </p>
            </div>

            <div className="flex justify-center lg:justify-end pr-0 lg:pr-4">
              <Link
                href="/accommodations"
                className="bg-[#ED7D4D] text-white font-bold tracking-wider uppercase px-12 py-4 rounded-sm hover:bg-orange-600 transition-colors shadow-lg inline-block"
              >
                ENROLL NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
