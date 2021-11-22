import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Landing from '../components/landing';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    console.log(theme)  
  }, [theme]);

  return (
    <Layout currentTheme={theme}>
      <Landing currentTheme={theme} callback={setTheme}/>
      <About currentTheme={theme}/>
      <Projects currentTheme={theme}/>
      <Contact currentTHeme={theme}/>
    </Layout>
  )
}

export default IndexPage;