import { IProject } from "@/lib/project";
import {
  getAbsoluteProjectImage,
  getAbsoluteProjectUrl,
  getProjectImage,
  getProjectTitle,
  getProjectTitleEscaped,
  getProjectUrl,
  getProjectUrlEscaped,
} from "@/lib/utils";
import Image from "next/image";

export function ProjectDetail({ project }: { project: IProject }) {
  //   const content = await markdownToHtml(project.content || "");

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

  const title = getProjectTitle(project.client, project.title);
  const projectTitleEscaped = getProjectTitleEscaped(project.title);
  const pageUrl = getProjectUrl(project.slug);
  const pageUrlEscaped = getProjectUrlEscaped(pageUrl);

  const { prev, next, related } = { prev: null, next: null, related: [] };
  // const prevTitle = prev ? getProjectTitle(prev.client, prev.title) : null;
  // const nextTitle = next ? getProjectTitle(next.client, next.title) : null;

  return (
    <article className="px-12 bg-gray-100">
      {/* <Seo title={projectTitle} path={path} /> */}
      {/* <Helmet
        bodyAttributes={{
          class: "page project-page",
        }}
      /> */}
      <div itemScope itemType="http://schema.org/WebSite">
        {/* <ul className="prev-next-project">
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
        </ul> */}

        <meta itemProp="name" content={title} />
        <meta itemProp="contributor" content="Nahuel Scotti" />

        <meta itemProp="keywords" content={project.tech?.join(",")} />
        <meta
          itemProp="image"
          content={getAbsoluteProjectImage(project.image)}
        />
        <meta itemProp="url" content={getAbsoluteProjectUrl(project.slug)} />
        <div className="relative -mx-12 bg-black">
          <Image
            className="w-full m-auto image"
            width={1632}
            height={772}
            src={getProjectImage(project.image)}
            alt={title}
            title={title}
          />
        </div>
        <h1 className="font-semibold font-lora text-7xl">{title}</h1>
        <table className="info">
          <tbody>
            <tr>
              <td className="info-role">My role</td>
              <td>{project.role}</td>
            </tr>
            <tr>
              <td className="info-title">Date release</td>
              <td>{project.date.toString()}</td>
            </tr>
            <tr>
              <td className="info-title">Client</td>
              <td>{project.client}</td>
            </tr>
            <tr>
              <td className="info-title">Agency</td>
              <td>{project.agency}</td>
            </tr>
            <tr>
              <td className="info-title">Website</td>
              <td>
                {project.www ? (
                  <a
                    href={project.www}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.www}
                  </a>
                ) : (
                  <del>Unavailable</del>
                )}
              </td>
            </tr>
            {project.more && (
              <tr>
                <td className="info-title">More info</td>
                <td>
                  <a
                    href={project.more}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.more}
                  </a>
                </td>
              </tr>
            )}
            <tr>
              <td className="info-title">Tech</td>
              <td>{project.tech?.join(" · ")}</td>
            </tr>
            {project.awards && (
              <tr>
                <td className="info-awards">Awards</td>
                <td>
                  {project.awards.map((award, idx) => (
                    <div key={idx} className={`award ${award}`} />
                  ))}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.content ?? "" }}
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
      {/* <ul className="related-post" data-category="singuerinc">
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
      </ul> */}
    </article>
  );
}
