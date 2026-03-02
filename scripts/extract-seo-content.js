/**
 * Fetches a WordPress page URL and extracts <head> inner HTML and main article content.
 * Saves to seo-extracted.json.
 *
 * Usage: node scripts/extract-seo-content.js [URL]
 * Example: node scripts/extract-seo-content.js "https://sivanandayogavietnam.org/yoga-teacher-training-course/"
 */

const fs = require("fs");
const path = require("path");

const TARGET_URL =
  process.argv[2] ||
  process.env.SEO_EXTRACT_URL ||
  "ĐIỀN URL TRANG KHÓA HỌC VÀO ĐÂY";
const OUTPUT_FILE = path.join(__dirname, "..", "seo-extracted.json");

const CONTENT_SELECTORS = [
  "main",
  "article",
  ".entry-content",
  "#content .entry-content",
  "#content",
  ".post-content",
  ".content",
  "[role='main']",
  "#main-content",
  ".et_pb_post_content",
];

async function fetchHtml(url) {
  if (url === "ĐIỀN URL TRANG KHÓA HỌC VÀO ĐÂY") {
    throw new Error(
      "Please provide the target URL as first argument or set SEO_EXTRACT_URL env var.\nExample: node scripts/extract-seo-content.js \"https://sivanandayogavietnam.org/yoga-teacher-training-course/\""
    );
  }
  const res = await fetch(url, {
    headers: { "User-Agent": "SEOExtractor/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return res.text();
}

function extractHeadContent($) {
  const head = $("head").first();
  if (!head.length) return "";
  return head.html() || "";
}

function extractBodyContent($) {
  for (const selector of CONTENT_SELECTORS) {
    const el = $(selector).first();
    if (el.length) {
      const html = el.html();
      if (html && html.trim().length > 100) {
        return html.trim();
      }
    }
  }
  return "";
}

async function main() {
  const cheerio = require("cheerio");
  console.log("Target URL:", TARGET_URL);
  console.log("Fetching HTML...");
  const html = await fetchHtml(TARGET_URL);
  const $ = cheerio.load(html, { decodeEntities: false });
  const headContent = extractHeadContent($);
  const bodyContent = extractBodyContent($);
  const out = { headContent, bodyContent };
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(out, null, 2), "utf8");
  console.log("Saved to", OUTPUT_FILE);
  console.log("  headContent length:", headContent.length);
  console.log("  bodyContent length:", bodyContent.length);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
