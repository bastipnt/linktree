import React from "react"
import PropTypes from "prop-types"
import OWA from "./OWA"

const Layout = ({ children }) => {
  return (
    <div class="layout">
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Basti Paintner</footer>
      <OWA />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
