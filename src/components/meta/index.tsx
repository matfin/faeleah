import React from 'react';
import Head from 'next/head';
import { PageMetaData } from 'models';

export interface Props {
  pageMetaData: PageMetaData;
}

const Meta = ({ pageMetaData: { description, title } }: Props): JSX.Element => (
  <Head>
    <title>Fae Leah Art and Design - {title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default Meta;
