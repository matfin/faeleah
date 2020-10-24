import React from 'react';
import { Container } from './layout.css';

export interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props): JSX.Element => <Container>{children}</Container>;

export default Layout;
