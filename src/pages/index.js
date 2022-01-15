import * as React from "react"
import {graphql, Link} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import Hero from '../components/Hero'
import {useState} from "react"


// markup
const IndexPage = ({data}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(data);
  
  return (
    <div className="overflow-x-hidden w-full">

    
          
          <Hero/>
          
          <h1 className="text-6xl text-center ">Latest shows</h1>
          <div className="grid grid-cols-4 gap-2">

       
          {data.allContentfulPodcast.edges.map(edge => 
          <div>
          <h1 key={edge} className=" text-2xl text-blue-600" >{edge.node.title} </h1>
          <img  src={edge.node.thumbnail.file.url} alt="something" width={300} height={300}/>
          <a className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                <Link to={`/EpisodeDetails/${edge.node.slug}/`}>{edge.node.title}</Link>
              </a>
          </div>
          )}
         
              </div>
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
