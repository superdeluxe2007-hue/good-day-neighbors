# Good Day Neighbors 公式サイト — 作業ルール（最優先）

このリポジトリは **一般社団法人Good Day Neighbors の公式サイト（https://gdnfukuyama.com）** です。
このファイルを読む AI（ChatGPT の Codex など）は、**この節を最優先**し、下の「Instructions for Astro Theme Development」はその次に従ってください。

## 0. 進め方（必ず守る）

- **新しいブランチで作業し、プルリクエスト（PR）を出す。** PR を出すと試し見の URL（`<ブランチ名>.good-day-neighbors.pages.dev`）が自動で作られる。
  承認は不要で、依頼者（藤井・吉田）が試し見を確かめてからマージすると 1〜2分で本番に出る。**`main` への強制上書き（force push）はしない**
- PR を出す前に **`npm run build` が通ること**を確かめる。通らない PR は出さない
- PR の説明は**日本語で**、次の3つを書く: ①何を変えたか ②なぜ変えたか ③確かめたこと（ビルド・表示）
- **頼まれたことだけ**を変える。ついでの整理・書き換え・依存パッケージの追加はしない
- 迷ったら作業を止めて、PR の説明か会話で質問する

## 1. 書いてはいけないもの（このリポジトリは誰でも見られる「公開」設定）

本文だけでなく、**コードのコメント・コミットの文・PR の説明にも**書かない。

- お客様・出店者・参加者の**個人のお名前・電話番号・メールアドレス**（お店の名前・公式アカウントは可）
- 売上・原価・協賛金額・契約条件など**社外秘の数字**
- 「協賛」の語と協賛企業名（本人の確認が取れたものだけ）
- まだ決まっていない日付・内容を、決まったように書くこと

## 2. 表記ルール（全社共通）

| 項目 | ✅ 正 | ❌ 使わない |
|---|---|---|
| 時刻の区切り | `16:00〜21:00`（波ダッシュ `〜` U+301C） | `16:00-21:00` `16:00～21:00`（全角チルダ） |
| 日付 | `12月25日（金）〜27日（日）` | `12/25(金)` |
| 金額 | `¥1,500`／税込は `¥1,500（税込）` | `1,500円` `￥1,500` `税込¥1,500` |
| 括弧（和文中） | 全角 `（）` | 半角 `()` |
| 並列 | 中黒 `・` | 和文中の `/` |
| 三点リーダ | `…` | `...` |
| 感嘆符 | 原則使わない | `!!` `!?` |
| 団体名 | 初出 `Good Day Neighbors`。サイト上の表示名は「グッドデイネイバーズ」 | 対外文で `GDN` 単独 |
| 店名 | `Enlee`／`KOKON` | `ENLEE` `enlee` `Kokon` |
| 呼びかけ | `お客様`／`◯名様`。**敬体（です・ます）** | `お客さま` `顧客` 常体 |

- 半角と全角の間にスペースを入れない（`Enleeの`）
- 「こちら」「詳しくはこちら」のリンクにしない。**行き先が分かる言葉**をリンクにする

## 3. GDN のトーン

- 書体は丸ゴシック（Zen Maru Gothic）、背景は淡い水色。**色・書体・余白の設定は変えない**（`src/styles.css` が正）
- 語り口は、近所の人に話しかけるように、やわらかく短く。誇張・煽り（「大人気」「絶対」）はしない
- **写真は人の表情が写っているものを優先**（撮影者の許可が取れているものだけ）。顔ばかり続けず、途中に全景を1枚はさむ
- 写真・動画には撮影者のクレジットを付ける（例: `映像：ジュンゾウ（@junzone）`）

## 4. 記事の追加・更新

記事は `src/content/blog/<英小文字-ハイフンの名前>/index.mdx`。**既存の記事（例: `christmas-market-2026`）をまねて**作る。

