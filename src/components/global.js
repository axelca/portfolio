import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 700px;
    padding: 0 32px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 940px;
    padding: 0 48px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1179px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 0 0 100px 0;

  &:nth-child(even) {
    background: ${props => props.theme.color.background.secondary};
  }

  &:nth-child(odd) {
    background: ${props => props.theme.color.background.primary};
  }

  &:last-child {
    padding: 0 0 100px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.background.secondary
        : props.theme.color.background.primary
    }`};
`;
