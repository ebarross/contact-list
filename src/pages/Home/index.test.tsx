import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home component', () => {
  it('should render ContactList component', () => {
    render(<Home />);
    expect(screen.getByTestId('contact-list')).toBeInTheDocument();
  });
});
