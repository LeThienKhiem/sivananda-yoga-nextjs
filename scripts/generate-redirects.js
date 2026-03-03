/**
 * Reads old-urls.json and generates a Next.js redirects() configuration array.
 * Maps old URLs to new paths by keeping only the slug (last path segment).
 * e.g. /old-category/post-slug/ -> /post-slug
 */

const fs = require('fs');
const path = require('path');

const OLD_URLS_PATH = path.join(__dirname, '..', 'old-urls.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'redirects-config.js');

/**
 * Get pathname from full URL, normalized (no trailing slash, decoded).
 * @param {string} url
 * @returns {string}
 */
function getPathname(url) {
  let p;
  try {
    p = new URL(url).pathname;
  } catch {
    return '';
  }
  p = p.replace(/\/+$/, '') || '/';
  return decodeURIComponent(p);
}

/**
 * Get destination path from old pathname: last segment only (slug).
 * @param {string} pathname
 * @returns {string}
 */
function getDestinationPath(pathname) {
  if (!pathname || pathname === '/') return '/';
  const segments = pathname.split('/').filter(Boolean);
  const slug = segments[segments.length - 1] || '';
  return '/' + slug;
}

function main() {
  console.log('Reading', OLD_URLS_PATH);
  const raw = fs.readFileSync(OLD_URLS_PATH, 'utf8');
  /** @type {string[]} */
  const oldUrls = JSON.parse(raw);
  console.log(`Loaded ${oldUrls.length} URL(s).\n`);

  const redirects = [];
  const seenSources = new Set();

  for (const url of oldUrls) {
    const source = getPathname(url);
    const destination = getDestinationPath(source);

    // Skip root (no redirect needed), duplicate sources, and self-referential redirects
    if (source === '/' && destination === '/') continue;
    if (seenSources.has(source)) continue;
    if (source === destination) continue; // Prevents ERR_TOO_MANY_REDIRECTS
    seenSources.add(source);

    redirects.push({
      source,
      destination,
      permanent: true,
    });
  }

  // Build the config file content: array suitable for next.config.js redirects
  const lines = [
    '/**',
    ' * Generated from old-urls.json by scripts/generate-redirects.js',
    ' * Paste the redirects array into next.config.js: redirects: async () => [...],',
    ' */',
    'module.exports = [',
    ...redirects.map(
      (r) =>
        `  { source: ${JSON.stringify(r.source)}, destination: ${JSON.stringify(r.destination)}, permanent: true },`
    ),
    '];',
  ];
  const content = lines.join('\n');
  fs.writeFileSync(OUTPUT_PATH, content, 'utf8');
  console.log(`Wrote ${redirects.length} redirect(s) to ${OUTPUT_PATH}\n`);

  // Also print to stdout for easy copy-paste into next.config
  console.log('--- Copy below into next.config.js redirects() ---\n');
  console.log(
    redirects
      .map(
        (r) =>
          `  { source: ${JSON.stringify(r.source)}, destination: ${JSON.stringify(r.destination)}, permanent: true },`
      )
      .join('\n')
  );
  console.log('\n--- End ---');
}

main();
