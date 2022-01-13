import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"



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
     {data.allContentfulPodcast.edges.map(edge => 
     
     <h2>
                <Link to={`/EpisodeDetails/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              )}
              {data.allContentfulPodcast.edges.map(thumbnail => 
        <div className="w-100 h-50">
        <img key={thumbnail} src={thumbnail.node.thumbnail.file.url} alt="something" width={600} height={600}/>
        </div>
        )}

        </div>
    )
}

export default EpisodeDetails