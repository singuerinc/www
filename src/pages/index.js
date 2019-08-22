import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2 className="preamble noselect pre hide">
        HERE'S WHAT I'VE BEEN WORKING ON
      </h2>
      <ul className="posts">
        {edges.reverse().map(({ node: { frontmatter } }, key) => {
          const id = `${frontmatter.client} ${frontmatter.title}`
            .split(" ")
            .join("-")
            .toLowerCase()
          const title =
            frontmatter.title === frontmatter.client
              ? frontmatter.title
              : `${frontmatter.client} · ${frontmatter.title}`
          return (
            <li
              key={key}
              id={id}
              className={`post w ${frontmatter.priority}`}
              itemScope
              itemType="http://schema.org/WebSite"
            >
              <meta itemProp="name" content={title} />
              <meta itemProp="contributor" content="Nahuel Scotti" />
              <meta itemProp="keywords" content={frontmatter.tech.join(",")} />
              {frontmatter.awards &&
                frontmatter.awards.map(a => (
                  <meta itemProp="award" content={a} />
                ))}
              <meta itemProp="image" content={frontmatter.link} />
              <meta itemProp="url" content={frontmatter.www} />
              <a
                href={frontmatter.path}
                target="_self"
                className="w-link animated"
              >
                <div
                  className={`post-image ${frontmatter.priority} animated ${id}`}
                ></div>
                <h3 className="w-title">{title}</h3>
                <div className="w-tags">{frontmatter.tech.join(" · ")}</div>
              </a>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            tags
            tech
            priority
            path
            image_home
            client
            category
            awards
            agency
            www
          }
        }
      }
    }
  }
`

export default IndexPage
