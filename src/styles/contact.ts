import styled from '@emotion/styled';

export const ImageRotate = styled.div<any>`
  ${(props) => ({
    backgroundImage: `url("/assets/images/bg-contact-${props.index || 0}.jpg")`,
  })}
`;
