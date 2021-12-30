import styled from '@emotion/styled';

export const StyledWrapper = styled.div<any>`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  & > * {
    pointer-events: none;
    user-select: none;
  }
`;

export const StyledBackgroundText = styled.div<any>`
  margin: -54px auto;
  transition: all 2s ease-in;
  color: rgb(26, 32, 44);
  font-weight: 900;
  font-size: 18rem;
  text-align: center;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
`;

export const StyledVideoText = styled.div<any>`
  position: absolute;
  top: 0;
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
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
  }

  .svg-clipped-text {
    -webkit-clip-path: url(#svgTextPath);
    clip-path: url(#svgTextPath);
  }

  text {
    color: rgb(26, 32, 44);
    font-size: 18rem;
    font-weight: 900;
    font-family: inherit;
    dominant-baseline: middle;
    text-anchor: middle;
  }
`;
