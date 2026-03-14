/**
 * One-time seed script for the `component_registry` table in Supabase.
 *
 * HOW TO RUN:
 * -----------
 * 1. Ensure you have a .env.local file in the project root with:
 *    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
 *    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
 *
 * 2. Run with Node.js (loads .env.local automatically):
 *    node scripts/seed-components.js
 *
 * 3. Run with tsx (if installed: npm i -D tsx):
 *    npx tsx scripts/seed-components.js
 *
 * 4. Run with explicit env vars (no .env.local needed):
 *    NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... node scripts/seed-components.js
 */

const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

// Load .env.local if it exists (Next.js convention)
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

const COMPONENTS = [
  {
    name: "Upcoming Events Slider",
    component_type: "UpcomingEvents",
    description: "Displays upcoming courses and events.",
  },
  {
    name: "Student Feedback",
    component_type: "StudentFeedback",
    description: "Displays testimonial slider.",
  },
  {
    name: "Contact Section",
    component_type: "ContactSection",
    description: "Standard contact info and form.",
  },
  {
    name: "More Information",
    component_type: "MoreInformation",
    description: "Additional details section.",
  },
  {
    name: "Accommodation Cost",
    component_type: "AccommodationCost",
    description: "Pricing table for accommodations.",
  },
  {
    name: "Course Curriculum",
    component_type: "CourseCurriculum",
    description: "Curriculum details for TTC/SYHET.",
  },
  {
    name: "Senior Teachers",
    component_type: "SeniorTeachers",
    description: "List of senior teachers.",
  },
  {
    name: "Ashram Gallery",
    component_type: "AshramGallery",
    description: "Image gallery for ashram locations.",
  },
  {
    name: "Benefits of TTC",
    component_type: "BenefitsTTC",
    description: "Section highlighting TTC benefits.",
  },
  {
    name: "Yoga Insights",
    component_type: "YogaInsights",
    description: "General yoga insights and philosophy.",
  },
  {
    name: "Karma Yoga Tabs",
    component_type: "KarmaYogaTabs",
    description: "Tabbed content for Karma Yoga.",
  },
  {
    name: "Custom Two Column",
    component_type: "CustomTwoColumn",
    description: "Flexible 2-column layout with text and image.",
  },
];

async function seed() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Set them in .env.local or as environment variables."
    );
    process.exit(1);
  }

  const supabase = createClient(url, key);

  console.log("Seeding component_registry with", COMPONENTS.length, "components...\n");

  let inserted = 0;
  let updated = 0;

  for (const c of COMPONENTS) {
    const payload = {
      name: c.name,
      component_type: c.component_type,
      description: c.description,
      is_active: true,
      fields_schema: [],
    };

    const { data: existing } = await supabase
      .from("component_registry")
      .select("id")
      .eq("component_type", c.component_type)
      .maybeSingle();

    if (existing) {
      const { error: updErr } = await supabase
        .from("component_registry")
        .update({
          name: payload.name,
          description: payload.description,
          is_active: payload.is_active,
          fields_schema: payload.fields_schema,
        })
        .eq("component_type", payload.component_type);

      if (updErr) {
        console.error("  Failed to update", c.component_type, updErr.message);
      } else {
        updated++;
        console.log("  Updated:", c.component_type);
      }
    } else {
      const { error: insErr } = await supabase
        .from("component_registry")
        .insert([payload]);

      if (insErr) {
        console.error("  Failed to insert", c.component_type, insErr.message);
      } else {
        inserted++;
        console.log("  Inserted:", c.component_type);
      }
    }
  }

  console.log("\nDone. Inserted:", inserted, "Updated:", updated);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
