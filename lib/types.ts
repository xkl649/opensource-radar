export type Lang = "zh" | "en";

export interface Bilingual {
  zh: string;
  en: string;
}

export interface SetupStep extends Bilingual {
  cmd: string | null;
}

export interface BuildabilityReason extends Bilingual {
  weight: number;
}

export interface ReleaseAsset {
  name: string;
  url: string;
  size: number;
}

export interface Project {
  id: string;
  name: string;
  fullName: string;
  owner: string;
  ownerAvatar: string;
  url: string;
  homepage: string | null;
  description: string;
  category: string;
  categories: string[];
  topics: string[];
  language: string | null;
  license: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  createdAt: string;
  pushedAt: string;
  defaultBranch: string;
  cloneUrl: string;
  zipUrl: string;
  momentum: number;
  signals: string[];
  hasQuickstart: boolean;
  readmeLength: number;
  readmePreview: string | null;
  latestRelease: string | null;
  latestReleaseUrl: string | null;
  latestReleaseAt: string | null;
  releaseAssets: ReleaseAsset[];
  enriched: boolean;
  buildability: number;
  buildabilityReasons: BuildabilityReason[];
  steps: SetupStep[];
}

/** The trimmed shape shipped to the browser for the browsing grid. */
export type ProjectSummary = Pick<
  Project,
  | "id"
  | "name"
  | "fullName"
  | "owner"
  | "ownerAvatar"
  | "url"
  | "description"
  | "category"
  | "topics"
  | "language"
  | "license"
  | "stars"
  | "forks"
  | "pushedAt"
  | "createdAt"
  | "momentum"
  | "signals"
  | "hasQuickstart"
  | "buildability"
  | "cloneUrl"
  | "zipUrl"
  | "latestRelease"
>;

export interface DatasetMeta {
  updatedAt: string;
  total: number;
  enriched: number;
  authenticated: boolean;
  counts: Record<string, number>;
}
