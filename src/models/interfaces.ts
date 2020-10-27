import { Ratio } from './enums';

export interface SectionLink {
  url: string;
  title: string;
}

export interface PageMetaData {
  title: string;
  description: string;
}

export interface Picture {
  public_id: string;
  version: string;
}

export interface PictureSourceSize {
  minWidth: number;
  ratio: Ratio,
  sizes: number[];
}
