var path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const { frontmatter } = node;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `static/projects`,
      trailingSlash: true,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }

  /*
  if (frontmatter) {
    frontmatter.blocks.map((block, i) => {
      if (block.image.url.length > 0) {
        let { url } = block.image;
        if (url) {
          if (url.indexOf('/assets') === 0) {
            frontmatter.blocks[i].image.url = path.relative(
              path.dirname(node.fileAbsolutePath),
              path.join(__dirname, '/static/', url)
            );
            console.log(path.join(__dirname, '/static/', url));
          }
        }
      }
    });
  }
  */
};

/*
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const Project = path.resolve('src/templates/project.js');
    resolve(
      graphql(`
        {
          allMarkdownRemark {
            nodes {
              fields {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allMarkdownRemark.nodes.forEach(data => {
          createPage({
            path: `${data.fields.slug}`,
            component: Project,
            context: {
              slug: data.fields.slug,
            },
          });
        });
        return;
      })
    );
  });
};
*/
