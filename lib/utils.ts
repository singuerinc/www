import { IPost } from "./post";

export const getProjectTitle = (
  client: IPost["client"],
  title: IPost["title"]
) => (client === title ? title : [client, "·", title].join(" "));

export const getProjectTitleEscaped = (title: IPost["title"]) =>
  encodeURIComponent(title);

export const getProjectUrl = (slug: IPost["slug"]) =>
  `https://www.singuerinc.com${slug}`;

export const getProjectUrlEscaped = (url: string) => encodeURIComponent(url);

export const getProjectImage = (image: IPost["image"]) =>
  `https://www.singuerinc.com/images/projects/${image}.jpg`;

export const dashify = (x: IPost) =>
  `${x.client} ${x.title}`.split(" ").join("-").toLowerCase();

export const normalizeTitle = (x: IPost) =>
  x.title === x.client ? x.title : `${x.client} · ${x.title}`;

export const parse = (str: string) => {
  const rx = /([0-9]{4})-([0-9]{2})-([0-9]{2})/gi;
  const [, year, month, day] = rx.exec(str)?.map((x) => parseInt(x)) ?? [];
  return new Date(year, month - 1, day, 0, 0, 0, 0).getTime();
};
