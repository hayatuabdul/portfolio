import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionEducation from '../components/section-education';
import SectionExperience from '../components/section-experience';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const extendedAbout = get(data, 'site.siteMetadata.extendedAbout', false);
  const resumeLink = get(data, 'site.siteMetadata.resumeLink', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);

  return (
    <Layout>
      <SEO title={'About'} />
      <Header metadata={data.site.siteMetadata} />
      {extendedAbout && (
        <SectionAbout
          about={extendedAbout}
          extended={true}
          resumeLink={resumeLink}
        />
      )}
      {education && education.length && (
        <SectionEducation education={education} />
      )}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
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
        extendedAbout
        resumeLink
        education {
          date
          name
          description
        }
        experience {
          date
          name
          description
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
