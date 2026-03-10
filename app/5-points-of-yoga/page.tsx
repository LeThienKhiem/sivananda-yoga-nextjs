import Image from "next/image";
import Header from "@/components/Header";
import EventsCarousel from "@/components/EventsCarousel";
import Footer from "@/components/Footer";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop";
const IMG_SWAMI_TEACHING =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-01.png";
const IMG_VALLEY_OVERLOOK =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/yoga-vacation-06.png";
const IMG_ASANA =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-02.png";
const IMG_CONSCIOUS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-03.png";
const IMG_SPINE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-04.png";
const IMG_BODY_MIND =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-14.png";
const IMG_PRANAYAMA =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/training-01.png";
const IMG_HA_THA =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/4way-yoga-16.png";
const IMG_SAVASANA =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-05.png";
const IMG_RELAXATION_LEVELS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-06.png";
const IMG_PHYSICAL_RELAXATION =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-07.png";
const IMG_MENTAL_RELAXATION =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-08.png";
const IMG_SPIRITUAL_RELAXATION =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-09.png";
const IMG_PROPER_DIET =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-10.png";
const IMG_SATTVIC_DIET =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-11.png";
const IMG_AHIMSA_NATURE =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-12.png";
const IMG_POSITIVE_THINKING =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-15.png";
const IMG_THOUGHT_MEDITATION =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-14.png";
const IMG_POWER_THOUGHTS =
  "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/5-points-of-yoga-13.png";

export const metadata = {
  title: "The 5 Points of Yoga | Sivananda Yoga Vietnam",
  description:
    "The foundation of health, happiness, and peace. Yoga wisdom for the modern world.",
};

