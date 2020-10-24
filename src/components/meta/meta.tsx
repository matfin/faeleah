import React from 'react';
import Head from 'next/head';

export interface Props {
  title?: string;
}

const Meta = ({ title }: Props): JSX.Element => (
  <Head>
    <title>{title ?? 'Fae Leah art and design'}</title>
  </Head>
);

export default Meta;
