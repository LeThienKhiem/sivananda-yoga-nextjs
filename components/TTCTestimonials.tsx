export default function TTCTestimonials() {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center bg-[#333333]">
      <h2 className="text-3xl md:text-4xl font-serif text-[#8FB24E] text-center mb-16 max-w-2xl">
        Testimonials from our TTC Graduates
      </h2>

      <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/P88mc-dDibE?si=Lm3o7kzHORfVd5UM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
