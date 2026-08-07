const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://gdnfukuyama.com"
).replace(/\/$/, "");

export const SITE = {
  name: "Good Day Neighbors",
  // フッターに表示する一文。description は検索結果向けの実務的な文面のため、
  // 画面上ではこちらのブランドの言葉を使う。
  tagline: "良き日常の隣人たち。福山市・中央公園を拠点に、学びと憩いの公園を目指す地域コミュニティ団体です。",
  // ヘッダーのロゴ表示だけに使う名称。
  // name はページタイトル・構造化データ・主催者の判定に使うため英字のまま維持する。
  brandLabel: "グッドデイネイバーズ",
  // 検索結果とSNS共有時に表示される説明文。
  // 実際に検索される語（福山・中央公園・イベント・出店）を前半に置いている。
  description:
    "福山市の中央公園でイベントを開催している地域コミュニティ団体です。開催予定と当日の様子、出店のご案内、テーブル・椅子の備品レンタルについて掲載しています。",
  url: siteUrl,
  locale: "ja-JP",
  language: "ja",
  repositoryUrl: "https://github.com/superdeluxe2007-hue/good-day-neighbors",
};

export const NAVIGATION = [
  { to: "/", label: "トップ" },
  { to: "/blog", label: "イベント" },
  { to: "/join", label: "出店・レンタル" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const CONTACT = {
  instagramHandle: "@good_day_neighbors",
  instagramUrl: "https://www.instagram.com/good_day_neighbors",
  lineUrl: "https://lin.ee/v8MHmIb",
  // 出店・レンタルの申込フォーム（Googleフォーム）。
  // 発行後、ここのURLを差し替えるだけでサイト全体に反映される。
  applyFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdPqg7XV1TNMPoh2wKG0oerxjwKueEf0BhYeDzbpAnWeIb7nw/viewform",
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
  { slug: "report", name: "開催レポート" },
];

export const tags = [
  { slug: "ppp", name: "PPP" },
  { slug: "edible-park", name: "エディブルパーク" },
  { slug: "christmas-market", name: "クリスマスマーケット" },
  { slug: "kids", name: "子ども向け" },
  { slug: "talk", name: "トークショー" },
];
