import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { z } from "zod";

const projectsDirectory = join(process.cwd(), "_projects");

const ProjectSchema = z.object({
  slug: z.string(),
  date: z.date(),
  title: z.string(),
  category: z.string(),
  role: z.string(),
  client: z.string(),
  agency: z.array(z.string()),
  awards: z.array(z.string()).nullish(),
  tech: z.array(z.string()),
  tags: z.array(z.string()),
  image: z.string(),
  image_home: z.string(),
  www: z.string().nullable(),
  more: z.string().optional(),
  priority: z.string(),
  content: z.string(),
  sitemap: z.boolean().nullish(),
});

export type IProject = z.infer<typeof ProjectSchema>;

export function getOneBySlug(slug: string): IProject {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const merged = { ...data, path: `${realSlug}.md`, slug: realSlug, content };

  return ProjectSchema.parse(merged);
}

export function getAll(): IProject[] {
  const slugs = fs.readdirSync(projectsDirectory);
  const projects = slugs
    .map<IProject>((slug) => getOneBySlug(slug))
    // sort by date in descending order
    .sort((p1, p2) => (p1.date > p2.date ? -1 : 1));
  return projects;
}
