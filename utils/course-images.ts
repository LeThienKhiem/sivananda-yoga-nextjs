/**
 * Centralized fallback logic for course images.
 * Used by UpcomingEvents, syhet-courses page, and course detail pages.
 */

const YOGA_PLACEHOLDERS = [
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800", // Person in meditation pose
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800", // Calm yoga studio
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", // Nature scene with person
];

/**
 * Returns the course image URL, or a yoga-themed placeholder if image_url is null/empty.
 * Uses title to pick a consistent placeholder per course (deterministic).
 */
export function getCourseImageUrl(imageUrl?: string | null, title?: string): string {
  if (imageUrl && imageUrl.trim()) return imageUrl;
  const placeholderIndex = (title?.length || 0) % YOGA_PLACEHOLDERS.length;
  return YOGA_PLACEHOLDERS[placeholderIndex];
}
