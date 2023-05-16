import { ProjectDetail } from "@/app/ProjectDetail";
import { getOneBySlug } from "@/lib/project";
import { normalizeTitle } from "@/lib/utils";

// type PostType = {
//   slug: string;
//   title: string;
//   date: string;
//   coverImage: string;
//   excerpt: string;
//   ogImage: {
//     url: string;
//   };
//   content: string;
// };

// type Props = {
//   post: IProject;
//   morePosts: IProject[];
//   preview?: boolean;
// };

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = getOneBySlug(slug);
  return <ProjectDetail project={project} />;
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = getOneBySlug(slug);
  const title = normalizeTitle(project);
  return {
    title: `${title} | singuerinc`,
  };
}
