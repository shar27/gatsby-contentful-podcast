const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(
      `
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
      
  
  response.data.allContentfulPodcast.edges.forEach(edge => {
    createPage({
      path: `/EpisodeDetails/${edge.node.slug}`,
      component: path.resolve("./src/episodes/podsode.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}