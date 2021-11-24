import * as React from 'react';
import { useEffect } from 'react';
import { useColorMode } from 'theme-ui'
import Layout from '../components/layout';
import Landing from '../components/landing';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    console.log(colorMode)  
  }, [colorMode]);

  return (
    <Layout>
      <Landing colorMode={colorMode} callback={setColorMode}/>
      <About/>
      <Projects/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage;