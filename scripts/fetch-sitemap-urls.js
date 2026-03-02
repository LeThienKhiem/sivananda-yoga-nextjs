/**
 * Fetches WordPress sitemap index, extracts all child sitemap URLs,
 * then collects all page URLs from each child sitemap and exports to old-urls.json.
 * Uses native fetch only (Node 18+).
 */

const SITEMAP_INDEX_URL = 'https://sivanandayogavietnam.org/wp-sitemap.xml';
const OUTPUT_FILE = 'old-urls.json';

/**
 * Extract text content from all <loc>...</loc> tags in XML string.
 * @param {string} xml
 * @returns {string[]}
 */
function extractLocUrls(xml) {
  const urls = [];
  const locRegex = /<loc>([^<]+)<\/loc>/gi;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

/**
 * Fetch URL and return response text. Throws on non-OK.
 * @param {string} url
 * @returns {Promise<string>}
 */
async function fetchText(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'SitemapFetcher/1.0' },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${url}`);
  }
  return res.text();
}

async function main() {
  console.log('Fetching sitemap index:', SITEMAP_INDEX_URL);
  const indexXml = await fetchText(SITEMAP_INDEX_URL);
  const allLocUrls = extractLocUrls(indexXml);
  const childSitemapUrls = allLocUrls.filter((u) => u.endsWith('.xml'));
  console.log(`Found ${childSitemapUrls.length} child sitemap(s).\n`);

  const allPageUrls = [];
  for (let i = 0; i < childSitemapUrls.length; i++) {
    const url = childSitemapUrls[i];
    console.log(`[${i + 1}/${childSitemapUrls.length}] Processing: ${url}`);
    try {
      const xml = await fetchText(url);
      const pageUrls = extractLocUrls(xml);
      allPageUrls.push(...pageUrls);
      console.log(`  -> Extracted ${pageUrls.length} URL(s).`);
    } catch (err) {
      console.error(`  -> Error: ${err.message}`);
    }
  }

  const uniqueUrls = [...new Set(allPageUrls)];
  console.log(`\nTotal URLs collected: ${allPageUrls.length}`);
  console.log(`Unique URLs: ${uniqueUrls.length}`);

  const fs = require('fs');
  const path = require('path');
  const outPath = path.join(__dirname, '..', OUTPUT_FILE);
  fs.writeFileSync(outPath, JSON.stringify(uniqueUrls, null, 2), 'utf8');
  console.log(`\nExported to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
