"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/utils/supabase';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function YogaInsights() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })
        .limit(8); // Max 8 blogs

      if (error) console.error("Error fetching blogs:", error);
      else setBlogs(data || []);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const getPostImage = (post: any) => post.header_image || post.middle_image || post.footer_image || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800";

  const stripHtml = (htmlStr: string) => {
    if (!htmlStr) return '';
    return htmlStr.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
  };

  if (loading) {
    return <div className="py-24 flex justify-center"><Loader2 className="animate-spin text-[#ED7D4D] w-10 h-10" /></div>;
  }

  if (blogs.length === 0) return null;

  return (
    <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-[#ED7D4D] font-bold tracking-widest text-sm uppercase mb-3">
              Read & Learn
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold">
              Yoga Insights & Stories
            </h3>
          </div>
          <Link href="/blog">
            <button className="group flex items-center gap-2 text-sm font-bold text-[#0B3B24] hover:text-[#ED7D4D] transition-colors uppercase tracking-widest">
              View All Insights <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Masonry Grid using CSS Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {blogs.map((post, idx) => {
            // Alternate aspect ratios artificially for a better masonry look if images are all the same size
            const aspectClasses = idx % 3 === 0 ? "aspect-[3/4]" : idx % 2 === 0 ? "aspect-square" : "aspect-[4/3]";

            return (
              <Link href={`/blog/${post.slug || post.id}`} key={post.id} className="break-inside-avoid block group cursor-pointer bg-[#FDFCF8] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 mb-6">

                {/* Image */}
                <div className={`relative w-full ${aspectClasses} overflow-hidden`}>
                  <Image
                    src={getPostImage(post)}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#4F6F1F] tracking-widest uppercase">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-serif text-[#0B3B24] font-bold mb-3 group-hover:text-[#ED7D4D] transition-colors line-clamp-3">
                    {post.title}
                  </h4>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4 line-clamp-3">
                    {stripHtml(post.content_1)}
                  </p>
                  <div className="text-xs text-gray-400 font-medium">
                    {new Date(post.created_at).toLocaleDateString('vi-VN')}
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/blog">
            <button className="bg-[#E5F5C8] text-[#0B3B24] hover:bg-[#d4e8aa] px-8 py-4 rounded-sm font-bold tracking-widest text-sm uppercase transition-colors shadow-sm w-full">
              Explore All Stories
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
