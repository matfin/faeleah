import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Header, { Props } from '.';

describe('Header tests', (): void => {
  const defaultProps: Props = {
    navRevealed: false,
    onMenuButtonClick: jest.fn(),
    onTitleClick: jest.fn(),
  };

  it('renders the component with the title', (): void => {
    // given
    const { container } = render(<Header {...defaultProps} />);

    // then
    expect(container).toBeTruthy();
    expect(container.querySelector('h1')).toBeTruthy();
    expect(container.querySelector('a')).toBeFalsy();
  });

  it('executes the callback on button click', async (): Promise<void> => {
    // given
    const spyOnMenuButtonClick = jest.fn();
    const { container } = render(<Header {...defaultProps} onMenuButtonClick={spyOnMenuButtonClick} />);
    const button = container.querySelector('button');

    // then
    fireEvent.click(button);
    await expect(spyOnMenuButtonClick).toHaveBeenCalled();
  });
});