| 項目 | 書き方 |
|---|---|
| `category` | `event`（イベント）／`class`（クラス）／`info`（お知らせ）／`report`（開催レポート）のどれか |
| `tags` | `ppp`／`christmas-market`／`kids`／`talk` から選ぶ。新しいタグは作らない（必要なら PR で相談） |
| `date`・`endDate` | `2026-12-25` の形。会期があれば `endDate` |
| `venue` | 会場名（例: `福山中央公園`）。決まっていなければ書かない |
| `thumbnail` | 記事フォルダに置いた画像。**縦 4:5 推奨**（カードが 4:5） |
| `thumbnailAlt` | 画像に何が写っているかを1〜2文で（チラシなら日付・会場まで） |
| `faq` | 「予約は必要ですか？」など、問い合わせを減らす質問と答え |

- **開催が終わったイベント**は、新しい記事を作らず**同じ記事を「開催レポート」に書き換える**（URL を変えない）。`category` を `report` にし、表紙を当日の写真に替える
- 画像は1枚 **300KB 程度まで**（長い辺 1400px 程度の JPG）。動画は音声を抜いて数MBまで
- 来場者数などの数字は、**数え方（目視・推計など）を一緒に書く**

## 5. 触らないもの（変える時は PR で相談）

`src/lib/structured-data.js`（検索エンジン向けの情報）／`src/pages/robots.txt.js`・`sitemap.xml.js`・`rss.xml.js`／`astro.config.mjs`／`package.json`／`public/_redirects`

---

# Instructions for Astro Theme Development

These instructions apply to all Astro theme work. Prioritize clean, reusable, accessible, fast, SEO-friendly code. Treat the theme as something that may be reused across multiple websites, not as a one-off implementation.

## General Principles

* Prefer simple, maintainable Astro components over unnecessary abstractions.
* Keep the default Astro advantage: mostly static HTML, minimal JavaScript, and hydration only where needed.
* Do not add client-side JavaScript unless there is a clear user-facing reason.
* Avoid unnecessary dependencies. Before adding a package, check whether the same result can be achieved with Astro, HTML, CSS, or a small utility.
* Keep components reusable, documented, and easy to override.
* Use TypeScript where helpful, especially for props, content schemas, config objects, and reusable utilities.
* Favor progressive enhancement. The site should remain usable even if JavaScript fails.
* Keep markup clean, semantic, and easy to crawl.
* Never solve layout or behavior problems in a way that harms accessibility, SEO, or performance.

## Astro-Specific Guidelines

* Use `.astro` components for static and content-focused UI.
* Use islands/client hydration only when interactivity is required.
* Avoid `client:load` unless the component truly needs to run immediately.
* Prefer `client:visible`, `client:idle`, or no hydration when possible.
* Keep layout components responsible for page structure, shared metadata, global slots, and theme-level wrappers.
* Keep UI components small and focused.
* Use `Astro.props` with typed props where possible.
* Use content collections for structured content like posts, pages, projects, docs, testimonials, FAQs, and changelogs.
* Validate frontmatter with schemas instead of relying on loose optional fields.
* Keep route structure clean and predictable.
* Do not hardcode production URLs inside components. Use site config, constants, or environment-aware helpers.
* Make sure the theme works with a configurable `site` value in `astro.config.*`.

## Accessibility Requirements

* Use semantic HTML first. Do not use ARIA when a native HTML element solves the problem.
* Use landmarks properly: `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` where appropriate.
* Each page should have one clear `h1`.
* Preserve logical heading order. Do not skip heading levels for visual styling.
* All interactive elements must be keyboard accessible.
* Use real buttons for actions and real links for navigation.
* Every form control must have an associated label.
* Inputs, errors, help text, and validation states must be understandable to screen readers.
* Add visible focus styles. Never remove outlines without replacing them with an accessible focus state.
* Provide a skip link for keyboard users when the layout has repeated navigation.
* Use descriptive link text. Avoid vague text like “click here” or “read more” without context.
* Images must have useful `alt` text when meaningful.
* Decorative images should use empty alt text.
* Icons used as buttons or links must have accessible names.
* Ensure sufficient color contrast for text, icons, borders, and states.
* Do not rely on color alone to communicate meaning.
* Respect `prefers-reduced-motion`.
* Avoid auto-playing motion, carousels, or animations unless they are user-controlled and accessible.
* Modals, menus, accordions, tabs, dropdowns, and mobile navigation must handle focus, keyboard interaction, and escape/close behavior correctly.
* Test important templates with keyboard navigation and screen reader-friendly markup in mind.

