// Seventeen Syllables of Debugging — make.fun bounty entry.
// Writes a 5-7-5 haiku about debugging to <out>/entry.txt, where
// <out> is process.env.MAKEFUN_OUTPUT_DIR or "/output" if unset.
// The haiku's three lines stay on separate lines, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  'Cursor blinks at three',
  "the breakpoint holds its breath",
  "the bug was my code",
];

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), lines.join("\n"), "utf8");
