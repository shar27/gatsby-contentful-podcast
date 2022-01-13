import React from 'react'
import { graphql, Link } from "gatsby"
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {useState} from 'react'

export const query = graphql`
  query MyQuery {
  contentfulPodcast {
    slug
    title
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
    content {
      raw
    }
  }
}


`

const podsode = props => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
        <div className='relative'>
  <ReactPlayer 
   priority
  playIcon={true}  
   className='react-player'
    url={'https:' + props.data.contentfulPodcast.video.file.url}    
    playing={isPlaying}
    height = '100%'
    width = '100%'
     
  />

            
            <div>
 
            <h1 className='text-6xl font-bold text-blue-500 text-center'>{props.data.contentfulPodcast.title}</h1>
 
          </div>
 
            <div>
 
 <ReactAudioPlayer
   src={'https:' + props.data.contentfulPodcast.audioClip.file.url}
   
   controls
 />
             
           </div>
 
 
     
            
         
          <div>{documentToReactComponents(JSON.parse(props.data.contentfulPodcast.content.raw))}</div>
        
        </div>
    )
}


export default podsode
