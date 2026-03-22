"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/utils/supabase";
import { ArrowLeft } from "lucide-react";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600";

/** Extract YouTube video ID from various URL formats */
function getYoutubeVideoId(url: string): string | null {
  if (!url || typeof url !== "string") return null;
  // Strip markdown link format [text](url) -> use url part
  let trimmed = url.trim();
  const mdLink = trimmed.match(/\[([^\]]*)\]\((https?:\/\/[^)]+)\)/);
  if (mdLink) trimmed = mdLink[2];
  trimmed = trimmed.trim();
  if (!trimmed) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /[?&]v=([a-zA-Z0-9_-]{11})/,
  ];
  for (const re of patterns) {
    const m = trimmed.match(re);
    if (m) return m[1];
  }
  return null;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) fetchBlogDetail(slug);
  }, [slug]);

  const fetchBlogDetail = async (slugOrId: string) => {
    setLoading(true);

    // Regex to check if the param is a valid UUID
    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(slugOrId);

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq(isUUID ? "id" : "slug", slugOrId)
      .eq("is_published", true)
      .single();

    if (error) {
      console.error("Error fetching blog detail:", error);
      setBlog(null);
    } else {
      setBlog(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ED7D4D]"></div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center py-24 px-6">
          <p className="text-[#4A4A4A] text-lg mb-6">
            Bài viết không tồn tại hoặc đã bị ẩn.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#ED7D4D] font-semibold hover:underline"
          >
            <ArrowLeft size={20} /> Quay lại Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* Back link */}
      <div className="max-w-4xl mx-auto w-full px-6 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#4F6F1F] font-medium hover:text-[#0B3B24] transition-colors"
        >
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </div>

      {/* YouTube Video and/or Header Image */}
      <section className="max-w-4xl mx-auto w-full px-6 mt-6 space-y-6">
        {getYoutubeVideoId(blog.youtube_link || "") && (
          <div className="relative w-full aspect-video min-h-[200px] rounded-lg overflow-hidden shadow-lg bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${getYoutubeVideoId(blog.youtube_link!)}?rel=0`}
              title={blog.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        )}
        {(blog.header_image || !getYoutubeVideoId(blog.youtube_link || "")) && (
          <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={blog.header_image || PLACEHOLDER_IMAGE}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority={!getYoutubeVideoId(blog.youtube_link || "")}
              unoptimized
            />
          </div>
        )}
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto w-full px-6 py-12">
        <div className="mb-6">
          <span className="text-[#84cc16] font-semibold text-sm">
            {blog.category}
          </span>
          <span className="text-gray-400 mx-2">•</span>
          <span className="text-gray-500 text-sm">
            {new Date(blog.created_at).toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0B3B24] font-bold leading-tight mb-8">
          {blog.title}
        </h1>

        {/* Content 1 */}
        {blog.content_1 && (
          <div
            className="max-w-none text-[#4A4A4A] mb-12 font-serif leading-relaxed text-lg md:text-xl
                [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-[#0B3B24] [&>h2]:mt-10 [&>h2]:mb-4
                [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-bold [&>h3]:text-[#0B3B24] [&>h3]:mt-8 [&>h3]:mb-3
                [&>p]:mb-6 [&>p]:text-justify md:[&>p]:text-left
                [&>ul]:list-disc [&>ul]:pl-6 md:[&>ul]:pl-8 [&>ul]:mb-6 [&>ul>li]:mb-2
                [&>ol]:list-decimal [&>ol]:pl-6 md:[&>ol]:pl-8 [&>ol]:mb-6 [&>ol>li]:mb-2
                [&>strong]:font-bold [&>strong]:text-[#0B3B24]
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#ED7D4D] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6"
            dangerouslySetInnerHTML={{ __html: blog.content_1 }}
          />
        )}

        {/* Middle Image */}
        {blog.middle_image && (
          <div className="mb-12 relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
            <Image
              src={blog.middle_image}
              alt="Middle section image"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              unoptimized
            />
          </div>
        )}

        {/* Content 2 */}
        {blog.content_2 && (
          <div
            className="max-w-none text-[#4A4A4A] mb-12 font-serif leading-relaxed text-lg md:text-xl
                [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-[#0B3B24] [&>h2]:mt-10 [&>h2]:mb-4
                [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-bold [&>h3]:text-[#0B3B24] [&>h3]:mt-8 [&>h3]:mb-3
                [&>p]:mb-6 [&>p]:text-justify md:[&>p]:text-left
                [&>ul]:list-disc [&>ul]:pl-6 md:[&>ul]:pl-8 [&>ul]:mb-6 [&>ul>li]:mb-2
                [&>ol]:list-decimal [&>ol]:pl-6 md:[&>ol]:pl-8 [&>ol]:mb-6 [&>ol>li]:mb-2
                [&>strong]:font-bold [&>strong]:text-[#0B3B24]
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#ED7D4D] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6"
            dangerouslySetInnerHTML={{ __html: blog.content_2 }}
          />
        )}

        {/* Footer Image */}
        {blog.footer_image && (
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden my-10 shadow-md">
            <Image
              src={blog.footer_image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              unoptimized
            />
          </div>
        )}

        {/* Author Credit */}
        {(blog.author_name || blog.author_quote) && (
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-start gap-6">
            {blog.author_avatar && (
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                <Image
                  src={blog.author_avatar}
                  alt={blog.author_name || "Author"}
                  fill
                  className="object-cover"
                  sizes="80px"
                  unoptimized
                />
              </div>
            )}
            <div>
              {blog.author_name && (
                <p className="font-semibold text-[#0B3B24] text-lg">
                  {blog.author_name}
                </p>
              )}
              {blog.author_quote && (
                <p className="text-[#4A4A4A] italic mt-1">
                  &quot;{blog.author_quote}&quot;
                </p>
              )}
            </div>
          </div>
        )}
      </article>

      <div className="max-w-4xl mx-auto w-full px-6 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-[#E5F5C8] text-[#0B3B24] hover:bg-[#d4e8aa] px-6 py-3 rounded-sm font-bold tracking-widest text-xs uppercase transition-colors"
        >
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </div>

      <Footer />
    </main>
  );
}
