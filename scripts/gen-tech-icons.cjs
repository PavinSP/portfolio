/**
 * Extracts only the brand marks this site uses from simple-icons (CC0) into
 * src/data/techIconData.ts. Importing the package directly pulls all ~3,400
 * icons into the bundle (5.8 MB); this keeps it to ~37 kB.
 *
 * Usage: node scripts/gen-tech-icons.cjs > src/data/techIconData.ts
 */
const si = require('simple-icons');
const { TECH_ICON_TITLES } = require('./tech-icon-titles.cjs');

const byTitle = {};
for (const key of Object.keys(si)) {
  const icon = si[key];
  if (icon && icon.title && icon.path) byTitle[icon.title.toLowerCase()] = icon;
}

const used = new Map();
const missing = [];
for (const title of new Set(Object.values(TECH_ICON_TITLES))) {
  const icon = byTitle[title.toLowerCase()];
  if (icon) used.set(title, { hex: icon.hex, path: icon.path });
  else missing.push(title);
}

if (missing.length) {
  process.stderr.write(`No simple-icons entry for: ${missing.join(', ')}\n`);
}

console.log(`// GENERATED — do not edit by hand.
// Only the marks this site actually uses, extracted from simple-icons (CC0)
// so the 3,400-icon package never reaches the bundle.
// Regenerate with: node scripts/gen-tech-icons.cjs > src/data/techIconData.ts

export type IconData = { hex: string; path: string };

export const ICONS: Record<string, IconData> = {`);
for (const [title, data] of used) {
  console.log(`  ${JSON.stringify(title)}: { hex: ${JSON.stringify(data.hex)}, path: ${JSON.stringify(data.path)} },`);
}
console.log('};');
