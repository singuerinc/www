import { getAllPosts } from "@/lib/post";
import {
  dashify,
  getAbsoluteProjectImage,
  getAbsoluteProjectUrl,
  getProjectImage,
  getProjectUrl,
  normalizeTitle,
} from "@/lib/utils";

export default async function Page() {
  const posts = getAllPosts();

  return (
    <ul className="grid grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      <div className="flex flex-col justify-center p-12">
        <h1 className="text-4xl font-normal">singuerinc | dev</h1>
        <p>nahuel scotti • my work</p>
      </div>
      {posts.map((post, key) => {
        const id = dashify(post);
        const title = normalizeTitle(post);
        return (
          <li
            key={key}
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
            <a
              href={post.slug}
              target="_self"
              className="absolute flex flex-col items-end w-full h-full transition-all duration-1000 delay-75 w-link md:p-12 group md:justify-end md:items-start animated hover:shadow-2xl hover:z-50 hover:bg-gradient-to-r from-black to-black/80"
            >
              <h3 className="hidden w-full pb-2 mb-2 text-lg font-normal text-white transition-all duration-1000 delay-200 pointer-events-none md:opacity-0 md:flex md:group-hover:opacity-100 md:border-b border-b-white/20">
                {title}
              </h3>
              <div className="hidden w-full pt-2 text-xs font-medium text-white transition-all duration-1000 delay-200 pointer-events-none md:opacity-0 md:flex md:group-hover:opacity-100 text-white/70">
                {post.tech.join(" · ")}
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
