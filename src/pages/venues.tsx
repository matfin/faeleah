import React from 'react';
import MDXDocument, { metadata } from 'assets/pages/venues.mdx';
import Layout from 'components/layout';

const Venues = (): JSX.Element => {
  return (
    <Layout pageMetaData={metadata}>
      <MDXDocument />
    </Layout>
  );
};

export default Venues;
