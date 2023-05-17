import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { z } from "zod";

const projectsDirectory = join(process.cwd(), "_projects");

const ProjectSchema = z.object({
  type: z.enum([
    "website",
    "blog-post",
    "repo",
    "random-colors",
    "tic-tac-toe",
    "terminal",
    "about-me",
    "current-stack",
  ]),
  slug: z.string(),
  date: z.date(),
  title: z.string(),
  category: z.string().nullish(),
  role: z.string().nullish(),
  client: z.string().nullish(),
  agency: z.array(z.string()).nullish(),
  awards: z.array(z.string()).nullish(),
  tech: z.array(z.string()).nullish(),
  tags: z.array(z.string()).nullish(),
  image: z.string().nullish(),
  image_home: z.string().nullish(),
  www: z.string().nullish(),
  more: z.string().nullish(),
  priority: z.string().nullish(),
  content: z.string().nullish(),
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
