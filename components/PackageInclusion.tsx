export default function PackageInclusion() {
  return (
    <section className="bg-[#FDFCF8] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column: What's Included */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-10">
            What Includes in the Package
          </h2>

          <ul className="space-y-6 text-[#4A4A4A] text-lg md:text-xl">
            <li className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full border-2 border-[#0B3B24] flex-shrink-0" />
              <span>Accommodation for [28] nights and Tuition</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full border-2 border-[#0B3B24] flex-shrink-0" />
              <span>3 Daily Vegetarian Meals</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full border-2 border-[#0B3B24] flex-shrink-0" />
              <span>2 uniform sets (yoga pant, t-shirt)</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full border-2 border-[#0B3B24] flex-shrink-0" />
              <span>ATTC Manual</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Important Note */}
        <div className="rounded-sm border-l-4 border-l-[#0B3B24] bg-[#F4F7F0] p-8 md:p-10">
          <h4 className="text-gray-500 font-medium mb-4">Important Note</h4>
          <ul className="space-y-3 text-[#4A4A4A] text-base md:text-lg">
            <li className="flex items-start gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#0B3B24] mt-1 flex-shrink-0"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>
                Successful completion of the Sivananda Yoga Teachers&apos;
                Training Course is a prerequisite for all participants
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#0B3B24] mt-1 flex-shrink-0"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>
                This course is intensive and sound physical and mental health is
                required.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
