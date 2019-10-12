import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
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

        <h1 class="project-title title">singuerinc · Blog</h1>

        <meta itemprop="name" content="singuerinc · Blog" />
        <meta itemprop="contributor" content="Nahuel Scotti" />

        <meta itemprop="keywords" content="node, react, gatsby, graphql" />
        <meta
          itemprop="image"
          content="https://www.singuerinc.com/img/projects/singuerinc--blog.jpg"
        />
        <img
          class="image"
          src="/images/projects/singuerinc--blog.jpg"
          alt="Blog"
          title="Blog"
        />
        <meta
          itemprop="url"
          content="https://www.singuerinc.com/singuerinc/singuerinc-blog.html"
        />

        <table class="info">
          <tbody>
            <tr>
              <td class="info-role">My role</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td class="info-title">Date release</td>
              <td>08 Nov 2017</td>
            </tr>
            <tr>
              <td class="info-title">Client</td>
              <td>singuerinc</td>
            </tr>
            <tr>
              <td class="info-title">Agency</td>
              <td>singuerinc</td>
            </tr>

            <tr>
              <td class="info-title">Website</td>
              <td>
                <a
                  href="https://blog.singuerinc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://blog.singuerinc.com/
                </a>
              </td>
            </tr>

            <tr>
              <td class="info-title">More info</td>
              <td>
                <a
                  href="https://www.gatsbyjs.org/blog/2017-11-08-migrate-from-jekyll-to-gatsby/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.gatsbyjs.org/blog/2017-11-08-migrate-from-jekyll-to-gatsby/
                </a>
              </td>
            </tr>

            <tr>
              <td class="info-title">Tech</td>
              <td>node · react · gatsby · graphql</td>
            </tr>
          </tbody>
        </table>

        <div class="project-content ">
          <p>
            After some years using Ruby/Jekyll to build my blog I decided to
            migrate it to Node/React/Gatsby.
          </p>

          <p>
            I{" "}
            <a href="https://blog.singuerinc.com/jekyll/gatsby/graphql/2017/11/01/migrate-from-jekyll-to-gatsby/">
              wrote a blog
            </a>{" "}
            post describing how I migrated it.
          </p>

          <p>
            <a href="https://github.com/KyleAMathews">Kyle Mathews</a>{" "}
            (Creator/Founder @ GatsbyJS) liked so much my post that he asked me
            to re-post it in the official Gatsby blog:
          </p>

          <p>
            <a href="https://www.gatsbyjs.org/blog/2017-11-08-migrate-from-jekyll-to-gatsby/">
              https://www.gatsbyjs.org/blog/2017-11-08-migrate-from-jekyll-to-gatsby/
            </a>
          </p>
        </div>
      </div>
      <hr />
      <h2 class="share-title">Share</h2>
      <ul class="share-post">
        <li>
          <a
            class="twitter"
            href="https://twitter.com/intent/tweet?text=Check+out+singuerinc%20%C2%B7%20Blog+%23portfolio&amp;url=https://www.singuerinc.com/singuerinc/singuerinc-blog.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            class="facebook"
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.singuerinc.com/singuerinc/singuerinc-blog.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            class="google"
            href="https://plus.google.com/share?url=https://www.singuerinc.com/singuerinc/singuerinc-blog.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google+
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

{
  /* <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div> */
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
