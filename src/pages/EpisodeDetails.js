import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"



 function EpisodeDetails ({props}) {
  const data = useStaticQuery 
  (
  graphql `
  query  {
  allContentfulPodcast(sort: {fields: publishedDate, order: DESC}) {
    edges {
      node {
        title
        slug
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
        </div>
    )
}

export default EpisodeDetails