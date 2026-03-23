import Link from "next/link";

const BENEFITS = [
  {
    title: "Physical Mastery",
    description: "Build increased strength, flexibility, and body awareness through daily asana and pranayama practice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Mental Clarity",
    description: "Sharpen concentration and release stress through meditation, chanting, and the disciplined ashram routine.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Self-Discipline & Purpose",
    description: "Develop improved self-esteem and a renewed sense of purpose through immersive yogic lifestyle and Karma Yoga.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
];

export default function BenefitsTTC() {
  return (
    <section className="w-full bg-white px-6 pt-12 pb-14 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl">
            Benefits of the Training
          </h2>
          <p className="text-lg font-medium text-[#4A4A4A] md:text-xl">
            Transform body, mind, and spirit through immersive practice
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center rounded-sm border border-gray-100 bg-[#FDFCF8] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:p-10"
            >
              <div className="mb-6 rounded-full bg-white p-4 shadow-sm text-[#0B3B24]">
                {benefit.icon}
              </div>
              <h3 className="mb-4 font-serif text-xl font-bold text-[#0B3B24] md:text-2xl">
                {benefit.title}
              </h3>
              <p className="font-medium leading-relaxed text-[#4A4A4A] text-base md:text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-[#ED7D4D] px-12 py-4 font-bold uppercase tracking-widest text-white shadow-[0_4px_14px_0_rgba(237,125,77,0.3)] transition-colors hover:bg-orange-600 hover:shadow-[0_6px_20px_rgba(237,125,77,0.25)]"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
}
