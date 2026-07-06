# Good Day Neighbors

地域のイベント・セミナー情報を届けるコミュニティ団体「Good Day Neighbors」の公式サイトです。
[QuietPages](https://github.com/andreialba/quietpages)（Astro製テーマ）をベースに構築しています。

## Tech Stack

- Astro 7 / Tailwind CSS 4 / MDX
- Cloudflare Pages でホスティング

## Getting Started

```bash
npm install
npm run dev
```

本番ビルド:

```bash
npm run build
```

デプロイ先ドメインが決まったら、ビルド時に `SITE_URL` を設定してください。

```bash
SITE_URL=https://your-domain.com npm run build
```

## サイト構成

- `src/config/theme.config.ts` — サイト名・ナビゲーション・連絡先・カテゴリー・タグなどの設定
- `src/content/blog` — イベント・セミナー・お知らせの記事（MDX）
- `src/pages/about.astro` — 団体紹介
- `src/pages/contact.astro` — お問い合わせ

## License

テーマ部分は [MIT License](./LICENSE) に基づきます。
