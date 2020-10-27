import { PictureSourceSize, Ratio, SectionLink } from 'models';

export const sectionLinks: SectionLink[] = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/biography',
    title: 'Biography',
  },
  {
    url: '/prints',
    title: 'Prints',
  },
  {
    url: '/cards',
    title: 'Cards',
  },
  {
    url: '/venues',
    title: 'Venues',
  },
];

export const sourceMediaQueries: PictureSourceSize[] = [
  {
    minWidth: 320,
    ratio: Ratio.NARROW,
    sizes: [400, 800, 1200],
  },
  {
    minWidth: 480,
    ratio: Ratio.NARROW,
    sizes: [560, 1120, 1680],
  },
  {
    minWidth: 640,
    ratio: Ratio.NARROW,
    sizes: [704, 1408, 2112],
  },
  {
    minWidth: 768,
    ratio: Ratio.NARROW,
    sizes: [896, 1792, 2560],
  },
  {
    minWidth: 1024,
    ratio: Ratio.WIDE,
    sizes: [1152, 2304, 2560],
  },
  {
    minWidth: 1280,
    ratio: Ratio.WIDE,
    sizes: [1360, 2560, 2560],
  },
  {
    minWidth: 1440,
    ratio: Ratio.WIDE,
    sizes: [1680, 2560, 2560],
  },
  {
    minWidth: 1920,
    ratio: Ratio.WIDE,
    sizes: [2560],
  },
];

export const resourceBaseUrl = 'https://res.cloudinary.com/fae-leah/image/upload';

