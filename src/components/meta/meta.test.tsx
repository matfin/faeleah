import React from 'react';
import { render } from '@testing-library/react';
import Meta, { Props } from '.';

interface MockedHeadProps {
  children: JSX.Element;
}

const MockedHead = ({ children }: MockedHeadProps): JSX.Element => <>{children}</>;
// eslint-disable-next-line react/display-name
jest.mock('next/head', () => ({ children }: MockedHeadProps) => <MockedHead>{children}</MockedHead>);

describe('Meta tests', (): void => {
  const defaultProps: Props = {
    pageMetaData: {
      title: 'Test',
      description: 'Description',
    },
  };

  it('should render the component with the title and description', (): void => {
    const { container, getByText } = render(<Meta {...defaultProps} />);

    expect(getByText('Fae Leah Art and Design - Test')).toBeTruthy();
    expect(container.querySelector('meta[name="description"]').getAttribute('content')).toEqual('Description');
  });
});
