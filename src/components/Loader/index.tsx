import React from 'react';
import { Container } from './styles';

type Props = {
  color?: string;
  size?: number;
  thickness?: number;
};

const Loader: React.FC<Props> = ({
  color = '#00c8b3',
  size = 64,
  thickness = 5,
}) => {
  return (
    <Container color={color} size={size} thickness={thickness}>
      <div />
      <div />
      <div />
      <div />
    </Container>
  );
};

export default Loader;
