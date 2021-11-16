import * as React from 'react';
import {
  container,
} from '../styles/sectionLayout.module.css';

const SectionLayout = ({ children }) => {

  return (  
    <div className={container}>
      {children}
    </div>
  )
}

export default SectionLayout;