import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/index.mdx",
    base: "./src/content/blog",
    generateId: ({ entry }) => entry.replace(/[\\/]index\.mdx$/, "").replace(/\\/g, "/"),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      canonical: z.string().url().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      readingTime: z.number().int().positive().optional(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      // 記事を書いた個人ではなく、そのイベントの主催団体を表示する。
      // 他団体のイベントも掲載するため、GDN以外の名前が入りうる。
      organizer: z.string().default("Good Day Neighbors"),
      thumbnail: image(),
      thumbnailAlt: z.string().default(""),
      imageCredit: z
        .object({
          caption: z.string().optional(),
          author: z.string(),
          authorUrl: z.string().url(),
          source: z.string().default("Unsplash"),
          sourceUrl: z.string().url(),
        })
        .optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      deadline: z.coerce.date().optional(),
      venueType: z.enum(["outdoor", "indoor"]).optional(),
      // 記事本文に会場が明記されている場合のみ設定する。Event 構造化データの出力条件を兼ねる。
      venue: z.string().optional(),
      // 会期のあるイベントの最終日。Event の endDate として出力する。
      endDate: z.coerce.date().optional(),
      // よくある質問。問い合わせを減らす目的で、記事末尾に表示し
      // FAQPage 構造化データとしても出力する。
      faq: z
        .array(z.object({ q: z.string(), a: z.string() }))
        .optional(),
      fee: z.string().optional(),
    }),
});

export const collections = { blog };
