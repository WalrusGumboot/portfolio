import * as React from "react"
import { graphql, navigate } from "gatsby"
import { PortableText } from '@portabletext/react'
import Frame from "../../components/frame"


export const query = graphql `
query Posts {
  allSanityPost(sort: {fields: publishedAt, order: DESC}) {
    nodes {
      categories {
        title
      }
      slug {
        current
      }
      publishedAt
      title
    }
  }
}
`


const AllBlogPostsPage = ({data}) => {
  console.log(data)
  return (
    <Frame pageTitle="Blog">
      {
        data.allSanityPost.nodes.map(blogPost => (
          <div className="w-full h-fit p-4 mb-4 bg-blue-100 rounded-md hover:bg-blue-200 hover:cursor-pointer transition-all"
               onClick={ () => navigate("/blog/" + blogPost.slug.current) } role="link">
            <h3 className="text-2xl text-blue-800">{blogPost.title}</h3>
            <p>Published at {new Date(blogPost.publishedAt).toDateString()}</p>
            <div className="flex flex-row gap-x-3">
              <p className="text-blue-600 font-light"><i>Categories:</i></p>
              <div className="w-full flex flex-row gap-x-4">
                {
                  blogPost.categories.map(c => (
                    <div className="rounded-full bg-slate-400 px-2">
                      <p className="font-light">{c.title}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </Frame>
  )
}

export default AllBlogPostsPage
