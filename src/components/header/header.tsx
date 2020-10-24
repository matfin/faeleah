import React from 'react';
import { Container } from './header.css';

export interface Props {
  className?: string;
}

const Header = ({ className }: Props): JSX.Element => (
  <Container className={className}>
    <h1>Fae Leah Art</h1>
  </Container>
);

export default Header;
