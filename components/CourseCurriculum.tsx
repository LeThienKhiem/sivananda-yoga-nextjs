export default function CourseCurriculum() {
  return (
    <section className="bg-[#FDFCF8] px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:gap-24">
        {/* Left Column: Curriculum Details */}
        <div className="w-full lg:w-[60%]">
          <h2 className="mb-10 font-serif text-3xl text-[#0B3B24] md:text-4xl">
            Curriculum
          </h2>

          {/* Main List */}
          <ul className="mb-12 space-y-5 text-sm text-[#4A4A4A] md:text-base">
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

          {/* Important Note */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-500">Important Note</h4>
            <ul className="space-y-3 text-sm text-[#4A4A4A] md:text-base">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-4 w-4 flex-shrink-0 text-[#0B3B24]"><path d="M8 5v14l11-7z" /></svg>
                <span>Successful completion of the Sivananda Yoga Teachers&apos; Training Course is a prerequisite for all participants</span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-4 w-4 flex-shrink-0 text-[#0B3B24]"><path d="M8 5v14l11-7z" /></svg>
                <span>This course is intensive and sound physical and mental health is required.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Pricing Card */}
        <div className="w-full lg:w-[40%]">
          <div className="rounded-sm border border-gray-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] md:p-10 lg:sticky lg:top-24">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-[#0B3B24] md:text-sm">Program Cost</h3>
            <p className="mb-8 text-[11px] text-gray-400 md:text-xs">*** incl. accommodation, meals and study materials</p>

            <div className="space-y-6 text-sm font-medium text-[#4A4A4A] md:text-base">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span>Single Room</span>
                <span className="font-bold text-[#0B3B24]">US$ 3,850</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span>Shared Room (2 people)</span>
                <span className="font-bold text-[#0B3B24]">US$ 3,400</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shared Room (4 people)</span>
                <span className="font-bold text-[#0B3B24]">US$ 2,400</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
