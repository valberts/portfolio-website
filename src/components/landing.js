import * as React from 'react';
import {
  container,
} from './landing.module.css';

const Landing = () => {
  return (
    <div className={container}>
      <h1 id="home">Home</h1>
      <p>This is the home page</p>
    </div>
  )
}

export default Landing;