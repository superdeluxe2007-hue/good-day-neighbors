import { SITE, CONTACT } from "../config/theme.config.ts";

const absolute = (path = "/") => new URL(path, SITE.url).toString();

/**
 * 団体そのものを表す Organization。トップ・About で使う。
 * schema.org の値はすべてサイト上に実際に表示されている情報のみで構成する。
 */
export const organizationSchema = () => ({
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "グッドデイネイバーズ",
  url: absolute("/"),
  description: SITE.description,
  email: CONTACT.email,
  sameAs: [CONTACT.instagramUrl],
  areaServed: {
    "@type": "City",
    name: "福山市",
    address: {
      "@type": "PostalAddress",
      addressRegion: "広島県",
      addressLocality: "福山市",
      addressCountry: "JP",
    },
  },
});

/** サイト全体を表す WebSite。 */
export const webSiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: absolute("/"),
  description: SITE.description,
  inLanguage: SITE.locale,
  publisher: { "@id": `${SITE.url}/#organization` },
});

/** パンくず。items は [{ label, to }]。 */
export const breadcrumbSchema = (items = []) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    ...(item.to ? { item: absolute(item.to) } : {}),
  })),
});

/**
 * 開催イベントを表す Event。
 * 会場（venue）が記事に明記されているものだけを対象とする。
 * 料金は自由記述のため offers には変換せず、事実と異なる構造化データを出さない。
 */
export const eventSchema = (post, { url, image } = {}) => ({
  "@type": "Event",
  name: post.title,
  description: post.excerpt,
  startDate: post.date,
  ...(post.endDate ? { endDate: post.endDate } : {}),
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: post.venue,
    address: {
      "@type": "PostalAddress",
      addressRegion: "広島県",
      addressLocality: "福山市",
      addressCountry: "JP",
    },
  },
  organizer: { "@id": `${SITE.url}/#organization` },
  ...(image ? { image } : {}),
  ...(url ? { url } : {}),
});

/** 複数スキーマを 1 つの JSON-LD にまとめる。 */
export const graph = (...nodes) => ({
  "@context": "https://schema.org",
  "@graph": nodes.filter(Boolean),
});
