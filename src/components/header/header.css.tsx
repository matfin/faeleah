import styled from 'styled-components';
import { dimensions, fontSizes, fontWeights } from 'styles';
import MenuButton from 'components/menubutton';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  backdrop-filter: blur(4px);
`;

export const Title = styled.h1`
  font-size: ${fontSizes.largest}rem;
  font-weight: ${fontWeights.light};
  line-height: ${dimensions.navigationHeight}rem;
  margin-left: 1rem;
`;

export const Button = styled(MenuButton)`
  width: 5rem;
  height: 5rem;
`;
