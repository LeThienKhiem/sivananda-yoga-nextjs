"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const regionsData = [
  {
    id: "asia",
    name: "Asia",
    description:
      "Providing retreats for international yoga vacationers and locals alike, our Asia ashrams and centers' energy are pure, positive, and as you will gleam from the images below, have a strength beyond measure. They are not to be missed. We invite everyone to visit and to deepen their Sadhana in this wonderful space, together in our shared tradition.",
    centers: [
      {
        name: "Ashram: Sivananda Yoga Vietnam",
        location: "Dalat | Vietnam",
        tel: "+84 263 650 1100",
        website: "sivanandayogavietnam.org",
        email: "vietnamyogaresort@sivananda.org",
        facebook: "fb.com/vietnamyogaresort",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-01.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "Ho Chi Minh City | Vietnam",
        tel: "+84 286 805 427",
        website: "sivanandayogavietnam.org",
        email: "hochiminh@sivananda.org",
        facebook: "fb.com/sivanandavietnam/",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-02.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "Dalat | Vietnam",
        tel: "+84 263 650 1900",
        website: "sivanandayogavietnam.org",
        email: "dalat@sivananda.org",
        facebook: "fb.com/SivanandaDalat",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-03.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "Hanoi | Vietnam",
        tel: "+86 028-86257086",
        website: "sivanandayogachina.org",
        email: "china@sivananda.org",
        facebook: "fb.com/ISYVCinChina",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-04.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "Tokyo | Japan",
        tel: "+03 5356 7791",
        website: "www.sivananda.jp",
        email: "tokyo@sivananda.org",
        facebook: "fb.com/syanandayoga",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-05.png",
      },
    ],
  },
  {
    id: "north-america",
    name: "North America",
    description:
      "Offering an oasis of serenity in Grass Valley, a living treasure in the Catskill Mountains, pristine beaches in the Caribbean, and our majestic International headquarters in Val Morin, Sivananda Yoga in North America is one of the best places in the world to immerse yourself in the traditional ashram environment. Experience complete serenity in a naturally beautiful and peaceful setting. Allow the practice to work its magic.",
    centers: [
      {
        name: "Ashram: Sivananda Yoga Farm",
        location: "Grass Valley, CA | United States",
        tel: "(530) 272-9322",
        website: "sivanandayogafarm.org",
        email: "yogafarm@sivananda.org",
        facebook: "fb.com/yogafarmcommunity",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-06.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "San Francisco, CA | United States",
        tel: "(415) 681-2731",
        website: "sivanandasf.org",
        email: "sanfrancisco@sivananda.org",
        facebook: "fb.com/SFSivananda",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-07.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "Los Angeles, CA | United States",
        tel: "(310) 822-9642",
        website: "sivanandala.org",
        email: "losangeles@sivananda.org",
        facebook: "fb.com/SivanandaLosAngeles",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-08.png",
      },
      {
        name: "Ashram: Sivananda Yoga Camp",
        location: "Val Morin, Quebec | Canada",
        tel: "(819) 322-3226",
        website: "sivananda.org/camp",
        email: "HQ@sivananda.org",
        facebook: "fb.com/SivanandaYogaCamp",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-09.png",
      },
      {
        name: "Ashram: Sivananda Yoga Retreat",
        location: "Paradise Island, Bahamas",
        tel: "(866) 559-5167",
        website: "sivanandabahamas.org",
        email: "nassau@sivananda.org",
        facebook: "fb.com/SivanandaAshramYogaRetreat",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-10.png",
      },
      {
        name: "Ashram: Sivananda Yoga Ranch",
        location: "Woodbourne, NY | United States",
        tel: "(845) 436-6492",
        website: "sivanandayogaranch.org",
        email: "yogaranch@sivananda.org",
        facebook: "fb.com/yogaranchcommunity",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-11.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "Chicago, IL | United States",
        tel: "(773) 878-7771",
        website: "sivanandachicago.org",
        email: "chicago@sivananda.org",
        facebook: "fb.com/SivanandaChicago",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-12.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "Toronto, Ontario | Canada",
        tel: "(416) 966-9642",
        website: "sivananda.org/toronto",
        email: "toronto@sivananda.org",
        facebook: "fb.com/sivanandatoronto",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-13.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "Montreal, Quebec | Canada",
        tel: "(514) 279-3545",
        website: "sivananda.org/montreal",
        email: "montreal@sivananda.org",
        facebook: "fb.com/sivanandayogamontreal",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-14.png",
      },
      {
        name: "Sivananda Yoga Vedanta Center",
        location: "New York, NY | United States",
        tel: "(212) 255-4560",
        website: "sivanandanyc.org",
        email: "newyork@sivananda.org",
        facebook: "fb.com/SivanandaNewYork",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-15.png",
      },
    ],
  },
  {
    id: "europe",
    name: "Europe",
    description:
      "Fresh mountain air, clean rivers and lakes, meadows and quiet forests... Our European ashrams and centers are one of a kind, while at the same time each offering your practice a home. Learn the effect of two yoga classes daily, lectures and workshops, relaxation, meditation and mantra chanting. Enjoy the yogic vegetarian cuisine. Experience the full rejuvenation of Sivananda Yoga.",
    centers: [
      {
        name: "Ashram: Sivananda Yoga Vedanta Seminarius",
        location: "Tyrol | Austria",
        tel: "+43 5356 67404",
        website: "www.sivananda.at/en/",
        email: "tyrol@sivananda.net",
        facebook: "fb.com/SivanandaTirol",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-16.png",
      },
      {
        name: "Ashram de Sivananda Yoga",
        location: "Orleans | France",
        tel: "+33 (0)2 38 91 88 82",
        website: "sivanandaorleans.org",
        email: "orleans@sivananda.org",
        facebook: "fb.com/SivanandaFrance",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-17.png",
      },
      {
        name: "Sivananda Yoga Vedanta Centre",
        location: "London | England",
        tel: "+44 208 780-0160",
        website: "sivanandalondon.org",
        email: "london@sivananda.net",
        facebook: "fb.com/SivanandaLondon",
        image:
          "https://znmazjqhyjxacqjjzsuh.supabase.co/storage/v1/object/public/Images/community-18.png",
      },
      {
        name: "Centre de Yoga Sivananda",
        location: "Geneva | Switzerland",
        tel: "+41 22 328-03-28",
        website: "www.sivananda.org/geneva",
        email: "geneva@sivananda.net",
        facebook: "fb.com/SivanandaEurope",
      },
      {
        name: "Centro de Yoga Sivananda",
        location: "Madrid | Spain",
        tel: "+34 91 361 51 50",
        website: "www.sivananda.org/madrid",
        email: "madrid@sivananda.org",
        facebook: "fb.com/Centro-de-Yoga-Madrid",
      },
      {
        name: "Sivananda Yoga Vedanta Zentrum",
        location: "Berlin | Germany",
        tel: "+49 30-85 99 97 98",
        website: "www.sivananda.org/berlin",
        email: "berlin@sivananda.net",
        facebook: "fb.com/SivanandaBerlin",
      },
      {
        name: "Centre Sivananda de Yoga Vedanta",
        location: "Paris | France",
        tel: "+33-01.40.26.77.49",
        website: "www.sivananda.org/paris",
        email: "paris@sivananda.net",
        facebook: "fb.com/SivanandaParis",
      },
      {
        name: "Sivananda Jogos Vedantos Centras",
        location: "Vilnius | Lithuania",
        tel: "+370.648.57.824",
        website: "www.sivananda.org/vilnius",
        email: "vilnius@sivananda.org",
        facebook: "fb.com/Sivananda.joga.Vilnius",
      },
      {
        name: "Centro Yoga Vedanta Sivananda",
        location: "Rome | Italy",
        tel: "+39.06.4549.6529",
        website: "www.sivananda.org/rome",
        email: "rome@sivananda.org",
        facebook: "fb.com/centroyogasivananda.roma",
      },
      {
        name: "Sivananda Yoga Vedanta Zentrum",
        location: "Vienna | Austria",
        tel: "+43 1 586 3453 0",
        website: "www.sivananda.org/vienna",
        email: "vienna@sivananda.net",
        facebook: "fb.com/SivanandaWien",
      },
      {
        name: "Sivananda Yoga Vedanta Zentrum",
        location: "Munich | Germany",
        tel: "+49 89 700-96 69 0",
        website: "www.sivananda.org/munich",
        email: "munich@sivananda.net",
        facebook: "fb.com/SivanandaMunchen",
      },
    ],
  },
  {
    id: "india",
    name: "India",
    description:
      "Whether rejuvenating yourself in the lush tropical forest of the South or the soaring expansiveness of the Himalayan mountains in the North, our Sivananda Yoga ashrams and centers in India offer an absolutely ideal atmosphere for the practice of Yoga and meditation. Experience the deep resonant vibration where Yoga all began. Come join us, dance in the spiritual essence of life.",
    centers: [
      {
        name: "Ashram: Sivananda Kutir - Himalayas",
        location: "Uttara Kashi, Himalayas | India",
        tel: "+91 90 12 78 94 28",
        website: "www.sivananda.org/netala",
        email: "himalayas@sivananda.org",
        facebook: "fb.com/sivanandakutirnetala",
      },
      {
        name: "Ashram: Sivananda Yoga Vedanta Dhanwantari",
        location: "Neyyar Dam, Kerala | India",
        tel: "+91 949-565-03-51",
        website: "www.sivananda.org/neyyardam",
        email: "guestindia@sivananda.org",
        facebook: "fb.com/NeyyarDam",
      },
      {
        name: "Ashram: Sivananda Meenakshi - Madurai",
        location: "Madurai, Tamil Nadu | India",
        tel: "+91 98 65 55 53 36",
        website: "www.sivananda.org/madurai",
        email: "madurai@sivananda.org",
        facebook: "fb.com/SivanandaMadurai",
      },
      {
        name: "Sivananda Yoga Vedanta Centre Dwarka",
        location: "Dwarka, New Delhi | India",
        tel: "+91.11. 64 56 85 26",
        website: "www.sivananda.org/dwarka",
        email: "dwarka@sivananda.org",
        facebook: "fb.com/SivanandaYogaDwarka",
      },
      {
        name: "Sivananda Yoga Vedanta Centre Nataraja",
        location: "Kailash, New Delhi | India",
        tel: "+91.11. 32 00 09 70",
        website: "www.sivananda.org/delhi",
        email: "delhi@sivananda.org",
        facebook: "fb.com/SivanandaNataraja",
      },
      {
        name: "Sivananda Yoga Vedanta Centre",
        location: "Chennai (Madras) | India",
        tel: "+91.44. 24 51 16 26",
        website: "www.sivananda.org/chennai",
        email: "chennai@sivananda.org",
        facebook: "fb.com/sivcc.chennai1",
      },
      {
        name: "Sivananda Yoga Vedanta Centre",
        location: "Thiruvananthapuram, Kerala | India",
        tel: "+91.471.245.09.42",
        website: "www.sivananda.org/trivandrum",
        email: "trivandrum@sivananda.org",
        facebook: "fb.com/SivanandaTrivandrum",
      },
      {
        name: "Sivananda Yoga Vedanta Centre",
        location: "Madurai, Tamil Nadu | India",
        tel: "+91.452.453.11.70",
        website: "www.sivananda.org/maduraicentre",
        email: "maduraicentre@sivananda.org",
        facebook: "fb.com/SivanandaMadurai",
      },
    ],
  },
  {
    id: "israel",
    name: "Israel",
    description:
      "Warmly nicknamed by our guests and staff as an \"Urban Ashram\", our Tel Aviv Center offers a high standard of Yoga and services that welcomes all and is an oasis of peace and rejuvenation in the city. Come and deepen your practice among brilliantly experienced teachers, share in the delight of the gift called \"Yoga\".",
    centers: [
      {
        name: "Sivananda Yoga Vedanta Centre",
        location: "Tel Aviv | Israel",
        tel: "+011 972-3 696-19-10",
        website: "sivananda.co.il",
        email: "telaviv@sivananda.org",
        facebook: "fb.com/sivanandatho/",
      },
    ],
  },
  {
    id: "south-america",
    name: "South America",
    description:
      "Whether rejuvenating yourself in the lush tropical forest of the South or the soaring expansiveness of the Himalayan mountains in the North, our Sivananda Yoga ashrams and centers in India offer an absolutely ideal atmosphere for the practice of Yoga and meditation. Experience the deep resonant vibration where Yoga all began. Come join us, dance in the spiritual essence of life.",
    centers: [
      {
        name: "Centro Internacional de Yoga Sivananda",
        location: "Buenos Aires | Argentina",
        tel: "+54.11.4804.7913",
        website: "www.sivananda.org/baires",
        email: "buenosaires@sivananda.org",
        facebook: "fb.com/Centro-Internacional-de-Yoga",
      },
      {
        name: "Centro Internacional Sivananda de Yoga",
        location: "Neuquen | Argentina",
        tel: "+54 (299) 442-5595",
        website: "www.sivananda.org/neuquen",
        email: "neuquen@sivananda.org",
        facebook: "fb.com/Centro-Internacional-de-Yoga",
      },
      {
        name: "Asociación de Yoga Sivananda",
        location: "Montevideo | Uruguay",
        tel: "+598 (2)410929",
        website: "www.sivananda.org/montevideo",
        email: "montevideo@sivananda.org",
        facebook: "fb.com/asociaciondeyoga.sivananda",
      },
      {
        name: "Atman Yoga Centro Sivananda Afiliado",
        location: "Medellin | Colombia",
        tel: "+57.4.3111132",
        website: "www.atmanyoga.co/",
        email: "atmanyoga@gmail.com",
        facebook: "fb.com/atman.yoga.5",
      },
      {
        name: "Centro Sivananda de Yoga Vedanta",
        location: "Porto Alegre | Brazil",
        tel: "+55.51.3024.7717",
        website: "www.sivananda.org/portoalegre",
        email: "portoalegre@sivananda.org",
        facebook: "fb.com/sivanandaportoalegre",
      },
      {
        name: "Vanadurga Ashram Santuario de Yoga",
        location: "Antioquia | Colombia",
        tel: "+57.321 8125510",
        website: "www.vanadurga.co/",
        email: "info@vanadurga.co",
        facebook: "fb.com/atman.yoga.5",
      },
    ],
  },
];

