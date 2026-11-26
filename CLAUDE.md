# Good Day Neighbors 公式サイト（gdnfukuyama.com）

## ⚠️ 作業前に必ず読むこと

このサイトの**技術構成・SEO実装・掲載記事の状態**、およびGDNの**活動方針・イベントの経緯・関係者との交渉状況**は
LLM Wiki に集約されている。サイトの文言はこれらと矛盾させないこと。

- `/Users/takanorifujii/Documents/LLM-wiki/wiki/businesses/good-day-neighbors/website.md` ← **最重要（このサイトの正）**
- `/Users/takanorifujii/Documents/LLM-wiki/wiki/businesses/good-day-neighbors/index.md`（活動方針）
- `/Users/takanorifujii/Documents/LLM-wiki/wiki/businesses/good-day-neighbors/vision-and-strategy.md`（年間の柱・役割分担）
- `/Users/takanorifujii/Documents/LLM-wiki/wiki/businesses/good-day-neighbors/ppp-yorumikke.md`（PARK PIZZA PARTY の実施記録・価格）

> 💡 **このサイトは3サイト中もっともSEO実装が成熟している**（構造化データ7タイプ・robots/sitemap動的生成・全ページOGP）。
> `src/lib/structured-data.js` は **KOKON・Enleeへ横展開できる参照実装**。壊さないこと。

**このリポジトリの `AGENTS.md` も併せて読むこと**（Astroテーマ開発の汎用ガイドライン：a11y・SEO・パフォーマンス）。
CLAUDE.md はプロジェクト固有の事情、AGENTS.md は実装の作法、という分担。

---

## 技術構成

| 項目 | 内容 |
|---|---|
| フレームワーク | Astro ＋ Tailwind 4（MDX 使用） |
| ベーステーマ | QuietPages |
| パッケージマネージャ | **npm**（`package-lock.json`。KOKON/Enleeのpnpmとは異なるので注意） |
| GitHub | `superdeluxe2007-hue/good-day-neighbors` |
| ホスティング | **Cloudflare**（`curl -sI https://gdnfukuyama.com/` → `server: cloudflare` で確認） |
| ビルド | `npm run build` = `astro build` ＋ `scripts/prune-unused-assets.mjs`（未使用アセットの削除が走る） |
| site URL | `astro.config.mjs` で `SITE_URL` / `PUBLIC_SITE_URL` 環境変数を優先、既定 `https://gdnfukuyama.com` |

---

## 既知の罠

- **ドメイン名を取り違えないこと**
  - 稼働中は **`gdnfukuyama.com`（ハイフン無し）**
  - `gdn-fukuyama.com`（ハイフン有り）は Cloudflare Registrar で決済失敗し**未完了のまま残っている別物**。
    Cloudflareダッシュボードに「無効なネームサーバー」状態で残存している（→ wiki の `businesses/kokon/website.md` に経緯）
- **SEOバグはこのテーマでは発生していない**。robots.txt は正常（KOKON/Enleeの Horizon テーマ固有の問題）。

---

## 作業後にやること

変更内容と判断の根拠を LLM Wiki に反映する。
イベント関連の変更なら該当ページ（`ppp-yorumikke.md` 等）、
サイト構成の変更なら `businesses/good-day-neighbors/website.md` を新規作成して記録する。

---

## よっしー（吉田さん）が ChatGPT の Codex で編集する（2026-11-26〜）

- **承認は不要**（2026-11-26 本人判断「僕の承認がなくても変えられるように。僕とよっしーが管理者」）。
  よっしーさんは Codex からブランチ → PR → 試し見で確認 → **自分でマージ**。`main` には「強制上書き・削除の禁止」だけ掛けてある
  （PR 必須・承認1件の保護は同日に外した）。Claude の直接 push も従来どおり通る
- Codex が読むのは **`AGENTS.md` の冒頭の節**（表記・トーン・書いてはいけないもの）。wiki は読めないので、
  **wiki の表記ルールや GDN の方針を変えたら `AGENTS.md` にも書き写す**（案内ではなく転記）
- よっしーさん向けの手順は `EDITING.md`
- PR のレビューを頼まれたら: ①`npm run build` が通るか ②`AGENTS.md` §1（公開リポジトリに書かない）に反していないか
  ③表記（§2）④試し見の URL でスマホ幅の見え方、を見て、気づいた点を返す。**マージするかは依頼者が決める**
