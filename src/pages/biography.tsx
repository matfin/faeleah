import React from 'react';
import MDXDocument, { metadata } from 'assets/pages/biography.mdx';
import Layout from 'components/layout';

const Biography = (): JSX.Element => {
  return (
    <Layout pageMetaData={metadata}>
      <MDXDocument />
    </Layout>
  );
};

export default Biography;
