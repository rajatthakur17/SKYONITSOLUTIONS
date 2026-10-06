#!/usr/bin/env node

/**
 * restore_cta.js
 *
 * Utility script to manage, restore, optimize, and inspect the CallToAction section.
 * Supports:
 *   - Raw restore: Restores the exact template from backgoundim/SKYON_CTA_Get_Started_Background.html
 *   - Clean Astro mode: Converts to valid Astro component syntax (removes <html>/<body> boilerplate)
 *   - No-background mode: Removes the heavy base64 background image, replacing with clean CSS
 *   - Extract background mode: Extracts the inline 2.4MB base64 image to an external asset
 *   - Undo: Reverts from the automatic backup (.bak)
 *   - Status: Checks current file size, inline assets, and health
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Path Resolution
// ---------------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find project root (looking for package.json)
function findProjectRoot(startDir) {
  let curr = startDir;
  while (curr && curr !== path.dirname(curr)) {
    if (fs.existsSync(path.join(curr, 'package.json'))) {
      return curr;
    }
    curr = path.dirname(curr);
  }
  return process.cwd();
}

const ROOT_DIR = findProjectRoot(__dirname);
const SOURCE_FILE = path.join(ROOT_DIR, 'backgoundim', 'SKYON_CTA_Get_Started_Background.html');
const TARGET_FILE = path.join(ROOT_DIR, 'src', 'components', 'sections', 'CallToAction.astro');
const BACKUP_FILE = `${TARGET_FILE}.bak`;
const EXTRACTED_IMG_PATH = path.join(ROOT_DIR, 'public', 'cta-background.png');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

function createBackup() {
  if (fs.existsSync(TARGET_FILE)) {
    fs.copyFileSync(TARGET_FILE, BACKUP_FILE);
    const stat = fs.statSync(BACKUP_FILE);
    console.log(`[backup] Saved backup to CallToAction.astro.bak (${formatBytes(stat.size)})`);
  }
}

function printStatus() {
  console.log('\n--- CallToAction Component Status ---');
  if (!fs.existsSync(TARGET_FILE)) {
    console.log(`Target: NOT FOUND (${TARGET_FILE})`);
    return;
  }

  const stat = fs.statSync(TARGET_FILE);
  const content = fs.readFileSync(TARGET_FILE, 'utf8');
  const lines = content.split('\n').length;
  const hasBase64 = content.includes('data:image/png;base64');
  const hasHtmlTag = /<html[^>]*>/i.test(content);
  const hasExtImg = content.includes('/cta-background.png');
  const hasBackup = fs.existsSync(BACKUP_FILE);

  console.log(`Target File:     src/components/sections/CallToAction.astro`);
  console.log(`File Size:       ${formatBytes(stat.size)} (${stat.size.toLocaleString()} bytes)`);
  console.log(`Line Count:      ${lines} lines`);
  console.log(`Inline Base64:   ${hasBase64 ? 'YES (~2.4 MB embedded)' : 'NO'}`);
  console.log(`External Asset:  ${hasExtImg ? 'YES (/cta-background.png)' : 'NO'}`);
  console.log(`Document Shell:  ${hasHtmlTag ? 'Included (<!DOCTYPE / <html> / <body>)' : 'Clean Component (<style> + <section>)'}`);
  console.log(`Backup File:     ${hasBackup ? `Available (${formatBytes(fs.statSync(BACKUP_FILE).size)})` : 'None'}`);
  console.log('--------------------------------------\n');
}

function printHelp() {
  console.log(`
Usage: node scripts/restore_cta.js [options]

Options:
  --raw (default)    Restores exact template from backgoundim/SKYON_CTA_Get_Started_Background.html
  --astro, --clean   Restores and strips <!DOCTYPE>/<html>/<body> shells for a clean Astro component
  --no-bg            Restores without the heavy 2.4MB base64 background image (uses modern CSS gradient)
  --extract-bg       Restores and extracts the base64 Earth graphic to public/cta-background.png
  --backup           Manually saves a backup of current CallToAction.astro
  --undo             Restores CallToAction.astro from CallToAction.astro.bak
  --status           Shows current CallToAction.astro file size, embedded assets, and health
  --help, -h         Displays this help message

Examples:
  node scripts/restore_cta.js               # Exact raw restore
  node scripts/restore_cta.js --astro       # Clean Astro markup
  node scripts/restore_cta.js --no-bg       # Lightweight CSS gradient (no image)
  node scripts/restore_cta.js --extract-bg  # Earth graphic extracted as static file
  node scripts/restore_cta.js --undo        # Roll back to previous backup
  node scripts/restore_cta.js --status      # Check current status
`);
}

// ---------------------------------------------------------------------------
// Main Transformations
// ---------------------------------------------------------------------------
function cleanAstroComponent(htmlContent) {
  // Extract style tag content
  const styleMatch = htmlContent.match(/<style[\s\S]*?<\/style>/i);
  // Extract section tag content
  const sectionMatch = htmlContent.match(/<section[\s\S]*?<\/section>/i);

  if (!sectionMatch) {
    console.warn('[warning] Could not locate <section> tag, keeping full document body.');
    return htmlContent;
  }

  const styleBlock = styleMatch ? `${styleMatch[0]}\n\n` : '';
  const sectionBlock = sectionMatch[0];

  return `${styleBlock}${sectionBlock}\n`;
}

function removeBackgroundImage(content) {
  const bgRegex = /\.skyon-cta\s*\{[\s\S]*?center center \/ cover no-repeat;\s*\}/;
  const replacement = `.skyon-cta {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    min-height: 620px;
    display: flex;
    align-items: center;
    background:
      linear-gradient(
        90deg,
        rgba(1, 9, 27, 0.95) 0%,
        rgba(1, 13, 34, 0.85) 50%,
        rgba(1, 9, 27, 0.95) 100%
      ),
      #020a1a;
  }`;

  if (bgRegex.test(content)) {
    return content.replace(bgRegex, replacement);
  }

  // Fallback pattern if already formatted
  return content.replace(/url\("data:image\/png;base64,[^"]+"\)\s*/g, '');
}

