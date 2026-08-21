"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import type { Project, ProjectSummary } from "@/lib/types";

const TRUNCATION_MARKER = "<!-- opensource-radar:truncated -->";
const COLLAPSE_THRESHOLD = 1800;

let projectsCache: Promise<Project[]> | null = null;

function loadProjects(): Promise<Project[]> {
  if (!projectsCache) {
    projectsCache = fetch("/projects.json").then((res) => {
      if (!res.ok) throw new Error(String(res.status));
      return res.json();
    });
  }
  return projectsCache;
}

function projectIdFromPath(pathname: string): string {
  const prefix = "/project/";
  if (!pathname.startsWith(prefix)) return "";
  return decodeURIComponent(pathname.slice(prefix.length)).replace(/\/$/, "");
}

export default function ProjectPage() {
  const pathname = usePathname();
  const [id, setId] = useState(() => projectIdFromPath(pathname));
  const [project, setProject] = useState<Project | null | undefined>(undefined);
  const [related, setRelated] = useState<ProjectSummary[]>([]);
  const [readme, setReadme] = useState<{
    markdown: string;
    truncated: boolean;
    collapsible: boolean;
  } | null>(null);

  useEffect(() => {
    setId(projectIdFromPath(window.location.pathname));
  }, [pathname]);

  useEffect(() => {
    if (!id) {
      setProject(null);
      return;
    }
    let cancelled = false;
    loadProjects()
      .then((all: Project[]) => {
        if (cancelled) return;
        const hit = all.find((p) => p.id === id) ?? null;
        setProject(hit);
        if (!hit) {
          setRelated([]);
          return;
        }
        setRelated(
          all
            .filter((p) => p.id !== hit.id && p.category === hit.category)
            .sort((a, b) => b.buildability - a.buildability || b.stars - a.stars)
            .slice(0, 3)
        );
      })
      .catch(() => {
        if (!cancelled) setProject(null);
      });

    fetch(`/readmes/${id}.md`)
      .then((res) => (res.ok ? res.text() : ""))
      .then((raw) => {
        if (cancelled) return;
        const truncated = raw.trimEnd().endsWith(TRUNCATION_MARKER);
        const markdown = (
          truncated ? raw.slice(0, raw.lastIndexOf(TRUNCATION_MARKER)) : raw
        ).trim();
        setReadme(
          markdown
            ? {
                markdown,
                truncated,
                collapsible: markdown.length > COLLAPSE_THRESHOLD,
              }
            : null
        );
      })
      .catch(() => {
        if (!cancelled) setReadme(null);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  const title = useMemo(() => project?.fullName, [project]);
  useEffect(() => {
    if (title) document.title = `${title} · OpenSource Radar`;
  }, [title]);

  if (!id || project === null) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-sm text-slate-400">Project not found.</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-sm text-slate-500">Loading…</p>
      </div>
    );
  }

  return <ProjectDetail project={project} related={related} readme={readme} />;
}
