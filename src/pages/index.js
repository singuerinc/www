import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default ({ data }) => {
  return (
  <Layout>
    {data.allMarkdownRemark.edges.map(edge => {
      const { id, frontmatter } = edge.node;
      const { title, tags, tech, image_home} = frontmatter;
      return (
        <div key={id} className="relative">
          <div className="absolute ma4">
            <h1 className="ma0 pa0">{title}</h1>
            <ul className="flex flex-wrap list ma0 pa0">{
              tags.map(tag => <li key={`${id}-${tag}`} className="ma2">{tag}</li>)
            }</ul>
            <ul className="flex flex-wrap list ma0 pa0">{
              tech.map(t => <li key={`${id}-${t}`} className="ma2">{t}</li>)
            }</ul>
            <Link className="db" to="/page-2/">Go to page 2</Link>
          </div>
          <img className="w-100 ma0 pa0" alt={title} src={`/static/images/home/${image_home}.jpg`} />
        </div>
      )
    })}
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
