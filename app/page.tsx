import { getAllPosts } from "@/lib/post";
import {
  dashify,
  getProjectImage,
  getProjectUrl,
  normalizeTitle,
} from "@/lib/utils";

export default async function Page() {
  const posts = getAllPosts();

  return (
    <ul className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 posts">
      <div className="flex flex-col justify-around p-12">
        <h1 className="font-normal">singuerinc</h1>
        <h2 className="font-normal">frontend developer</h2>
        <p>my work</p>
      </div>
      {posts.map((post, key) => {
        const id = dashify(post);
        const title = normalizeTitle(post);
        return (
          <li
            key={key}
            id={id}
            className="post"
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
            <meta itemProp="image" content={getProjectImage(post.image)} />
            <meta itemProp="url" content={getProjectUrl(post.slug)} />
            <a href={post.slug} target="_self" className="w-link animated">
              {/* <div className={`post-image animated ${id}`}></div> */}
              <h3 className="w-title">{title}</h3>
              <div className="w-tags">{post.tech.join(" · ")}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
