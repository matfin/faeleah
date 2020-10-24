import React from 'react';
import { render } from '@testing-library/react';
import Layout, { Props } from './layout';

describe('Layout tests', (): void => {
  const defaultProps: Props = {
    children: null,
  };

  it('should render the component', (): void => {
    expect(render(<Layout {...defaultProps} />));
  });
});
