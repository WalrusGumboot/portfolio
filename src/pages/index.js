import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Frame from '../components/frame'


const IndexPage = () => {
  const data = useStaticQuery(
    graphql `query PageTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }`
  )

  return (
    <Frame pageTitle="Home">
      <p className="text-2xl text-slate-600 font-manrope">Test.</p>
    </Frame>
  )
}

export default IndexPage
