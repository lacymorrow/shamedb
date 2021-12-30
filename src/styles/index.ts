import styled from '@emotion/styled';

export const TextWrapper = styled.div<any>`
  width: 720px;
  position: relative;
`;

export const BigTitle = styled.h1<any>`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  ${(props) => ({
    backgroundImage: `url("${props.src || '/assets/images/shots/8.jpg'}")`,
  })}
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 2s ease-in;
  color: black;
  font-weight: 900;
  font-size: 16rem;
  /* display: inline-block; */
  text-align: center;
  background-size: cover;
  position: relative;
  &::before {
    text-shadow: 0px 0px #000;
    content: 'FLY5';
    position: absolute;
    opacity: 1;
    transition: all 2.5s ease-in;
    ${(props) =>
      props.active && {
        opacity: '0.1',
        transitionDuration: '0.2s',
      }}
  }
`;
