import styled, { css } from 'styled-components';
import { animationCurve, colours, dimensions, layers, media } from 'styles';
import HeaderComponent from 'components/header';
import NavigationComponent from 'components/navigation';

interface NavProps {
  isRevealed: boolean;
}

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows:
    ${dimensions.navigationHeight}rem minmax(auto, calc(100vh - ${dimensions.navigationHeight * 2}rem))
    ${dimensions.navigationHeight}rem;

  grid-template-areas:
    'header'
    'main';
  overflow-x: hidden;
`;

export const Header = styled(HeaderComponent)`
  z-index: ${layers.top};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${dimensions.navigationHeight}rem;
  background: ${colours.secondaryOpaque};
`;

export const Main = styled.main`
  grid-area: main;
`;

export const Navigation = styled(NavigationComponent)<NavProps>`
  z-index: ${layers.over};
  position: fixed;
  top: ${dimensions.navigationHeight}rem;
  left: 0;
  width: 100vw;
  height: calc(100vh - ${dimensions.navigationHeight}rem);
  background: ${colours.secondaryOpaque};
  backdrop-filter: blur(4px);
  transition: transform 350ms ${animationCurve};
  transform: translate3d(100vw, 0, 0);

  ${({ isRevealed }: NavProps) =>
    isRevealed &&
    `
      transform: translate3d(0, 0, 0);
    `}

  ${media.lg(css`
    width: 15rem;

    ${({ isRevealed }: NavProps) =>
      isRevealed &&
      `
        transform: translate3d(calc(100vw - 15rem), 0, 0);
      `}
  `)}
`;
