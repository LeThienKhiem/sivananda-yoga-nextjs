/**
 * Sync All Schemas - One-time mass synchronization
 *
 * Populates the component_registry table with complete fields_schema for ALL
 * components, extracted from their actual hardcoded content. After running,
 * the Visual Schema Builder at /admin/components will show all fields with
 * correct default values for each component.
 *
 * RUN: npx tsx scripts/sync-all-schemas.ts
 *
 * Prerequisites: .env.local with NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
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

// Extracted from component files - exact hardcoded values as defaultValue
const COMPONENTS: ComponentDef[] = [
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
    fields_schema: [
      { name: "title", label: "Section Title", type: "text", defaultValue: "What our students are saying" },
    ],
  },
  {
    name: "Contact Section",
    component_type: "ContactSection",
    description: "Standard contact info and form.",
    fields_schema: [
      { name: "title", label: "Main Title", type: "text", defaultValue: "Can't find what you're looking for?" },
      { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Contact us for any inquiries regarding our programs, retreats, or ashram stay." },
      { name: "venueTitle", label: "Venue Title", type: "text", defaultValue: "Sivananda Yoga Resort and Training Center - The Ashram" },
      { name: "address", label: "Address", type: "textarea", defaultValue: "Hoa Hong Street, Ward 4, Tuyen Lam Lake\nDa Lat, Vietnam" },
      { name: "phone", label: "Phone", type: "text", defaultValue: "(+84) 02636501100" },
      { name: "email", label: "Email", type: "text", defaultValue: "vietnamyogaresort@sivananda.org" },
      { name: "openingHours", label: "Opening Hours", type: "text", defaultValue: "Opening hours: 7:30am - 7:30pm" },
      { name: "formTitle", label: "Form Title", type: "text", defaultValue: "Send us a message" },
      { name: "mapEmbedSrc", label: "Google Map Embed URL", type: "text", defaultValue: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.1705180420518!2d108.40943882757809!3d11.893211977453623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31716b4497e28829%3A0xb444a7f1b6fbde20!2sSivananda%20Yoga%20Resort%20and%20Training%20center!5e0!3m2!1sen!2sus!4v1772846539123!5m2!1sen!2sus" },
    ],
  },
  {
    name: "Ashram Gallery",
    component_type: "AshramGallery",
    description: "Image gallery for ashram locations.",
    fields_schema: [
      { name: "title", label: "Title", type: "text", defaultValue: "Explore the Beauty of the Ashram" },
      { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "A serene sanctuary in Dalat, Vietnam, dedicated to peace, practice, and self-discovery." },
    ],
  },
  {
    name: "Senior Teachers",
    component_type: "SeniorTeachers",
    description: "List of senior teachers.",
    fields_schema: [
      { name: "title", label: "Title", type: "text", defaultValue: "Senior Teachers" },
      { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Sivananda Yoga Dalat Resort & Training Center" },
    ],
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
  {
    name: "More Information",
    component_type: "MoreInformation",
    description: "Additional details section.",
    fields_schema: [
      { name: "title", label: "Section Title", type: "text", defaultValue: "More Information" },
    ],
  },
  {
    name: "Accommodation Cost",
    component_type: "AccommodationCost",
    description: "Pricing table for accommodations.",
    fields_schema: [
      { name: "title", label: "Title", type: "text", defaultValue: "Accommodation" },
      { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Simple Living, High Thinking" },
    ],
  },
  {
    name: "Course Curriculum",
    component_type: "CourseCurriculum",
    description: "Curriculum details for TTC/SYHET.",
    fields_schema: [
      { name: "title", label: "Title", type: "text", defaultValue: "Curriculum" },
      { name: "costNote", label: "Cost Note", type: "text", defaultValue: "*** incl. accommodation, meals and study materials" },
    ],
  },
  {
    name: "Benefits of TTC",
    component_type: "BenefitsTTC",
    description: "Section highlighting TTC benefits.",
    fields_schema: [
      { name: "title", label: "Title", type: "text", defaultValue: "Benefits of the Training" },
      { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Transform body, mind, and spirit through immersive practice" },
      { name: "ctaText", label: "CTA Button Text", type: "text", defaultValue: "Enroll Now" },
    ],
  },
  {
    name: "Yoga Insights",
    component_type: "YogaInsights",
    description: "General yoga insights and philosophy.",
    fields_schema: [
      { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Read & Learn" },
      { name: "title", label: "Title", type: "text", defaultValue: "Yoga Insights & Stories" },
    ],
  },
  {
    name: "Karma Yoga Tabs",
    component_type: "KarmaYogaTabs",
    description: "Tabbed content for Karma Yoga.",
    fields_schema: [
      { name: "title", label: "Title", type: "text", defaultValue: "How to practice Karma Yoga?" },
    ],
  },
];

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    process.exit(1);
  }

  const supabase = createClient(url, key);
  console.log("Syncing component_registry with full fields_schema for", COMPONENTS.length, "components...\n");

  let inserted = 0;
  let updated = 0;

  for (const def of COMPONENTS) {
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
        console.error("  ✗ Failed to update", def.component_type, error.message);
      } else {
        updated++;
        console.log("  ✓ Updated", def.component_type, `(${def.fields_schema.length} fields)`);
      }
    } else {
      const { error } = await supabase.from("component_registry").insert([payload]);
      if (error) {
        console.error("  ✗ Failed to insert", def.component_type, error.message);
      } else {
        inserted++;
        console.log("  ✓ Inserted", def.component_type, `(${def.fields_schema.length} fields)`);
      }
    }
  }

  console.log("\nDone. Inserted:", inserted, "Updated:", updated);
  console.log("\nOpen /admin/components to see the Visual Schema Builder with all fields populated.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
