import { getCollection } from "astro:content";
export { SITE, categories, tags } from "../config/theme.config.ts";
import { categories, tags } from "../config/theme.config.ts";

const isoDate = (date) => date?.toISOString().slice(0, 10);
const wordsPerMinute = 220;

const estimateReadingTime = (text = "") => {
  const words = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

export const imageSrc = (image) => (typeof image === "string" ? image : image?.src);

export const normalizePost = (entry) => ({
  slug: entry.id,
  ...entry.data,
  date: isoDate(entry.data.date),
  updated: isoDate(entry.data.updated),
  deadline: isoDate(entry.data.deadline),
  endDate: isoDate(entry.data.endDate),
  readingTime: entry.data.readingTime ?? estimateReadingTime(entry.body),
});

export const posts = async () =>
  (await getCollection("blog", ({ data }) => !data.draft)).map(normalizePost);

export const getPost = async (slug) => (await posts()).find((post) => post.slug === slug);
export const getCategory = (slug) => categories.find((category) => category.slug === slug);
export const getTag = (slug) => tags.find((tag) => tag.slug === slug);
export const postsByCategory = async (slug) =>
  (await sortedPosts()).filter((post) => post.category === slug);
export const postsByTag = async (slug) =>
  (await sortedPosts()).filter((post) => post.tags.includes(slug));
export const sortedPosts = async () =>
  [...(await posts())].sort((a, b) => (a.date < b.date ? 1 : -1));
/** 会期のある企画は endDate、単日開催は date を終了日とみなす。 */
const hasEnded = (post) => (post.endDate || post.date) < isoDate(new Date());

/**
 * トップの「注目」に出す記事。
 * 終了したイベントを載せ続けないよう、開催前・開催中のものを優先する。
 * 1) featured 指定があり、まだ終わっていないもの
 * 2) 直近に開催されるもの
 * 3) どれも該当しなければ最新記事
 */
export const featuredPost = async () => {
  const sorted = await sortedPosts();
  const upcoming = sorted.filter((post) => !hasEnded(post));
  const nearest = [...upcoming].sort((a, b) => (a.date > b.date ? 1 : -1));

  return upcoming.find((post) => post.featured) ?? nearest[0] ?? sorted[0];
};
export const popularPosts = async () => (await sortedPosts()).slice(0, 4);
export const relatedPosts = async (post, n = 3) =>
  (await sortedPosts())
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      const score = (candidate) =>
        (candidate.category === post.category ? 2 : 0) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      return score(b) - score(a);
    })
    .slice(0, n);

export const upcomingEvents = async () => {
  const today = isoDate(new Date());
  return (await posts())
    .filter((post) => post.category !== "info" && post.date >= today)
    .sort((a, b) => (a.date > b.date ? 1 : -1));
};

export const adjacentPosts = async (post) => {
  const sorted = await sortedPosts();
  const index = sorted.findIndex((candidate) => candidate.slug === post.slug);
  return { prev: sorted[index + 1], next: sorted[index - 1] };
};

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
