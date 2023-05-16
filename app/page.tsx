import { About } from "@/components/About";
import { CurrentStack } from "@/components/CurrentStack";
import { ProjectLink } from "@/components/ProjectLink";
import { Title } from "@/components/Title";
import { getAllPosts } from "@/lib/post";
import {
  dashify,
  getAbsoluteProjectImage,
  getAbsoluteProjectUrl,
  getProjectImage,
  normalizeTitle,
} from "@/lib/utils";

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
              <ProjectLink post={post} />
            </li>
            {idx === 7 && <About />}
            {idx === 11 && <CurrentStack />}
          </>
        );
      })}
    </ul>
  );
}
