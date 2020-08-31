import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { getProjectImage, getProjectTitle, getProjectUrl } from "../utils/project";

const SitemapPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const projects = edges.map((e) => e.node.frontmatter);
  const uniqCategories = projects
    .reduce((p, { category }) => (p.includes(category) ? p : [...p, category]), [])
    .sort((a, b) => (a > b ? 1 : -1));
  return (
    <Layout>
      <h2 className="title">Site map</h2>
      <ul className="site-map">
        {uniqCategories.map((c, idx) => (
          <li key={idx}>
            <h3>{c}</h3>
            <ul>
              {projects
                .filter(({ category }) => category === c)
                .sort((a, b) => (a.client > b.client ? 1 : -1))
                .map(({ title, client, awards, path, image, tech }, key) => (
                  <li key={key} id="b-reel_b-reel" itemScope itemType="http://schema.org/WebSite">
                    <meta itemProp="name" content={getProjectTitle(client, title)} />
                    <meta itemProp="contributor" content="Nahuel Scotti" />

                    <meta itemProp="keywords" content={tech.join(",")} />
                    {awards &&
                      awards.map((a, idx) => <meta key={idx} itemProp="award" content={a} />)}
                    <meta itemProp="image" content={getProjectImage(image)} />
                    <meta itemProp="url" content={getProjectUrl(path)} />

                    <a href={path} target="_self">
                      {getProjectTitle(client, title)}
                    </a>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>

      <blockquote>
        <p>
          Disclaimer
          <br />
          This website contains thoughts, ideas, and opinions that are my own and they don't
          necessarily reflect those of my current or past employers.
        </p>
      </blockquote>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            category
            tech
            priority
            path
            client
            awards
            image_home
            image
            www
          }
        }
      }
    }
  }
`;

export default SitemapPage;
