module.exports = {
  siteMetadata: {
    title: `Simeon Duwel's portfolio / blog`,
    description: `A website that's both a collection of all of my projects and doings, and a blog.`,
    author: `Simeon Duwel`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `8fye0v69`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
}
