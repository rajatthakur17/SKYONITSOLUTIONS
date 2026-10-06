const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateOgImage() {
  const bgPath = path.join(__dirname, '../backgoundim/Futuristic Earthrise Over Connected City.png');
  const outPath = path.join(__dirname, '../public/og-image.jpg');

  console.log('Reading base image:', bgPath);

  const width = 1200;
  const height = 630;

  // SVG overlay with brand typography and elements
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#020a1a" stop-opacity="0.92"/>
          <stop offset="45%" stop-color="#05122e" stop-opacity="0.75"/>
          <stop offset="100%" stop-color="#010612" stop-opacity="0.88"/>
        </linearGradient>
        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#08d8ff"/>
          <stop offset="100%" stop-color="#0b69ff"/>
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      <!-- Background tint for contrast -->
      <rect width="${width}" height="${height}" fill="url(#overlayGrad)"/>

      <!-- Top decorative brand badge -->
      <g transform="translate(80, 75)">
        <rect width="260" height="36" rx="18" fill="rgba(8, 216, 255, 0.12)" stroke="rgba(8, 216, 255, 0.35)" stroke-width="1.5"/>
        <circle cx="22" cy="18" r="5" fill="#08d8ff" filter="url(#glow)"/>
        <text x="36" y="23" fill="#a5f3fc" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5">SKYON IT SOLUTIONS</text>
      </g>

      <!-- Main Headline -->
      <g transform="translate(80, 195)">
        <text x="0" y="0" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="800" letter-spacing="-1.2">
          Engineering Scalable
        </text>
        <text x="0" y="64" fill="url(#cyanGrad)" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="800" letter-spacing="-1.2">
          Digital Products &amp; Growth.
        </text>
      </g>

      <!-- Subtitle description -->
      <g transform="translate(80, 345)">
        <text x="0" y="0" fill="#cbd5e1" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400">
          Full-Stack Web &amp; Software Development • Cloud • AI Automation
        </text>
        <text x="0" y="32" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400">
          Search Engine Optimization (SEO) • Digital Marketing • UI/UX Design
        </text>
      </g>

      <!-- Bottom Card & Stats / Domain Footer -->
      <g transform="translate(80, 485)">
        <!-- Divider line -->
        <line x1="0" y1="0" x2="1040" y2="0" stroke="rgba(255, 255, 255, 0.14)" stroke-width="1"/>

        <!-- Domain -->
        <text x="0" y="48" fill="#38bdf8" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" letter-spacing="0.5">
          skyonitsolutions.com
        </text>

        <!-- Right Side Badge -->
        <text x="1040" y="48" text-anchor="end" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="500">
          Technology &amp; Digital Growth Partner
        </text>
      </g>
    </svg>
  `);

  await sharp(bgPath)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .composite([
      { input: svgOverlay, top: 0, left: 0 }
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(outPath);

  const stats = fs.statSync(outPath);
  console.log(`✅ Generated og-image.jpg successfully! Size: ${(stats.size / 1024).toFixed(1)} KB at ${outPath}`);
}

generateOgImage().catch(console.error);
