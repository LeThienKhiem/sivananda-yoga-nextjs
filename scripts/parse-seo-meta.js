const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const p = path.join(__dirname, "..", "seo-extracted.json");
const j = JSON.parse(fs.readFileSync(p, "utf8"));
const $ = cheerio.load("<head>" + j.headContent + "</head>", { decodeEntities: false });

const getMeta = (nameOrProp, attr = "name") => {
  const el = $(attr === "name" ? `meta[name="${nameOrProp}"]` : `meta[property="${nameOrProp}"]`).first();
  return el.attr("content") || "";
};
const title = $("title").first().text().trim();
const description = getMeta("description");
const canonical = $("link[rel='canonical']").attr("href") || "";
const ogTitle = getMeta("og:title", "property");
const ogDescription = getMeta("og:description", "property");
const ogImage = getMeta("og:image", "property");
const ogUrl = getMeta("og:url", "property");

console.log(JSON.stringify({
  title,
  description,
  canonical,
  openGraph: { ogTitle, ogDescription, ogImage, ogUrl },
}, null, 2));
