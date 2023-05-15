import { useRouter } from "next/navigation";
import ErrorPage from "next/error";
import { getOnePostBySlug, getAllPosts, IPost } from "@/lib/post";
import Head from "next/head";
import markdownToHtml from "@/lib/markdownToHtml";
import {
  getProjectTitle,
  getProjectTitleEscaped,
  getProjectUrl,
  getProjectUrlEscaped,
  getProjectImage,
} from "@/lib/utils";
import image from "next/image";
import path from "path";
import { title } from "process";
import { date } from "zod";

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

type Props = {
  post: IPost;
  morePosts: IPost[];
  preview?: boolean;
};

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  console.log({ slug });

  // const posts = getAllPosts(["slug"]);

  const post = getOnePostBySlug(slug);

  const content = await markdownToHtml(post.content || "");

  // return {
  //   paths: posts.map((post) => {
  //     return {
  //       params: {
  //         slug: post.slug,
  //       },
  //     };
  //   }),
  //   fallback: false,
  // };

  // const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  const projectTitle = getProjectTitle(post.client, post.title);
  const projectTitleEscaped = getProjectTitleEscaped(post.title);
  const pageUrl = getProjectUrl(post.slug);
  const pageUrlEscaped = getProjectUrlEscaped(pageUrl);

  const { prev, next, related } = { prev: null, next: null, related: [] };
  const prevTitle = prev ? getProjectTitle(prev.client, prev.title) : null;
  const nextTitle = next ? getProjectTitle(next.client, next.title) : null;

  return (
    <article className="mb-32">
      {/* <Seo title={projectTitle} path={path} /> */}
      {/* <Helmet
        bodyAttributes={{
          class: "page project-page",
        }}
      /> */}
      <div itemScope itemType="http://schema.org/WebSite">
        <ul className="prev-next-project">
          {next && (
            <li className="prev">
              <a href={next.path}>{nextTitle}</a>
            </li>
          )}
          {prev && (
            <li className="next">
              <a href={prev.path}>{prevTitle}</a>
            </li>
          )}
        </ul>

        <h1 className="project-title title">{projectTitle}</h1>

        <meta itemProp="name" content={projectTitle} />
        <meta itemProp="contributor" content="Nahuel Scotti" />

        <meta itemProp="keywords" content={post.tech.join(",")} />
        <meta itemProp="image" content={getProjectImage(image)} />
        <meta itemProp="url" content={getProjectUrl(path)} />
        <img
          className="image"
          src={`/images/projects/${image}.jpg`}
          alt="Blog"
          title="Blog"
        />
        <table className="info">
          <tbody>
            <tr>
              <td className="info-role">My role</td>
              <td>{post.role}</td>
            </tr>
            <tr>
              <td className="info-title">Date release</td>
              <td>{post.date.toString()}</td>
            </tr>
            <tr>
              <td className="info-title">Client</td>
              <td>{post.client}</td>
            </tr>
            <tr>
              <td className="info-title">Agency</td>
              <td>{post.agency}</td>
            </tr>
            <tr>
              <td className="info-title">Website</td>
              <td>
                {post.www ? (
                  <a href={post.www} target="_blank" rel="noopener noreferrer">
                    {post.www}
                  </a>
                ) : (
                  <del>Unavailable</del>
                )}
              </td>
            </tr>
            {post.more && (
              <tr>
                <td className="info-title">More info</td>
                <td>
                  <a href={post.more} target="_blank" rel="noopener noreferrer">
                    {post.more}
                  </a>
                </td>
              </tr>
            )}
            <tr>
              <td className="info-title">Tech</td>
              <td>{post.tech.join(" · ")}</td>
            </tr>
            {post.awards && (
              <tr>
                <td className="info-awards">Awards</td>
                <td>
                  {post.awards.map((award, idx) => (
                    <div key={idx} className={`award ${award}`} />
                  ))}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <hr />
      <h2 className="share-title">Share</h2>
      <ul className="share-post">
        <li>
          <a
            className="twitter"
            href={`https://twitter.com/intent/tweet?text=Check+out+${projectTitleEscaped}+%23portfolio&url=${pageUrlEscaped}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="facebook"
            href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
      </ul>
      <hr />
      <h2 className="related-title">Related</h2>
      <ul className="related-post" data-category="singuerinc">
        {related
          .sort((a, b) => {
            return getProjectTitle(a.client, a.title)[0] <
              getProjectTitle(b.client, b.title)[0]
              ? -1
              : 1;
          })
          .map((post, idx) => (
            <li key={idx}>
              <a href={post.slug} target="_self">
                {getProjectTitle(post.client, post.title)}
              </a>
            </li>
          ))}
      </ul>
    </article>
  );
}

export const metadata = () => {
  return {};
  // return {
  //   title: `${title} | singuerinc`,
  // };
};

type Params = {
  params: {
    slug: string;
  };
};

// export async function getStaticProps({ params }: Params) {
//   const post = getPostBySlug(params.slug, [
//     "slug",
//     "date",
//     "title",
//     "category",
//     "role",
//     "client",
//     "agency",
//     "tech",
//     "tags",
//     "image",
//     "image_home",
//     "www",
//     "more",
//     "priority",
//     "content",
//   ]);

//   const content = await markdownToHtml(post.content || "");

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   };
// }
