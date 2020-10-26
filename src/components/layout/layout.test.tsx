import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Layout from '.';

jest.mock('next/head', () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: ({ children }: { children: Array<React.ReactElement> }) => <>{children}</>,
}));
jest.mock('next/link', () => ({ children }) => children);
jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: 'test/path',
    query: {
      publicId: 'test-publicId',
      slug: 'test-slug',
    },
  }),
}));

describe('Layout tests', (): void => {
  it('renders the component', (): void => {
    expect(render(<Layout />)).toBeTruthy();
  });

  it('renders children', (): void => {
    const wrapper = render(
      <Layout>
        <p>Test</p>
      </Layout>,
    );
    const { container } = wrapper;
    const test = container.querySelector('p');

    expect(test).toBeTruthy();
    expect(wrapper.getByText('Test')).toBeTruthy();
  });

  it('prevents body scroll when navigation is revealed', async (): Promise<void> => {
    const view = render(<Layout />);
    const { container } = view;
    const button = container.querySelector('button');

    await act(
      async (): Promise<void> => {
        fireEvent.click(button);
      },
    );

    await expect(document.body.classList).toContain('overflow-lock');

    await act(
      async (): Promise<void> => {
        fireEvent.click(button);
      },
    );
    await expect(document.body.classList).not.toContain('overflow-lock');
  });

  it('dismisses navigation on title click', async (): Promise<void> => {
    const view = render(<Layout />);
    const { container, getByTestId } = view;
    const button = container.querySelector('button');
    const title = getByTestId('title');

    await act(
      async (): Promise<void> => {
        fireEvent.click(button);
      },
    );
    await expect(document.body.classList).toContain('overflow-lock');

    await act(
      async (): Promise<void> => {
        fireEvent.click(title);
      },
    );
    await expect(document.body.classList).not.toContain('overflow-lock');
  });
});
