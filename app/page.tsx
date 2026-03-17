import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import AnimatedNumber from "@/components/AnimatedNumber";
import UpcomingEvents from "@/components/UpcomingEvents";
import TestimonialsCarousel2 from "@/components/TestimonialsCarousel2";
import YogaInsights from "@/components/YogaInsights";
import Footer from "@/components/Footer";

const HERO_IMAGE_URL =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/banner_hero_yoga_mainpage.jpg";

const SEO_JSON_PATH = path.join(process.cwd(), "seo-extracted.json");

function extractMeta(headContent: string) {
  const titleMatch = headContent.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  const descMatch = headContent.match(
    /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i
  ) || headContent.match(
    /<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i
  );
  const description = descMatch ? descMatch[1].trim() : undefined;
  const canonMatch = headContent.match(
    /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i
  ) || headContent.match(
    /<link\s+href=["']([^"']*)["']\s+rel=["']canonical["']/i
  );
  const canonical = canonMatch ? canonMatch[1].trim() : undefined;
  const ogTitleMatch = headContent.match(
    /<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i
  ) || headContent.match(
    /<meta\s+content=["']([^"']*)["']\s+property=["']og:title["']/i
  );
  const ogDescMatch = headContent.match(
    /<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i
  );
  const ogImageMatch = headContent.match(
    /<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i
  );
  const ogUrlMatch = headContent.match(
    /<meta\s+property=["']og:url["']\s+content=["']([^"']*)["']/i
  );
  return {
    title,
    description,
    canonical,
    openGraph: {
      title: ogTitleMatch ? (ogTitleMatch[1] || ogTitleMatch[2] || "").trim() : undefined,
      description: ogDescMatch ? ogDescMatch[1].trim() : undefined,
      images: ogImageMatch ? [ogImageMatch[1].trim()] : undefined,
      url: ogUrlMatch ? ogUrlMatch[1].trim() : undefined,
    },
  };
}

function getSeoData() {
  const raw = fs.readFileSync(SEO_JSON_PATH, "utf8");
  return JSON.parse(raw) as { headContent: string; bodyContent: string };
}

export const metadata = (() => {
  const { headContent } = getSeoData();
  const meta = extractMeta(headContent);
  return {
    title: meta.title || undefined,
    description: meta.description || undefined,
    alternates: meta.canonical ? { canonical: meta.canonical } : undefined,
    openGraph: meta.openGraph.title || meta.openGraph.url
      ? {
          title: meta.openGraph.title ?? meta.title,
          description: meta.openGraph.description,
          images: meta.openGraph.images,
          url: meta.openGraph.url ?? meta.canonical,
        }
      : undefined,
  };
})();

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sivananda Yoga Vietnam",
  url: "https://sivanandayogavietnam.org",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#faf9f7] mb-0">
        {/* Hero Banner */}
        <section className="relative flex h-[85vh] min-h-[400px] flex-col items-center justify-center overflow-hidden px-4">
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <div className="h-full w-full animate-zoom-out">
            <Image
              src={HERO_IMAGE_URL}
              alt="Yoga retreat nature scene"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            </div>
          </div>
          <div
            className="absolute inset-0 z-10 bg-black/40"
            aria-hidden
          />
          <div className="relative z-20 flex max-w-4xl flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Health is Wealth, Peace of Mind is Happiness. Yoga shows the way
          </h1>
            <p className="mt-4 text-xl text-white/95 italic md:text-2xl">
              —Swami Vishnudevananda
            </p>
            <p className="mt-8 text-lg font-medium text-white md:text-xl">
              New to our resort and program?
            </p>
            <Link
              href="/yoga-vacation"
              className="mt-6 inline-block rounded-lg border border-orange-400/50 bg-white/10 px-8 py-4 font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(249,115,22,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#ED7D4D] hover:border-[#ED7D4D] hover:text-white hover:shadow-[0_0_35px_rgba(249,115,22,0.7)]"
            >
              EXPLORE YOGA VACATION
            </Link>
          </div>
        </section>

        {/* Info section */}
        <section
          id="info"
          className="bg-[#fcfaf5] py-20"
        >
          <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-[#1e5c2b] md:text-4xl">
                Sivananda Yoga Resort and Training Center
              </h2>
              <h3 className="mt-2 mb-6 text-base font-medium uppercase tracking-widest text-gray-500">
                DA LAT, VIETNAM
              </h3>
              <p className="text-xl leading-relaxed text-gray-700">
                Established in the beautiful town of Da Lat, Vietnam, a 35 minute flight from Ho Chi Minh City, Sivananda Yoga Resort and Training Center is a peaceful oasis where people from all over the world come together to practice yoga, meditation and discover their true self.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-stone-200/80 bg-[#f4f7e6] p-8 text-center">
                <p className="text-5xl font-extrabold text-[#d85513] lg:text-6xl">
                  <AnimatedNumber value={52000} />
                </p>
                <p className="mt-4 text-xl font-medium text-gray-800 lg:text-2xl">Yoga Teachers Trained since 1969</p>
              </div>

              <div className="flex h-full flex-col items-center justify-center text-center rounded-xl bg-[#d85513] p-8">
                <Image
                  src="https://zjffxjmsumxcdmqslmhw.supabase.co/storage/v1/object/public/Icon/True-World-Order-logo-transparent-300x278.png"
                  alt="True World Order logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
                <p className="text-2xl font-bold text-white mt-4 mb-3 lg:text-3xl">Mission Statement</p>
                <div className="w-16 h-[2px] bg-white/60 mb-4" aria-hidden />
                <p className="text-white/95 text-center text-base italic leading-relaxed max-w-[90%] px-4 lg:text-lg">
                  Practicing and teaching the ancient yogic knowledge of Health, Peace, Unity in diversity, and Self-realization.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-1 flex-col justify-center rounded-xl border border-stone-200/80 bg-[#f4f7e6] p-8 text-center">
                  <p className="mb-2 text-4xl font-bold text-[#d85513]">
                    <AnimatedNumber value={11} />
                  </p>
                  <p className="font-medium text-gray-800">Ashrams Worldwide</p>
                </div>
                <div className="flex flex-1 flex-col justify-center rounded-xl border border-stone-200/80 bg-[#f4f7e6] p-8 text-center">
                  <p className="mb-2 text-4xl font-bold text-[#d85513]">
                    <AnimatedNumber value={31} />
                  </p>
                  <p className="font-medium text-gray-800">Yoga Centers Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR OFFERINGS SECTION */}
        <section id="courses" className="w-full bg-[#FDFCF8] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="mb-16 text-center">
              <h2 className="font-serif text-2xl font-bold text-[#0B3B24] md:text-3xl">
                There are many ways to learn, train, and experience yoga and
                health with us.
              </h2>
            </div>

            {/* 6-Card Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* Card 1: Yoga Vacation */}
              <Link
                href="/yoga-vacation"
                className="group relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-md md:h-[300px]"
              >
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-vacation-homepage.jpg"
                  alt="Yoga Vacation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
                <div className="relative z-10 p-6 text-center text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="mb-2 font-serif text-xl font-bold uppercase tracking-wide drop-shadow-md md:text-2xl">
                    Yoga Vacation
                  </h3>
                  <p className="text-sm font-light opacity-95 drop-shadow-sm md:text-base">
                    Find your inner peace in Da Lat
                  </p>
                </div>
              </Link>

              {/* Card 2: Teacher Training */}
              <Link
                href="/yoga-teacher-training-course"
                className="group relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-md md:h-[300px]"
              >
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-teacher-training-homepage.jpg"
                  alt="Teacher Training"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
                <div className="relative z-10 p-6 text-center text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="mb-2 font-serif text-xl font-bold uppercase tracking-wide drop-shadow-md md:text-2xl">
                    Teacher Training
                  </h3>
                  <p className="text-sm font-light opacity-95 drop-shadow-sm md:text-base">
                    Gain professional education and certification
                  </p>
                </div>
              </Link>

              {/* Card 3: Ayurveda */}
              <Link
                href="/programs"
                className="group relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-md md:h-[300px]"
              >
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Yoga_ayurveda_homepage.jpg"
                  alt="Ayurveda"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
                <div className="relative z-10 p-6 text-center text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="mb-2 font-serif text-xl font-bold uppercase tracking-wide drop-shadow-md md:text-2xl">
                    Ayurveda
                  </h3>
                  <p className="text-sm font-light opacity-95 drop-shadow-sm md:text-base">
                    Restore your natural balance
                  </p>
                </div>
              </Link>

              {/* Card 4: Yoga for Holistic Health */}
              <Link
                href="/syhet-practicuum"
                className="group relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-md md:h-[300px]"
              >
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-for-holistic-health-homepage.jpg"
                  alt="Yoga for Holistic Health"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
                <div className="relative z-10 p-6 text-center text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="mb-2 font-serif text-xl font-bold uppercase tracking-wide drop-shadow-md md:text-2xl">
                    Yoga for Holistic Health
                  </h3>
                  <p className="text-sm font-light opacity-95 drop-shadow-sm md:text-base">
                    Learn healing practices for addressing disease
                  </p>
                </div>
              </Link>

              {/* Card 5: Short Course */}
              <Link
                href="/specialty-courses"
                className="group relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-md md:h-[300px]"
              >
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-short-courses-homepage.jpg"
                  alt="Short Course"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
                <div className="relative z-10 p-6 text-center text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="mb-2 font-serif text-xl font-bold uppercase tracking-wide drop-shadow-md md:text-2xl">
                    Short Course
                  </h3>
                  <p className="text-sm font-light opacity-95 drop-shadow-sm md:text-base">
                    Enjoy a focused learning experience
                  </p>
                </div>
              </Link>

              {/* Card 6: Corporate Training */}
              <Link
                href="/contact"
                className="group relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-md md:h-[300px]"
              >
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-corporate-training-homepage.jpg"
                  alt="Corporate Training"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
                <div className="relative z-10 p-6 text-center text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="mb-2 font-serif text-xl font-bold uppercase tracking-wide drop-shadow-md md:text-2xl">
                    Corporate Training
                  </h3>
                  <p className="text-sm font-light opacity-95 drop-shadow-sm md:text-base">
                    Contact us for more details
          </p>
        </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial banner */}
        <section
          id="testimonial1"
          className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-24"
        >
          <div className="absolute inset-0">
            <Image
              src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-kindle-the-light-of-love.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/40" aria-hidden />
          <div className="relative z-10 flex max-w-4xl flex-col items-center justify-center text-center">
            <blockquote className="font-serif text-2xl italic leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] md:text-3xl lg:text-4xl">
              Kindle the light of love in the heart and radiate love and light to one and all
            </blockquote>
            <cite className="mt-6 block font-serif text-xl not-italic text-white/95 md:text-2xl">
              – Swami Sivananda
            </cite>
          </div>
        </section>

        {/* Lineage */}
        <section id="lineage" className="bg-[#fcfaf5] py-24">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 px-4 lg:grid-cols-[2fr_3fr] lg:gap-16">
            {/* Text side – 40% width on desktop; quote-style border on paragraphs only; stack above images on mobile */}
            <div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-[#598234] lg:text-5xl">Our Lineage</h2>
              <h3 className="mt-2 mb-6 font-semibold text-2xl text-stone-600">From Himalayas to Vietnam</h3>
              <div className="border-l-4 border-[#598234] pl-6 lg:pl-8">
                <p className="mb-4 text-stone-700 leading-relaxed">
                  The International Sivananda Yoga Vedanta Centres, founded by Swami Vishnudevananda in 1959 under the guidance of his guru, the Indian saint Swami Sivananda, has grown to more than 30 global locations, including 11 ashrams. Recognized for authentic yoga teachings, it has trained more than 52,000 teachers and offers diverse programs, including personal growth through residential Karma Yoga service.
                </p>
                <p className="mb-8 text-stone-700 leading-relaxed">
                  Sivananda Yoga has a long history in Asia. When Swami Vishnudevananda first came to the West, he stopped in Hong Kong, Malaysia, Taiwan, and the Philippines, and today, Sivananda Yoga teachings continue to be shared in Vietnam, China, South Korea, Japan, and other countries, carrying forward Swami Vishnudevananda's global vision of peace, health, and spiritual awakening.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex w-fit items-center justify-center rounded border-2 border-[#598234] bg-transparent px-6 py-3 font-semibold text-[#598234] transition hover:bg-[#598234]/10"
              >
                LEARN MORE
              </Link>
            </div>
            {/* Image side – 60% width on desktop: balanced 2x2 grid (4 images); stacks on mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100 shadow-md">
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/sivanada_master01.jpeg"
                  alt="Swami Sivananda – yoga and meditation lineage"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-100 shadow-md">
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/sivanada_master02.jpg"
                  alt="Traditional yoga practice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-100 shadow-md">
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/sivanada_master03.jpg"
                  alt="Yoga and meditation heritage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-100 shadow-md">
                <Image
                  src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Swami-Sivananda-Gazing.jpg"
                  alt="Serene traditional yoga and meditation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* THE PERFECT PLACE SECTION - EXPANDING ACCORDION */}
        <section id="place" className="w-full bg-[#FDFCF8] flex flex-col">
          {/* Section Header */}
          <div className="text-center py-16 px-6">
            <h2 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold">
              The Perfect Place to Learn and Relax
            </h2>
          </div>

          {/* Expanding Accordion Container */}
          <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[600px] overflow-hidden">
            
            {/* Column 1: Tranquil Nature */}
            <div className="group relative flex-1 md:hover:flex-[2_2_0%] transition-all duration-700 ease-in-out cursor-pointer border-b md:border-b-0 md:border-r border-white/40 overflow-hidden">
              <Image 
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Yoga-The-Perfect-Place-to-Learn-and-Relax-01.jpg" 
                alt="Tranquil Nature" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* White Filter Overlay */}
              <div className="absolute inset-0 bg-[#FDFCF8]/85 transition-colors duration-700 group-hover:bg-[#FDFCF8]/40" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0B3B24] transition-all duration-700 drop-shadow-sm group-hover:-translate-y-2">
                  Tranquil Nature
                </h3>
                <div className="overflow-hidden transition-all duration-700 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="text-[#0B3B24] text-sm md:text-base font-medium max-w-sm mx-auto mt-2 leading-relaxed bg-[#FDFCF8]/60 p-4 rounded-xl backdrop-blur-sm">
                    Surrounded by lush pine forests and the serene Tuyen Lam Lake, our ashram provides the ideal environment to disconnect from daily stress and reconnect with yourself.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Authentic Teachings */}
            <div className="group relative flex-1 md:hover:flex-[2_2_0%] transition-all duration-700 ease-in-out cursor-pointer border-b md:border-b-0 md:border-r border-white/40 overflow-hidden">
              <Image 
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Yoga-The-Perfect-Place-to-Learn-and-Relax-02.jpg" 
                alt="Authentic Teachings" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* White Filter Overlay */}
              <div className="absolute inset-0 bg-[#FDFCF8]/85 transition-colors duration-700 group-hover:bg-[#FDFCF8]/40" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0B3B24] transition-all duration-700 drop-shadow-sm group-hover:-translate-y-2">
                  Authentic Teachings
                </h3>
                <div className="overflow-hidden transition-all duration-700 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="text-[#0B3B24] text-sm md:text-base font-medium max-w-sm mx-auto mt-2 leading-relaxed bg-[#FDFCF8]/60 p-4 rounded-xl backdrop-blur-sm">
                    Learn classical Sivananda Yoga directly from experienced senior teachers, rooted in a pure and ancient lineage of self-realization.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Holistic Healing */}
            <div className="group relative flex-1 md:hover:flex-[2_2_0%] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden">
              <Image 
                src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Yoga-The-Perfect-Place-to-Learn-and-Relax-03.jpg" 
                alt="Holistic Healing" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* White Filter Overlay */}
              <div className="absolute inset-0 bg-[#FDFCF8]/85 transition-colors duration-700 group-hover:bg-[#FDFCF8]/40" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0B3B24] transition-all duration-700 drop-shadow-sm group-hover:-translate-y-2">
                  Holistic Healing
                </h3>
                <div className="overflow-hidden transition-all duration-700 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="text-[#0B3B24] text-sm md:text-base font-medium max-w-sm mx-auto mt-2 leading-relaxed bg-[#FDFCF8]/60 p-4 rounded-xl backdrop-blur-sm">
                    Rejuvenate your body and mind through Ayurveda, mindful living, deep relaxation techniques, and a balanced vegetarian diet.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <UpcomingEvents />

        <TestimonialsCarousel2 />

        {/* 7. YOGA INSIGHTS (BLOGS MASONRY) */}
        <YogaInsights />

        <Footer />
      </main>
    </>
  );
}