## SEO Requirements

* Every page should have a unique, descriptive `<title>`.
* Every indexable page should have a useful meta description.
* Use a reusable SEO or Head component for metadata.
* Include canonical URLs where appropriate.
* Support Open Graph metadata for social sharing.
* Support Twitter/X card metadata where appropriate.
* Use absolute URLs for canonical and social image URLs.
* Configure `site` in `astro.config.*` so canonical URLs and sitemap generation work correctly.
* Include sitemap support for production themes.
* Include sensible robots handling.
* Avoid duplicate metadata across pages.
* Avoid duplicate content caused by inconsistent trailing slashes, canonical paths, or pagination.
* Use clean, descriptive URLs.
* Add structured data where useful, such as `WebSite`, `Organization`, `Article`, `BreadcrumbList`, `Product`, `FAQPage`, or `LocalBusiness`, depending on the theme.
* Do not add fake schema data. Structured data must match visible page content.
* Use proper heading structure to reflect the content hierarchy.
* Ensure important content is present in the HTML, not hidden behind client-only rendering.
* Use descriptive image filenames where possible.
* Add alt text and dimensions for content images.
* Include pagination metadata where relevant.
* Support multilingual SEO only when the theme actually supports multiple languages. If it does, include proper `lang`, canonical, and alternate/hreflang handling.
* Keep internal links crawlable with real `<a href="">` links.
* Avoid JavaScript-only navigation for normal pages.

## Performance Requirements

* Keep JavaScript minimal.
* Avoid shipping framework runtime code unless needed.
* Hydrate components selectively.
* Prefer static rendering where possible.
* Avoid large global scripts.
* Avoid large CSS bundles.
* Keep CSS scoped, layered, or organized in a predictable way.
* Remove unused CSS and unused components.
* Optimize images with Astro’s image tools where appropriate.
* Always include image width and height to reduce layout shift.
* Use responsive images for large visual assets.
* Lazy-load below-the-fold images.
* Do not lazy-load critical above-the-fold hero images unless there is a good reason.
* Use modern image formats when appropriate.
* Avoid layout shifts from images, ads, embeds, cookie banners, and late-loading UI.
* Keep third-party scripts optional and documented.
* Load analytics, embeds, chat widgets, and marketing scripts only when explicitly enabled.
* Avoid blocking render with unnecessary scripts or styles.
* Keep Core Web Vitals in mind, especially LCP, CLS, and INP.

## Font Optimization

* Prefer self-hosted fonts for production themes.
* Use only the font families actually needed by the theme.
* Include only the font weights and styles actually used.
* Prefer modern formats such as `woff2`.
* Use `font-display: swap` or another intentional rendering strategy.
* Preload only critical fonts used above the fold.
* Do not preload every font file.
* Define fallback font stacks that closely match the custom font metrics.
* Avoid layout shift caused by late-loading fonts.
* Do not load fonts from external providers by default unless the user explicitly chooses that option.
* Keep font configuration centralized so users can replace or disable custom fonts easily.

## CSS and Design System Guidelines

* Use design tokens or CSS custom properties for colors, spacing, typography, radii, shadows, and layout values.
* Keep theme customization simple.
* Avoid scattering hardcoded colors and spacing values throughout components.
* Support light and dark modes only if the theme is designed for both.
* Respect user system preference when dark mode is supported.
* Ensure color tokens meet accessibility contrast requirements.
* Keep responsive behavior consistent across components.
* Use fluid and responsive typography where appropriate.
* Avoid unnecessary wrappers and deeply nested markup.
* Keep animations subtle, optional, and respectful of reduced-motion preferences.

## Content and Markdown Guidelines

