import PropTypes from "prop-types"
import React from "react"
import "./link.scss"

const Link = ({ children, to }) => (
  <a className="link" href={to}>
    {children}
  </a>
)

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link
