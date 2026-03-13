"use client";

type TestimonialVideoSectionProps = {
  title?: string;
  /** YouTube embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID */
  embedUrl?: string;
};

const DEFAULT_EMBED =
  "https://www.youtube.com/embed/P88mc-dDibE?si=Lm3o7kzHORfVd5UM";

export default function TestimonialVideoSection({
  title = "Experience the Journey",
  embedUrl = DEFAULT_EMBED,
}: TestimonialVideoSectionProps) {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-12 font-serif text-3xl font-bold text-[#0B3B24] md:text-4xl">
          {title}
        </h2>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-100 shadow-2xl bg-black">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title="Testimonial video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
