import { graphql } from "gatsby"
import * as React from "react"
import Frame from "../../components/frame"

export const query = graphql `
query MyQuery($cat: String) {
  allSanityPost(filter: {categories: {elemMatch: {title: {eq: $cat}}}}) {
    nodes {
      title
      slug {
        current
      }
    }
  }
}
`

const CategoryPage = ( {data} ) => {
    const pages = data.allSanityPost.nodes; // has a title and slug.current property
    return (
      <Frame pageTitle="hoi">
        <div>hoi</div>
        
  
      </Frame>
    )
  }
  
  export default CategoryPage