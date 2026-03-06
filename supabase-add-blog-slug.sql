-- Add slug column to blogs table for SEO-friendly URLs
-- Run this in Supabase Dashboard -> SQL Editor

ALTER TABLE public.blogs
ADD COLUMN IF NOT EXISTS slug TEXT;

-- Optional: create a unique index so slugs are unique (recommended for SEO)
CREATE UNIQUE INDEX IF NOT EXISTS blogs_slug_key ON public.blogs (slug) WHERE slug IS NOT NULL;

-- Optional: backfill slug from title for existing rows (simple slug: lowercase, replace spaces with hyphens)
-- Uncomment and run if you want to generate slugs for existing posts:
/*
UPDATE public.blogs
SET slug = LOWER(
  REGEXP_REPLACE(
    REGEXP_REPLACE(TRIM(title), '\s+', '-', 'g'),
    '[^a-z0-9\-]', '', 'g'
  )
)
WHERE slug IS NULL OR slug = '';
*/
