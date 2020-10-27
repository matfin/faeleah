import React from 'react';
import MDXDocument, { metadata } from 'assets/pages/cards.mdx';
import Layout from 'components/layout';

const Cards = (): JSX.Element => {
  return (
    <Layout pageMetaData={metadata}>
      <MDXDocument />
    </Layout>
  );
};

export default Cards;
