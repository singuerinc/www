import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const {
    frontmatter: {
      agency,
      awards,
      category,
      client,
      css,
      date,
      image,
      more,
      path,
      role,
      tech,
      title,
      url,
      www,
    },
    html,
  } = markdownRemark

  const projectTitle = client === title ? title : [client, "·", title].join(" ")
  const projectTitleEscaped = encodeURIComponent(projectTitle)
  const pageUrl = `https://www.singuerinc.com${path}`
  const pageUrlEscaped = encodeURIComponent(pageUrl)

  return (
    <Layout>
      <SEO title={projectTitle} />
      <Helmet
        bodyAttributes={{
          class: "page project-page",
        }}
      />
      <div itemscope="" itemtype="http://schema.org/WebSite">
        <ul class="prev-next-project">
          <li class="next">
            <a href="/singuerinc/singuerinc-subway">singuerinc · Subway</a>
          </li>
        </ul>

        <h1 class="project-title title">{projectTitle}</h1>

        <meta itemprop="name" content={projectTitle} />
        <meta itemprop="contributor" content="Nahuel Scotti" />

        <meta itemprop="keywords" content={tech.join(",")} />
        <meta
          itemprop="image"
          content={`https://www.singuerinc.com/images/projects/${image}.jpg`}
        />
        <img
          class="image"
          src={`/images/projects/${image}.jpg`}
          alt="Blog"
          title="Blog"
        />
        <meta itemprop="url" content={pageUrl} />

        <table class="info">
          <tbody>
            <tr>
              <td class="info-role">My role</td>
              <td>{role}</td>
            </tr>
            <tr>
              <td class="info-title">Date release</td>
              <td>{date}</td>
            </tr>
            <tr>
              <td class="info-title">Client</td>
              <td>{client}</td>
            </tr>
            <tr>
              <td class="info-title">Agency</td>
              <td>{agency}</td>
            </tr>

            <tr>
              <td class="info-title">Website</td>
              <td>
                <a href={www} target="_blank" rel="noopener noreferrer">
                  {www}
                </a>
              </td>
            </tr>

            {more && (
              <tr>
                <td class="info-title">More info</td>
                <td>
                  <a href={more} target="_blank" rel="noopener noreferrer">
                    {more}
                  </a>
                </td>
              </tr>
            )}

            <tr>
              <td class="info-title">Tech</td>
              <td>{tech.join(" · ")}</td>
            </tr>
          </tbody>

          {awards && (
            <tr>
              <td class="info-awards">Awards</td>
              <td>
                {awards.map(award => (
                  <div className={`award ${award}`} />
                ))}
              </td>
            </tr>
          )}
        </table>

        <div
          class="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <hr />
      <h2 class="share-title">Share</h2>
      <ul class="share-post">
        <li>
          <a
            class="twitter"
            href={`https://twitter.com/intent/tweet?text=Check+out+${projectTitleEscaped}+%23portfolio&url=${pageUrlEscaped}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            class="facebook"
            href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
      </ul>
      <hr />
      <h2 class="related-title">Related</h2>
      <ul class="related-post" data-category="singuerinc">
        <li>
          <a href="../singuerinc/arawys-store.html" target="_self">
            Arawys · Store
          </a>
        </li>

        <li>
          <a href="../singuerinc/cuchi-cuchi.html" target="_self">
            Cuchi-Cuchi · Guardería
          </a>
        </li>

        <li>
          <a href="../singuerinc/kit-appetit.html" target="_self">
            Kit Appétit · Store
          </a>
        </li>

        <li>
          <a href="../singuerinc/roberto-ivan-cano.html" target="_self">
            Roberto Iván Cano · Portfolio
          </a>
        </li>

        <li>
          <a href="../singuerinc/singuerinc-overlay-app.html" target="_self">
            singuerinc · Overlay
          </a>
        </li>

        <li>
          <a href="../singuerinc/singuerinc-subway.html" target="_self">
            singuerinc · Subway
          </a>
        </li>

        <li>
          <a href="../singuerinc/singuerinc-tomeito-app.html" target="_self">
            singuerinc · Tomeito-app
          </a>
        </li>

        <li>
          <a href="../singuerinc/singuerinc-bi.html" target="_self">
            singuerinc · Bi
          </a>
        </li>
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
        category
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
