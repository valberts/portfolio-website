module.exports = {
  siteMetadata: {
    siteUrl: "https://www.valberts.dev",
    title: "Vincent Albertsson",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-autolink-headers",
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
        duration: 1000,
      },
    },
  ],
};
