const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      allMarkdownRemark: { nodes },
    },
  } = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/testmd.js`),
      context: {
        id: node.id,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if ([`MarkdownRemark`].includes(node.internal.type)) {
    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({
        node,
        getNode,
      }),
    })
  }
}

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    resolve: {
      extensions: [`.wasm`, `.mjs`, `.js`, `.jsx`, `.json`],
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  })
}
