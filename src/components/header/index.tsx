import React from 'react';
import Link from 'next/link';
import { Button, Container, Title } from './header.css';

export interface Props {
  className?: string;
  navRevealed: boolean;
  onMenuButtonClick: (e: React.MouseEvent | React.TouchEvent) => void;
  onTitleClick: (e: React.MouseEvent | React.TouchEvent) => void;
}

const Header = ({ className, navRevealed, onMenuButtonClick, onTitleClick }: Props): JSX.Element => (
  <Container className={className}>
    <Link href="/">
      <Title data-testid="title" onClick={onTitleClick}>
        Fae Leah
      </Title>
    </Link>
    <Button isOpen={navRevealed} onClick={onMenuButtonClick} />
  </Container>
);

export default Header;
