import React from 'react';

import { Section, Container } from '@components/global';
import Project from '@common/Project';

const Projects = ({ data }) => (
  <>
    {data.map(project => (
      <Section key={project.fields.slug}>
        <Container>
          <Project project={project} />
        </Container>
      </Section>
    ))}
  </>
);

export default Projects;
