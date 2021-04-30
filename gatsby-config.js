const path = require(`path`)
const remarkMath = require(`remark-math`)
const rehypeKatex = require(`rehype-katex`)

module.exports = {
  siteMetadata: {
    title: `title`,
    description: `description`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.resolve(__dirname, `src/pages`),
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: [`src/scss`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve(__dirname, `src/templates/testmdx.js`),
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!--more-->`,
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              // strict: `ignore`
            },
          },
        ],
      },
    },
  ],
}
