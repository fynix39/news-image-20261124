// news-image-20261124 entry (Node 22, standard library only).
//
// The front page for Tuesday 24 November 2026 lives in entry.png next to
// this file (drawn with PIL during the build). This program copies it to
// the output directory as entry.png, after checking that it really is a
// PNG and fits the gate (at most 1 MiB, at most 1024 by 1024 pixels), and
// then reads the copy back to prove the bytes are identical.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(HERE, 'entry.png');
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TARGET = join(OUT_DIR, 'entry.png');
const MAX_BYTES = 1024 * 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const bytes = readFileSync(SOURCE);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG (bad magic bytes)');
}
if (bytes.subarray(12, 16).toString('latin1') !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk where a PNG must');
}
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(TARGET, bytes);

const written = readFileSync(TARGET);
if (!written.equals(bytes)) {
  throw new Error('output bytes differ from entry.png');
}
const sha = createHash('sha256').update(written).digest('hex');
console.log(`wrote ${TARGET} (${bytes.length} bytes, ${width}x${height}, sha256 ${sha})`);
