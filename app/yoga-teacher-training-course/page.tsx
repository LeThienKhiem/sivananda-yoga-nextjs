import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnrollTTCSection from "@/components/EnrollTTCSection";
import WhyChooseTTC from "@/components/WhyChooseTTC";
import BenefitsOfTTC from "@/components/BenefitsOfTTC";
import EventsCarousel from "@/components/EventsCarousel";
import CoursePackageSection from "@/components/CoursePackageSection";
import CurriculumSection from "@/components/CurriculumSection";
import DailySchedule from "@/components/DailySchedule";
import VideoTestimonials from "@/components/VideoTestimonials";
import StudentFeedback from "@/components/StudentFeedback";
import MainTeachers from "@/components/MainTeachers";
import MessageFromTeachers from "@/components/MessageFromTeachers";
import AshramGallery from "@/components/AshramGallery";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1524863479829-916d8e77f114";
const IMG_TTC_FOREST =
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597";
const IMG_ASANA_WORKSHOP =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b";

export const metadata = {
  title: "Yoga Teacher Training Course | Sivananda Yoga Vietnam",
  description:
    "200-hour Yoga Teacher Training Course (TTC) at Sivananda Yoga Resort and Training Center in Da Lat, Vietnam.",
};

export default function TeacherTrainingPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        {/* Hero Banner */}
        <section className="relative w-full h-[600px] md:h-[750px] flex items-end justify-center">
          <Image
            src={HERO_IMAGE_URL}
            alt="Yoga students in forest - Teacher Training Course"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="relative z-10 bg-white w-[90%] max-w-5xl py-12 md:py-16 px-6 shadow-xl text-center -mb-20">
            <p className="text-gray-500 uppercase tracking-[0.2em] text-sm md:text-lg mb-4 font-light">
              A Life Transforming Experience
            </p>
            <h1 className="text-[#0B3B24] font-serif text-3xl md:text-5xl lg:text-6xl font-medium">
              Teacher Training Course (TTC)
            </h1>
          </div>
        </section>

        {/* Structured Editorial Content — Academic Zen */}
        <div className="bg-[#FDFCF8] pt-32">
          {/* Section 01: First Content Block (Left Text, Right Image) */}
          <div className="max-w-7xl mx-auto px-6 py-24">
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7">
                <span className="text-6xl font-serif text-[#4F6F1F]/20 block mb-6">
                  01
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-8">
                  First offered in 1969
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  The Sivananda Yoga Teacher Training Course (TTC) was the first
                  program of its kind, established by Swami Vishnudevananda. Today
                  it has produced over 52,000 graduates worldwide and offers an
                  internationally recognized certification that equips you to teach
                  classical yoga with authenticity and depth.
                </p>
              </div>
              <div className="lg:col-span-5 relative w-full aspect-[4/5] overflow-hidden shadow-lg">
                <Image
                  src={IMG_TTC_FOREST}
                  alt="TTC students in a forest setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </section>
          </div>

          {/* Section 02: Full-Width Breakout (Philosophy / Highlight) */}
          <section className="w-full bg-[#4F6F1F] py-24 px-6 my-12">
            <div className="max-w-4xl mx-auto text-center text-white">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed">
                Whether you&apos;re a dedicated practitioner seeking to deepen your
                practice or an aspiring teacher ready to share the gift of yoga,
                the program also serves a higher purpose: to promote world peace by
                guiding participants toward inner peace that radiates outward to
                benefit the world around them.
              </p>
            </div>
          </section>

          {/* Section 03: Second Content Block (Left Image, Right Text) */}
          <div className="max-w-7xl mx-auto px-6 py-24">
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/5] overflow-hidden shadow-lg mt-0 lg:mt-12 order-2 lg:order-1">
                <Image
                  src={IMG_ASANA_WORKSHOP}
                  alt="Asana workshop and hands-on correction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-6xl font-serif text-[#4F6F1F]/20 block mb-6">
                  02
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] mb-8">
                  Immersive 4-week residential training
                </h2>
                <div className="text-gray-700 leading-relaxed text-lg">
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <span className="font-semibold text-[#0B3B24]">
                      Physical Mastery:
                    </span>{" "}
                    Increased strength and flexibility.
                  </div>
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <span className="font-semibold text-[#0B3B24]">
                      Mental Clarity:
                    </span>{" "}
                    Sharper concentration and effective stress release.
                  </div>
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <span className="font-semibold text-[#0B3B24]">
                      Self-Discipline:
                    </span>{" "}
                    Improved self-esteem and a renewed sense of purpose.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <EnrollTTCSection />

        {/* YOGA ALLIANCE CERTIFIED SECTION */}
        <section className="max-w-5xl mx-auto py-16 px-6">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left: Certificate Image */}
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative flex items-center justify-center bg-gray-50/50 rounded-full overflow-hidden">
              <Image
                src="https://zjffxjmsumxcdmqslmhw.supabase.co/storage/v1/object/public/Icon/certificate.png"
                alt="Yoga Alliance RYS 200 Certified"
                fill
                className="object-contain mix-blend-multiply p-4"
                sizes="224px"
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-serif text-[#0B3B24] mb-2">
                Yoga Alliance Certified
              </h2>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-6">
                28-DAY IMMERSION STUDY - GRADUATE WITH GLOBAL CERTIFICATION
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                In the Sivananda Yoga Teacher Training you will deepen your practice and gain the skills needed to teach Yoga. After graduation participants will receive a certification from the International Sivananda Yoga Vedanta Centers that confirms that they have the knowledge and experience to teach Hatha Yoga, and which qualifies them to apply for Registered Yoga Teacher (200 hour) status from the international Yoga Alliance.
              </p>
            </div>
          </div>
        </section>

        <WhyChooseTTC />

        <BenefitsOfTTC />

        <CoursePackageSection />

        <CurriculumSection />

        <DailySchedule />

        <section className="py-24 bg-[#fcfaf5]" aria-label="Upcoming events">
          <EventsCarousel title="Upcoming Events" />
        </section>

        <VideoTestimonials />

        <StudentFeedback />

        <MainTeachers />

        <MessageFromTeachers />

        <AshramGallery />
      </main>
      <Footer />
    </div>
  );
}
