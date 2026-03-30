/**
 * Single source of truth for resort contact details (Footer, Contact, Guest Information).
 */
export const CONTACT_INFO = {
  address: "Hoa Hong Street, Ward 4, Tuyen Lam Lake, Da Lat, Vietnam",
  phone: "02636501100",
  phoneDisplay: "(+84) 02636501100",
  email: "vietnamyogaresort@sivananda.org",
  mapsUrl: "https://maps.app.goo.gl/8xq1fn4onFMc6DJHA",
  venueTitle: "Sivananda Yoga Resort and Training Center - The Ashram",
  openingHoursDisplay: "Opening hours: 7:30am - 7:30pm",
} as const;

/** Google Maps embed (same location as Contact page) */
export const CONTACT_MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.1705180420518!2d108.40943882757809!3d11.893211977453623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31716b4497e28829%3A0xb444a7f1b6fbde20!2sSivananda%20Yoga%20Resort%20and%20Training%20center!5e0!3m2!1sen!2sus!4v1772846539123!5m2!1sen!2sus" as const;

export const CONTACT_TEL_HREF = `tel:${CONTACT_INFO.phone}` as const;
export const CONTACT_MAILTO_HREF = `mailto:${CONTACT_INFO.email}` as const;

/** Footer desktop overlay (whitespace-pre-line) */
export const CONTACT_ADDRESS_MULTILINE =
  "Hoa Hong Street\nWard 4, Tuyen Lam Lake\nDa Lat, Vietnam" as const;

/** Footer mobile single line */
export const CONTACT_ADDRESS_MOBILE_FOOTER =
  "Hoa Hong Street Ward 4, Tuyen Lam Lake Da Lat, Vietnam" as const;

/** Two lines for Contact section: street block + city/country */
export function getContactAddressLines(): [string, string] {
  const parts = CONTACT_INFO.address.split(", ");
  const line2 = parts[parts.length - 1] ?? "";
  const line1 = parts.slice(0, -1).join(", ");
  return [line1, line2];
}
