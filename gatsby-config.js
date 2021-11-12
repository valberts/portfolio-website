module.exports = {
  siteMetadata: {
    siteUrl: "https://www.valberts.dev",
    title: "Vincent Albertssonls",
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
  ],
};
