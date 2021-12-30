import styled from '@emotion/styled';

export const StyledBackgroundText = styled.div<any>`
  transition: all 2s ease-in;
  color: black;
  font-weight: 900;
  font-size: 18rem;
  text-align: center;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
`;

export const StyledVideoText = styled.div<any>`
  position: absolute;
  top: 54px;
  left: 0;
  right: 0;
  display: block;
  height: 100%;
  margin: 0 auto;
  opacity: 0;
  ${(props) => props.active && { opacity: '1' }}
  transition: opacity ${(props) => props.transitionDuration}s ease-in-out;

  video {
    display: block;
    margin: 0 auto;
  }

  svg {
    width: 100%;
    height: auto;
  }

  .svg-clipped-text {
    -webkit-clip-path: url(#svgTextPath);
    clip-path: url(#svgTextPath);
  }

  text {
    color: black;
    font-size: 18rem;
    font-weight: 900;
    font-family: inherit;
    dominant-baseline: middle;
    text-anchor: middle;
  }
`;
