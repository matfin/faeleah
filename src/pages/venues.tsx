import React from 'react';
import { Picture as PictureProps } from 'models';
import MDXDocument, { metadata } from 'assets/pages/venues.mdx';
import Layout from 'components/layout';
import Picture from 'components/picture';

const Venues = (): JSX.Element => {
  const picture: PictureProps = {
    public_id: 'events',
    version: '1603831817',
  };

  return (
    <Layout pageMetaData={metadata}>
      <MDXDocument />
      <Picture picture={picture} />
    </Layout>
  );
};

export default Venues;
