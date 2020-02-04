import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Title = props => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 500);

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <TitleContainer height={height}>
      <TitleWrapper ref={ref}>{props.text}</TitleWrapper>
      {props.children}
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: ${props => props.height}px;
  position: relative;
  top: -${props => props.height / 2}px;
  display: flex;
  align-items: center;
  @media print {
    position: static;
  }
`;

const TitleWrapper = styled.h2`
  margin: 0;
`;
