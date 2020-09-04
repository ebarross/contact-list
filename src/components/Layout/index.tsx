import React from 'react';
import Router from '../Router';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Router />
    </Container>
  );
};

export default Layout;
