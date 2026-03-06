-- Add youtube_link column to blogs table
-- Run this in Supabase Dashboard -> SQL Editor

ALTER TABLE public.blogs
ADD COLUMN IF NOT EXISTS youtube_link TEXT;
