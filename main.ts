import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Seventeen Syllables of Debugging — make.fun bounty entry.
// The program writes one 5-7-5 haiku about debugging to the entry file.
const line = [
  `Cursor blinks at three`,
  "somewhere in line forty-two",
  "in code I wrote drunk",
].join('\n');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
