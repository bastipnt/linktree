import PropTypes from "prop-types"
import React from "react"
import * as linkStyles from "./link.module.scss"

const Link = ({ children, to }) => (
  <a className={linkStyles.link} href={to}>
    {children}
  </a>
)

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link
