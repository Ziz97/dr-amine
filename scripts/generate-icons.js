/**
 * Regenerates favicon / PWA / Apple / Windows tile icons from the brand logo.
 * Usage: node scripts/generate-icons.js
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src/assets/images/duo-smile.jpg");
const PUBLIC = path.join(ROOT, "public");
const ICONS = path.join(PUBLIC, "icons");

async function findToothBounds(src) {
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const isInk = (i) => data[i] < 245 || data[i + 1] < 245 || data[i + 2] < 245;

  const rowDensity = new Array(height).fill(0);
  let minX = width;
  let maxX = 0;
  let minY = height;
  let maxY = 0;

  for (let y = 0; y < height; y++) {
    let count = 0;
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      if (isInk(i)) {
        count++;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
    rowDensity[y] = count / width;
  }

  let toothBottom = maxY;
  let inGap = false;
  let gapStart = null;
  for (let y = minY; y <= maxY; y++) {
    if (rowDensity[y] < 0.02) {
      if (!inGap) {
        inGap = true;
        gapStart = y;
      }
    } else if (inGap && gapStart !== null && y - gapStart > 8) {
      toothBottom = gapStart - 1;
      break;
    } else {
      inGap = false;
      gapStart = null;
    }
  }

  let tMinX = width;
  let tMaxX = 0;
  for (let y = minY; y <= toothBottom; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      if (isInk(i)) {
        if (x < tMinX) tMinX = x;
        if (x > tMaxX) tMaxX = x;
      }
    }
  }

  return { minX: tMinX, minY, maxX: tMaxX, maxY: toothBottom, width, height };
}

async function main() {
  fs.mkdirSync(ICONS, { recursive: true });

  const b = await findToothBounds(SRC);
  const toothW = b.maxX - b.minX + 1;
  const toothH = b.maxY - b.minY + 1;
  const pad = Math.round(Math.max(toothW, toothH) * 0.12);
  const side = Math.max(toothW, toothH) + pad * 2;
  const left = Math.max(0, Math.floor(b.minX - (side - toothW) / 2));
  const top = Math.max(0, Math.floor(b.minY - (side - toothH) / 2));
  const extract = {
    left,
    top,
    width: Math.min(side, b.width - left),
    height: Math.min(side, b.height - top),
  };

  const master = await sharp(SRC)
    .extract(extract)
    .resize(1024, 1024, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();

  const maskableLight = await sharp({
    create: {
      width: 1024,
      height: 1024,
      channels: 3,
      background: "#ffffff",
    },
  })
    .composite([
      {
        input: await sharp(master)
          .resize(720, 720, { fit: "contain", background: "#fff" })
          .png()
          .toBuffer(),
        gravity: "centre",
      },
    ])
    .png()
    .toBuffer();

  const sizes = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "favicon-48x48.png": 48,
    "apple-touch-icon.png": 180,
    "apple-touch-icon-120x120.png": 120,
    "apple-touch-icon-152x152.png": 152,
    "apple-touch-icon-167x167.png": 167,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
    "mstile-150x150.png": 150,
  };

  for (const [name, size] of Object.entries(sizes)) {
    await sharp(master)
      .resize(size, size, { fit: "cover" })
      .png({ compressionLevel: 9 })
      .toFile(path.join(ICONS, name));
  }

  await sharp(maskableLight)
    .resize(192, 192)
    .png()
    .toFile(path.join(ICONS, "android-chrome-maskable-192x192.png"));
  await sharp(maskableLight)
    .resize(512, 512)
    .png()
    .toFile(path.join(ICONS, "android-chrome-maskable-512x512.png"));

  await sharp(master).resize(192, 192).png().toFile(path.join(PUBLIC, "logo192.png"));
  await sharp(master).resize(512, 512).png().toFile(path.join(PUBLIC, "logo512.png"));
  await sharp(master)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC, "apple-touch-icon.png"));

  const svgPng = await sharp(master).resize(128, 128).png().toBuffer();
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="DUO SMILE">
  <image href="data:image/png;base64,${svgPng.toString("base64")}" width="128" height="128"/>
</svg>
`;
  fs.writeFileSync(path.join(PUBLIC, "favicon.svg"), svg);
  fs.writeFileSync(path.join(ICONS, "favicon.svg"), svg);

  const pngToIcoMod = require("png-to-ico");
  const toIco = pngToIcoMod.default || pngToIcoMod;

  const icoBuf = await toIco([
    path.join(ICONS, "favicon-16x16.png"),
    path.join(ICONS, "favicon-32x32.png"),
    path.join(ICONS, "favicon-48x48.png"),
  ]);
  fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), icoBuf);

  const safariPinned = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <path fill="#000" d="M8 1.2c1.8 0 3.3 1 3.8 2.5.4 1 .5 2.2.5 3.5 0 1.7-.3 3.5-.8 5-.4 1.2-1 2.2-2 2.7-.6.4-1.2.5-1.5.5-.3 0-.9-.1-1.5-.5-1-.5-1.6-1.5-2-2.7C4 10.7 3.7 8.9 3.7 7.2c0-1.3.1-2.5.5-3.5C4.7 2.2 6.2 1.2 8 1.2zm.7 8c1.1 0 2.1.2 2.9.7.4.8.3 1.5-.2 1.9-.8.6-1.9.4-3-.2-1.1-.7-1.8-1.7-2-2.7.6-.4 1.4-.6 2.3-.7z"/>
</svg>
`;
  fs.writeFileSync(path.join(PUBLIC, "safari-pinned-tab.svg"), safariPinned);

  fs.writeFileSync(
    path.join(PUBLIC, "browserconfig.xml"),
    `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="icons/mstile-150x150.png"/>
      <TileColor>#3B2F82</TileColor>
    </tile>
  </msapplication>
</browserconfig>
`
  );

  console.log("Icons generated in public/ and public/icons/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
