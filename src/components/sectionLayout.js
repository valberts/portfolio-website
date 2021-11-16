import * as React from 'react';
import {
  container,
  heading,
} from '../styles/sectionLayout.module.css';

const SectionLayout = ({ children, sectionName, anchor }) => {

  return (  
    <div className={container}>
      <h1 className={heading} id={anchor}>{sectionName}</h1>
      {children}
    </div>
  )
}

export default SectionLayout;