import styled from 'styled-components';
import { colours } from 'styles';
import HeaderComponent from 'components/header/header';

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 4rem auto;
  grid-template-areas:
    'header'
    'main';
  background: ${colours.secondary};
`;

export const Header = styled(HeaderComponent)`
  grid-area: header;
`;

export const Main = styled.main`
  grid-area: main;
`;
