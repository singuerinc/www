import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const dashify = x => `${x.client} ${x.title}`.split(" ").join("-").toLowerCase();

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
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <Layout>
      <SEO title="Home" path="/" />
      <h2 className="preamble noselect pre">HERE'S WHAT I'VE BEEN WORKING ON</h2>
      <style>
        {edges.map(({ node: { frontmatter: post } }) => {
          const className = `#${dashify(post)}.post.${post.priority}`;
          return postStyle(className, post.image);
        })}
      </style>

      <ul className="posts">
        {edges.map(({ node: { frontmatter: post, fields } }, key) => {
          const id = dashify(post);
          return (
            <li
              key={key}
              id={id}
              className={`post w ${post.priority}`}
              itemScope
              itemType="http://schema.org/WebSite"
            >
              <meta itemProp="name" content={fields.normalizedTitle} />
              <meta itemProp="contributor" content="Nahuel Scotti" />
              <meta itemProp="keywords" content={post.tech.join(",")} />
              {post.awards &&
                post.awards.map((a, idx) => <meta key={idx} itemProp="award" content={a} />)}
              <meta itemProp="image" content={fields.projectImage} />
              <meta itemProp="url" content={fields.projectUrl} />
              <a href={post.path} target="_self" className="w-link animated">
                <div className={`post-image ${post.priority} animated ${id}`}></div>
                <h3 className="w-title">{fields.normalizedTitle}</h3>
                <div className="w-tags">{post.tech.join(" · ")}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            title
            tags
            tech
            priority
            path
            client
            category
            awards
            agency
            image_home
            image
            www
          }
          fields {
            normalizedTitle
            projectImage
            projectUrl
          }
        }
      }
    }
  }
`;

export default IndexPage;
