import Link from "next/link";

export default function MessageFromTeachers() {
  return (
    <section className="w-full py-24 px-6 bg-[#EEF2EB]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] text-center mb-16">
          Message from Our Teachers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative w-full mb-12">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#0B3B24]/20 -translate-x-1/2" />

          <p className="text-[#0B3B24] leading-relaxed text-xl md:text-2xl font-medium text-justify md:text-left md:pr-4">
            The practice and teaching of yoga demands a high degree of
            self-discipline and moral virtue. In order to ensure the success of
            the program, participants are required to attend all activities,
            sessions, lectures, and yoga classes. Please note that a basic
            knowledge of yoga postures and philosophy is helpful but not
            essential. Most important is to come with an open mind and a
            willingness to learn new ideas.
          </p>

          <p className="text-[#0B3B24] leading-relaxed text-xl md:text-2xl font-medium text-justify md:text-left md:pl-4">
            To maintain the pure environment and elevated vibration necessary for
            the practice of yoga and meditation, certain items are prohibited.
            These include: meat, fish, eggs, black tea, coffee, alcohol, tobacco,
            drugs, and also nudity are prohibited during the course and in the
            ashram. Any participants who do not comply with the ashram rules may
            be dismissed from the course.
          </p>
        </div>

        <div className="max-w-3xl text-center mb-12">
          <p className="text-[#0B3B24] leading-relaxed text-xl md:text-2xl font-medium">
            Unfortunately, it is not possible to cater to all personal dietary
            preferences. We offer a lacto-vegetarian (and almost fully organic)
            menu and dairy-free and wheat-free dishes. Side dishes, desserts and
            snacks may contain gluten and dairy.
          </p>
        </div>

        <Link
          href="/frequently-asked-questions"
          className="bg-[#FDF9EB] text-[#8C9A5B] border border-[#E5DFCC] px-10 py-4 text-base font-bold tracking-wider uppercase hover:bg-[#F2ECD8] hover:text-[#0B3B24] transition-colors rounded-sm shadow-sm inline-block"
        >
          READ MORE FAQs
        </Link>
      </div>
    </section>
  );
}
