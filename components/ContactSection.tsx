"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.1705180420518!2d108.40943882757809!3d11.893211977453623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31716b4497e28829%3A0xb444a7f1b6fbde20!2sSivananda%20Yoga%20Resort%20and%20Training%20center!5e0!3m2!1sen!2sus!4v1772846539123!5m2!1sen!2sus";

const MAPS_URL = "https://maps.app.goo.gl/8xq1fn4onFMc6DJHA";
const TEL_HREF = "tel:02636501100";
const MAILTO_HREF = "mailto:vietnamyogaresort@sivananda.org";

/** Hover/focus only — text color stays on each row via explicit text-[#4A4A4A] */
const contactInteractiveClass =
  "hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7D4D]/40 rounded-sm";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly!");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
      <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Column: Information */}
        <div className="w-full lg:w-[45%] bg-[#F4F7F0] p-10 md:p-16 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold mb-4 leading-tight">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-[#4A4A4A] text-lg mb-12">
              Contact us for any inquiries regarding our programs, retreats, or ashram stay.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0B3B24] mb-4 font-serif">
                  Sivananda Yoga Resort and Training Center - The Ashram
                </h3>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 text-[#4A4A4A] text-base md:text-lg ${contactInteractiveClass}`}
                >
                  <MapPin className="w-6 h-6 text-[#ED7D4D] shrink-0 mt-1" />
                  <span>
                    Hoa Hong Street, Ward 4, Tuyen Lam Lake
                    <br />
                    Da Lat, Vietnam
                  </span>
                </a>
              </div>
              
              <a
                href={TEL_HREF}
                className={`flex items-center gap-4 text-[#4A4A4A] text-base md:text-lg ${contactInteractiveClass}`}
              >
                <Phone className="w-6 h-6 text-[#ED7D4D] shrink-0" />
                <span>(+84) 02636501100</span>
              </a>
              
              <a
                href={MAILTO_HREF}
                className={`flex items-center gap-4 text-[#4A4A4A] text-base md:text-lg break-all ${contactInteractiveClass}`}
              >
                <Mail className="w-6 h-6 text-[#ED7D4D] shrink-0" />
                <span>vietnamyogaresort@sivananda.org</span>
              </a>

              <div className="flex items-center gap-4 text-[#4A4A4A] text-base md:text-lg">
                <Clock className="w-6 h-6 text-[#ED7D4D] shrink-0" />
                <p>Opening hours: 7:30am - 7:30pm</p>
              </div>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mt-16 w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-inner border border-white/50 hidden md:block relative">
            <iframe
              src={MAP_EMBED_SRC}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sivananda Yoga Resort and Training Center - Map"
            />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-[55%] p-10 md:p-16 bg-white">
          <h3 className="text-2xl md:text-3xl font-serif text-[#0B3B24] font-bold mb-8">
            Send us a message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#ED7D4D]/20 focus:border-[#ED7D4D] outline-none transition-all text-[#0B3B24]" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#ED7D4D]/20 focus:border-[#ED7D4D] outline-none transition-all text-[#0B3B24]" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#ED7D4D]/20 focus:border-[#ED7D4D] outline-none transition-all text-[#0B3B24]" 
                placeholder="+84 123 456 789" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Message *</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={6} 
                className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#ED7D4D]/20 focus:border-[#ED7D4D] outline-none transition-all resize-none text-[#0B3B24]" 
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <p className="text-sm text-gray-400 italic mb-8">
              * Compulsory information
            </p>

            <button 
              type="submit" 
              className="w-full md:w-auto bg-[#ED7D4D] text-white px-10 py-4 rounded-xl font-bold tracking-widest text-sm uppercase hover:bg-orange-600 transition-all shadow-[0_10px_30px_rgba(237,125,77,0.25)] flex items-center justify-center gap-3 group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
