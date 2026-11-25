// The Funniest One-Line Resignation Letter — a one-line resignation.
// The program writes the letter to /output/entry.txt (1-140 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This is my two weeks' notice, condensed to one line — the job never gave me time for a second.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
