const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const parent = getNode(node.parent);

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `collection`,
      value: parent["sourceInstanceName"],
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              collection
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fields.collection === `doc`) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/DocTemplate.js`),
        context: {
          slug: node.fields.slug,
        },
      });
    }
  });
};
