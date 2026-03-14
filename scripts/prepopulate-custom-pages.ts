/**
 * Pre-populate custom_pages - Standalone one-time script
 *
 * Populates the `data` column for components in custom_pages that use
 * UpcomingEvents or CustomTwoColumn but have empty/missing data.
 * Run this if pages appear blank in the Admin Page Builder.
 *
 * HOW TO RUN:
 * npx tsx scripts/prepopulate-custom-pages.ts
 *
 * Or: npm run prepopulate-pages (if added to package.json)
 */

import * as fs from "fs";
import * as path from "path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.join(__dirname, "..", ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  }
}

const COMPONENT_DEFAULTS: Record<string, Record<string, string>> = {
  UpcomingEvents: {
    subtitle: "PROGRAMS AND RETREAT",
    title: "Upcoming Events & Courses",
    ctaText: "View all Courses",
    ctaLink: "/syhet-courses",
  },
  CustomTwoColumn: {
    title: "",
    description: "",
    image_url: "",
  },
};

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    process.exit(1);
  }

  const supabase = createClient(url, key);

  const { data: pages, error: fetchErr } = await supabase
    .from("custom_pages")
    .select("id, slug, components");

  if (fetchErr) {
    console.error("Failed to fetch custom_pages:", fetchErr.message);
    process.exit(1);
  }

  if (!pages?.length) {
    console.log("No custom pages found.");
    return;
  }

  let updatedCount = 0;
  for (const page of pages) {
    const components = (page.components as unknown[]) ?? [];
    let changed = false;
    const newComponents = components.map((comp: Record<string, unknown>) => {
      const type = comp.type as string;
      const defaults = COMPONENT_DEFAULTS[type];
      if (!defaults) return comp;

      const data = (comp.data as Record<string, string> | undefined) ?? {};
      if (comp.data && Object.keys(data).length > 0) return comp;

      const merged: Record<string, string> = { ...defaults };
      for (const k of Object.keys(defaults)) {
        if (data[k] !== undefined && data[k] !== "") merged[k] = data[k];
      }
      changed = true;
      return { ...comp, data: merged };
    });

    if (changed) {
      const { error: updErr } = await supabase
        .from("custom_pages")
        .update({ components: newComponents })
        .eq("id", page.id);
      if (updErr) {
        console.error("  Failed:", page.slug, updErr.message);
      } else {
        updatedCount++;
        console.log("  Updated:", page.slug);
      }
    }
  }

  console.log("\nDone. Pages updated:", updatedCount);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
