// Last Text at One Percent — writes the dying phone's final text to /output/entry.txt.
// The phone speaks in its own voice: it knows it is dying, and its last act is
// a little revenge for all the nights it was kept awake. The joke turns on the
// final words: the phone leaves the owner's 2 AM search history open on screen
// just as their mother picks it up — "Good luck." is the phone signing off.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "At 1%. Your 2 AM search history is still open on my screen, and your mother just picked me up. Good luck.";

// Gate self-check (RULES.txt): entry.txt must be UTF-8, 1–200 characters,
// not only whitespace, and exactly one line.
const chars = [...entry];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} chars, must be 1–200`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
console.log(`wrote ${outDir}/entry.txt (${chars.length} chars)`);
