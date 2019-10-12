import "./src/styles/global.css"
import { init, Portfolio } from "app"

export const onInitialClientRender = () => {
  const posts = []
  {
    edges.map(
      ({
        node: {
          frontmatter: { client, title, path, image },
        },
      }) =>
        `window.posts.push({id: "${dashify({
          client,
          title,
        })}", image: "${image}"});`
    )
  }

  console.log(posts)
  init(document, new Portfolio(), [])
}
