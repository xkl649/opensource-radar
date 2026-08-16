import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { allProjects, getProject, relatedProjects } from "@/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return allProjects.map((p) => ({ id: p.id }));
}

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

  return <ProjectDetail project={project} related={relatedProjects(project)} />;
}
