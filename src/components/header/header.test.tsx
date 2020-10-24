import React from 'react';
import { render } from '@testing-library/react';
import Header, { Props } from './header';

describe('header tests', (): void => {
  const defaultProps: Props = {};

  it('should render the component', (): void => {
    expect(render(<Header {...defaultProps} />)).toBeTruthy();
  });
});
