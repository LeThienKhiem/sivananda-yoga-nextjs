import Link from "next/link";

export default function MoreInformation() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="mb-12 border-l-4 border-[#0B3B24] pl-6">
        <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-[#0B3B24] md:text-3xl">
          More Information
        </h2>
      </div>

      <div className="space-y-12 border-l border-gray-200 pl-6 md:pl-10">
        {/* Contact Us */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#0B3B24]">Contact Us</h3>
          <p className="text-[#4A4A4A]">
            Have a question about registering our programs and retreats... please
            contact us or send a message to the bottom of this page or call{" "}
            <strong>(+84) 263 650 1100</strong>.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block rounded-sm bg-[#E5F5C8] px-8 py-3 text-base font-bold uppercase tracking-widest text-[#0B3B24] shadow-sm transition-colors hover:bg-[#d4e8aa]"
          >
            Contact Us
          </Link>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#0B3B24]">
            Frequently Asked Questions
          </h3>
          <p className="text-[#4A4A4A]">
            We have fully detailed answers to common Yoga retreat FAQ.
          </p>
          <Link
            href="/frequently-asked-questions"
            className="mt-2 inline-block rounded-sm bg-[#E5F5C8] px-8 py-3 text-base font-bold uppercase tracking-widest text-[#0B3B24] shadow-sm transition-colors hover:bg-[#d4e8aa]"
          >
            Read FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
