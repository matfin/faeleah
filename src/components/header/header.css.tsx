import styled from 'styled-components';
import { colours, fontSizes, fontWeights } from 'styles';

export const Container = styled.header`
  display: flex;
`;

export const Heading = styled.h1`
  font-size: ${fontSizes.largest}em;
  font-weight: ${fontWeights.medium};
  color: ${colours.primary};
`;
