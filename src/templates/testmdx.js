import React from 'react'
import { MDXProvider } from '@mdx-js/react'

export default function Test(props) {
  const {
    children,
    pageContext: { frontmatter },
  } = props
  return (
    <MDXProvider>
      <h1>{frontmatter.title}</h1>
      <div>{children}</div>
    </MDXProvider>
  )
}
