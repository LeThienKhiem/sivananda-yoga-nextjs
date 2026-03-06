"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-[#E8EDE1] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
          {/* Left column - Contact Info */}
          <div className="md:border-r md:border-gray-400/50 md:pr-24">
            <h2 className="mb-2 font-serif text-3xl font-bold text-[#1e5c2b] lg:text-4xl">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <h3 className="mb-8 font-serif text-3xl font-bold text-[#1e5c2b] lg:text-4xl">
              Contact us
            </h3>
            <p className="mb-6 text-xl font-medium text-[#1e5c2b]">
              Sivananda Yoga Resort and Training Center - The Ashram
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1e5c2b]" />
                <span className="whitespace-pre-line text-gray-700">
                  Hoa Hong Street, Ward 4, Tuyen Lam Lake
                  {"\n"}Da Lat, Vietnam
                </span>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#1e5c2b]" />
                <a
                  href="tel:+842636501100"
                  className="text-gray-700 hover:text-[#1e5c2b] hover:underline"
                >
                  (+84) 02636501100
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#1e5c2b]" />
                <a
                  href="mailto:vietnamyogaresort@sivananda.org"
                  className="text-gray-700 hover:text-[#1e5c2b] hover:underline"
                >
                  vietnamyogaresort@sivananda.org
                </a>
              </div>
            </div>

            <div className="relative mt-6 mb-6 h-[250px] w-full overflow-hidden rounded-md border border-green-900/10 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5855734898745!2d108.4316744111307!3d11.86937518823155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171135c3444002b%3A0xc31ed861a8ccba0e!2sSivananda%20Yoga%20Vietnam!5e0!3m2!1sen!2s!4v1709638360000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Sivananda Yoga Vietnam - Map Location"
              />
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 shrink-0 text-[#1e5c2b]" />
              <span className="text-gray-700">
                Opening hours: 7.30am - 7.30pm
              </span>
            </div>
          </div>

          {/* Right column - Contact Form */}
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="name"
                placeholder="Your name*"
                className="mb-8 w-full border-b border-green-800/40 bg-transparent py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-800 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                className="mb-8 w-full border-b border-green-800/40 bg-transparent py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-800 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number*"
                className="mb-8 w-full border-b border-green-800/40 bg-transparent py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-800 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your message*"
                rows={5}
                className="mb-2 h-32 w-full resize-none border border-green-800/40 bg-transparent p-4 text-gray-700 placeholder:text-gray-400 focus:border-green-800 focus:outline-none"
              />
              <p className="mb-6 text-base text-gray-500">
                *Compulsory information
              </p>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-sm bg-[#ED7D4D] px-10 py-3 font-bold text-white transition-colors hover:bg-orange-600"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
