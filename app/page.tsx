import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import parse, { type Element } from "html-react-parser";
import Header from "@/components/Header";
import AnimatedNumber from "@/components/AnimatedNumber";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d";

const SEO_JSON_PATH = path.join(process.cwd(), "seo-extracted.json");

const DIVI_CLASS_REGEX =
  /^(et_pb_|et_builder_|et-l|et_animated|et_|clearfix|wp-image-\d+|alignnone|size-\w+|et-waypoint)/;

function stripDiviClasses(html: string): string {
  return html.replace(/\sclass="[^"]*"/g, (match) => {
    const classAttr = match.slice(8, -1);
    const kept = classAttr
      .split(/\s+/)
      .filter((t) => !DIVI_CLASS_REGEX.test(t.trim()))
      .join(" ")
      .trim();
    return kept ? ` class="${kept}"` : "";
  });
}

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
  const { bodyContent } = getSeoData();
  const cleanedHtml = stripDiviClasses(bodyContent);

  const parsed = parse(cleanedHtml, {
    replace(domNode) {
      const node = domNode as Element;
      if (node.type === "tag" && node.name === "img") {
        const src = node.attribs?.src ?? "";
        const alt = node.attribs?.alt ?? "";
        const w = node.attribs?.width;
        const h = node.attribs?.height;
        const width = w ? parseInt(w, 10) : 800;
        const height = h ? parseInt(h, 10) : 500;
        if (!src) return null;
        return (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-xl object-cover shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        );
      }
      return undefined;
    },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#faf9f7]">
        {/* Hero Banner */}
        <section className="relative flex h-[85vh] min-h-[400px] flex-col items-center justify-center overflow-hidden px-4">
          <div className="absolute inset-0 h-full w-full animate-zoom-out">
            <Image
              src={HERO_IMAGE_URL}
              alt="Yoga retreat nature scene"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div
            className="absolute inset-0 z-10 bg-black/40"
            aria-hidden
          />
          <div className="relative z-20 flex max-w-4xl flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Health is Wealth, Peace of Mind is Happiness. Yoga shows the way
            </h1>
            <p className="mt-4 text-lg text-white/95 italic md:text-xl">
              —Swami Vishnudevananda
            </p>
            <p className="mt-8 text-base font-medium text-white md:text-lg">
              New to our resort and program?
            </p>
            <Link
              href="/yoga-vacation"
              className="mt-6 inline-block rounded-lg border border-orange-400/50 bg-white/10 px-8 py-4 font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(249,115,22,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-white/20 hover:shadow-[0_0_35px_rgba(249,115,22,0.7)]"
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
              <h3 className="mt-2 mb-6 text-sm font-medium uppercase tracking-widest text-gray-500">
                DA LAT, VIETNAM
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Established in the beautiful town of Da Lat, Vietnam, a 35 minute flight from Ho Chi Minh City, Sivananda Yoga Resort and Training Center is a peaceful oasis where people from all over the world come together to practice yoga, meditation and discover their true self.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-stone-200/80 bg-[#f4f7e6] p-8 text-center">
                <p className="text-5xl font-extrabold text-[#d85513] lg:text-6xl">
                  <AnimatedNumber value={52000} />
                </p>
                <p className="mt-4 text-lg font-medium text-gray-800 lg:text-xl">Yoga Teachers Trained since 1969</p>
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
                <p className="text-white/95 text-center text-sm italic leading-relaxed max-w-[90%] px-4 lg:text-base">
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

        {/* Body content from seo-extracted.json */}
        <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          {/* SEO: All semantic tags (h1–h4, p, ul, li, strong, a) preserved; Tailwind applied onto them via prose. Zero text modification. */}
          <div className="homepage-content prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-stone-800 prose-h1:text-3xl prose-h1:sm:text-4xl prose-h1:tracking-tight prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-14 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3 prose-p:text-stone-700 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-[#b85c38] prose-a:no-underline hover:prose-a:underline prose-strong:text-stone-800 prose-ul:my-6 prose-ul:text-stone-700 prose-li:my-1 prose-li:marker:text-[#598234] [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-8 space-y-10">
            {parsed}
          </div>
        </article>
      </main>
    </>
  );
}
