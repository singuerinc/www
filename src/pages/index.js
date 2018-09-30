import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => {
  return (
  <Layout>
    <ul>
    {data.allMarkdownRemark.edges.map(edge => {
      const { id, frontmatter } = edge.node;
      const { title, tags, tech, image_home} = frontmatter;
      return (
        <li key={id}>
          <h1>{title}</h1>
          <p>
            <h2>Tags</h2>
            <ul>{
              tags.map(tag => <li key={`${id}-${tag}`}>{tag}</li>)
            }</ul>
          </p>
          <p>
            <h2>Tech</h2>
            <ul>{
              tech.map(t => <li key={`${id}-${t}`}>{t}</li>)
            }</ul>
          </p>
          <img alt={title} src={`/static/images/home/${image_home}.jpg`} />
          <Link to="/page-2/">Go to page 2</Link>
        </li>
      )
    })}
    </ul>
  </Layout>
  )
}

export const query = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          tags
          tech
          client
          agency
          image
          image_home
        }
      }
    }
  }
}
`
