import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import Title from '@common/Title';
import Icon from '@common/Icon';

const Courses = ({ data }) => {
  const { programs, courses } = data;
  return (
    <Section>
      <Container>
        <Title text="Past Courses">
          <A onClick={() => window.print()}>
            <Icon name="download" />
          </A>
        </Title>
        <h3>Programs</h3>
        {programs.map(program => {
          const { title, school, start, end } = program;
          return (
            <Program>
              <strong>
                {title}, {school}
              </strong>{' '}
              ({start} - {end})
            </Program>
          );
        })}
        <h3>Courses</h3>
        {courses.map(course => {
          const { title, points } = course;
          return (
            <Course>
              <strong>{title}</strong> - {points} hp
            </Course>
          );
        })}
      </Container>
    </Section>
  );
};

const Program = styled.div``;
const Course = styled.div``;
const A = styled.button`
  text-decoration: none;
  cursor: pointer;
  background-image: none;

  &:hover > img {
    opacity: 0.7;
  }
`;

export default Courses;
