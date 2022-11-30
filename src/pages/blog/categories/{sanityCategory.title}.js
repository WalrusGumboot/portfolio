import { graphql, navigate } from "gatsby"
import * as React from "react"
import Frame from "../../../components/frame"

export const query = graphql `
query ($eq: String) {
  allSanityPost(filter: {categories: {elemMatch: {title: {eq: $eq}}}}) {
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
  console.log(data)
  const pages = data.allSanityPost.nodes; // has a title and slug.current property
    return (
      <Frame pageTitle={"All posts tagged with \"" + window.location.href.split('/').pop() + "\""}>
        <div className="flex flex-col gap-y-4">
          {
            pages.map((p) => (
              <div className="w-full p-4 bg-blue-100 rounded-md hover:shadow-md transition-all hover:cursor-pointer" onClick={()=>navigate("/blog/"+p.slug.current)}>
                <h3 className="text-2xl">{p.title}</h3>
              </div>
            ))
          }
        </div>
      </Frame>
    )
  }
  
  export default CategoryPage
