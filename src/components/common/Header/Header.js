import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Section, Container } from '@components/global';

const nav = [
  { to: '/', title: 'Cases' },
  { to: '/resume', title: 'Resume' },
  { to: '/courses', title: 'Courses' },
];

const Header = ({ data }) => {
  const { name, links } = data;
  return (
    <StyledSection>
      <Container>
        <Grid>
          <Info>
            <Name>{name}</Name>
            <Nav>
              <ul>
                {nav.map(navItem => {
                  const { title, to } = navItem;
                  return (
                    <li key={title}>
                      <Link to={to} activeClassName="active" title={title}>
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Nav>
          </Info>
          <Links>
            {links.map(link => {
              const { value, title, href } = link;
              return (
                <ContactLink key={value}>
                  <LinkTitle>{title}:</LinkTitle> <a href={href}>{value}</a>
                </ContactLink>
              );
            })}
          </Links>
        </Grid>
      </Container>
    </StyledSection>
  );
};

const Nav = styled.nav`
  ul {
    margin: 0;
  }
  li {
    list-style: none;
    display: inline-block;
    margin: 0 10px;
    &:first-child {
      margin: 0 10px 0 0;
    }
    a {
      display: inline-block;
      color: ${props => props.theme.color.text.primary};
      background-image: none;
      letter-spacing: 0.67px;
      text-shadow: none;
      &:hover,
      &.active {
        font-weight: bold;
        letter-spacing: 0;
      }
    }
  }

  @media print {
    display: none;
  }
`;

const StyledSection = styled(Section)`
  min-height: 70vh;
  padding-top: 40px;
  @media (min-width: ${props => props.theme.screen.md}) {
    min-height: 50vh;
  }
  @media print {
    height: 100vh;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'info-area'
    'links-area';
  grid-gap: 40px;
  @media (min-width: ${props => props.theme.screen.md}) {
    grid-gap: 0;
    grid-template-areas: 'text-area image-area';
  }
`;

const Info = styled.div``;
const Name = styled.h1`
  font-size: 1em;
  margin: 0;
  margin-bottom: 1em;
  font-weight: normal;
`;
const Links = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  @media (min-width: ${props => props.theme.screen.md}) {
    margin: 0;
  }
`;
const ContactLink = styled.li`
  margin: 0;

  a {
    text-shadow: none;
  }
`;
const LinkTitle = styled.span`
  color: ${props => props.theme.color.text.secondary};
  margin-right: 0.3em;
`;

export default Header;
