import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const dashify = x =>
  `${x.client} ${x.title}`
    .split(" ")
    .join("-")
    .toLowerCase()

const normalizeTitle = x =>
  x.title === x.client ? x.title : `${x.client} · ${x.title}`

const postStyle = (className, image) => `
  ${className} {
    background: url(images/home/${image}.jpg) no-repeat;
    background-size: 100% auto;

  }

  @media (max-width: 768px) {
    ${className} {
    background: url(images/home/${image}-md.jpg) no-repeat;
    background-size: 100% auto;
  }
}
`

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

      <style>
        {edges.map(({ node: { frontmatter: post } }) => {
          const className = `#${dashify(post)}.post.${post.priority}`
          return postStyle(className, post.image)
        })}
      </style>

      <ul className="posts">
        {edges
          .slice()
          .reverse()
          .map(({ node: { frontmatter: post } }, key) => {
            const id = dashify(post)
            const title = normalizeTitle(post)
            return (
              <li
                key={key}
                id={id}
                className={`post w ${post.priority}`}
                itemScope
                itemType="http://schema.org/WebSite"
              >
                <meta itemProp="name" content={title} />
                <meta itemProp="contributor" content="Nahuel Scotti" />
                <meta itemProp="keywords" content={post.tech.join(",")} />
                {post.awards &&
                  post.awards.map(a => <meta itemProp="award" content={a} />)}
                <meta itemProp="image" content={post.link} />
                <meta itemProp="url" content={post.www} />
                <a href={post.path} target="_self" className="w-link animated">
                  <div
                    className={`post-image ${post.priority} animated ${id}`}
                  ></div>
                  <h3 className="w-title">{title}</h3>
                  <div className="w-tags">{post.tech.join(" · ")}</div>
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
            image_home
            image
            www
          }
        }
      }
    }
  }
`

export default IndexPage