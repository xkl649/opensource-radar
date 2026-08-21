/**
 * Copies the dataset into public/ so the static export can fetch it in the
 * browser. Detail pages are no longer prerendered one-HTML-per-project:
 * Cloudflare Pages free plans cap a deployment at 20,000 files, and Next's
 * export emits about five files per route.
 */
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const SUMMARY_KEYS = [
  "id",
  "name",
  "fullName",
  "owner",
  "ownerAvatar",
  "url",
  "description",
  "category",
  "topics",
  "language",
  "license",
  "stars",
  "forks",
  "pushedAt",
  "createdAt",
  "momentum",
  "signals",
  "hasQuickstart",
  "buildability",
  "cloneUrl",
  "zipUrl",
  "latestRelease",
];

const projects = JSON.parse(
  await readFile(resolve(ROOT, "data/projects.json"), "utf8")
);
const meta = await readFile(resolve(ROOT, "data/meta.json"));
const summaries = projects.map((p) => {
  const row = {};
  for (const key of SUMMARY_KEYS) row[key] = p[key];
  return row;
});

const pub = resolve(ROOT, "public");
await mkdir(pub, { recursive: true });
await writeFile(resolve(pub, "projects.json"), JSON.stringify(projects));
await writeFile(resolve(pub, "summaries.json"), JSON.stringify(summaries));
await writeFile(resolve(pub, "meta.json"), meta);
await cp(resolve(ROOT, "data/readmes"), resolve(pub, "readmes"), { recursive: true });

console.log(
  `public dataset: ${projects.length} projects, ${summaries.length} summaries`
);
