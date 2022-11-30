import * as React from 'react';
import Frame from "../components/frame";
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql `
query GetAlbums {
  allSanitySilAlbum {
    nodes {
      hasVinyl
      description
      artist
      title
      image {
        asset {
          gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
}`

const StuffILikePage = ({data}) => {
  return (
    <Frame title="Stuff I like">
      <div className="prose min-w-full">
        <p>
          <b>I thoroughly enjoy quite a lot of stuff.</b> As an homage to all the stuff I find cool, here's
          an exhibition of sorts. For now, there are only albums; in the future I'll add some novels and artists, probably.
        </p>
        <h3>1. Music</h3>
        <p>
          Oh wow, where to even begin? I like a <i>lot</i> of different kinds of music. To make a top ten is an
          impossible task, both because there's simply too much good music and because my favourites change from
          time to time; so, instead of trying to make a ranking of albums I currently enjoy the most, here are
          ten albums I think everyone should listen to at least once, and definitely albums that I'll enjoy
          any day of the year. I must also admit that I've a thing for vinyl records (I'm afraid I am that kind of
          snob, yes) so I've marked the albums that I physically own as well.
        </p>
      </div>
      { data.allSanitySilAlbum.nodes.map((a, i) => {
        const image = getImage(a.image);
        return (
            <div className="bg-blue-200 rounded-md min-w-full p-6 mb-4 flex flex-row justify-between items-center">
                <div className="pr-12">
                    <h3 className="text-blue-700 font-bold text-2xl">{i + 1}. {a.title}</h3>
                    <h4 className="text-slate-700 italic text-xl">{a.artist}</h4>
                    <p>{a.description}</p>
                </div>
                <div>
          <GatsbyImage image={a.image.asset.gatsbyImageData} className="w-32"/>
                </div>
            </div>
            )
        })
      }
    </Frame>
  )
}

export default StuffILikePage;
