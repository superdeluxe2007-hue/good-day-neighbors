const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://good-day-neighbors.pages.dev"
).replace(/\/$/, "");

export const SITE = {
  name: "Good Day Neighbors",
  description: "ご近所と、いい一日を。地域のイベントやセミナー情報を届けるコミュニティ団体です。",
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
  email: "hello@goodday-neighbors.example",
  socialHandle: "@goodday_neighbors",
  socialUrl: "https://x.com/goodday_neighbors",
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { href: "/rss.xml", label: "RSS feed", icon: "rss" },
  { href: CONTACT.socialUrl, label: `${SITE.name} on X`, icon: "twitter" },
  { href: SITE.repositoryUrl, label: `${SITE.name} on GitHub`, icon: "github" },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "unei-team",
    name: "運営チーム",
    bio: "Good Day Neighbors の企画・運営を担当するボランティアチームです。",
    longBio:
      "地域のイベントやセミナーの企画・広報・当日運営を行うボランティアメンバーで構成されています。近隣住民の皆さんが気軽に参加できる場づくりを目指しています。",
    avatar: "/avatars/elena-march.svg",
  },
];

export const categories = [
  { slug: "event", name: "イベント" },
  { slug: "seminar", name: "セミナー" },
  { slug: "info", name: "お知らせ" },
];

export const tags = [
  { slug: "marche", name: "マルシェ" },
  { slug: "bousai", name: "防災" },
  { slug: "kids", name: "子ども向け" },
  { slug: "multigenerational", name: "多世代交流" },
  { slug: "money", name: "暮らし・お金" },
  { slug: "recruitment", name: "参加者募集" },
];
