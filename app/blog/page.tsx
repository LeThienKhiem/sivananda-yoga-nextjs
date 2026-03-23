"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/utils/supabase';

const categories = ["YOGA LIFE STYLE", "AYURVEDA", "MEDITATION", "HEALTH & DIET"];

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600";
const HERO_IMAGE = "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2000";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("YOGA LIFE STYLE");
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Error fetching blogs:", error);
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  };

  // Filter blogs based on the selected category
  const filteredBlogs = blogs.filter(blog => blog.category === activeCategory);
  
  // The newest post in the category becomes the featured post
  const featuredPost = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  
  // The rest go into the grid
  const gridPosts = filteredBlogs.slice(1);

  // Helper to strip HTML tags for clean text excerpts
  const stripHtml = (htmlStr: string) => {
    if (!htmlStr) return '';
    return htmlStr.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
  };

  // Helper to get the first available image from the post
  const getPostImage = (post: any) => {
    return post.header_image || post.middle_image || post.footer_image || PLACEHOLDER_IMAGE;
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full flex flex-col mt-16 md:mt-0">
        <div className="relative w-full h-[40vh] min-h-[300px] md:h-[50vh] md:min-h-[400px] z-0">
          <Image 
            src={HERO_IMAGE}
            alt="Yoga Blog"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Seamless Overlapping Content Box */}
        <div className="relative z-10 w-[95%] max-w-4xl mx-auto bg-[#FDFCF8] px-6 pt-10 pb-6 md:pt-12 md:pb-8 text-center -mt-16 md:-mt-20">
          <p className="text-base md:text-lg text-gray-600 font-medium mb-2 md:mb-3">
            Learn The Ancient Wisdom of Healthy Living
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3B24] font-bold uppercase tracking-wide">
            Blog
          </h1>
        </div>
      </section>

      {/* 2. CATEGORY NAVIGATION */}
      <section className="w-full border-b border-gray-200 bg-[#FDFCF8]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm md:text-base font-bold tracking-widest uppercase transition-colors ${
                  activeCategory === cat ? 'text-[#0B3B24]' : 'text-[#4F6F1F] hover:text-[#0B3B24] opacity-80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION INTRO */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-medium mb-3">
          {activeCategory}
        </h2>
        <div className="w-12 h-[3px] bg-[#ED7D4D] mx-auto mb-8"></div>
        <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
          Providing retreats for international yoga vacationers and locals alike, our Asia ashrams and centers' energy are pure, positive, and as you will gleam from the images below, have a strength beyond measure. They are not to be missed. We invite everyone to visit and to deepen their Sadhana in this wonderful space, together in our shared tradition.
        </p>
      </section>

      {/* DYNAMIC CONTENT FROM DATABASE */}
      {loading ? (
        <div className="py-24 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ED7D4D]"></div>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="py-24 text-center text-gray-500 font-medium">
          Chưa có bài viết nào trong chuyên mục này.
        </div>
      ) : (
        <>
          {/* 4. FEATURED POST */}
          {featuredPost && (
            <section className="max-w-6xl mx-auto px-6 mb-24">
              <div className="overflow-hidden rounded-xl bg-white shadow-md">
                <Link href={`/blog/${featuredPost.slug || featuredPost.id}`}>
                  <div className="group relative w-full aspect-[16/9] cursor-pointer overflow-hidden">
                    <Image
                      src={getPostImage(featuredPost)}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </Link>

                <div className="p-6 md:p-8">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#84cc16]">
                    {featuredPost.category}
                  </div>
                  <h3 className="mb-4 font-serif text-3xl leading-tight text-[#A66A44] md:text-4xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-[#4A4A4A] md:text-base line-clamp-4">
                    {stripHtml(featuredPost.content_1)}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-medium text-gray-500">
                    <span>{new Date(featuredPost.created_at).toLocaleDateString('vi-VN')}</span>
                    <span>{featuredPost.author_name ? `By ${featuredPost.author_name}` : 'By Sivananda Yoga Farm Podcast'}</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 5. GRID POSTS */}
          {gridPosts.length > 0 && (
            <section className="max-w-6xl mx-auto px-6 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridPosts.map((post) => (
                  <Link href={`/blog/${post.slug || post.id}`} key={post.id} className="bg-white rounded-md overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image 
                        src={getPostImage(post)} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        unoptimized
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      {/* Tags */}
                      <div className="flex gap-3 mb-3 text-xs font-semibold text-[#84cc16]">
                        <span>{post.category}</span>
                      </div>
                      {/* Title */}
                      <h4 className="text-xl font-serif text-[#0B3B24] font-medium mb-3 group-hover:text-[#ED7D4D] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      {/* Clean text excerpt */}
                      <p className="text-[#4A4A4A] text-sm leading-relaxed flex-grow mb-6 line-clamp-3">
                        {stripHtml(post.content_1)}
                      </p>
                      {/* Footer (Date & Author) */}
                      <div className="flex justify-between items-center text-xs text-gray-400 font-medium pt-4 border-t border-gray-100 mt-auto">
                        <span>{new Date(post.created_at).toLocaleDateString('vi-VN')}</span>
                        <span>{post.author_name ? `By ${post.author_name}` : ''}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* 6. VIEW MORE BUTTON */}
      {!loading && gridPosts.length > 0 && (
        <section className="pb-32 flex justify-center">
          <button className="bg-[#E5F5C8] text-[#0B3B24] hover:bg-[#d4e8aa] px-10 py-3 rounded-sm font-bold tracking-widest text-xs uppercase transition-colors shadow-sm">
            View More
          </button>
        </section>
      )}

      <Footer />
    </main>
  );
}
