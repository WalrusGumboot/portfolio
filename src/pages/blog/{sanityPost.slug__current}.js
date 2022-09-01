import * as React from "react"
import { graphql } from "gatsby"
import { PortableText } from "@portabletext/react"
import Frame from "../../components/frame"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql `
query Filter($id: String) {
  allSanityPost(filter: {id: {eq: $id}}) {
    nodes {
      title
      publishedAt
      author {
        name
      }
      slug {
        current
      }
      id
      _rawBody
      mainImage {
        asset {
          gatsbyImageData(height: 400, fit: FILLMAX, width: 1049)
        }
      }
    }
  }
}
`

const portableTextComponents = {
  types: {
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startswith('/') ? 'noreferrer noopener' : undefined;
        return (
          <a href={value.href} rel={rel} className="text-blue-600 underline hover:cursor-pointer hover:text-blue-400">
            {children}
          </a>
        )
      },

    }
  }
}

const BlogPost = ( {data} ) => {
  const post = data.allSanityPost.nodes[0]
  const image = getImage(post.mainImage)

  console.log(image)

  return (
    <Frame pageTitle={post.title}>
    <p className="text-slate-400 font-light text-sm">Published at {new Date(post.publishedAt).toDateString()}</p>
      <hr />
      <div className="my-3">
        <GatsbyImage image={post.mainImage.asset.gatsbyImageData}/>
      </div>
      <div className="prose prose-a:text-blue-600 prose-slate w-full">
        <PortableText value={post._rawBody} components={portableTextComponents}/>
      </div>
      <div className="h-3"/>
      <hr />
      <h3 className="text-blue-600 font-bold text-md">Categories</h3>


    </Frame>
  )
}

export default BlogPost
