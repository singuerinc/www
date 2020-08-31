const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              category
              client
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors);
    throw new Error("Things broke, see console output above");
  }

  const { edges } = result.data.allMarkdownRemark;

  edges.forEach(({ node: { frontmatter } }, index) => {
    createPage({
      path: frontmatter.path,
      component: blogPostTemplate,
      context: {
        prev: index === 0 ? null : edges[index - 1].node.frontmatter,
        next: edges[index + 1] ? edges[index + 1].node.frontmatter : null,
        related: edges
          .filter(({ node }) => node.frontmatter.category === frontmatter.category)
          .map(({ node }) => node.frontmatter)
      } // additional data can be passed via context
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // console.log(`Node:${JSON.stringify(node, null, 2)}`);

    const getProjectTitleEscaped = title => encodeURIComponent(title);
    const getProjectUrlEscaped = url => encodeURIComponent(url);
    const getProjectUrl = path => `https://www.singuerinc.com${path}`;
    const getProjectImage = image => `https://www.singuerinc.com/images/projects/${image}.jpg`;
    const normalizeTitle = x => (x.title === x.client ? x.title : `${x.client} · ${x.title}`);

    createNodeField({
      node,
      name: "normalizedTitle",
      value: normalizeTitle(node.frontmatter)
    });

    createNodeField({
      node,
      name: "projectUrl",
      value: getProjectUrl(node.frontmatter.path)
    });

    createNodeField({
      node,
      name: "projectImage",
      value: getProjectImage(node.frontmatter.image)
    });

    createNodeField({
      node,
      name: "escapedProjectTitle",
      value: getProjectTitleEscaped(node.frontmatter.title)
    });

    createNodeField({
      node,
      name: "escapedProjectUrl",
      value: getProjectUrlEscaped(node.frontmatter.path)
    });
  }
};
