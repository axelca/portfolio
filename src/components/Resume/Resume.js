import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import Title from '@common/Title';
import Icon from '@common/Icon';
import studentImage from '@settings/studentImage.jpg';

const Resume = ({ data, student }) => {
  const { goals, education, programs, work, workplaces, knowledge } = data;
  const { name, description } = student;
  return (
    <Section>
      <Container>
        <Title text="Resume">
          <A onClick={() => window.print()}>
            <Icon name="download" />
          </A>
        </Title>
        <Grid>
          <Aside>
            <Me>
              <h3>{name}</h3>
              <StudentImage src={studentImage} />
              <Content>- {description}</Content>
            </Me>
            <Goals>
              {goals.map(goal => {
                const { title, content } = goal;
                return (
                  <ListItem key={title}>
                    <h3>{title}</h3>
                    <Content>{content}</Content>
                  </ListItem>
                );
              })}
            </Goals>
            <Knowledge>
              {knowledge.map(knowledgeItem => {
                const { title, content } = knowledgeItem;
                return (
                  <ListItem key={title}>
                    <h3>{title}</h3>
                    <Content>{content}</Content>
                  </ListItem>
                );
              })}
            </Knowledge>
          </Aside>
          <Main>
            <Education>
              {education.map(educationItem => (
                <h3 key={educationItem.title}>{educationItem.title}</h3>
              ))}
              {programs.map(program => {
                const { title, school, start, end, content } = program;
                return (
                  <ListItem key={title}>
                    <ListHeading>
                      <strong>
                        {title}, {school}{' '}
                      </strong>
                      ({start} - {end})
                    </ListHeading>
                    <Content>{content}</Content>
                  </ListItem>
                );
              })}
            </Education>
            <Work>
              {work.map(workItem => (
                <h3 key={workItem.title}>{workItem.title}</h3>
              ))}
              {workplaces.map(workplace => {
                const { title, employer, start, end, content } = workplace;
                return (
                  <ListItem key={title}>
                    <ListHeading>
                      <strong>
                        {title}, {employer}{' '}
                      </strong>
                      ({start} - {end})
                    </ListHeading>
                    <Content>{content}</Content>
                  </ListItem>
                );
              })}
            </Work>
          </Main>
        </Grid>
      </Container>
    </Section>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${props => props.theme.screen.md}) {
    grid-gap: 80px;
    grid-template-columns: 33% 1fr;
  }
`;
const Aside = styled.div``;
const Me = styled.div``;
const Main = styled.main``;
const Goals = styled.div``;
const Education = styled.div``;
const ListItem = styled.div``;
const ListHeading = styled.div``;
const Content = styled.p`
  margin-bottom: 40px;
`;
const Work = styled.div``;
const Knowledge = styled.div``;
const A = styled.button`
  text-decoration: none;
  cursor: pointer;
  background-image: none;

  &:hover > img {
    opacity: 0.7;
  }
`;
const StudentImage = styled.img`
  border-radius: 100%;
  max-width: 120px;
  margin-bottom: 0;
`;

export default Resume;
