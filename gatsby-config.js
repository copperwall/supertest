module.exports = {
  siteMetadata: {
    title: `Client only paths`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    // used to generate rewrites for client only paths
    // on demo hosted on Netlify
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-create-client-paths",
      options: { prefixes: [`/page/*`, `/super/*`] }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "super-test-copperwall",
        generateMatchPathRewrites: false
      }
    }
  ]
};
