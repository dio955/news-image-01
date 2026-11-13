// news-image-01: the entry program (Node 22, standard library only).
//
// entry.png sits next to this file. This program writes that image to
// /output/entry.png, which is the file the judge looks at. When running
// outside the grading container, MAKEFUN_OUTPUT_DIR takes the place of
// /output:
//
//   mkdir -p out
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output'; // the grader writes to /output
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));
