import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeniorTeachers from "@/components/SeniorTeachers";
import AshramGallery from "@/components/AshramGallery";
import PackageInclusion from "@/components/PackageInclusion";
import StudentFeedback from "@/components/StudentFeedback";
import { GraduationCap, Globe } from "lucide-react";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1524863479829-916d8e77f114";
const IMG_MOUNTAINS =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000";
const IMG_SCHEDULE =
  "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800";

const schedule = [
  { time: "5:30 am", activity: "Wake up bell" },
  { time: "6:00 am", activity: "Satsang (Meditation, Chanting, Lecture)" },
  { time: "8:00 am", activity: "Advanced Asana and Pranayama" },
  { time: "10:00 am", activity: "Vegetarian Brunch" },
  { time: "11:00 am", activity: "Karma Yoga" },
  { time: "12:00 pm", activity: "Raja Yoga or Sanskrit Class" },
  { time: "2:00 pm", activity: "Main Lecture (Vedanta Philosophy)" },
  { time: "4:00 pm", activity: "Advanced Asana and Pranayama" },
  { time: "6:00 pm", activity: "Vegetarian Dinner" },
  { time: "8:00 pm", activity: "Satsang (Meditation, Chanting, Lecture)" },
];

export const metadata = {
  title: "Advanced Yoga Teacher Training Course (300h) | Sivananda Yoga Vietnam",
  description:
    "300-hour Advanced Yoga Teacher Training Course at Sivananda Yoga Resort and Training Center in Da Lat, Vietnam.",
};

export default function AdvancedTeacherTrainingPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        {/* Hero Banner */}
        <section className="relative w-full h-[500px] md:h-[600px] flex items-end justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={HERO_IMAGE_URL}
              alt="Advanced Teacher Training Course"
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 bg-white w-[90%] max-w-5xl py-12 md:py-16 px-6 text-center -mb-20">
            <p className="text-gray-500 uppercase tracking-[0.2em] text-base md:text-xl mb-4 font-light">
              Deepen Your Teaching
            </p>
            <h1 className="text-[#0B3B24] font-serif text-3xl md:text-5xl lg:text-6xl font-medium">
              Advanced TTC (300 hours)
            </h1>
          </div>
        </section>

        {/* 2. COURSE INTRO SECTION */}
        <section className="bg-[#FDFCF8] max-w-7xl mx-auto py-24 px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2">
              <p className="text-[#4A4A4A] leading-relaxed text-lg md:text-xl">
                The Sivananda Advanced Yoga Teacher Training Course is a 4-week immersion for serious students of yoga to take their knowledge and practice to deeper levels, fostering a profound understanding of sadhana and spiritual life. This 500-hour certification course allows graduates from the Sivananda Yoga TTC to deepen their training and practice through in-depth study of Vedanta philosophy and the Yoga Sutras of Patanjali Maharishi; daily practice of advanced hatha yoga techniques, including asana variations and advanced pranayama; study of Karma Yoga and Bhakti Yoga; anatomy and physiology of the nervous system; and an introduction to the Sanskrit language.
              </p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white p-2 md:p-3">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
                    alt="Advanced Yoga Teacher Training Pranayama"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. YOGA ALLIANCE CERTIFIED SECTION */}
        <section className="max-w-5xl mx-auto pb-24 px-6">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left: Certificate Image */}
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative flex items-center justify-center bg-gray-50/50 rounded-full overflow-hidden">
              <Image
                src="https://zjffxjmsumxcdmqslmhw.supabase.co/storage/v1/object/public/Icon/certificate.png"
                alt="Yoga Alliance RYS 500 Certified"
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
              <p className="text-base text-gray-500 uppercase tracking-widest font-semibold mb-6">
                4-WEEK IMMERSION STUDY - GRADUATE WITH GLOBAL CERTIFICATION
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                In the Sivananda Advanced Yoga Teacher Training you will deepen your practice and gain advanced teaching skills. After graduation, participants will receive a certification from the International Sivananda Yoga Vedanta Centers that confirms they have the profound knowledge and experience to teach Hatha Yoga, which qualifies them to apply for Registered Yoga Teacher (500 hour) status from the International Yoga Alliance.
              </p>
            </div>
          </div>
        </section>

        {/* 4. BENEFITS OF ATTC SECTION */}
        <section className="relative w-full py-24 px-6 min-h-[850px] flex flex-col items-center justify-center overflow-hidden bg-[#FDFCF8]">
          {/* Background Layers */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMG_MOUNTAINS}
              alt="Mountains Background"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/60 to-[#FDFCF8]"></div>

            {/* Faded Background Heart */}
            <svg
              viewBox="0 0 24 24"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] text-[#FEF5E7] opacity-60 z-0 drop-shadow-2xl mix-blend-multiply"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold mb-4">
                Benefits of ATTC
              </h2>
              <p className="text-[#4A4A4A] text-lg md:text-xl font-medium">
                Advance Your Training. Reconnect with the Tradition
              </p>
            </div>

            {/* Heart Layout Container */}
            <div className="relative w-full min-h-[550px] flex flex-col md:block items-center gap-12">
              {/* Center Button */}
              <div className="md:absolute md:top-[20%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 order-last md:order-none mt-8 md:mt-0">
                <button className="bg-[#ED7D4D] text-white px-10 py-4 rounded-sm font-bold tracking-widest text-base uppercase hover:bg-orange-600 transition-colors shadow-[0_10px_30px_rgba(237,125,77,0.3)]">
                  Enroll Now
                </button>
              </div>

              {/* Item 1: Top Left */}
              <div className="md:absolute md:top-0 md:left-0 lg:left-[5%] flex flex-col items-center text-center w-full max-w-[280px]">
                <div className="w-24 h-24 rounded-full bg-[#F4F7F0] flex items-center justify-center mb-6 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#1a1a1a]">
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v6" />
                    <path d="M8 11l4-4 4 4" />
                    <path d="M12 13l-4 8" />
                    <path d="M12 13l4 8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0B3B24] mb-3">Deepen Your Practice</h3>
                <p className="text-base text-[#4A4A4A] leading-relaxed">
                  Master advanced asanas and pranayama techniques to strengthen your personal practice.
                </p>
              </div>

              {/* Item 2: Top Right */}
              <div className="md:absolute md:top-0 md:right-0 lg:right-[5%] flex flex-col items-center text-center w-full max-w-[280px]">
                <div className="w-24 h-24 rounded-full bg-[#F4F7F0] flex items-center justify-center mb-6 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#1a1a1a]">
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <path d="M12 11c-2 0-4 2-4 4s2 4 4 4" />
                    <path d="M12 11c2 0 4 2 4 4s-2 4-4 4" />
                    <path d="M7 11l5-4 5 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0B3B24] mb-3">Reunite with Tradition</h3>
                <p className="text-base text-[#4A4A4A] leading-relaxed">
                  Reconnect with the Sivananda lineage, senior teachers, and a vibrant global yoga community.
                </p>
              </div>

              {/* Item 3: Bottom Left */}
              <div className="md:absolute md:bottom-0 md:left-[10%] lg:left-[20%] flex flex-col items-center text-center w-full max-w-[280px]">
                <div className="w-24 h-24 rounded-full bg-[#FEF5E7] flex items-center justify-center mb-6 shadow-sm">
                  <GraduationCap className="w-10 h-10 text-[#1a1a1a]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B3B24] mb-3">Expand Your Knowledge</h3>
                <p className="text-base text-[#4A4A4A] leading-relaxed">
                  Dive into the depths of Vedanta philosophy and the Yoga Sutras for a richer understanding of the yogic path.
                </p>
              </div>

              {/* Item 4: Bottom Right */}
              <div className="md:absolute md:bottom-0 md:right-[10%] lg:right-[20%] flex flex-col items-center text-center w-full max-w-[280px]">
                <div className="w-24 h-24 rounded-full bg-[#FEF5E7] flex items-center justify-center mb-6 shadow-sm">
                  <Globe className="w-10 h-10 text-[#1a1a1a]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B3B24] mb-3">International Certificate</h3>
                <p className="text-base text-[#4A4A4A] leading-relaxed">
                  Become a certified 500-hour Yoga Instructor, globally respected and recognized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DAILY SCHEDULE SECTION */}
        <section className="max-w-7xl mx-auto py-24 px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            <div className="w-full lg:w-[45%]">
              <h2 className="text-3xl font-serif text-[#0B3B24] font-bold mb-6">
                Daily Schedule
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-10">
                The ATTC daily schedule is intensive and follows the traditional gurukula system. The balanced routine of advanced practice, deep philosophical study, selfless service, and meditation is designed to elevate your prana and calm the mind.
              </p>
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={IMG_SCHEDULE}
                  alt="Daily Yoga Practice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>

            <div className="w-full lg:w-[55%] flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-10 md:pt-0 md:pl-10 lg:pl-16">
              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 pb-6 border-b border-gray-100 last:border-0 relative"
                  >
                    <div className="w-24 flex-shrink-0 font-bold text-[#0B3B24] pt-1">
                      {item.time}
                    </div>
                    <div className="flex-grow text-[#4A4A4A] pt-1">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. WHAT INCLUDES IN THE PACKAGE SECTION */}
        <PackageInclusion />

        {/* 7. UPCOMING COURSE BANNER */}
        <section className="relative w-full min-h-[500px] flex items-center justify-center text-center px-6 py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
              alt="Upcoming ATTC Course"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold mb-4">
              The Upcoming [Course] in Dalat, Vietnam
            </h2>
            <p className="text-xl md:text-2xl text-[#0B3B24] font-bold mb-10">
              
            </p>

            <p className="text-[#4A4A4A] italic mb-2 font-medium">
              
            </p>
            <p className="text-base md:text-base text-[#4A4A4A] mb-12">
              – Swami Sivananda in &quot;Sivananda Upanishad&quot;
            </p>

            <button className="bg-[#ED7D4D] text-white px-10 py-4 rounded-sm font-bold tracking-widest text-base uppercase hover:bg-orange-600 transition-colors shadow-lg">
              Register Now
            </button>
          </div>
        </section>

        {/* CURRICULUM SECTION (above footer) */}
        <section className="bg-[#FDFCF8] py-24 px-6 w-full overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-24">
              <h2 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold mb-6">
                Curriculum
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed md:text-xl">
                The ATTC curriculum deepens your yoga journey with advanced asana training, extended pranayama, in-depth Vedanta and Raja Yoga study, Sanskrit writing and mantra pronunciation, and detailed anatomy. It also explores Bhakti and Karma Yoga, cultivating a holistic understanding of yoga as a path of physical mastery, mental clarity, and spiritual growth.
              </p>
            </div>

            <div className="space-y-20 md:space-y-32">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[45%] relative z-10">
                  <div className="aspect-[4/3] md:aspect-[3/2] relative rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                    <Image
                      src={IMG_SCHEDULE}
                      alt="Asana Practice"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[65%] bg-[#FEF5E7] z-0 p-8 md:p-12 lg:p-16 md:pl-24 lg:pl-32 md:-ml-16 lg:-ml-24 mt-[-2rem] md:mt-0 rounded-sm">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-1">Asana</h3>
                  <h4 className="text-[#0B3B24] font-bold mb-6">The Foundational Poses</h4>
                  <div className="text-[#4A4A4A] space-y-2 text-base md:text-lg leading-relaxed">
                    <p className="mb-4">Daily in-depth practice and teaching instruction with personal corrections include</p>
                    <p>- Deepening the practice of the twelve basic asanas</p>
                    <p>- Training in classical advanced variations</p>
                    <p>- Principles of postural alignment</p>
                    <p>- Expanded understanding of Hatha Yoga</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-[45%] relative z-10">
                  <div className="aspect-[4/3] md:aspect-[3/2] relative rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
                      alt="Pranayama Practice"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[65%] bg-[#FEF5E7] z-0 p-8 md:p-12 lg:p-16 md:pr-24 lg:pr-32 md:-mr-16 lg:-mr-24 mt-[-2rem] md:mt-0 rounded-sm">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-1">Pranayama</h3>
                  <h4 className="text-[#0B3B24] font-bold mb-6">Control of Prana</h4>
                  <div className="text-[#4A4A4A] space-y-2 text-base md:text-lg leading-relaxed">
                    <p>- Extended practice of Anuloma Viloma</p>
                    <p>- Practice of advanced Pranayamas</p>
                    <p>- Application and understanding of the Bandhas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM SECTION PART 2 (extended blocks) */}
        <section className="bg-[#FDFCF8] py-24 px-6 w-full overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-20 md:space-y-32">
              {/* Block 3: Vedanta */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[45%] relative z-10">
                  <div className="aspect-[4/3] md:aspect-[3/2] relative rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800"
                      alt="Vedanta Study"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[65%] bg-[#FEF5E7] z-0 p-8 md:p-12 lg:p-16 md:pl-24 lg:pl-32 md:-ml-16 lg:-ml-24 mt-[-2rem] md:mt-0 rounded-sm">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-1">Vedanta</h3>
                  <h4 className="text-[#0B3B24] font-bold mb-6">The Ultimate Philosophy</h4>
                  <div className="text-[#4A4A4A] space-y-2 text-base md:text-lg leading-relaxed">
                    <p className="mb-4">Overview of India&apos;s philosophical school</p>
                    <p>- Use of analogies to approach Supreme Reality</p>
                    <p>- Study of Vedantic meditation techniques</p>
                    <p>- Explanation of Vedantic Mantras</p>
                  </div>
                </div>
              </div>

              {/* Block 4: Sanskrit */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-[45%] relative z-10">
                  <div className="aspect-[4/3] md:aspect-[3/2] relative rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                    <Image
                      src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-teaching-course-testinomial.webp"
                      alt="Sanskrit Study"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[65%] bg-[#FEF5E7] z-0 p-8 md:p-12 lg:p-16 md:pr-24 lg:pr-32 md:-mr-16 lg:-mr-24 mt-[-2rem] md:mt-0 rounded-sm">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-1">Sanskrit</h3>
                  <h4 className="text-[#0B3B24] font-bold mb-6">The Language of High Vibration</h4>
                  <div className="text-[#4A4A4A] space-y-2 text-base md:text-lg leading-relaxed">
                    <p>- Learning the Devanagari script and Sanskrit alphabet</p>
                    <p>- Accurate pronunciation and writing of mantras and hymns</p>
                  </div>
                </div>
              </div>

              {/* Block 5: Advanced Anatomy & Physiology */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[45%] relative z-10">
                  <div className="aspect-[4/3] md:aspect-[3/2] relative rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                    <Image
                      src="https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Yoga_ayurveda_homepage.jpg"
                      alt="Anatomy Class"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[65%] bg-[#FEF5E7] z-0 p-8 md:p-12 lg:p-16 md:pl-24 lg:pl-32 md:-ml-16 lg:-ml-24 mt-[-2rem] md:mt-0 rounded-sm">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-6">Advanced Anatomy & Physiology</h3>
                  <div className="text-[#4A4A4A] space-y-2 text-base md:text-lg leading-relaxed">
                    <p>- Study of cells, nervous system, and endocrine glands</p>
                    <p>- Their connection to asana, pranayama, and meditation practices</p>
                  </div>
                </div>
              </div>

              {/* Block 6: Raja Yoga, Bhakti Yoga & Karma Yoga */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-[45%] relative z-10">
                  <div className="aspect-[4/3] md:aspect-[3/2] relative rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800"
                      alt="Raja Bhakti Karma Yoga"
                      fill
                      className="object-cover grayscale contrast-125"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[65%] bg-[#FEF5E7] z-0 p-8 md:p-12 lg:p-16 md:pr-24 lg:pr-32 md:-mr-16 lg:-mr-24 mt-[-2rem] md:mt-0 rounded-sm">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-6">Raja Yoga, Bhakti Yoga & Karma Yoga</h3>
                  <div className="text-[#4A4A4A] space-y-6 text-base md:text-lg leading-relaxed">
                    <div>
                      <h4 className="text-[#0B3B24] font-bold uppercase tracking-wide text-base mb-2">Raja Yoga</h4>
                      <p>- Comprehensive study of Patanjali&apos;s Yoga Sutras</p>
                      <p>- Understanding the mind and its control</p>
                      <p>- In-depth exploration of the eight limbs of Raja Yoga</p>
                    </div>
                    <div>
                      <h4 className="text-[#0B3B24] font-bold uppercase tracking-wide text-base mb-2">Bhakti Yoga</h4>
                      <p>- The nine forms of devotion</p>
                      <p>- Exploration of the five devotional attitudes</p>
                    </div>
                    <div>
                      <h4 className="text-[#0B3B24] font-bold uppercase tracking-wide text-base mb-2">Karma Yoga</h4>
                      <p>- Understanding selfless service as the foundation of sadhana</p>
                      <p>- Cultivating purity of heart and mind through action</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeniorTeachers />

        <StudentFeedback />

        <AshramGallery />
      </main>
      <Footer />
    </div>
  );
}