* Content should be easy to manage through Markdown, MDX, or content collections.
* Validate required frontmatter fields.
* Provide sensible defaults for optional metadata.
* Avoid requiring users to duplicate the same SEO fields in many places when defaults can be generated safely.
* Support draft or unpublished content only when the theme explicitly needs it.
* Make dates, authors, categories, tags, and excerpts consistent.
* Make sure generated archive, tag, category, author, and pagination pages have useful metadata.
* Avoid rendering empty UI sections when content is missing.

## Image and Media Guidelines

* Use optimized local images where possible.
* Provide responsive sizes for theme-controlled images.
* Include `alt` text fields in content schemas where images are user-provided.
* Do not use background images for meaningful content unless an accessible text alternative exists.
* Avoid enormous default hero images.
* Provide predictable aspect ratios to prevent layout shift.
* Lazy-load media that is not immediately visible.
* Make video/audio embeds accessible with labels, captions, transcripts, or surrounding explanatory content when relevant.

## Component Guidelines

* Components should have clear responsibilities.
* Props should be typed and documented when not obvious.
* Use sensible defaults.
* Avoid components that silently fail or render broken markup when required props are missing.
* Avoid coupling generic components to one specific page.
* Keep class names predictable.
* Make components easy to copy, remove, or override.
* Do not introduce global side effects from small components.
* For interactive components, document keyboard behavior and accessibility expectations.

## Forms

* Use semantic form markup.
* Every input must have a label.
* Required fields must be indicated accessibly.
* Error messages must be connected to the relevant fields.
* Success and error states should be announced or clearly visible.
* Do not rely only on placeholder text as a label.
* Use appropriate input types such as `email`, `tel`, `url`, `search`, and `number`.
* Keep forms usable without unnecessary JavaScript where possible.
* Do not include a form provider by default unless it is configurable.

## Navigation

* Use real links for navigation.
* Mark the current page or section when possible.
* Ensure mobile navigation works with keyboard and screen readers.
* Trap focus only when appropriate, such as inside an open modal menu.
* Restore focus after closing menus or dialogs when relevant.
* Make dropdowns and submenus accessible.
* Do not hide navigation from assistive technology unless it is truly inactive.

## Build, Config, and DX

* Keep configuration centralized and documented.
* Provide clear theme constants for site name, default title, description, social links, navigation, and footer data.
* Avoid requiring users to edit many files for common changes.
* Use environment variables only where they are actually needed.
* Do not expose secrets in client-side code.
* Keep the README accurate.
* Include setup, development, build, preview, customization, and deployment instructions.
* Add comments only where they clarify non-obvious decisions.
* Keep generated examples realistic and production-friendly.
* Make sure the theme builds cleanly without warnings or broken links.

## Testing and QA Checklist

Before considering work complete, verify:

* The project builds successfully.
* Pages render without console errors.
* No unnecessary client JavaScript is shipped.
* Navigation works with keyboard only.
* Focus states are visible.
* Forms have labels and accessible states.
* Images have correct alt text and dimensions.
* Metadata is present and unique per page.
* Canonical URLs are correct.
* Sitemap generation works.
* Social preview metadata is valid.
* The layout is responsive.
* Dark mode works if supported.
* Reduced motion is respected.
* Lighthouse or similar checks do not reveal obvious accessibility, SEO, or performance issues.
* There are no broken internal links.
* There is no placeholder content left in production-facing defaults.

## Things to Avoid

* Do not use `<div>` and `<span>` for everything when semantic HTML exists.
* Do not add ARIA roles to elements that already have correct native semantics.
* Do not remove focus outlines without accessible replacements.
* Do not add heavy animation libraries for simple transitions.
* Do not add global JavaScript for isolated UI behavior.
* Do not load all font weights “just in case.”
* Do not load external fonts by default.
* Do not use client-only rendering for content that should be crawlable.
* Do not hide important content behind JavaScript.
* Do not hardcode metadata across every page.
* Do not ship large demo assets as required production assets.
* Do not introduce dependencies without a clear reason.
* Do not sacrifice accessibility for visual polish.

## Preferred Outcome

The final Astro theme should be fast, accessible, SEO-ready, easy to customize, and pleasant to maintain. It should provide strong defaults while staying lightweight and flexible.
