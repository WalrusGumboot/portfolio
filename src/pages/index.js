import * as React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import Frame from '../components/frame'


const IndexPage = () => {
  return (
    <Frame pageTitle="">
      <div className="prose min-w-full">
        <p>
          Hi! I'm Simeon Duwel, a sixteen-year-old programmer, musician and writer from Belgium.
          I've long needed a place to put <i>all</i> my stuff, so I learned myself Gatsby and Sanity,
          this being the result. Though the design isn't anything fancy (I do love me some Iosevka),
          my aim is to make this site as accessible as possible. If you've got any tips, don't hesitate to
          reach out to me! This is all very much a work-in-progress, by the way, so the look and feel will
          probably change as time progresses.

          This site is a kind of repository of most of my stuff. My albums can be found on the <a href="music">Music</a> page,
          my blog posts and writings and pieces of poetry and whatnot can be found on my <a href="blog">Blog</a>.
        </p>
      </div>

    </Frame>
  )
}

export default IndexPage
