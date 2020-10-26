import React from 'react';
import { render } from '@testing-library/react';
import Meta, { Props } from '.';

describe('Meta tests', (): void => {
  const defaultProps: Props = {};

  it('should render the component', (): void => {
    expect(render(<Meta {...defaultProps} />)).toBeTruthy();
  });
});
