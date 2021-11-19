import * as React from 'react';
import {
  container,
  heading,
  intro,
  nameHeading,
  introduction,
  brief,
} from '../styles/landing.module.css';

const Landing = () => {
  return (
    <div className={container}>
      <div id={heading}></div>
      <h4 className={intro}>Hi, my name is...</h4>
      <h1 className={nameHeading}>Vincent Albertsson</h1>
      <h2 className={introduction}>I'm a computer science student currently building up my portfolio.</h2>
      <h4 className={brief}>I'm coming up with ideas and working on projects to figure out what I like and get some more experience.</h4>
    </div>
  )
}

export default Landing;