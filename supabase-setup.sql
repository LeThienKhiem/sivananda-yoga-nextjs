-- ============================================
-- Supabase Blog Setup
-- Run this in Supabase Dashboard -> SQL Editor
-- ============================================

-- 1. Create the blogs table
CREATE TABLE public.blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT NOT NULL,
  category TEXT,
  header_image TEXT,
  content_1 TEXT,
  middle_image TEXT,
  content_2 TEXT,
  footer_image TEXT,
  author_name TEXT,
  author_avatar TEXT,
  author_quote TEXT,
  is_published BOOLEAN DEFAULT true
);

-- 2. Create a storage bucket for blog images (Make sure it's public)
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true);

-- 3. Set up Storage Policies (Allow public read, allow anon/authenticated uploads for admin simplicity in this MVP)
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');
CREATE POLICY "Allow Uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog-images');
