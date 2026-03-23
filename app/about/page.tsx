"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const IMG_GURUS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/sivanada_master04.jpg.jpg";
const IMG_SIVANANDA =
  "https://zjffxjmsumxcdmqslmhw.supabase.co/storage/v1/object/public/Icon/Swami-Sivananda-Sivananda-Yoga-New-York.jpg";
const IMG_SIVANANDA_QUOTE_BG =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000";
const IMG_SIVANANDA_MISSION_BG =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000";
const IMG_VISHNU_QUOTE_BG =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000";
const IMG_LIFE_1 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/siva.jpg";
const IMG_LIFE_2 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/p153.jpg";
const IMG_LIFE_3 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/sivanada_master01.jpeg";
const IMG_LIFE_4 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Swami_Chinmayananda_on_his_day_of_Sannyas_initiation,_with_Guru_Swami_Sivananda_and_other_disciples,_Feb_25,_1949,_Maha_Shivratri_Day.jpg";
const sivanandaImages = [IMG_LIFE_1, IMG_LIFE_2, IMG_LIFE_3, IMG_LIFE_4];
const IMG_VISHNU =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/89-V-red-shirt-diff-shot.jpg";
const IMG_VISHNU_LIFE_1 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/62-V-Crow-%20rishikesh-23.jpg";
const IMG_VISHNU_LIFE_2 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/dhanurasana-posture-arc.webp";
const IMG_VISHNU_LIFE_3 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/SwamijiMahasamadhi-1.jpg";
const IMG_VISHNU_LIFE_4 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Swami-Vishnudevananda.webp";
const vishnudevanandaImages = [
  IMG_VISHNU_LIFE_1,
  IMG_VISHNU_LIFE_2,
  IMG_VISHNU_LIFE_3,
  IMG_VISHNU_LIFE_4,
];
const IMG_PLANE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/90-V-sits-on-wing-of-peace-plane-2.jpg";
const IMG_SITARA_1 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/38eda06e-7fc8-49d7-91e3-b531832412a5.jpg";
const IMG_SITARA_2 =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/f8f57361-4042-47ef-b684-5489f2b579b2.png";
const IMG_ENDURING_LEGACY_BG =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/Vishnudevananda-swami-vishnu.png";
const IMG_SITARA_PORTRAIT =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/sw_Sita.jpg";
const IMG_SITARA_QUOTE_BG =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000";
const IMG_SITARA_BOTTOM_SPLIT =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/967eedd3-7b04-468c-a9d2-e14a7db6e.png";
const IMG_FINAL_CTA_BG =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* FULL WIDTH IMAGE WRAPPER - NO PADDING, NO FIXED HEIGHT */}
      <section className="w-full m-0 p-0 leading-none">
        <Image
          src={IMG_GURUS}
          alt="Sivananda Yoga Hero"
          width={2000}
          height={1125}
          className="w-full h-auto block"
          priority
          sizes="100vw"
        />
      </section>

      {/* 2. OUR LINEAGE INTRO TEXT */}
      <section className="w-full bg-[#FDFCF8] py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 font-serif text-4xl text-[#0B3B24] md:text-6xl">
            Our Lineage
          </h1>
          <h2 className="mb-12 font-serif text-xl italic text-gray-500 md:text-2xl">
            From India to Vietnam
          </h2>

          <div className="space-y-6 text-base font-light leading-relaxed text-[#4A4A4A] md:text-lg">
            <p>
              The International Sivananda Yoga Vedanta Centres, founded by Swami Vishnudevananda under the guidance of Swami Sivananda, has grown since 1959 to nearly 60 global locations. Recognized for authentic yoga teachings, it has trained over 50,000 teachers and offers diverse programs, including personal growth through Karma Yoga service.
            </p>
            <p>
              Sivananda Yoga has a long history of teaching in Asia. When Swami Vishnudevananda first came to the West, he stopped in Hong Kong, Malaysia, Taiwan, and the Philippines. Today, Sivananda Yoga teachings continue in these countries—and in Vietnam—carrying forward Swami Vishnudevananda&apos;s global vision of peace, health, and spiritual awakening.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SWAMI SIVANANDA BIO SECTION */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] uppercase tracking-wide">
                Swami Sivananda
              </h2>
              <p className="text-xl md:text-2xl font-bold text-[#0B3B24] mt-2">
                (1887–1963)
              </p>
            </div>

            <div className="text-[#4A4A4A] leading-relaxed space-y-6 text-base md:text-lg">
              <p>
                Swami Sivananda was a passionate medical doctor who left his profession to become a monk and a &quot;doctor of the soul.&quot; Realizing that physical medicine alone could not relieve suffering, he embarked on a spiritual quest, practicing deep meditation and austerities in the Himalayas. He later founded the Sivananda Ashram in 1932 and the Divine Life Society in 1936.
              </p>
              <p>
                A prolific teacher and author, Swami Sivananda wrote over 200 books on Yoga and Vedanta, and around 30 books on health. His teachings synthesize the four classical paths of yoga—Karma Yoga, Bhakti Yoga, Raja Yoga, and Jnana Yoga—into a practical system for spiritual growth. His method is simple and powerful: practice daily through Serve, Love, Give, Purify, Meditate, and Realize.
              </p>
              <p>
                He foresaw the global need for Yoga and trained many Western disciples, including Swami Vishnudevananda, to spread these teachings abroad.
              </p>
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <Image
                src={IMG_SIVANANDA}
                alt="Swami Sivananda"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUOTE BANNER SECTION */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_SIVANANDA_QUOTE_BG}
            alt="Forest Path"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight drop-shadow-md">
            &quot;Serve, Love, Give, Purify, Meditate, Realize.&quot;
          </h2>
          <p className="text-lg md:text-xl tracking-widest font-medium opacity-90 drop-shadow-sm">
            -Swami Sivananda-
          </p>
        </div>
      </section>

      {/* 4. LIFE OF SWAMI SIVANANDA SECTION */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] uppercase tracking-widest mb-20 border-b border-gray-200 pb-6 inline-block">
            Life of Swami Sivananda
          </h2>

          <div className="space-y-32">
            {/* Block 1: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold">
                  A Soul Born for Service
                </h3>
                <h4 className="text-xl font-bold text-[#0B3B24] mb-4">
                  Rooted in Tradition, Guided by Duty
                </h4>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    Born in South India, Swami Sivananda was instilled with a deep sense of duty and compassion from an early age. His upbringing in a family of traditional scholars laid the foundation for his future spiritual journey.
                  </p>
                  <p>
                    Even in his youth, he demonstrated a natural inclination towards helping others, a trait that would eventually lead him to the medical profession and, later, to spiritual leadership. He was known for his tireless energy and boundless love for all beings.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={sivanandaImages[0]}
                    alt="Sivananda blessing"
                    fill
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold">
                  Become a monk
                  <br />
                  and a &quot;doctor&quot; of the soul
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    After a successful career as a medical doctor in Malaysia, serving the poor and the sick, he felt a deeper calling. He realized that physical medicine alone could not cure the ultimate suffering of humanity.
                  </p>
                  <p>
                    Renouncing his worldly life in 1924, he returned to India and settled in Rishikesh, Himalayas. There, he dedicated himself to intense spiritual practices, austerities, and the study of sacred scriptures, transforming from a healer of the body to a healer of the soul.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={sivanandaImages[1]}
                    alt="Sivananda teaching"
                    fill
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Block 3: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold">
                  Meditating in Silence,
                  <br />
                  Serving in Action
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    In Rishikesh, Swami Sivananda perfectly balanced the life of deep meditation with selfless service. He established a small charitable dispensary to continue serving the sick pilgrims and sadhus in the region.
                  </p>
                  <p>
                    His philosophy was clear: spiritual evolution requires both inner contemplation and outer action. He taught that Karma Yoga (selfless service) purifies the heart, making it ready to receive the light of divine knowledge through meditation.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={sivanandaImages[2]}
                    alt="Sivananda standing outdoors"
                    fill
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Block 4: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold">
                  From the Himalayas to Humanity
                </h3>
                <h4 className="text-xl font-bold text-[#0B3B24] mb-4">
                  ... A Sanctuary of Divine Life Emerges
                </h4>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    To disseminate his teachings systematically, Swami Sivananda founded the Divine Life Society in 1936 and the Sivananda Ashram. His ashram became a beacon of light, attracting seekers from all over the world.
                  </p>
                  <p>
                    He authored hundreds of books, making profound spiritual truths accessible to the common man. His overarching message was simple: Yoga is not just for ascetics in caves, but a practical science for everyone to achieve health, peace, and self-realization in daily life.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={sivanandaImages[3]}
                    alt="Sivananda with followers"
                    fill
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM TEXT OVERLAY SECTION */}
      <section className="relative w-full py-24 md:py-32 flex justify-center px-6">
        {/* Faded Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_SIVANANDA_MISSION_BG}
            alt="Forest Background"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-[#4A4A4A] text-base md:text-lg leading-relaxed text-justify md:text-left font-medium">
          <p>
            Swami Sivananda&apos;s teachings are characterized by their practical approach and universal appeal. He did not create a new religion but rather synthesized the essence of all religions and spiritual traditions into a comprehensive system of Yoga. He emphasized that spiritual life must be integrated into daily activities.
          </p>
          <p>
            He trained countless disciples, empowering them to carry the light of Yoga to all corners of the globe. Among them was Swami Vishnudevananda, whom he sent to the West with a simple mandate: &quot;People are waiting. Many souls are hungry for peace. Go and bring them the teachings of Yoga.&quot;
          </p>
          <p>
            Today, the legacy of Swami Sivananda continues to inspire millions. His ashrams and centers worldwide stand as sanctuaries of peace, offering authentic teachings that guide individuals toward physical health, mental clarity, and spiritual fulfillment. His life itself remains his greatest teaching—a testament to the power of love, service, and unwavering dedication to the Divine.
          </p>
        </div>
      </section>

      {/* ========================================= */}
      {/* PART 2: SWAMI VISHNUDEVANANDA             */}
      {/* ========================================= */}

      {/* 6. SWAMI VISHNUDEVANANDA BIO SECTION */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] uppercase tracking-wide">
                Swami Vishnu-devananda
              </h2>
              <p className="text-xl md:text-2xl font-bold text-[#0B3B24] mt-2">
                (1927–1993)
              </p>
            </div>

            <div className="text-[#4A4A4A] leading-relaxed space-y-6 text-base md:text-lg">
              <p>
                Swami Vishnu-devananda was sent by his Master Swami Sivananda to America in 1957 to spread the teachings of Yoga and Vedanta to the masses. He was a pioneer in teaching the Yogic Lifestyle of the five points, and introduced the West to the concept of Yoga Vacations, Yoga Teachers Training courses, and Yoga Children&apos;s camp.
              </p>
              <p>
                His approach was classical yet practical, adapted to modern needs and lifestyles. He is the author of the best-selling Complete Illustrated Book of Yoga, translated into more than a dozen languages around the world.
              </p>
              <p>
                Swamiji founded the International Sivananda Yoga Vedanta Centers and also founded the True World Order to train new leaders in inner Peace. Swamiji was also a world renowned Peace missionary. Swamiji tirelessly brought to mankind the message of &quot;Unity in Diversity&quot; and &quot;Health is wealth, peace of mind is happiness, and Yoga shows the way.&quot; He attained Mahasamadhi in 1993 in India.
              </p>
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <Image
                src={IMG_VISHNU}
                alt="Swami Vishnudevananda"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUOTE BANNER SECTION */}
      <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_VISHNU_QUOTE_BG}
            alt="Forest Path"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight drop-shadow-md">
            &quot;Health is wealth, peace of mind is happiness, and Yoga shows the way&quot;
          </h2>
          <p className="text-lg md:text-xl tracking-widest font-medium opacity-90 drop-shadow-sm">
            —Swami Vishnudevananda
          </p>
        </div>
      </section>

      {/* 8. LIFE OF SWAMI VISHNUDEVANANDA SECTION */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] uppercase tracking-widest mb-20 border-b border-gray-200 pb-6 inline-block">
            Life of Swami Vishnudevananda
          </h2>

          <div className="space-y-32">
            {/* Block 1: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold">
                  His Early Training: In the Footsteps of Faith
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    Swami Vishnudevananda (Swamiji) was born in Kerala, South India, in 1927. He entered the Sivananda Ashram in Rishikesh in 1947 at the age of twenty. He took sannyasa (became a monk) and was appointed the first professor of Hatha yoga at the Sivananda Yoga Vedanta Forest Academy. There he trained many students, both Indian and Western.
                  </p>
                  <p>
                    At the same time, he continued his own practice, mastering difficult, advanced &quot;hatha yoga&quot; techniques. When asked how he perfected these ancient practices, which to a great extent had been lost to the modern world, Swamiji would say, &quot;My master touched me and opened my eye of intuition. All this knowledge returned to me from past lives.&quot; For ten years, he lived and worked under the direct guidance of his master.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden shadow-2xl p-4 bg-white">
                  <div className="relative w-full h-full">
                    <Image
                      src={vishnudevanandaImages[0]}
                      alt="Headstand practice"
                      fill
                      className="object-cover grayscale contrast-125"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold">
                  Intensive Practise
                  <br />
                  --- Seclusion in Uttarkashi, Himalaya
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    Shortly after taking &quot;sannyasa&quot;, Swamiji felt a great need to be alone and do intense &quot;sadhana&quot;. With the permission of his Master, he walked to Uttarkashi. Here Swamiji found a small house. &quot;Asanas&quot; and &quot;pranayama&quot; were done four times daily in sessions of four hours each. The Ganges flowed in front of the cottage and he went to it for bathing and &quot;kriyas&quot;. All he ate was lentils and rice.
                  </p>
                  <p>
                    After 3 months of austerities, it was time to return to the &quot;ashrama&quot;. Swamiji now threw himself into his work with new gusto. He had many creative ideas, and also the energy to carry them out.
                  </p>
                  <p>
                    Once Master said to him, &quot;Vishnu Swami, now I see your kundalini rising. When this happens, the mind is flooded with inspiration.&quot;
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={vishnudevanandaImages[1]}
                    alt="Himalaya Hut"
                    fill
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Block 3: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold">
                  The Journey West: &quot;People are waiting&quot;
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    One day Swami Sivananda gave Swamiji a 10 Rupee note (less than a dollar!) and his blessings to travel to the West and spread the teachings of yoga and vedanta. &quot;People are waiting&quot; were the words of the Master.
                  </p>
                  <p>
                    Upon leaving India for the West, Swami Vishnudevananda spent a year travelling, arriving on the West Coast of America in 1957. It soon became apparent that Westerners were so caught up in the whirlwind of their lives that they neither knew how to relax nor how to live healthy lives. Swami Vishnudevananda devised the concept of the Yoga Vacation and set about creating places where people could have a complete rest of body, mind and spirit.
                  </p>
                  <p>
                    By closely observing the lifestyles and needs of people in the West, Swami Vishnudevananda synthesised the ancient wisdom of yoga into five basic principles that could easily be incorporated into daily life to provide the foundation for healthy living: Proper Exercise, Proper Breathing, Proper Relaxation, Proper Diet (vegetarian), and Meditation and Positive Thinking.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={vishnudevanandaImages[2]}
                    alt="Teaching Yoga Class"
                    fill
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Block 4: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-serif text-[#0B3B24] font-bold">
                  A Vision for Peace, A Life of Unity
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  <p>
                    In 1969 he found the True World Order to help create unity and understanding between peoples of the world. A unique Yoga Teacher Training Course was developed with the aim of training future leaders and responsible citizens in the basics of yoga discipline. Swami Vishnudevananda emphasized the importance of first finding individual inner peace which could then lead to establishing global peace and harmony.
                  </p>
                  <p>
                    The first Sivananda Yoga Teachers&apos; Training Course was held in 1969 at the Sivananda Yoga Camp headquarters in Val Morin, Quebec, Canada and to date more than 45,000 people have graduated successfully from the course – many having gone on to spread the teachings of yoga around the world.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[3/5] rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={vishnudevanandaImages[3]}
                    alt="Walking in crowd"
                    fill
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM MISSION BANNER SECTION */}
      <section className="w-full flex flex-col">
        {/* Top: Full Width Image (No overlay covering it) */}
        <div className="relative w-full h-[400px] md:h-[600px]">
          <Image
            src={IMG_PLANE}
            alt="Peace Plane"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>

        {/* Bottom: Text Content on Light Background */}
        <div className="w-full bg-[#FDFCF8] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            {/* Title */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0B3B24] font-bold leading-tight">
                Mission<br className="hidden md:block" />
                Beyond<br className="hidden md:block" />
                Borders
              </h2>
            </div>
            {/* Description */}
            <div className="w-full md:w-2/3 lg:w-3/4 space-y-6 text-[#4A4A4A] text-base md:text-lg leading-relaxed font-medium">
              <p>
                In 1968 Swami Vishnudevananda had a vision of the world being destroyed by fire, of people fleeing in turmoil breaking down the barriers between nations in an attempt to escape. From that moment on, he embarked on a series of peace missions whose purpose was to show &apos;that the idea of nationalism, or patriotism must disappear, and only one unity should exist.&apos;
              </p>
              <p>
                Swamiji tirelessly brought to mankind the message of &quot;Unity in Diversity&quot; and &quot;Health is wealth, peace of mind is happiness, and Yoga shows the way.&quot; He attained Mahasamadhi in 1993 in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. AN ENDURING LEGACY SECTION */}
      <section className="relative w-full min-h-[600px] md:min-h-[750px] flex items-stretch">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_ENDURING_LEGACY_BG}
            alt="An Enduring Legacy"
            fill
            className="object-cover md:object-[70%_center]"
            sizes="100vw"
            unoptimized
          />
        </div>

        {/* Left Overlay Content Panel */}
        <div className="relative z-10 w-full md:w-[45%] lg:w-[40%] xl:w-[35%] bg-[#1A1A1A]/80 backdrop-blur-sm p-8 md:p-12 lg:p-16 flex flex-col justify-center border-r border-white/10">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-6 drop-shadow-sm">
            An Enduring Legacy
          </h2>

          <div className="space-y-5 text-white/90 text-sm md:text-base font-light leading-relaxed">
            <p>
              Swami Vishnudevananda was an innovator and a pioneer in his methods of disseminating the classical Yoga teachings that he learned from his Master, Swami Sivananda and to whom he dedicated his life&apos;s work. He demystified yoga and offered clear, practical techniques for people to spiritualise their lives and attain health, mental balance and inner peace.
            </p>
            <p>
              Perhaps his greatest contribution was to popularize Yoga philosophy and practice throughout the West by establishing worldwide network of Centres and Ashrams that made yoga easily accessible to all. The key to this injection of Yoga into the mass culture was the founding of the Sivananda Teachers&apos; Training Courses in 1969 to train people in the essence of Yoga and Vedanta. He asked his teachers to be practitioners, and not mere preachers, and to date countless graduates are now teaching throughout the world.
            </p>
            <p>
              Swami Vishnudevananda used to say, &quot;Before you can change the world, first you have to change yourself. The only way to change society is like changing a cotton cloth to a silk one – by changing each thread one by one&quot;. Through this vast network of Yoga teachers, the social fibre is changing.
            </p>
            <p>
              The International Sivananda Organization has actively carried on his teaching mission in many countries, including in Vietnam, where Swami Sitaramananda — a devoted disciple since 1982 — carries the light of his mission forward with unwavering dedication.
            </p>
          </div>
        </div>

        {/* Right side is intentionally left empty to let the background image shine through */}
        <div className="hidden md:block flex-grow relative z-10 pointer-events-none"></div>

      </section>

      {/* ========================================= */}
      {/* PART 3: SWAMI SITARAMANANDA               */}
      {/* ========================================= */}

      {/* 11. SWAMI SITARAMANANDA BIO SECTION */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] uppercase tracking-wide">
                Swami Sitaramananda
              </h2>
              <p className="text-xl md:text-2xl font-bold text-[#0B3B24] mt-2">
                born in 1952 in Dalat, Vietnam
              </p>
            </div>

            <div className="text-[#4A4A4A] leading-relaxed space-y-6 text-base md:text-lg">
              <p>
                Swami Sitaramananda is Vietnamese and has been a disciple of Swami Vishnudevananda since 1982 and serves as the Acharya (senior teacher) for Sivananda centers in the West, including the U.S. and Asia.
              </p>
              <p>
                She is devoted to health and healing, especially healing the mind and emotions, and is a leader in promoting the healing power of Yoga and meditation.
              </p>
              <p>
                Her life embodies over 40 years of unwavering dedication to her Guru&apos;s mission and a vast ocean of love for humanity. As a guiding light for thousands of yogis in Vietnam and across Asia, she brings spiritual strength and clarity, offering hope and healing to millions seeking peace amid the stress and suffering of modern life.
              </p>
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm overflow-hidden shadow-xl">
              <Image
                src={IMG_SITARA_PORTRAIT}
                alt="Swami Sitaramananda walking"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 12. QUOTE BANNER SECTION */}
      <section className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_SITARA_QUOTE_BG}
            alt="Forest Path"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h2 className="text-2xl md:text-3xl font-serif mb-4 leading-tight drop-shadow-md">
            &quot;Placeholder quote&quot;
          </h2>
          <p className="text-base md:text-lg tracking-widest font-medium opacity-90 drop-shadow-sm">
            — Swami Sitaramananda
          </p>
        </div>
      </section>

      {/* 13. STAGGERED HISTORY SECTION */}
      <section className="bg-[#FDFCF8] py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Block 1: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold">
                A Life of Dedication
              </h3>
              <h4 className="text-xl font-bold text-[#0B3B24] mb-6">
                Four Decades of Unwavering Service
              </h4>
              <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                <p>
                  Swami Sitaramananda has over 40 years of experience teaching classical yoga around the world. She is the author of the book Sivananda Yoga: Philosophy and Practice (translated into Chinese, Japanese, and Vietnamese), as well as Positive Thinking Manual, The Meditation Manual, 108 Health Tips in Yoga, Light from the Source, The Answer Lies Within, Learning to Love Purely, and two volumes of poetry.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl p-3 bg-white">
                <div className="relative w-full h-full">
                  <Image
                    src={IMG_SITARA_1}
                    alt="Teaching on stage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold">
                Carrying the Flame of Her Guru
              </h3>
              <h4 className="text-xl font-bold text-[#0B3B24] mb-6">
                — Planting Seeds of Peace
              </h4>
              <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                <p>
                  Swami Sitaramananda has been instrumental in spreading Sivananda Yoga across Asia, continuing the mission of her guru, Swami Vishnudevananda. She introduced the teachings to China, Japan, Taiwan, and especially her birthplace, Vietnam, where she established the Sivananda Yoga Ashram in Dalat and three main centers in Hanoi, Ho Chi Minh City, and Dalat.
                </p>
                <p>
                  Since 2009, the Ashram and centers have trained hundreds of yoga teachers each year and become a sanctuary for thousands from Vietnam and beyond — a place for retreat, self-healing, recovery, and finding peace amid the stress and suffering of modern life.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden shadow-xl">
                <Image
                  src={IMG_SITARA_2}
                  alt="Under cherry blossoms"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. BOTTOM SPLIT BANNER */}
      <section className="w-full flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
        {/* Left: Solid Dark Color with Text */}
        <div className="w-full md:w-1/2 bg-[#43525B] p-10 md:p-16 lg:p-24 flex flex-col justify-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Blending Ancient Wisdom with Modern Need
          </h2>
          <h3 className="text-xl md:text-2xl font-medium mb-8 text-white/90">
            — Training Health Educators, Inspiring Seekers
          </h3>

          <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed">
            <p>
              Swami Sitaramananda founded the Sivananda Yoga Health Educator Training Program, an 800-hour, 2-year course that equips students with traditional yogic tools for natural healing.
            </p>
            <p>
              She also recently authored Yoga Sadhana for Self Healing, a 400+ page guide rooted in the Sivananda lineage. Drawing from Vedantic wisdom and her own healing journey, the book offers a practical, spiritual path to health, balance, and wellness – empowering seekers to awaken, heal, and find peace through conscious yogic living.
            </p>
          </div>
        </div>

        {/* Right: Full Cover Image */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
          <Image
            src={IMG_SITARA_BOTTOM_SPLIT}
            alt="Swami Sitaramananda close up"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* 15. FINAL CTA SECTION */}
      <section className="relative w-full py-32 px-6 flex items-center justify-center text-center min-h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG_FINAL_CTA_BG}
            alt="Join the Lineage"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          {/* Light mist overlay */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0B3B24] mb-4">
            Join the Lineage by Karma Yoga
          </h2>
          <p className="text-xl md:text-2xl text-[#4A4A4A] mb-10 font-medium">
            Path the way of study.. Devotion through Service
          </p>
          <Link href="/yoga-vacation">
            <button className="bg-[#E5F5C8] hover:bg-[#d4e8aa] text-[#0B3B24] px-10 py-4 font-bold tracking-widest text-base uppercase transition-colors shadow-sm rounded-sm">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
