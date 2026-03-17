import { Info } from "lucide-react";

export default function CourseCurriculum() {
  return (
    <section className="bg-[#FDFCF8] px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-24">
        {/* Left Column: Curriculum Details only */}
        <div className="w-full lg:w-[60%] pb-2">
          <h2 className="mb-10 font-serif text-3xl text-[#0B3B24] md:text-4xl">
            Curriculum
          </h2>

          {/* Main List */}
          <ul className="space-y-5 text-base text-[#4A4A4A] md:text-lg">
            <li className="flex items-start gap-4">
              <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full border-2 border-[#0B3B24]" />
              <span>Concentrated periods of pranayama practice of progressive intensity under supervisor within 14 days</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-[#0B3B24]" />
              <span>Special diet geared to intensive practice</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-[#0B3B24]" />
              <span>Daily self practice of asana</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full border-2 border-[#0B3B24]" />
              <span>Discussion and practice of mudras (seals), bandhas (locks), mantras</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-[#0B3B24]" />
              <span>Practice of shat kriyas (cleansing techniques)</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-[#0B3B24]" />
              <span>Meditation and chanting</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-[#0B3B24]" />
              <span>Keeping a spiritual diary</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Important Note callout card */}
        <div className="w-full lg:w-[40%] lg:flex-shrink-0">
          <div className="rounded-2xl border border-gray-100 border-l-4 border-l-[#0B3B24] bg-[#FDFCF8] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:sticky lg:top-24">
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#0B3B24]">
              <Info className="h-5 w-5 flex-shrink-0" aria-hidden />
              Important Note
            </h4>
            <ul className="space-y-4 text-base leading-relaxed text-gray-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0B3B24]" aria-hidden />
                <span>Successful completion of the Sivananda Yoga Teachers&apos; Training Course is a prerequisite for all participants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0B3B24]" aria-hidden />
                <span>This course is intensive and sound physical and mental health is required.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
