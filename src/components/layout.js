import * as React from 'react';
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
} from './layout.module.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)

    return (
      <div className={container}>
        <title>{data.site.siteMetadata.title}</title>

        <header classname={siteHeader}>
          <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <AnchorLink to="/" className={navLinkText}>
                  Home
                </AnchorLink>
              </li>
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
            </ul>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer className={siteFooter}>
          © Copyright 2021 − Vincent Albertsson
        </footer>
      </div>
    )
}

export default Layout;