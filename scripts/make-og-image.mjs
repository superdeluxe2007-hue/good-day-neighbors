// 水色のベタ塗り地にペンギンを合成して OGP 画像を作る。
// ペンギンの元画像は白背景なので、明度を反転させたものをアルファマスクとして使い、
// 白い部分を透過させてから合成する（サイト上の mix-blend-mode と同じ見え方になる）。
import sharp from "sharp";

const SRC = process.argv[2];
const OUT = process.argv[3];

const W = 1200;
const H = 630;
const BG = "#e3f0fb";
const INK = "#0c1915";
const PENGUIN_H = 430;

const resized = sharp(SRC).resize({ height: PENGUIN_H, fit: "inside" });
const { width, height } = await resized.metadata().then(async () => {
  const buf = await resized.clone().toBuffer({ resolveWithObject: true });
  return buf.info;
});

// 白=透過、黒=不透明 になるようにマスクを作る
const alpha = await sharp(await resized.clone().toBuffer())
  .greyscale()
  .negate()
  .toColourspace("b-w")
  .raw()
  .toBuffer();

const ink = await sharp({
  create: { width, height, channels: 3, background: INK },
})
  .raw()
  .toBuffer();

const penguin = await sharp(ink, { raw: { width, height, channels: 3 } })
  .joinChannel(alpha, { raw: { width, height, channels: 1 } })
  .png()
  .toBuffer();

await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
  .composite([{ input: penguin, gravity: "centre" }])
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`生成: ${OUT}（ペンギン ${width}x${height} を ${W}x${H} に配置）`);
