import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
      <footer>
        <Link to="/">Home</Link> •&nbsp;
        <Link to="/imprint">Impressum</Link> •&nbsp;
        <Link to="/data-protection">Datenschutz</Link> • ©
        {new Date().getFullYear()}, Sebastian Paintner
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
