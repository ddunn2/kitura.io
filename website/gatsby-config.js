module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `doc`,
        path: `${__dirname}/content/learn`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/news`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