export default function FivePointsOfYogaPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        {/* Hero Banner — The Foundation */}
        <section className="relative w-full h-[500px] md:h-[600px] flex items-end justify-center">
          <Image
            src={HERO_IMAGE}
            alt="Pine forest and lake at sunrise — 5 Points of Yoga"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="relative z-10 bg-white w-[90%] max-w-5xl py-12 md:py-16 px-6 shadow-md text-center -mb-12 md:-mb-16 border-b border-gray-100">
            <p className="text-[#0B3B24] text-xl md:text-2xl font-sans font-medium mb-4">
              The Foundation of Health, Happiness, and Peace
            </p>
            <h1 className="text-[#0B3B24] font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The 5 Points of Yoga
            </h1>
          </div>
        </section>

        {/* Spacer for overlapping box */}
        <div className="h-24 md:h-32 bg-transparent w-full" />

        {/* Yoga Wisdom for the Modern World */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-[#0B3B24] font-serif text-3xl md:text-4xl font-bold mb-8">
                Yoga Wisdom for the Modern World
              </h2>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">
                By closely observing the lifestyles and needs of people in our modern world, Swami Vishnudevananda synthesized the ancient wisdom of Yoga into five basic principles. These can be easily incorporated into your daily routine to promote a long, healthy, and joyful life. Each principle is designed not only to support physical health and mental clarity but also to release stress, calm the nervous system, and restore inner balance—making them especially relevant in today&apos;s fast-paced, high-pressure society.
              </p>
              <p className="text-[#4A4A4A] text-lg leading-relaxed">
                The body is a vehicle for our growth, and has specific requirements which must be fulfilled for it to function smoothly and supply the optimum mileage. The body can be compared to a car, metaphorically. In order for the car to perform its function, it requires five things: a lubrication system, a battery, a cooling system, proper fuel, and a clear mind and responsible driver behind the wheel.
              </p>
            </div>
            <div className="relative w-full aspect-[4/5] max-h-[560px] lg:max-h-none rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={IMG_SWAMI_TEACHING}
                alt="Swami Vishnudevananda teaching students in a natural setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Spiritual Inspiration */}
        <section className="relative w-full min-h-[600px] flex items-center justify-end overflow-hidden">
          <Image
            src={IMG_VALLEY_OVERLOOK}
            alt="Practitioner in nature overlooking valley — spiritual inspiration"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="relative z-10 w-full md:w-auto md:max-w-xl flex justify-end px-4 py-16 md:px-8 md:py-24 lg:px-12">
            <div className="bg-[#0B3B24]/60 backdrop-blur-sm p-10 md:p-16 max-w-xl w-full text-white rounded-lg md:rounded-none">
              <p className="text-white text-xl md:text-2xl leading-relaxed">
                &quot;Yoga is a life of self discipline built upon the tenets of simple living and high thinking. If you follow these five points, which compose a true holistic approach to our whole system of body, mind and soul, you will gain strength and balance in this demanding, stressful world.&quot;
              </p>
              <p className="text-white text-xl md:text-2xl leading-relaxed mt-6">
                &quot;Obstacles become stepping stones to success, and life is a school for the development of character and compassion.&quot;
              </p>
              <p className="text-white text-lg md:text-xl mt-8 text-center italic">
                — Swami Vishnudevananda —
              </p>
            </div>
          </div>
        </section>

        {/* Point 1: Proper Exercise (Asana) */}
        <section className="bg-[#FDFCF8] py-24 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
            {/* 1. Proper Exercise – Asana (Text left, Image right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-2">
                  Proper Exercise – Asana
                </h2>
                <p className="text-gray-500 italic mb-6">
                  Release Tension and Build Flexibility Without Fatigue
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-xl">
                  Proper exercise acts as a lubricating mechanism for the joints, muscles, ligaments, tendons, and other parts of the body, by increasing circulation and flexibility. The fundamental difference between Yogic exercises and ordinary physical exercise is that physical exercise emphasizes violent movements of the muscles, while Yogic exercises promote slow and conscious movements of the body, thus avoiding the build-up of lactic acid in the muscle fibers, avoiding fatigue.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={IMG_ASANA}
                  alt="Yoga asana — proper exercise, release tension and flexibility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* 2. Conscious Movements (Image left, Text right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
                <Image
                  src={IMG_CONSCIOUS}
                  alt="Conscious yoga movements — energize body and calm nervous system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-2">
                  Conscious Movements
                </h2>
                <p className="text-gray-500 italic mb-6">
                  Energize the Body and Calm the Nervous System
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-xl">
                  The main purpose of exercise is to increase circulation and the intake of oxygen. This can be achieved by simple movements of the spine and various joints of the body, with deep breathing, and without violent movement of the muscles. Yogic exercises are in fact called Yoga poses or asanas. An asana means a steady pose. Yogic exercises, when done correctly, influence and positively energize all the systems of the body: the circulatory system, the muscular and skeletal systems, the endocrine system, the respiratory system, the digestive system, and most importantly, the nervous system.
                </p>
              </div>
            </div>

            {/* 3. Spine Health (Text left, Image right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-2">
                  Spine Health
                </h2>
                <p className="text-gray-500 italic mb-6">
                  Flexibility for a Strong Body and a Calm, Focused Mind
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-xl">
                  In terms of muscles, Yogic exercises not only strengthen the muscles but also stretch them. There is a great emphasis on the flexibility and the youth of the spine. Swami Vishnudevananda said: &apos;Flexible spine, flexible mind.&apos; The correct postures are performed with awareness and concentration, accompanied by breathing and relaxation. Thus Yogic exercises affect not only the physical body but also the astral body: the energetic body and the mind.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={IMG_SPINE}
                  alt="Spine health and flexibility — yoga for strong body and calm mind"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* 4. Body-Mind Connection (Image left, Text right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
                <Image
                  src={IMG_BODY_MIND}
                  alt="Body-mind connection — movement, breath and inner awareness"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-2">
                  Body-Mind Connection
                </h2>
                <p className="text-gray-500 italic mb-6">
                  Harmonizing Movement, Breath, and Inner Awareness
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-xl">
                  Through the systematic and rhythmic holding of the postures with breathing and concentration we come to a state of relaxation in the posture, where the prana (or chi) is allowed to flow unobstructed through the nadis to all the organs, cells and parts of the body, revitalizing them. Yoga doesn&apos;t consider any exercise without awareness as a Yogic exercise. Yogic postures (asanas) are internally oriented, non-competitive, and meditative, promoting calmness and helping the practitioner to transcend identification with the body.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Point 2: Proper Breathing (Pranayama) */}
        <section className="bg-[#FDFCF8] py-24 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
            {/* 1. Proper Breathing – Pranayama (Text left, Image right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-2">
                  Proper Breathing – Pranayama
                </h2>
                <p className="text-gray-500 italic mb-6">
                  Recharging the Body&apos;s Battery through the Full Yogic Breath
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-xl">
                  Yoga emphasizes breathing correctly (the Yogic full breath using the diaphragm). We substantially increase the intake of oxygen through deep inhalation and release the toxins appropriately through our deep exhalation. Yoga teaches us to be constantly aware of our breathing patterns, and to breathe consciously in our daily life. Specific breathing techniques (pranayama) are devised to further purify the nadis, balance the breath and the energy in our system, and to store and channel the subtle energy (prana) for higher purposes.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={IMG_PRANAYAMA}
                  alt="Woman practicing alternate nostril breathing — pranayama, full yogic breath"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* 2. Balancing Ha-Tha Vital Energy (Image left, Text right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
                <Image
                  src={IMG_HA_THA}
                  alt="Two women by a tree with golden sign — balancing Ha-Tha vital energy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-6">
                  Balancing &quot;Ha-Tha&quot; Vital Energy to Calm the Mind and Uplift the Spirit
                </h2>
                <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-xl">
                  The word Hatha is composed of the words Ha and Tha, which mean sun and moon, respectively. This refers to the balance between the prana vayu (the positive vital air) and apana vayu (the negative vital air). Prana Vital Air in the body of the individual is a part of the universal breath. The regulation of the harmonious breath helps the mind to regulate and steady the mind. Pranayama needs to be practiced by all serious Yoga practitioners. Advanced practices need to be done only by those already practicing a pure lifestyle, and it is recommended that you put yourself under the supervision of a teacher in a pure environment, like an ashram.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Point 3: Proper Relaxation (Savasana) */}
        <section className="bg-[#FDFCF8] py-24 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
            {/* 1. Proper Relaxation – Savasana (Text left, Image right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-2">
                  Proper Relaxation – Savasana
                </h2>
                <p className="text-gray-500 italic mb-6">
                  Recharging Body and Mind for Lasting Calm and Clarity
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-xl">
                  Relaxation techniques, such as Savasana, cool down the system like the radiator of a car. When the body and mind are constantly overworked, their efficiency diminishes. Relaxation is nature&apos;s way of recharging the body. The state of our mind and the state of our body are intimately linked. If your muscles are relaxed, then your mind must be relaxed. If the mind is anxious, then the body suffers too.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={IMG_SAVASANA}
                  alt="Savasana — proper relaxation, recharging body and mind"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* 2. 3 Levels of Relaxation (Image left, Text right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
                <Image
                  src={IMG_RELAXATION_LEVELS}
                  alt="Three levels of relaxation — physical, mental, spiritual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-6">
                  3 Levels of Relaxation: Releasing Stress Physically, Mentally, and Spiritually
                </h2>
                <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-xl">
                  Through complete relaxation we live in the solid present, overcome our fears of death and of the future, and welcome life&apos;s demands with strength and courage; able to guide our mind, control our desires and choose better priorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Levels of Relaxation — Unique Selling Points */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Physical Relaxation */}
            <article className="bg-[#FDFCF8] p-8 md:p-10 rounded-xl shadow-xl">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <Image
                  src={IMG_PHYSICAL_RELAXATION}
                  alt="People practicing Savasana on green grass — physical relaxation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B3B24] mb-4">
                Physical Relaxation
              </h3>
              <p className="text-[#4A4A4A] text-lg leading-relaxed">
                Physical relaxation is achieved through the systematic practice of conscious relaxation (Savasana) and correct posture.
              </p>
            </article>

            {/* Card 2: Mental Relaxation */}
            <article className="bg-[#FDFCF8] p-8 md:p-10 rounded-xl shadow-xl">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <Image
                  src={IMG_MENTAL_RELAXATION}
                  alt="People sitting in meditation in a pine forest — mental relaxation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B3B24] mb-4">
                Mental Relaxation
              </h3>
              <p className="text-[#4A4A4A] text-lg leading-relaxed">
                Mental relaxation is achieved through correct breathing, concentration of the mind and positive thinking. A distracted mind is always anxious. A mind concentrated on a positive object is more relaxed and recharged.
              </p>
            </article>

            {/* Card 3: Spiritual Relaxation */}
            <article className="bg-[#FDFCF8] p-8 md:p-10 rounded-xl shadow-xl">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <Image
                  src={IMG_SPIRITUAL_RELAXATION}
                  alt="Teacher and students studying together in nature — spiritual relaxation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B3B24] mb-4">
                Spiritual Relaxation
              </h3>
              <p className="text-[#4A4A4A] text-lg leading-relaxed">
                Spiritual relaxation is a deeper type of relaxation, when we become content, a detached witness of the body and mind. Swami Vishnudevananda states that being free from identification with the body, the mind, and ego consciousness is the only way to reach a state of complete relaxation.
              </p>
            </article>
          </div>
        </section>

        {/* Point 4: Proper Diet */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-start overflow-hidden">
          <Image
            src={IMG_PROPER_DIET}
            alt="Healthy sattvic vegetarian meal — grains and greens in a natural setting"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          <div className="relative z-10 w-full md:w-auto md:max-w-2xl flex justify-start px-4 py-16 md:px-8 md:py-24 lg:px-12">
            <div className="bg-[#0B3B24]/70 backdrop-blur-sm p-10 md:p-16 max-w-2xl w-full text-white min-h-[500px] md:min-h-0 md:h-full flex flex-col justify-center rounded-lg md:rounded-none">
              <h2 className="text-3xl font-serif font-bold mb-2">
                Proper Diet
              </h2>
              <p className="text-xl italic opacity-90 mb-8">
                Fueling Body and Mind with a Clean, Balanced Vegetarian Diet
              </p>
              <p className="text-white text-lg leading-relaxed mb-6">
                Correct nutrition and diet gives proper fuel for the body and the mind without creating toxins and digestive problems. Optimum utilization of food, air, water and sunlight is essential.
              </p>
              <p className="text-white text-lg leading-relaxed mb-6">
                There is medical evidence that a balanced vegetarian diet is extremely healthy and provides everything the body needs. The Yogic vegetarian diet is sattvic (pure), and helps to calm the mind, and to reveal the spirit as well as nourish the body.
              </p>
              <p className="text-white text-lg leading-relaxed">
                The body needs food for two purposes: as fuel to supply energy, and as materials to repair body tissues. A vegetarian diet is a natural diet, fresh and wholesome, full of fiber and alkaline in nature, energy producing, and easy to absorb and to eliminate.
              </p>
            </div>
          </div>
        </section>

        {/* Sattvic Diet (Section 8) — Staggered grid */}
        <section className="bg-[#FDFCF8] py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {/* Item 1: Sattvic Diet Principles — Text Left / Image Right */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-6">
                  Sattvic Diet
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed">
                  To maintain a sattvic diet, free from rajasic and tamasic influences, avoid stimulants and depressants such as caffeine, alcohol, cigarettes, drugs of all kinds, overly spicy food, onions, garlic, overcooked food, old food, frozen food, canned food, sodas and processed foods, as well as all meat.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 md:max-w-[50%]">
                <Image
                  src={IMG_SATTVIC_DIET}
                  alt="Fresh vibrant sattvic food — fruits, vegetables, wholesome vegetarian meal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Item 2: Ahimsa & The Environment — Image Left / Text Right */}
            <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
              <div className="flex flex-col justify-center flex-1 min-w-0 order-2 md:order-1">
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-6">
                  Ahimsa - Non-Violence
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed">
                  Yogis advocate &apos;ahimsa&apos;, the principle of non-violence, non-injury and respect for life. Everything our body and mind needs to function correctly can be found in the plant kingdom. A vegetarian diet is highly beneficial for our health, our mind, and our spiritual growth. Furthermore, it is the most environmentally friendly and sustainable diet for our planet.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 md:max-w-[50%] order-1 md:order-2">
                <Image
                  src={IMG_AHIMSA_NATURE}
                  alt="Peaceful nature and plant life — ahimsa and sustainable living"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Point 5: Positive Thinking and Meditation */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-end overflow-hidden">
          <Image
            src={IMG_POSITIVE_THINKING}
            alt="Joyful students sitting together in nature during golden hour — positive thinking and meditation"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          <div className="relative z-10 w-full md:w-auto md:max-w-2xl flex justify-end px-4 py-16 md:px-8 md:py-24 lg:px-12">
            <div className="bg-[#0B3B24]/70 backdrop-blur-sm p-10 md:p-16 max-w-2xl w-full text-white min-h-[500px] md:min-h-0 md:h-full flex flex-col justify-center rounded-lg md:rounded-none">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Positive thinking and Meditation
              </h2>
              <p className="text-white text-xl leading-relaxed mb-6 font-light">
                &quot;There is a power contained in thought. This is very subtle, yet it does exist, and is extremely powerful.&quot;
              </p>
              <p className="text-white text-xl leading-relaxed mb-10 font-light">
                &quot;Whether a person is aware of it or not, he is constantly transmitting and receiving thoughts...Thoughts control our lives, mold our characters, shape destiny, and affect other people.&quot;
              </p>
              <p className="text-lg italic opacity-80 text-right md:text-left">
                — Swami Vishnudevananda in &quot;Meditation and Mantras&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Thought Section (Part of Point 5) */}
        <section className="bg-[#FDFCF8] py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {/* Item 1: What Is Thought? — Text Left / Image Right */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-2">
                  What Is Thought?
                </h2>
                <p className="text-xl italic text-gray-500 mb-6">
                  The Invisible Force Shaping Your Reality and Inner Peace
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                  Thought is a powerful force or energy which can build and can destroy. It is real. We need to be aware of the nature of our thoughts in order to improve our life and to keep meditating and ultimately realizing our perfect positive nature.
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                  Negative thoughts are like toxins produced by the mind that is not purified. They are only temporary symptoms, not ourselves. Thought, though invisible, is the origin of action and the material world.
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                  We make a mistake when we think that the material world of objects is more real than the world of thought. We are constantly swimming in an ocean of thoughts, attracting certain thoughts and repulsing others depending on the quality of the thoughts we keep in our mind.
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed">
                  The best way to improve our life is to constantly keep positive thoughts in our mind and to be able to change negative thoughts to positive thoughts.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 md:max-w-[50%]">
                <Image
                  src={IMG_THOUGHT_MEDITATION}
                  alt="Woman meditating outdoors — what is thought, inner peace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Item 2: Power of Thoughts — Image Left / Text Right */}
            <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
              <div className="flex flex-col justify-center flex-1 min-w-0 order-2 md:order-1">
                <h2 className="text-[#0B3B24] font-serif text-3xl font-bold mb-2">
                  Power of Thoughts
                </h2>
                <p className="text-xl italic text-gray-500 mb-6">
                  Uplift Your Mind Through Positive Company and Satsang
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                  Be aware of thought influences. We need to be aware of the thought that is surrounding us as it is affecting our thinking. Try to keep positive company, live and work in positive environments, be in nature, and take yoga retreats to return our mind to positive thoughts.
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                  Also, learn internal techniques to keep the mind at a high wavelength, so instead of being victims of our environment, we will be agents of positive change. Being in company of the wise is the easiest and most powerful way to shift our thinking to be more positive.
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                  This is called Satsang, company of the wise.
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                  When you live in an ashram founded by enlightened masters, you are in Satsanga. The vibrations of all the chanting, teachings and all the good thoughts of people who visited or lived in the ashram remain in the thought atmosphere and help you.
                </p>
                <p className="text-lg text-[#4A4A4A] leading-relaxed">
                  It is like taking a bath in a pool of pure water. If you mix with polluted thought environments, you will pick up negative thoughts that you would not normally have.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 md:max-w-[50%] order-1 md:order-2">
                <Image
                  src={IMG_POWER_THOUGHTS}
                  alt="Group of people walking together in a pine forest — power of thoughts, satsang"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24" aria-label="Upcoming events">
          <EventsCarousel title="Upcoming Events" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
