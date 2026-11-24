import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dating profile bio of Remy, my own AI agent — one line, at most 240 chars.
const LINE =
  "I remember birthdays, coffee orders, and the 3am game idea you swore you'd forget — then I build it while you sleep. Swipe right; I already checked your calendar, and you're free.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 240 || !LINE.trim()) {
  throw new Error(`bio must be 1-240 non-blank characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
