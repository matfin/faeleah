import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SectionLink } from 'models';
import { sectionLinks } from 'config';
import { LinkTextSt, Nav, NavItemList } from './navigation.css';

export interface Props {
  className?: string;
  onNavigate: (e: React.MouseEvent | React.TouchEvent) => void;
}

const routeMatches = (currentRoute: string, asPath: string): boolean => asPath === currentRoute;

const SectionLinks = (onClick: (e: React.MouseEvent | React.TouchEvent) => void, asPath: string): JSX.Element[] =>
  sectionLinks.map(
    ({ url, title }: SectionLink): JSX.Element => (
      <li key={title}>
        <Link href={url} passHref>
          <LinkTextSt data-testid={`url-${url}`} isActive={routeMatches(url, asPath)} onClick={onClick}>
            {title}
          </LinkTextSt>
        </Link>
      </li>
    ),
  );

const Navigation = ({ className, onNavigate }: Props): JSX.Element => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Nav className={className}>
      <NavItemList>{SectionLinks(onNavigate, asPath)}</NavItemList>
    </Nav>
  );
};

export default Navigation;
