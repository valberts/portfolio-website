import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  siteHeader,
  siteFooter,
  pageContainer,
} from './layout.module.css';

const Layout = ({ children }) => {
  const [theme, changeTheme]= useState(false)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)

    useEffect(() => {
      console.log(theme)
    });

    return (
      <div className={container}>
        <title>{data.site.siteMetadata.title}</title>
 
        <header className={siteHeader}>
          <AnchorLink to="/#home" className={navLinkText}>
            <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
          </AnchorLink>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <AnchorLink to="/#about" className={navLinkText}>
                  About
                </AnchorLink>
              </li>
              <li className={navLinkItem}>
                <AnchorLink to="/#projects" className={navLinkText}>
                  Projects
                </AnchorLink>
              </li>
              <li className={navLinkItem}>
                <AnchorLink to="/#contact" className={navLinkText}>
                  Contact
                </AnchorLink>
              </li>
              <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                  Blog
                </Link>
              </li>
              <li className={navLinkItem}>
                <button onClick={() => changeTheme(theme ? false : true)}>
                  ThemeButton
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <div className={pageContainer}>
           {children}
          </div>
        </main>

        <footer className={siteFooter}>
          © Copyright 2021 Vincent Albertsson
        </footer>
      </div>
    )
}

export default Layout;