import React from 'react';
import MDXDocument, { metadata } from 'assets/pages/prints.mdx';
import Layout from 'components/layout';

const Prints = (): JSX.Element => {
  return (
    <Layout pageMetaData={metadata}>
      <MDXDocument />
    </Layout>
  );
};

export default Prints;
