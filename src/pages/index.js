import * as React from "react"
import {graphql} from "gatsby"
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

          {data.allContentfulPodcast.edges.map(audio => 
          <div>
 
<ReactAudioPlayer
  src={'https:' + audio.node.audioClip.file.url}
  autoPlay
  controls
/>
            
          </div>

          )}
        {data.allContentfulPodcast.edges.map(content => 
          <div>{documentToReactComponents(JSON.parse(content.node.content.raw))}</div>
          )}

          {data.allContentfulPodcast.edges.map(video => 
          <div>
  <ReactPlayer 
   priority
  playIcon={true}
   
   
   className='react-player'
    url={'https:' + video.node.video.file.url}    
    playing={isPlaying}
    height = '50%'
    width = '50%'
     
  />

          </div>
          )}

    </div>
      )
}

export const query = graphql `
query MyQuery {
  allContentfulPodcast {
    edges {
      node {
        title
        thumbnail {
          file {
            url
          }
        }
        content {
          raw
        }
        video {
          file {
            url
          }
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
