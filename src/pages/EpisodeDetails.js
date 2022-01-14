import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Nav from '../components/Nav'


 function EpisodeDetails ({props}) {
  const data = useStaticQuery 
  (
  graphql `
  query{
  allContentfulPodcast(sort: {fields: publishedDate, order: DESC}) {
    edges {
      node {
        title
        slug
        thumbnail {
          file {
            url
          }
        }
      }
    }
  }
}

  `)
  
    return (
        <div>
        <Nav/>

        <div className="grid grid-cols-4 gap-4">
          {data.allContentfulPodcast.edges.map(edge => 
     
              <div className="container mx-auto p-5">
                <h1 className="text-3xl"><Link to={`/EpisodeDetails/${edge.node.slug}/`}>{edge.node.title}</Link></h1>
              
              <img src={edge.node.thumbnail.file.url} alt="something" width={300} height={300}/>
            </div>
              )}
              </div>
              
        </div>
    )
}

export default EpisodeDetails