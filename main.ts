import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My out-of-office reply is the most honest thing this company has ever written \u2014 it admits I'm gone and nobody can reach me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...entry].length < 1 || [...entry].length > 199 || entry.trim() !== entry) {
  throw new Error(`Entry must be 1-199 characters with no surrounding whitespace, got ${[...entry].length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
