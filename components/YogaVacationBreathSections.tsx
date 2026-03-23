"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type YogaVacationBreathSectionsProps = {
  imgYogaGrass: string;
  imgLineage: string;
  imgForestPath: string;
  imgMeditationNature: string;
  imgYogaHeadstand: string;
};

const inhaleRow = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
};

const inhaleParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function YogaVacationBreathSections({
  imgYogaGrass,
  imgLineage,
  imgForestPath,
  imgMeditationNature,
  imgYogaHeadstand,
}: YogaVacationBreathSectionsProps) {
  return (
    <>
      {/* Breathe In */}
      <section className="overflow-x-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-24 md:pb-12">
          <motion.h2
            className="mb-16 text-center font-serif text-4xl font-light italic text-gray-500 md:text-5xl"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Breathe in...
          </motion.h2>

          <motion.div
            variants={inhaleParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Block One: Yoga Practice */}
            <motion.div
              variants={inhaleRow}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="mb-32 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <h2 className="mb-6 font-serif text-3xl text-[#0B3B24]">
                  Immerse and nourish your body and mind
                </h2>
                <div className="mb-8 border-l-2 border-gray-300 pl-6">
                  <p className="leading-loose text-gray-600">
                    In the company of like-hearted people, Immerse a vacation
                    that supports you in returning home with more energy, more
                    positivity, and practical skills to sustain your well-being
                    - no matter how fast, demanding, and stressful life becomes.
                    Immerse yourself here.
                  </p>
                </div>
                <Link
                  href="/accommodations"
                  className="inline-block rounded-sm bg-[#ED7D4D] px-6 py-2 font-bold text-white transition-colors hover:bg-orange-600 md:px-8 md:py-3"
                >
                  BOOK YOUR STAY
                </Link>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg md:w-auto">
                <Image
                  src={imgYogaGrass}
                  alt="People doing yoga on grass"
                  width={600}
                  height={750}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) calc(100vw - 3rem), 50vw"
                />
              </div>
            </motion.div>

            {/* Block Two: The Lineage */}
            <motion.div
              variants={inhaleRow}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="mb-32 flex w-full flex-col gap-6 md:flex-row md:items-stretch md:gap-8"
            >
              <div className="relative w-full shrink-0 overflow-hidden rounded-2xl md:w-1/2">
                <div className="relative aspect-[4/3] w-full md:h-full md:min-h-[400px] md:aspect-auto">
                  <Image
                    src={imgLineage}
                    alt="Historical image of the Gurus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center rounded-2xl bg-[#4C662B] p-8 text-white md:w-1/2 md:p-10 lg:p-12">
                <h2 className="mb-6 font-serif text-2xl font-bold text-white md:text-3xl">
                  Rooted in an authentic <em>Yoga</em> Lineage
                </h2>
                <div className="border-l-2 border-white pl-6">
                  <p className="font-sans text-base leading-relaxed text-white md:text-lg">
                    The Sivananda <em>Yoga</em> Vacation was designed in the
                    1960s by Swami Vishnudevananda of India, following in the
                    footsteps of his Guru, Swami Sivananda. It was brought to
                    Vietnam in 2009 by his disciple Swami Sitaramananda, who is
                    originally from Da Lat.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Block Three: Nature Path */}
            <motion.div
              variants={inhaleRow}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <div className="relative order-2 h-[600px] overflow-hidden rounded-lg lg:order-1">
                <Image
                  src={imgForestPath}
                  alt="Sunlit forest path at the resort"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-6 font-serif text-3xl text-[#0B3B24]">
                  Step into the beauty of our mountain-top sanctuary
                </h2>
                <div className="mb-8 border-l-2 border-gray-300 pl-6">
                  <p className="leading-relaxed text-gray-600">
                    Where you feel yourself relax the moment you arrive. Take
                    in the abundant energy of the natural world and gain
                    perspective - with views of Tuyen Lam Lake below, peaceful
                    ponds, quiet places to sit outside, and star-filled night
                    skies. At Sivananda Yoga Dalat Resort, healing unfolds
                    through nature, nourishing vegetarian meals, and uplifting
                    satsanga.
                  </p>
                </div>
                <Link
                  href="/accommodations"
                  className="inline-block rounded-sm bg-[#ED7D4D] px-6 py-2 font-bold text-white transition-colors hover:bg-orange-600 md:px-8 md:py-3"
                >
                  BOOK YOUR STAY
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Breathe Out */}
      <section className="overflow-x-hidden bg-[#FDFCF8] px-6 py-16 md:py-20">
        <motion.h2
          className="mb-16 text-center font-serif text-4xl font-light italic text-gray-500 md:mb-20 md:text-5xl"
          initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Breathe out...
        </motion.h2>

        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-12 md:gap-20">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Learn and practice
              </h3>
              <p className="text-xl leading-relaxed text-gray-600">
                as you engage in daily meditation, Sivananda Yoga classes with
                daily wisdom and well-being workshops designed to bring your
                mind and body into harmony - All will provide skills for you to
                continue to live well at home.
              </p>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-sm md:aspect-[4/3]">
              <Image
                src={imgMeditationNature}
                alt="Person meditating in nature overlooking a landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="relative mt-0 w-full aspect-square overflow-hidden rounded-sm shadow-md md:-mt-12 md:aspect-auto md:h-[750px]">
            <Image
              src={imgYogaHeadstand}
              alt="Yoga headstand pose outdoors"
              fill
              className="object-cover"
              sizes="(max-width: 768px) calc(100vw - 3rem), 50vw"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