function extractBackgroundImage(content) {
  const base64Regex = /url\("data:image\/png;base64,([^"]+)"\)/;
  const match = content.match(base64Regex);

  if (!match) {
    console.log('[info] No inline base64 image found to extract.');
    return content;
  }

  const base64Data = match[1];
  const buffer = Buffer.from(base64Data, 'base64');
  fs.writeFileSync(EXTRACTED_IMG_PATH, buffer);
  console.log(`[extract] Wrote Earth background image to ${EXTRACTED_IMG_PATH} (${formatBytes(buffer.length)})`);

  return content.replace(base64Regex, 'url("/cta-background.png")');
}

// ---------------------------------------------------------------------------
// Command Execution
// ---------------------------------------------------------------------------
function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    printHelp();
    return;
  }

  if (args.includes('--status')) {
    printStatus();
    return;
  }

  if (args.includes('--backup')) {
    createBackup();
    printStatus();
    return;
  }

  if (args.includes('--undo')) {
    if (!fs.existsSync(BACKUP_FILE)) {
      console.warn(`\n[warning] No previous backup found at:`);
      console.warn(`          ${BACKUP_FILE}`);
      console.log(`\nTip: A backup is automatically saved whenever you modify the CTA using:`);
      console.log(`  - node scripts/restore_cta.js --no-bg       (to remove the 2.4MB background image)`);
      console.log(`  - node scripts/restore_cta.js --extract-bg  (to extract image to public/)`);
      console.log(`  - node scripts/restore_cta.js --astro       (for clean component markup)`);
      console.log(`  - node scripts/restore_cta.js --backup      (to manually save a backup)\n`);
      printStatus();
      return;
    }
    fs.copyFileSync(BACKUP_FILE, TARGET_FILE);
    const stat = fs.statSync(TARGET_FILE);
    console.log(`\n[undo] Successfully restored CallToAction.astro from backup! (${formatBytes(stat.size)})`);
    printStatus();
    return;
  }

  if (!fs.existsSync(SOURCE_FILE)) {
    console.error(`[error] Source template file not found at ${SOURCE_FILE}`);
    process.exit(1);
  }

  // Create automatic backup first
  createBackup();

  let content = fs.readFileSync(SOURCE_FILE, 'utf8');
  const initialSize = content.length;

  const isCleanAstro = args.includes('--astro') || args.includes('--clean');
  const isNoBg = args.includes('--no-bg') || args.includes('--remove-bg');
  const isExtractBg = args.includes('--extract-bg');

  if (isExtractBg) {
    console.log('[mode] Extracting inline base64 image to public/cta-background.png...');
    content = extractBackgroundImage(content);
  } else if (isNoBg) {
    console.log('[mode] Removing base64 background image in favor of clean CSS gradients...');
    content = removeBackgroundImage(content);
  }

  if (isCleanAstro) {
    console.log('[mode] Converting to clean Astro component syntax...');
    content = cleanAstroComponent(content);
  }

  if (!isCleanAstro && !isNoBg && !isExtractBg) {
    console.log('[mode] Performing exact raw restore from source template...');
  }

  // Ensure target directory exists
  fs.mkdirSync(path.dirname(TARGET_FILE), { recursive: true });
  fs.writeFileSync(TARGET_FILE, content, 'utf8');

  const finalStat = fs.statSync(TARGET_FILE);
  console.log(`[success] Updated CallToAction.astro!`);
  console.log(`          Original source size: ${formatBytes(initialSize)}`);
  console.log(`          Resulting file size:  ${formatBytes(finalStat.size)}`);
}

main();
