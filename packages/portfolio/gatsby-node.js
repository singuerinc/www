const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/post.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
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
  `)
  if (result.errors) {
    console.log(result.errors)
    throw new Error("Things broke, see console output above")
  }

  const posts = result.data.allMarkdownRemark.edges

  result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        prev: index === 0 ? null : posts[index - 1].node.frontmatter,
        next: posts[index + 1] ? posts[index + 1].node.frontmatter : null,
        related: posts
          .filter(
            p => p.node.frontmatter.category === node.frontmatter.category
          )
          .map(p => p.node.frontmatter),
      }, // additional data can be passed via context
    })
  })
}
