// The Funniest Excuse for Skipping a Meeting
// make.fun bounty: u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163
//
// The entry is one funny line excusing the writer from a pointless work
// meeting. The angle: the only thing worse than the meeting you are
// skipping is the meeting you are already trapped in — a meeting about
// why there are too many meetings. The laugh lands on the last four
// words: the anti-meeting meeting just got longer.
//
// Chosen against the judge's brief: on-subject, a sharp ironic turn,
// true to office life (everyone has sat in that meeting), one tight
// line, and a fresh angle — no wifi, no cat, no dentist. The punch is
// concrete ("extended by 30 minutes") instead of vague ("running over"),
// and the opening is blunt ("I can't join") instead of apologetic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line. 116 characters, one line, plain language anyone can repeat.
const LINE =
  "I can't join — I'm already in a meeting about why we have too many meetings, and it just got extended by 30 minutes.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  // The gate: UTF-8 text of 1 to 200 characters, not only whitespace.
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`line is ${LINE.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, LINE, "utf8");

  // Read it back: what the judge sees must be byte-for-byte the line.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== LINE) {
    throw new Error("written entry does not match the line");
  }
  console.log(`wrote ${LINE.length} chars to ${OUT_PATH}`);
}

main();
