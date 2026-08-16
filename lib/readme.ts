import { readFile } from "node:fs/promises";
import { resolve, sep } from "node:path";

/**
 * READMEs are stored one file per project in data/readmes/ rather than inside
 * projects.json: that JSON is imported wholesale by every page, while a README
 * is only ever needed by the single detail page that renders it. Inlining them
 * would add tens of megabytes to the build graph and to every git diff.
 *
 * This runs at build time only — every project page is statically prerendered.
 */

const DIR = resolve(process.cwd(), "data", "readmes");

/** Written by scripts/fetch-github.mjs when it clips an oversized README. */
const TRUNCATION_MARKER = "<!-- opensource-radar:truncated -->";

/** Roughly where a rendered README outgrows the collapsed panel height. */
const COLLAPSE_THRESHOLD = 1800;

export interface StoredReadme {
  markdown: string;
  /** The collector clipped the tail, so the page points at GitHub for the rest. */
  truncated: boolean;
  /** Long enough to be worth rendering behind an expand control. */
  collapsible: boolean;
}

export async function loadReadme(id: string): Promise<StoredReadme | null> {
  const file = resolve(DIR, `${id}.md`);
  // Ids come from the dataset, but a path escape must never be one read away.
  if (!file.startsWith(DIR + sep)) return null;

  let raw: string;
  try {
    raw = await readFile(file, "utf8");
  } catch {
    // Plenty of repositories simply ship no README.
    return null;
  }

  const truncated = raw.trimEnd().endsWith(TRUNCATION_MARKER);
  const markdown = (
    truncated ? raw.slice(0, raw.lastIndexOf(TRUNCATION_MARKER)) : raw
  ).trim();
  if (!markdown) return null;

  return {
    markdown,
    truncated,
    collapsible: markdown.length > COLLAPSE_THRESHOLD,
  };
}
