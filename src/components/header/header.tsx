import React from 'react';
import { Container, Heading } from './header.css';

export interface Props {
  className?: string;
}

const Header = ({ className }: Props): JSX.Element => (
  <Container className={className}>
    <Heading>Fae Leah Art</Heading>
  </Container>
);

export default Header;