const tabs = [
  "Asia",
  "North America",
  "Europe",
  "India",
  "Israel",
  "South America",
];

export default function CommunityPage() {
  const scrollToRegion = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full flex flex-col mt-16 md:mt-0">
        {/* Background Image Container */}
        <div className="relative w-full h-[40vh] min-h-[300px] md:h-[55vh] md:min-h-[450px] z-0">
          <Image
            src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2000"
            alt="Sivananda International Community"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Seamless Overlapping Content Box */}
        <div className="relative z-10 w-[95%] max-w-5xl mx-auto bg-white px-6 pt-10 pb-8 md:pt-14 md:pb-12 text-center -mt-16 md:-mt-24 shadow-sm border border-gray-100/50">
          <p className="text-base md:text-xl text-[#4A4A4A] font-medium mb-3 md:mb-4 tracking-wide">
            Unity In Diversity. Many Centers, One Teaching
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0B3B24] font-bold">
            Sivananda International Community
          </h1>
        </div>
      </section>

      {/* 2. REGION TABS (STICKY) */}
      <div className="sticky top-[80px] md:top-[96px] z-40 bg-[#FDFCF8]/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex overflow-x-auto items-center justify-start md:justify-center gap-6 md:gap-10 text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#4F6F1F] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {tabs.map((tab) => {
              const tabId = tab.toLowerCase().replace(/\s+/g, "-");
              return (
                <button
                  key={tab}
                  onClick={() => scrollToRegion(tabId)}
                  className="whitespace-nowrap hover:text-[#ED7D4D] transition-colors"
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. REGION SECTIONS */}
      <div className="flex-grow w-full py-16 px-6">
        {regionsData.map((region) => (
          <section
            key={region.id}
            id={region.id}
            className="max-w-6xl mx-auto mb-24 scroll-mt-32"
          >
            {/* Region Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#0B3B24] font-bold">
                {region.name}
              </h2>
              <div className="w-12 h-[3px] bg-[#ED7D4D] mx-auto mt-4 mb-8"></div>
              <p className="max-w-4xl mx-auto text-[#4A4A4A] leading-relaxed md:text-lg">
                {region.description}
              </p>
            </div>

            {/* Centers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {region.centers.map((center, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col"
                >
                  {/* Conditionally Render Image */}
                  {center.image && (
                    <div className="relative w-full aspect-[3/2]">
                      <Image
                        src={center.image}
                        alt={center.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Details */}
                  <div className="p-8 text-center flex flex-col flex-grow">
                    <h3 className="font-bold text-[#0B3B24] text-lg mb-2">
                      {center.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
                      {center.location}
                    </p>

                    <div className="text-sm text-[#4A4A4A] space-y-3 flex-grow flex flex-col justify-center">
                      {center.tel && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Tel:
                          </span>{" "}
                          {center.tel}
                        </p>
                      )}
                      {center.website && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Website:{" "}
                          </span>
                          <a
                            href={`https://${center.website.replace(/^https?:\/\//, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ED7D4D] hover:underline"
                          >
                            {center.website}
                          </a>
                        </p>
                      )}
                      {center.email && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            E-mail:{" "}
                          </span>
                          <a
                            href={`mailto:${center.email}`}
                            className="text-[#ED7D4D] hover:underline"
                          >
                            {center.email}
                          </a>
                        </p>
                      )}
                      {center.facebook && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Facebook:{" "}
                          </span>
                          <a
                            href={`https://${center.facebook}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ED7D4D] hover:underline"
                          >
                            {center.facebook}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}
