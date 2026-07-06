const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://good-day-neighbors.pages.dev"
).replace(/\/$/, "");

export const SITE = {
  name: "Good Day Neighbors",
  description: "良き日常の隣人たち。福山市・中央公園を拠点に、学びと憩いの公園を目指す地域コミュニティ団体です。",
  url: siteUrl,
  locale: "ja-JP",
  language: "ja",
  repositoryUrl: "https://github.com/superdeluxe2007-hue/good-day-neighbors",
};

export const NAVIGATION = [
  { to: "/", label: "トップ" },
  { to: "/blog", label: "イベント" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const CONTACT = {
  instagramHandle: "@good_day_neighbors",
  instagramUrl: "https://www.instagram.com/good_day_neighbors",
  lineUrl: "https://lin.ee/v8MHmIb",
  email: "gdn.fukuyama@gmail.com",
};

export const SOCIAL_LINKS = [
  { href: CONTACT.instagramUrl, label: `${SITE.name} on Instagram`, icon: "instagram" },
  { href: CONTACT.lineUrl, label: `${SITE.name} 公式LINE`, icon: "line" },
  { href: "/rss.xml", label: "RSS feed", icon: "rss" },
];

export const authors = [
  {
    slug: "fujii-takanori",
    name: "藤井孝憲",
    bio: "Good Day Neighbors 代表。株式会社SPDX代表取締役。決裁・対外関係・全体統括を担当。",
    longBio:
      "株式会社SPDX代表取締役として、Enlee・KOKONなど福山市内の複数事業を運営。Good Day Neighborsでは決裁・対外関係（福山市公園緑地課等）・全体統括を担う。",
    avatar: "/avatars/elena-march.svg",
  },
  {
    slug: "tsumagari-haruka",
    name: "津曲はるか",
    bio: "イベント会社出身。出展者まとめ・企画運営を担当（クリスマスマーケット主担当）。",
    longBio:
      "イベント会社出身。Good Day Neighborsでは出展者まとめや企画運営を担当し、クリスマスマーケットの主担当を務める。イベント企画・情報提供フォーマットの整備も担う。",
    avatar: "/avatars/mira-iwasaki.svg",
  },
  {
    slug: "yatada",
    name: "谷田くん",
    bio: "株式会社umika代表取締役。行政連携・仕組みづくりを担当。",
    longBio:
      "株式会社umika代表取締役。瀬戸内のシェアキッチン＆アトリエ「リトルセトウチ」の運営者でもある。Good Day Neighborsでは行政連携やエディブルパークの企画・仕組みづくりを担当。",
    avatar: "/avatars/samuel-okafor.svg",
  },
];

export const categories = [
  { slug: "event", name: "イベント" },
  { slug: "class", name: "クラス" },
  { slug: "info", name: "お知らせ" },
];

export const tags = [
  { slug: "ppp", name: "PPP" },
  { slug: "edible-park", name: "エディブルパーク" },
  { slug: "christmas-market", name: "クリスマスマーケット" },
  { slug: "kids", name: "子ども向け" },
  { slug: "talk", name: "トークショー" },
];
