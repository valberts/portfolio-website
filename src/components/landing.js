import * as React from 'react';
import {
  container,
  heading,
} from '../styles/landing.module.css';

const Landing = () => {
  return (
    <div className={container}>
      <h1 id="home" className={heading}></h1>
      <p>This is the home page</p>
    </div>
  )
}

export default Landing;