import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { ReadmeMarkdown } from "@/components/readme-markdown";
import { allProjects, getProject, relatedProjects } from "@/lib/data";
import { loadReadme } from "@/lib/readme";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return allProjects.map((p) => ({ id: p.id }));
}

// The catalogue is fully known at build time, so an unlisted id is a 404 rather
// than a page rendered on demand — which also keeps the README reads build-only.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "404" };

  return {
    title: project.fullName,
    description: project.description,
    openGraph: {
      title: project.fullName,
      description: project.description,
      images: [project.ownerAvatar],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const readme = await loadReadme(project.id);

  return (
    <ProjectDetail
      project={project}
      related={relatedProjects(project)}
      readme={
        readme && {
          truncated: readme.truncated,
          collapsible: readme.collapsible,
          // Rendered here so the markdown never reaches the client bundle.
          content: (
            <ReadmeMarkdown
              markdown={readme.markdown}
              fullName={project.fullName}
              defaultBranch={project.defaultBranch}
            />
          ),
        }
      }
    />
  );
}
