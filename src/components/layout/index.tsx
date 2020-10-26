import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { GlobalStyle } from 'styles';
import Meta from 'components/meta';
import { Header, GridContainer, Main, Navigation } from './layout.css';

export interface Props {
  children?: JSX.Element | JSX.Element[] | string;
}

const setBodyOverflow = (overflow: boolean): void => {
  if (overflow) {
    document.body.classList.add('overflow-lock');
  } else {
    document.body.classList.remove('overflow-lock');
  }
};

const Layout = ({ children }: Props): JSX.Element => {
  const [navRevealed, setNavRevealed] = useState<boolean>(false);
  const toggleNav = (): void => {
    setNavRevealed(!navRevealed);
    setBodyOverflow(!navRevealed);
  };
  const dismissNav = (): void => {
    setNavRevealed(false);
    setBodyOverflow(false);
  };

  return (
    <>
      <Meta />
      <MDXProvider>
        <GridContainer>
          <Header onMenuButtonClick={toggleNav} onTitleClick={dismissNav} navRevealed={navRevealed} />
          <Navigation onNavigate={dismissNav} isRevealed={navRevealed} />
          <Main>{children}</Main>
        </GridContainer>
      </MDXProvider>
      <GlobalStyle />
    </>
  );
};

export default Layout;
