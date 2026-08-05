// 写真フォルダからサムネイル一覧（コンタクトシート）を作る。
// 大量の写真から掲載候補を選ぶための確認用スクリプト。
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const [, , SRC_DIR, OUT, COLS_ARG] = process.argv;
const COLS = Number(COLS_ARG || 8);
const CELL = 200;
const LABEL = 22;

const files = (await readdir(SRC_DIR))
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort((a, b) => {
    const n = (s) => Number(s.match(/(\d+)\.jpe?g$/i)?.[1] ?? 0);
    return n(a) - n(b);
  });

const rows = Math.ceil(files.length / COLS);
const W = COLS * CELL;
const H = rows * (CELL + LABEL);

const composites = [];
for (const [i, f] of files.entries()) {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const buf = await sharp(join(SRC_DIR, f))
    .resize(CELL, CELL, { fit: "cover" })
    .toBuffer();
  composites.push({ input: buf, left: col * CELL, top: row * (CELL + LABEL) });

  const num = f.match(/(\d+)\.jpe?g$/i)?.[1] ?? f;
  const svg = Buffer.from(
    `<svg width="${CELL}" height="${LABEL}"><rect width="${CELL}" height="${LABEL}" fill="#fff"/>` +
      `<text x="${CELL / 2}" y="16" font-family="sans-serif" font-size="15" fill="#111" text-anchor="middle">${num}</text></svg>`,
  );
  composites.push({ input: svg, left: col * CELL, top: row * (CELL + LABEL) + CELL });
}

await sharp({ create: { width: W, height: H, channels: 3, background: "#ffffff" } })
  .composite(composites)
  .jpeg({ quality: 72 })
  .toFile(OUT);

console.log(`${files.length}枚 → ${OUT} (${W}x${H})`);
