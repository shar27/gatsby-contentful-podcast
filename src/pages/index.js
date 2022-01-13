import * as React from "react"
import {graphql, Link} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';

import {useState} from "react"

// markup
const IndexPage = ({data}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(data);
  
  return (
    <div>

    <h1 className="text-blue-600 text-7xl text-center">Shotify</h1>
          {data.allContentfulPodcast.edges.map(edge => 
          <div>
          <h1 key={edge} className=" text-center text-5xl text-blue-600" >{edge.node.title} </h1>
          
          </div>
          )}
          
        
        {data.allContentfulPodcast.edges.map(thumbnail => 
        <div className="w-100 h-50">
        <img key={thumbnail} src={thumbnail.node.thumbnail.file.url} alt="something" width={600} height={600}/>
        </div>
        )}
        {data.allContentfulPodcast.edges.map(edge => 
     
              <a className="w-30 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                <Link to={`/EpisodeDetails/${edge.node.slug}/`}>{edge.node.title}</Link>
              </a>
              )}
          
    </div>
      )
}

export const query = graphql `
query  {
  allContentfulPodcast(sort: {fields: publishedDate, order: DESC}) {
    edges {
      node {
        title
        slug
        publishedDate(formatString: "DD MM YYYY")
        thumbnail {
          file {
            url
          }
        }
        video {
          file {
            url
          }
        }
        content {
          raw
        }
        audioClip {
          file {
            url
          }
        }
      }
    }
  }
}



`



export default IndexPage
