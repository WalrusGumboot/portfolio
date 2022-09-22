import * as React from "react"
import { graphql } from "gatsby"
import { PortableText } from "@portabletext/react"
import Frame from "../../components/frame"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql `
query SpecificAlbum($id: String) {
  allSanityAlbum(filter: {id: {eq: $id}}) {
    nodes {
      id
      slug {
        current
      }
      spotifyLink
      title
      bandcampLink
      cover {
        asset {
          gatsbyImageData(width: 400)
        }
      }
      publishedAt
      _rawAlbumDesc
      songs {
        spotifyLink
        title
        bandcampLink
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

const AlbumPage = ( {data} ) => {
  console.log(data)

  const album = data.allSanityAlbum.nodes[0]

  return (
    <Frame pageTitle={album.title}>
      <div className="flex flex-row w-full gap-x-4">
        <div className="grow bg-blue-100 rounded-md p-8">
          <div className="prose prose-a:text-blue-600 prose-slate w-full mb-4">
            <PortableText value={album._rawAlbumDesc} components={portableTextComponents}/>
          </div>

          {
            album.songs.map((song) => (
              <div className="w-full bg-white rounded-md p-4 flex flex-row gap-x-6 mb-4">
                <p className="grow">{song.title}</p>
                <a href={song.spotifyLink}>
                  <div className="bg-emerald-200 hover:bg-emerald-400 hover:shadow-md rounded-md p-4 text-center transition-all">
                    spotify
                  </div>
                </a>
                <a href={song.bandcampLink}>
                  <div className="bg-emerald-200 hover:bg-emerald-400 hover:shadow-md rounded-md p-4 text-center transition-all">
                    bandcamp
                  </div>
                </a>
              </div>
            ))
          }
        </div>
        <div className="bg-emerald-100 rounded-md p-8">
          <GatsbyImage image={album.cover.asset.gatsbyImageData}/>
          <div className="flex flex-row gap-x-4 mt-4">
            <a href={album.spotifyLink}>
              <div className="bg-emerald-200 hover:bg-emerald-400 hover:shadow-md rounded-md p-4 text-center transition-all">
                spotify
              </div>
            </a>
            <a href={album.bandcampLink}>
              <div className="bg-emerald-200 hover:bg-emerald-400 hover:shadow-md rounded-md p-4 text-center transition-all">
                bandcamp
              </div>
            </a>
          </div>
        </div>
      </div>


    </Frame>
  )
}

export default AlbumPage
