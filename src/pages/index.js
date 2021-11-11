import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage 
      alt="A green-eyed cat peering out from around the corner"
      src="../images/09fc4d971d2ae450966dd606be4d3587.webp"
      />
    </Layout>
  )
}

export default IndexPage;