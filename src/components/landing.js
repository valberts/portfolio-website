import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
  container,
  intro,
  nameHeading,
  introduction,
  brief,
  left,
  middle,
  right,
  icon,
} from '../styles/landing.module.css';

const Highlight = styled.span`
  color: var(--primary);
`

const Landing = () => {
  return (
    <div className={container}>
      <div className={left}>
        <a href="mailto:albertsson.vincent@gmail.com" className={icon}>
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
        <a href="https://www.linkedin.com/in/vincentalbertsson/" target="_blank" rel="noreferrer"className={icon}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/valberts" target="_blank" rel="noreferrer" className={icon}>
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div> 
      <div className={middle}>
        <div id="home"></div>
        <h4 className={intro}>Hi, my name is...</h4>
        <h1 className={nameHeading}>Vincent Albertsson</h1>
        <h2 className={introduction}>I'm a <Highlight>Computer Science Student</Highlight> currently building up my portfolio.</h2>
        <h3 className={brief}>I'm coming up with ideas and working on projects to figure out what I enjoy doing and to  gain some more experience.</h3>
      </div>
      <div className={right}>
      </div>
    </div>
  )
}

export default Landing;