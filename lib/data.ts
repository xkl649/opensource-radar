import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { DatasetMeta, Project, ProjectSummary } from "./types";

/**
 * Read JSON from disk at build time instead of `import`ing it. Turbopack's
 * JSON loader rejects unpaired UTF-16 surrogates that Node's JSON.parse
 * accepts, and a multi-megabyte dataset is a bad webpack/turbopack module.
 */
function loadJson<T>(relative: string): T {
  return JSON.parse(readFileSync(join(process.cwd(), relative), "utf8")) as T;
}

export const allProjects = loadJson<Project[]>("data/projects.json");
export const datasetMeta = loadJson<DatasetMeta>("data/meta.json");

const BY_ID = new Map(allProjects.map((p) => [p.id, p]));

export function getProject(id: string): Project | undefined {
  return BY_ID.get(id);
}

/** Strips README text and setup steps so the grid payload stays small. */
export function toSummary(p: Project): ProjectSummary {
  return {
    id: p.id,
    name: p.name,
    fullName: p.fullName,
    owner: p.owner,
    ownerAvatar: p.ownerAvatar,
    url: p.url,
    description: p.description,
    category: p.category,
    topics: p.topics,
    language: p.language,
    license: p.license,
    stars: p.stars,
    forks: p.forks,
    pushedAt: p.pushedAt,
    createdAt: p.createdAt,
    momentum: p.momentum,
    signals: p.signals,
    hasQuickstart: p.hasQuickstart,
    buildability: p.buildability,
    cloneUrl: p.cloneUrl,
    zipUrl: p.zipUrl,
    latestRelease: p.latestRelease,
  };
}

export function relatedProjects(project: Project, limit = 3): ProjectSummary[] {
  return allProjects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .sort((a, b) => b.buildability - a.buildability || b.stars - a.stars)
    .slice(0, limit)
    .map(toSummary);
}
