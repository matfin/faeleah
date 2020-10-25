import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { GlobalStyle } from 'styles';
import Meta from 'components/meta/meta';
import { Header, GridContainer, Main } from './layout.css';

export interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Meta />
    <MDXProvider>
      <GridContainer>
        <Header />
        <Main>{children}</Main>
      </GridContainer>
    </MDXProvider>
    <GlobalStyle />
  </>
);

export default Layout;
