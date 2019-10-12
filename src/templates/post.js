import { graphql } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  getProjectTitle,
  getProjectTitleEscaped,
  getProjectImage,
  getProjectUrl,
  getProjectUrlEscaped,
} from "../utils/project"

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const {
    frontmatter: {
      agency,
      awards,
      client,
      date,
      image,
      more,
      path,
      role,
      tech,
      title,
      www,
    },
    html,
  } = markdownRemark

  const projectTitle = getProjectTitle(client, title)
  const projectTitleEscaped = getProjectTitleEscaped(title)
  const pageUrl = getProjectUrl(path)
  const pageUrlEscaped = getProjectUrlEscaped(pageUrl)

  const { prev, next, related } = pageContext
  const prevTitle = prev ? getProjectTitle(prev.client, prev.title) : null
  const nextTitle = next ? getProjectTitle(next.client, next.title) : null

  return (
    <Layout>
      <SEO title={projectTitle} />
      <Helmet
        bodyAttributes={{
          class: "page project-page",
        }}
      />
      <div itemScope="" itemType="http://schema.org/WebSite">
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

        <meta itemProp="keywords" content={tech.join(",")} />
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
              <td>{role}</td>
            </tr>
            <tr>
              <td className="info-title">Date release</td>
              <td>{date}</td>
            </tr>
            <tr>
              <td className="info-title">Client</td>
              <td>{client}</td>
            </tr>
            <tr>
              <td className="info-title">Agency</td>
              <td>{agency}</td>
            </tr>
            <tr>
              <td className="info-title">Website</td>
              <td>
                {www ? (
                  <a href={www} target="_blank" rel="noopener noreferrer">
                    {www}
                  </a>
                ) : (
                  <del>Unavailable</del>
                )}
              </td>
            </tr>
            {more && (
              <tr>
                <td className="info-title">More info</td>
                <td>
                  <a href={more} target="_blank" rel="noopener noreferrer">
                    {more}
                  </a>
                </td>
              </tr>
            )}
            <tr>
              <td className="info-title">Tech</td>
              <td>{tech.join(" · ")}</td>
            </tr>
            {awards && (
              <tr>
                <td className="info-awards">Awards</td>
                <td>
                  {awards.map((award, idx) => (
                    <div key={idx} className={`award ${award}`} />
                  ))}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
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
              : 1
          })
          .map((post, idx) => (
            <li key={idx}>
              <a href={post.path} target="_self">
                {getProjectTitle(post.client, post.title)}
              </a>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        agency
        awards
        client
        image
        more
        role
        tech
        title
        www
      }
    }
  }
`
