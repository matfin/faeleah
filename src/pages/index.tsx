import React from 'react';
import MDXDocument, { metadata } from 'assets/pages/index.mdx';
import Layout from 'components/layout';

const Index = (): JSX.Element => {
  return (
    <Layout pageMetaData={metadata}>
      <MDXDocument />
    </Layout>
  );
};

export default Index;
