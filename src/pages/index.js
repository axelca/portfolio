import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@common/Layout';
import Header from '@common/Header';
import Projects from '@components/Projects';

import student from '@settings/student.yml';

const IndexPage = ({ data }) => (
  <Layout>
    <Header data={student} />
    <Projects data={data.allMarkdownRemark.nodes} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          title
          date
        }
        html
        fields {
          slug
        }
      }
    }
  }
`;
