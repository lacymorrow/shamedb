import styled from '@emotion/styled';

export const BigTitle = styled.h1<any>`
  ${(props) => ({
    backgroundImage: `url("${props.src || '/assets/images/shots/8.jpg'}")`,
  })}
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 2s ease-in;
  color: black;
  font-weight: 800;
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
