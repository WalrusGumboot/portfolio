import * as React from "react"
import { graphql, navigate } from "gatsby"
import Frame from "../../components/frame"
import { GatsbyImage } from 'gatsby-plugin-image'

export const query = graphql `
query Album {
  allSanityAlbum {
    nodes {
      id
      slug {
        current
      }
      spotifyLink
      publishedAt
      title
      bandcampLink
      cover {
        asset {
          gatsbyImageData(width: 80)
        }
      }
    }
  }
}
`

const AllAlbumsPage = ({data}) => {
  console.log(data)
  return (
    <Frame pageTitle="Albums">
      
      {
        data.allSanityAlbum.nodes.map(album => (
          <div className="w-full h-fit p-4 mb-4 bg-blue-100 rounded-md hover:bg-blue-200 hover:shadow-md transition-all hover:cursor-pointer"
               onClick={ () => navigate("/music/" + album.slug.current) } role="link">
              <div className="flex flex-row justify-between">
                <div>
                  <h3 className="text-2xl text-blue-800">{album.title}</h3>
                  <p>Released on {album.publishedAt}</p>
            <div className="flex flex-row">
          </div>
                </div>
                <GatsbyImage image={album.cover.asset.gatsbyImageData}/>
            </div>
          </div>
        ))
      }
    </Frame>
  )
}

export default AllAlbumsPage;



