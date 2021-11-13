import * as React from 'react';
import Layout from '../components/layout';
import Landing from '../components/landing';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout>
      <Landing/>
      <h1 id="about">About</h1>
      <p>This is the about page</p>
      <h1 id="projects">Projects</h1>
      <p>This is the projects page</p>
      <h1 id="contact">Contact</h1>
      <p>This is the contact page</p>
    </Layout>
  )
}

export default IndexPage;