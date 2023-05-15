import { About } from "@/components/About";
import { CurrentStack } from "@/components/CurrentStack";
import { Title } from "@/components/Title";
import { getAllPosts } from "@/lib/post";
import {
  dashify,
  getAbsoluteProjectImage,
  getAbsoluteProjectUrl,
  getProjectImage,
  getProjectUrl,
  normalizeTitle,
} from "@/lib/utils";
import Link from "next/link";

export default async function Page() {
  const posts = getAllPosts();

  return (
    <ul className="grid grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      <Title />
      {posts.map((post, idx) => {
        const id = dashify(post);
        const title = normalizeTitle(post);
        return (
          <>
            <li
              key={post.slug}
              id={id}
              className="relative w-full aspect-[16/8] bg-center bg-no-repeat bg-cover"
              itemScope
              itemType="http://schema.org/WebSite"
              style={{ backgroundImage: `url(${getProjectImage(post.image)})` }}
            >
              <meta itemProp="name" content={title} />
              <meta itemProp="contributor" content="Nahuel Scotti" />
              <meta itemProp="keywords" content={post.tech.join(",")} />
              {post.awards?.map((a, idx) => (
                <meta key={idx} itemProp="award" content={a} />
              ))}
              <meta
                itemProp="image"
                content={getAbsoluteProjectImage(post.image)}
              />
              <meta itemProp="url" content={getAbsoluteProjectUrl(post.slug)} />
              <Link
                href={getProjectUrl(post.slug)}
                className="absolute flex flex-col items-end w-full h-full transition-all w-link md:p-12 group md:justify-end md:items-start md:hover:shadow-2xl md:hover:z-50 md:bg-gradient-to-t md:hover:from-black md:hover:to-black/70"
              >
                <h3 className="hidden w-full pb-2 mb-2 text-lg font-normal text-white transition-all pointer-events-none md:opacity-0 md:flex md:group-hover:opacity-100 md:border-b border-b-white/20">
                  {title}
                </h3>
                <div className="hidden w-full pt-2 font-mono text-xs font-medium text-white transition-all pointer-events-none md:opacity-0 md:flex md:group-hover:opacity-100 text-white/70">
                  {post.tech.join(" · ")}
                </div>
              </Link>
            </li>
            {idx === 7 && <About />}
            {idx === 11 && <CurrentStack />}
          </>
        );
      })}
    </ul>
  );
}
