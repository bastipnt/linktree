import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Basti Paintner</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
