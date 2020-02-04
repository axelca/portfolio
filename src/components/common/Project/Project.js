import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Title from '@common/Title';

const Project = ({ project }) => {
  const { title } = project.frontmatter;
  const { html } = project;
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const { offsetHeight, offsetTop } = ref.current;

    if (scrolled < offsetTop || scrolled > offsetTop + offsetHeight) {
      setProgress(0);
    }
    if (scrolled > offsetTop && scrolled < offsetTop + offsetHeight) {
      setProgress(((scrolled - offsetTop) / offsetHeight) * 100);
    }
  };

  return (
    <Article ref={ref}>
      <TopBar progress={progress} />
      <Title text={title} />
      <Body dangerouslySetInnerHTML={{ __html: html }} />
      <MarginBottom />
    </Article>
  );
};

export default Project;

const MarginBottom = styled.div`
  height: 100px;
  @media (min-width: ${props => props.theme.screen.sm}) {
    height: 200px;
  }
  @media (min-width: ${props => props.theme.screen.md}) {
    height: 400px;
  }
`;

const TopBar = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  height: 3px;
  background: #950451;
  width: ${props => props.progress}%;
  z-index: 9999;
  animation-duration: 3s;
  animation-name: slidein;
`;

const Article = styled.article`
  h3 {
    margin-top: 50px;
  }
  @media (min-width: ${props => props.theme.screen.md}) {
    h3 {
      font-size: 1.6em;
    }
    p {
      max-width: 66%;
    }
    .gria-image-wrapper {
      max-width: 50%;
    }
  }
  .gria-image-placeholder,
  .gria-image-wrapper {
    border-radius: 5px;
    box-shadow: 1px 1px 10px #0000001a;
  }

  img {
    background: ${props => props.theme.color.background.primary};
    margin: 0;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #d4d4d4;
    padding: 7px;
  }
  @media (min-width: ${props => props.theme.screen.sm}) {
    img {
      padding: 10px;
    }
  }
  video {
    max-width: 100%;
  }
`;

const Body = styled.div`
  padding: 0;
`;
