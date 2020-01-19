import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const HeaderTag = location.pathname === rootPath ? 'h1' : 'h3'
  return (
    <div>
      <header>
        <HeaderTag>
          <Link to='/'>
            {title}
          </Link>
        </HeaderTag>
      </header>
      <main>{children}</main>
      <footer>
        ©
        {' '}
        {new Date().getFullYear()}
        , Built with
        {' '}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
