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
  siteTitleActive,
  siteHeader,
  siteHeaderActive,
  siteFooter,
  pageContainer,
  divider,
} from '../styles/layout.module.css';

const Layout = ({ children }) => {
  const [theme, changeTheme] = useState(false)
  const [navbar, setNavBar] = useState(false)
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

      const changeNav = () => {
        if (window.scrollY !== 0) {
          setNavBar(true)
        } else {
          setNavBar(false)
        }
      }

      window.addEventListener('scroll', changeNav);
      return () => window.removeEventListener('scroll', changeNav);
    }, [navbar, theme]);

    return (
      <div className={container}>
        <title>{data.site.siteMetadata.title}</title>
 
        <header className={navbar ? siteHeaderActive : siteHeader}>
          <Link to="/">
            {/* <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1> */}
            <h1 className={navbar ? siteTitleActive : siteTitle}>valberts.dev</h1>
          </Link>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <AnchorLink to="/#about" className={navLinkText}>
                  ABOUT
                </AnchorLink>
              </li>
              <li className={navLinkItem}>
                <AnchorLink to="/#projects" className={navLinkText}>
                  PROJECTS
                </AnchorLink>
              </li>
              <li className={divider}>
                <AnchorLink to="/#contact" className={navLinkText}>
                  CONTACT
                </AnchorLink>
              </li>
              <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                  BLOG
                </Link>
              </li>
              {/* <li className={navLinkItem}>
                <button onClick={() => changeTheme(theme ? false : true)}>
                  ThemeButton
                </button>
              </li> */}
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