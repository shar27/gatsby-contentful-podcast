import * as React from "react"
import {graphql} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ReactPlayer from 'react-player';
import {useState} from "react"

// markup
const IndexPage = ({data}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  console.log(data);
  
  return (
    <div>
          {data.allContentfulPodcast.edges.map(edge => 
          <div>
          <h1 key={edge} >{edge.node.title}</h1>
          
          </div>
          )}
          
        
        {data.allContentfulPodcast.edges.map(thumbnail => 
        <div>
        <img key={thumbnail} src={thumbnail.node.thumbnail.file.url} alt="something" width={300} height={300}/>
        </div>
        )}

          {data.allContentfulPodcast.edges.map(audio => 
          <div>
            <audio src={audio.node.audioClip.file.url} />
          </div>

          )}
        {data.allContentfulPodcast.edges.map(content => 
          <div>{documentToReactComponents(JSON.parse(content.node.content.raw))}</div>
          )}

          {data.allContentfulPodcast.edges.map(video => 
          <div>
  <ReactPlayer 
   priority
   autoPlay 
   loop
   muted
   className='react-player'
    url={'https:' + video.node.video.file.url}    
    playing={isPlaying}
    height = '100%'
    width = '100%'
     
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
