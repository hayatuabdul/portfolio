import { graphql } from 'gatsby';
import React from 'react';

import Projects from '../components/projects';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';

const Index = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.filter(
    (edge) => edge.node.frontmatter.type === 'project'
  );
  const noProject = !projects || !projects.length;

  if (!projects || !projects.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <Header metadata={data.site.siteMetadata} />
      {!noProject && <Projects projects={projects} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            type
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
