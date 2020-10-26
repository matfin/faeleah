import React from 'react';
import { isTouchDevice } from 'utils';
import { Container, Line, LinePlacement } from './menubutton.css';

export interface Props {
  className?: string;
  isOpen: boolean;
  onClick: (e: React.MouseEvent | React.TouchEvent) => void;
}

const MenuButton = ({ className, isOpen, onClick }: Props): JSX.Element => {
  const shouldUseTouch: boolean = isTouchDevice();

  return (
    <Container
      aria-label="Menu"
      className={className}
      onClick={!shouldUseTouch ? onClick : undefined}
      onTouchStart={shouldUseTouch ? onClick : undefined}
    >
      <Line placement={LinePlacement.TOP} isOpen={isOpen} />
      <Line placement={LinePlacement.MIDDLE} isOpen={isOpen} />
      <Line placement={LinePlacement.BOTTOM} isOpen={isOpen} />
    </Container>
  );
};

export default MenuButton;
