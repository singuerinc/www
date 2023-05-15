import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { z } from "zod";

const postsDirectory = join(process.cwd(), "_posts");

const PostSchema = z.object({
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

export type IPost = z.infer<typeof PostSchema>;

export function getOnePostBySlug(slug: string): IPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const merged = { ...data, path: `${realSlug}.md`, slug: realSlug, content };

  return PostSchema.parse(merged);
}

export function getAllPosts(): IPost[] {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map<IPost>((slug) => getOnePostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
