import * as React from 'react';
import Layout from '../components/layout';
import Landing from '../components/landing';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => {
  return (
    <Layout>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage;