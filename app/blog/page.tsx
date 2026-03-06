"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

const categories = [
  "YOGA LIFE STYLE",
  "AYURVEDA",
  "MEDITATION",
  "HEALTH & DIET",
];

const PLACEHOLDER_HEADER =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600";
const PLACEHOLDER_GRID =
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800";

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
      .from("blogs")
      .select("*")
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching blogs:", error);
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  };

  const filteredBlogs = blogs.filter((blog) => blog.category === activeCategory);
  const featuredPost = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridPosts = filteredBlogs.slice(1);

  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative w-full flex flex-col mt-16 md:mt-0">
        <div className="relative w-full h-[40vh] min-h-[300px] md:h-[50vh] md:min-h-[400px] z-0">
          <Image
            src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2000"
            alt="Yoga Blog"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

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
                  activeCategory === cat
                    ? "text-[#0B3B24]"
                    : "text-[#4F6F1F] hover:text-[#0B3B24] opacity-80"
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
          Providing retreats for international yoga vacationers and locals alike,
          our Asia ashrams and centers&apos; energy are pure, positive, and as
          you will gleam from the images below, have a strength beyond measure.
          They are not to be missed. We invite everyone to visit and to deepen
          their Sadhana in this wonderful space, together in our shared
          tradition.
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
              <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-serif text-[#0B3B24] leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base line-clamp-4">
                    {featuredPost.content_1}
                  </p>
                  <div className="flex items-center gap-6 text-xs font-medium text-gray-500">
                    <span className="text-[#84cc16] font-semibold">
                      {featuredPost.category}
                    </span>
                    <span>
                      {new Date(featuredPost.created_at).toLocaleDateString(
                        "vi-VN"
                      )}
                    </span>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <span className="inline-block bg-[#ED7D4D] text-white px-8 py-3 rounded-sm font-bold tracking-widest text-xs uppercase hover:bg-orange-600 transition-colors shadow-sm mt-4 cursor-pointer">
                      Read More
                    </span>
                  </Link>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                    <Image
                      src={
                        featuredPost.header_image || PLACEHOLDER_HEADER
                      }
                      alt={featuredPost.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
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
                  <Link
                    href={`/blog/${post.id}`}
                    key={post.id}
                    className="bg-white rounded-md overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col group cursor-pointer hover:shadow-xl transition-shadow"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.header_image || PLACEHOLDER_GRID}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex gap-3 mb-3 text-xs font-semibold text-[#84cc16]">
                        <span>{post.category}</span>
                      </div>
                      <h4 className="text-xl font-serif text-[#0B3B24] font-medium mb-3 group-hover:text-[#ED7D4D] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[#4A4A4A] text-sm leading-relaxed flex-grow mb-6 line-clamp-3">
                        {post.content_1}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-400 font-medium pt-4 border-t border-gray-100 mt-auto">
                        <span>
                          {new Date(post.created_at).toLocaleDateString(
                            "vi-VN"
                          )}
                        </span>
                        <span>
                          {post.author_name ? `By ${post.author_name}` : ""}
                        </span>
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
