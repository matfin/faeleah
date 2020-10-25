import React from 'react';
import { render } from '@testing-library/react';
import Header, { Props } from './header';

describe('header tests', (): void => {
  const defaultProps: Props = {};

  it('should render the component', (): void => {
    const { getByText } = render(<Header {...defaultProps} />);

    expect(getByText('Fae Leah Art')).toBeTruthy();
  });
});
