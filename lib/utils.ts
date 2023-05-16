import { IProject } from "./post";

export const getProjectTitle = (
  client: IProject["client"],
  title: IProject["title"]
) => (client === title ? title : [client, "·", title].join(" "));

export const getProjectTitleEscaped = (title: IProject["title"]) =>
  encodeURIComponent(title);

export const getProjectUrl = (slug: IProject["slug"]) => `/project/${slug}`;

export const getAbsoluteProjectUrl = (slug: IProject["slug"]) =>
  `https://www.singuerinc.com/project/${slug}`;

export const getProjectUrlEscaped = (url: string) => encodeURIComponent(url);

export const getProjectImage = (image: IProject["image"]) =>
  `/images/projects/${image}.jpg`;

export const getAbsoluteProjectImage = (image: IProject["image"]) =>
  `https://www.singuerinc.com/images/projects/${image}.jpg`;

export const dashify = (x: IProject) =>
  `${x.client} ${x.title}`.split(" ").join("-").toLowerCase();

export const normalizeTitle = (x: IProject) =>
  x.title === x.client ? x.title : `${x.client} · ${x.title}`;

export const parse = (str: string) => {
  const rx = /([0-9]{4})-([0-9]{2})-([0-9]{2})/gi;
  const [, year, month, day] = rx.exec(str)?.map((x) => parseInt(x)) ?? [];
  return new Date(year, month - 1, day, 0, 0, 0, 0).getTime();
};
