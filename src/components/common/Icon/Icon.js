import React from 'react';
import styled from 'styled-components';

import print from '@images/icons/print.svg';
import download from '@images/icons/download.svg';

const Icon = name => {
  let icon = {};
  switch (name.name) {
    case 'print':
      icon = print;
      break;
    case 'download':
      icon = download;
      break;
    default:
      console.log(name);
      icon = print;
  }
  return <Img src={icon} />;
};

const Img = styled.img`
  display: none;
  margin: 0;
  width: 32px;
  @media (min-width: ${props => props.theme.screen.md}) {
    display: block;
  }
  @media (min-width: ${props => props.theme.screen.lg}) {
    width: 42px;
  }
`;

export default Icon;
