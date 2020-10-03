module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `doc`,
        path: `${__dirname}/content/docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blogs`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
