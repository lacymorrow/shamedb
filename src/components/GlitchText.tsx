import { ReactNode } from 'react';

import { GlitchStyled } from '../styles/components/GlitchText';

interface GlitchProps {
  children: ReactNode;
}

const GlitchText = (props: GlitchProps) => (
  <GlitchStyled>{props.children}</GlitchStyled>
);

export default GlitchText;
