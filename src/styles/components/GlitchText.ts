import styled from '@emotion/styled';

export const GlitchStyled = styled.div`
  color: white;
  font-family: sans-serif;
  font-weight: 800;
  position: relative;
  font-size: 100px;

  &::before,
  &::after {
    color: white;
    content: 'Glitch';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    overflow: hidden;
    top: 0;
  }

  &::before {
    left: 3px;
    text-shadow: -2px 0 red;
    animation-name: glitch-animation-1;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }

  &::after {
    left: -3px;
    text-shadow: -2px 0 blue;
    animation-name: glitch-animation-2;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }
`;
