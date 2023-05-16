import { ProjectDetail } from "@/app/ProjectDetail";
import { ProjectModal } from "@/components/ProjectModal";
import { getOneBySlug } from "@/lib/project";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = getOneBySlug(slug);

  return (
    <ProjectModal project={project}>
      <ProjectDetail project={project} />
    </ProjectModal>
  );
}
