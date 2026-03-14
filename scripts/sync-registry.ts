/**
 * Sync Component Registry - One-time migration script
 *
 * Synchronizes all existing static components into the component_registry table
 * with correct fields_schema and default values matching the hardcoded content.
 *
 * HOW TO RUN:
 * -----------
 * npx tsx scripts/sync-registry.ts
 *
 * Or with env vars:
 * NEXT_PUBLIC_SUPABASE_URL=... NEXT_PUBLIC_SUPABASE_ANON_KEY=... npx tsx scripts/sync-registry.ts
 *
 * PREREQUISITES:
 * - component_registry table exists in Supabase
 * - .env.local with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
 */

import * as fs from "fs";
import * as path from "path";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Load .env.local
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

interface SchemaField {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
}

interface ComponentDef {
  name: string;
  component_type: string;
  description: string;
  fields_schema: SchemaField[];
}

// Extracted from components - defaults match hardcoded content
const COMPONENT_DEFINITIONS: ComponentDef[] = [
  {
    name: "Upcoming Events Slider",
    component_type: "UpcomingEvents",
    description: "Displays upcoming courses and events.",
    fields_schema: [
      { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "PROGRAMS AND RETREAT" },
      { name: "title", label: "Title", type: "text", defaultValue: "Upcoming Events & Courses" },
      { name: "ctaText", label: "CTA Button Text", type: "text", defaultValue: "View all Courses" },
      { name: "ctaLink", label: "CTA Link", type: "text", defaultValue: "/syhet-courses" },
    ],
  },
  {
    name: "Student Feedback",
    component_type: "StudentFeedback",
    description: "Displays testimonial slider.",
    fields_schema: [],
  },
  {
    name: "Contact Section",
    component_type: "ContactSection",
    description: "Standard contact info and form.",
    fields_schema: [],
  },
  {
    name: "More Information",
    component_type: "MoreInformation",
    description: "Additional details section.",
    fields_schema: [],
  },
  {
    name: "Accommodation Cost",
    component_type: "AccommodationCost",
    description: "Pricing table for accommodations.",
    fields_schema: [],
  },
  {
    name: "Course Curriculum",
    component_type: "CourseCurriculum",
    description: "Curriculum details for TTC/SYHET.",
    fields_schema: [],
  },
  {
    name: "Senior Teachers",
    component_type: "SeniorTeachers",
    description: "List of senior teachers.",
    fields_schema: [],
  },
  {
    name: "Ashram Gallery",
    component_type: "AshramGallery",
    description: "Image gallery for ashram locations.",
    fields_schema: [],
  },
  {
    name: "Benefits of TTC",
    component_type: "BenefitsTTC",
    description: "Section highlighting TTC benefits.",
    fields_schema: [],
  },
  {
    name: "Yoga Insights",
    component_type: "YogaInsights",
    description: "General yoga insights and philosophy.",
    fields_schema: [],
  },
  {
    name: "Karma Yoga Tabs",
    component_type: "KarmaYogaTabs",
    description: "Tabbed content for Karma Yoga.",
    fields_schema: [],
  },
  {
    name: "Custom Two Column",
    component_type: "CustomTwoColumn",
    description: "Flexible 2-column layout with text and image.",
    fields_schema: [
      { name: "title", label: "Title", type: "text", defaultValue: "" },
      { name: "description", label: "Description (HTML)", type: "textarea", defaultValue: "" },
      { name: "image_url", label: "Image URL", type: "image_url", defaultValue: "" },
    ],
  },
];

async function syncRegistry(supabase: SupabaseClient) {
  console.log("Syncing component_registry with", COMPONENT_DEFINITIONS.length, "components...\n");

  let inserted = 0;
  let updated = 0;

  for (const def of COMPONENT_DEFINITIONS) {
    const payload = {
      name: def.name,
      component_type: def.component_type,
      description: def.description,
      is_active: true,
      fields_schema: def.fields_schema,
    };

    const { data: existing } = await supabase
      .from("component_registry")
      .select("id")
      .eq("component_type", def.component_type)
      .maybeSingle();

    if (existing) {
      const { error } = await supabase
        .from("component_registry")
        .update({
          name: payload.name,
          description: payload.description,
          is_active: payload.is_active,
          fields_schema: payload.fields_schema,
        })
        .eq("component_type", def.component_type);

      if (error) {
        console.error("  Failed to update", def.component_type, error.message);
      } else {
        updated++;
        console.log("  Updated:", def.component_type);
      }
    } else {
      const { error } = await supabase.from("component_registry").insert([payload]);

      if (error) {
        console.error("  Failed to insert", def.component_type, error.message);
      } else {
        inserted++;
        console.log("  Inserted:", def.component_type);
      }
    }
  }

  console.log("\nRegistry sync done. Inserted:", inserted, "Updated:", updated);
}

// Default data for components that support it (used when pre-populating custom_pages)
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

async function prePopulateCustomPages(supabase: SupabaseClient) {
  console.log("\n--- Pre-populating custom_pages components ---\n");

  const { data: pages, error: fetchErr } = await supabase
    .from("custom_pages")
    .select("id, slug, components");

  if (fetchErr) {
    console.error("Failed to fetch custom_pages:", fetchErr.message);
    return;
  }

  if (!pages?.length) {
    console.log("No custom pages found.");
    return;
  }

  let updatedCount = 0;
  for (const page of pages) {
    const components = (page.components as unknown[]) ?? [];
    if (components.length === 0) continue;

    let changed = false;
    const newComponents = components.map((comp: Record<string, unknown>) => {
      const type = comp.type as string;
      const defaults = COMPONENT_DEFAULTS[type];
      if (!defaults) return comp;

      const data = (comp.data as Record<string, string> | undefined) ?? {};
      // Only populate when data is missing or completely empty
      if (comp.data && Object.keys(data).length > 0) return comp;

      const merged: Record<string, string> = { ...defaults };
      for (const key of Object.keys(defaults)) {
        if (data[key] !== undefined && data[key] !== "") {
          merged[key] = data[key];
        }
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
        console.error("  Failed to update page", page.slug, updErr.message);
      } else {
        updatedCount++;
        console.log("  Updated page:", page.slug);
      }
    }
  }

  console.log("\nPre-populate done. Pages updated:", updatedCount);
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    process.exit(1);
  }

  const supabase = createClient(url, key);

  await syncRegistry(supabase);
  await prePopulateCustomPages(supabase);

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
