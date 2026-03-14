/**
 * Deep Scan & Sync - Populates component_registry with ALL section-level components
 *
 * Includes all 42+ components from components/ folder (excludes Header, Footer, AnimatedNumber).
 * Run this to bring every section component into the Page Builder system.
 *
 * RUN: npx tsx scripts/sync-all-schemas.ts
 * Or:  npm run sync-all-schemas
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

const EXCLUDED = ["Header", "Footer", "AnimatedNumber"];

const COMPONENTS: ComponentDef[] = [
  { name: "Upcoming Events Slider", component_type: "UpcomingEvents", description: "Displays upcoming courses and events.", fields_schema: [{ name: "subtitle", label: "Subtitle", type: "text", defaultValue: "PROGRAMS AND RETREAT" }, { name: "title", label: "Title", type: "text", defaultValue: "Upcoming Events & Courses" }, { name: "ctaText", label: "CTA Button Text", type: "text", defaultValue: "View all Courses" }, { name: "ctaLink", label: "CTA Link", type: "text", defaultValue: "/syhet-courses" }] },
  { name: "Student Feedback", component_type: "StudentFeedback", description: "Displays testimonial slider.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "What our students are saying" }] },
  { name: "Contact Section", component_type: "ContactSection", description: "Standard contact info and form.", fields_schema: [{ name: "title", label: "Main Title", type: "text", defaultValue: "Can't find what you're looking for?" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Contact us for any inquiries regarding our programs, retreats, or ashram stay." }, { name: "venueTitle", label: "Venue Title", type: "text", defaultValue: "Sivananda Yoga Resort and Training Center - The Ashram" }, { name: "address", label: "Address", type: "textarea", defaultValue: "Hoa Hong Street, Ward 4, Tuyen Lam Lake\nDa Lat, Vietnam" }, { name: "phone", label: "Phone", type: "text", defaultValue: "(+84) 02636501100" }, { name: "email", label: "Email", type: "text", defaultValue: "vietnamyogaresort@sivananda.org" }, { name: "openingHours", label: "Opening Hours", type: "text", defaultValue: "Opening hours: 7:30am - 7:30pm" }, { name: "formTitle", label: "Form Title", type: "text", defaultValue: "Send us a message" }] },
  { name: "More Information", component_type: "MoreInformation", description: "Additional details section.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "More Information" }] },
  { name: "Accommodation Cost", component_type: "AccommodationCost", description: "Pricing table for accommodations.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "Accommodation" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Simple Living, High Thinking" }] },
  { name: "Course Curriculum", component_type: "CourseCurriculum", description: "Curriculum details for TTC/SYHET.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "Curriculum" }] },
  { name: "Senior Teachers", component_type: "SeniorTeachers", description: "List of senior teachers.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "Senior Teachers" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Sivananda Yoga Dalat Resort & Training Center" }] },
  { name: "Ashram Gallery", component_type: "AshramGallery", description: "Image gallery for ashram locations.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "Explore the Beauty of the Ashram" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "A serene sanctuary in Dalat, Vietnam, dedicated to peace, practice, and self-discovery." }] },
  { name: "Benefits of TTC", component_type: "BenefitsTTC", description: "Section highlighting TTC benefits.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "Benefits of the Training" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Transform body, mind, and spirit through immersive practice" }, { name: "ctaText", label: "CTA Button Text", type: "text", defaultValue: "Enroll Now" }] },
  { name: "Yoga Insights", component_type: "YogaInsights", description: "General yoga insights and philosophy.", fields_schema: [{ name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Read & Learn" }, { name: "title", label: "Title", type: "text", defaultValue: "Yoga Insights & Stories" }] },
  { name: "Karma Yoga Tabs", component_type: "KarmaYogaTabs", description: "Tabbed content for Karma Yoga.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "How to practice Karma Yoga?" }] },
  { name: "Custom Two Column", component_type: "CustomTwoColumn", description: "Flexible 2-column layout with text and image.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "" }, { name: "description", label: "Description (HTML)", type: "textarea", defaultValue: "" }, { name: "image_url", label: "Image URL", type: "image_url", defaultValue: "" }] },
  { name: "Ayurvedic Fundamentals", component_type: "AyurvedicFundamentals", description: "Ayurvedic treatment fundamentals carousel.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Ayurvedic Fundamentals" }] },
  { name: "Ayurveda Articles", component_type: "AyurvedaArticles", description: "Ayurveda blog articles grid.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Ayurveda Articles" }] },
  { name: "Ayurveda Explore", component_type: "AyurvedaExplore", description: "Ayurveda exploration section.", fields_schema: [{ name: "ctaText", label: "CTA Button Text", type: "text", defaultValue: "EXPLORE YOGA VACATION" }, { name: "ctaLink", label: "CTA Link", type: "text", defaultValue: "/yoga-vacation" }] },
  { name: "Ayurveda Intro", component_type: "AyurvedaIntro", description: "Ayurveda introduction.", fields_schema: [] },
  { name: "Ayurveda Expertise", component_type: "AyurvedaExpertise", description: "Ayurveda expertise cards.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Our Expertise" }] },
  { name: "Boutique Section", component_type: "BoutiqueSection", description: "Boutique info and images.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "The Boutique" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "— We've got you covered!" }, { name: "description", label: "Description", type: "textarea", defaultValue: "Located in the Main Hall, our small, well-stocked boutique offers an array of products — snacks (chocolate, ice cream, nuts, and more), books (yoga books, notebooks), clothes (socks, pants, hoodies, tee shirts), and sundries like clothing detergent. Its limited hours make it a popular destination after meals!" }] },
  { name: "Classical Yoga Purpose", component_type: "ClassicalYogaPurpose", description: "Classical yoga and real purpose.", fields_schema: [{ name: "classicalTitle", label: "Classical Yoga Title", type: "text", defaultValue: "Classical Yoga" }, { name: "classicalSubtitle", label: "Classical Yoga Subtitle", type: "text", defaultValue: "Timeless Wisdom for Modern Life's Challenges" }, { name: "purposeTitle", label: "Real Purpose Title", type: "text", defaultValue: "Real Purpose of Yoga" }, { name: "purposeSubtitle", label: "Real Purpose Subtitle", type: "text", defaultValue: "Evolving Through Life with Balance, Growth, and Inner Fulfillment" }] },
  { name: "Contact Us", component_type: "ContactUs", description: "Contact form and info.", fields_schema: [{ name: "title", label: "Main Heading", type: "text", defaultValue: "Can't find what you're looking for?" }, { name: "venueName", label: "Venue Name", type: "text", defaultValue: "Sivananda Yoga Resort and Training Center - The Ashram" }, { name: "address", label: "Address", type: "textarea", defaultValue: "Hoa Hong Street, Ward 4, Tuyen Lam Lake\nDa Lat, Vietnam" }, { name: "phone", label: "Phone", type: "text", defaultValue: "(+84) 02636501100" }, { name: "email", label: "Email", type: "text", defaultValue: "vietnamyogaresort@sivananda.org" }] },
  { name: "Course Package Section", component_type: "CoursePackageSection", description: "Course package inclusions.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "What Includes in the Package" }, { name: "ctaText", label: "Enroll Button Text", type: "text", defaultValue: "ENROLL NOW" }, { name: "ctaLink", label: "Enroll Link", type: "text", defaultValue: "/accommodations" }] },
  { name: "Curriculum Section", component_type: "CurriculumSection", description: "Curriculum tabs with images.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "Curriculum" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Rooted in Tradition, Designed for Transformation" }] },
  { name: "Daily Schedule", component_type: "DailySchedule", description: "Daily ashram schedule accordion.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Daily Schedule" }] },
  { name: "Enroll TTC Section", component_type: "EnrollTTCSection", description: "Enroll TTC CTA section.", fields_schema: [{ name: "ctaText", label: "CTA Button Text", type: "text", defaultValue: "ENROLL TTC" }, { name: "ctaLink", label: "CTA Link", type: "text", defaultValue: "/accommodations" }] },
  { name: "Events Carousel", component_type: "EventsCarousel", description: "Events carousel slider.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "Upcoming Events" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Join our transformational programs and retreats" }] },
  { name: "FAQ Accordion", component_type: "FaqAccordion", description: "FAQ accordion.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "General Questions" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Everything you need to know before your stay at the Sivananda Yoga Vietnam Resort & Training Center." }] },
  { name: "FAQ During Stay", component_type: "FaqDuringStay", description: "During stay FAQ.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "During Your Stay" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Preparing for Your Ashram Experience" }] },
  { name: "Healing Harmony", component_type: "HealingHarmony", description: "Natural healing section.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Natural Healing" }] },
  { name: "Main Teachers", component_type: "MainTeachers", description: "Main teachers grid.", fields_schema: [{ name: "title", label: "Title", type: "text", defaultValue: "Main Teachers" }, { name: "subtitle", label: "Subtitle", type: "text", defaultValue: "Sivananda Yoga Dalat Resort & Training Center" }] },
  { name: "Message From Teachers", component_type: "MessageFromTeachers", description: "Message from teachers.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Message from Our Teachers" }, { name: "ctaText", label: "CTA Button Text", type: "text", defaultValue: "READ MORE FAQs" }, { name: "ctaLink", label: "CTA Link", type: "text", defaultValue: "/frequently-asked-questions" }] },
  { name: "More Information (Vietnamese)", component_type: "MoreInformationVi", description: "More information (Vietnamese).", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Thông tin thêm" }] },
  { name: "Place Carousel", component_type: "PlaceCarousel", description: "Place/slideshow carousel.", fields_schema: [{ name: "title", label: "Heading", type: "text", defaultValue: "THE PERFECT PLACE TO LEARN AND RELAX" }, { name: "ctaText", label: "CTA Button Text", type: "text", defaultValue: "EXPLORE YOGA VACATION" }] },
  { name: "Program Testimonials", component_type: "ProgramTestimonials", description: "Program testimonials.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Testimonials" }] },
  { name: "Teachings Intro", component_type: "TeachingsIntro", description: "Teachings introduction.", fields_schema: [] },
  { name: "Teaching Foundation", component_type: "TeachingFoundation", description: "Teaching foundation cards.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Our Teaching Foundation" }] },
  { name: "Testimonial Section", component_type: "TestimonialSection", description: "Residency program testimonial.", fields_schema: [{ name: "title", label: "Heading", type: "text", defaultValue: "One-Month Residency Program" }, { name: "subtitle", label: "Subheading", type: "text", defaultValue: "Yoga Lifestyle Immersion" }, { name: "ctaText", label: "Register Button Text", type: "text", defaultValue: "REGISTER NOW" }] },
  { name: "Testimonials Carousel 2", component_type: "TestimonialsCarousel2", description: "Testimonials carousel (Supabase).", fields_schema: [] },
  { name: "Testimonial Video Section", component_type: "TestimonialVideoSection", description: "Video testimonial embed.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Experience the Journey" }] },
  { name: "TTC Testimonials", component_type: "TTCTestimonials", description: "TTC testimonials.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Testimonials from our TTC Graduates" }] },
  { name: "Video Testimonials", component_type: "VideoTestimonials", description: "Video testimonials.", fields_schema: [{ name: "title", label: "Section Title", type: "text", defaultValue: "Testimonials from our TTC Graduates" }] },
  { name: "Why Choose TTC", component_type: "WhyChooseTTC", description: "Why choose Sivananda TTC.", fields_schema: [{ name: "title", label: "Main Heading", type: "text", defaultValue: "Why Choose Sivananda Yoga Teacher Training Course?" }, { name: "block1Title", label: "Block 1 Title", type: "text", defaultValue: "A Legacy Rooted in Authenticity" }, { name: "block2Title", label: "Block 2 Title", type: "text", defaultValue: "Transformative, Not Just Informative" }, { name: "block3Title", label: "Block 3 Title", type: "text", defaultValue: "Global Recognition & Certification" }, { name: "block4Title", label: "Block 4 Title", type: "text", defaultValue: "A Living Gurukula Experience" }] },
  { name: "Yoga Definition", component_type: "YogaDefinition", description: "Yoga definition section.", fields_schema: [{ name: "title", label: "Section Heading", type: "text", defaultValue: "Yoga is, according to Swami Sivananda..." }] },
];

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    process.exit(1);
  }

  const supabase = createClient(url, key);
  console.log("Syncing component_registry with", COMPONENTS.length, "components...\n");

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
        console.error("  ✗", def.component_type, error.message);
      } else {
        updated++;
        console.log("  ✓", def.component_type, `(${def.fields_schema.length} fields)`);
      }
    } else {
      const { error } = await supabase.from("component_registry").insert([payload]);
      if (error) {
        console.error("  ✗", def.component_type, error.message);
      } else {
        inserted++;
        console.log("  ✓", def.component_type, `(${def.fields_schema.length} fields)`);
      }
    }
  }

  console.log("\nDone. Inserted:", inserted, "Updated:", updated);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
