import React from 'react';
import PropTypes from 'prop-types'

const NavItem = ({ children, variant }) => {
  const classes = `nav-item ${variant}`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

NavItem.proptypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  variant: PropTypes.oneOf(['brand', 'link', 'button'])
}

NavItem.defaultProps = {
  children: [],
  variant: 'link'
}

export default NavItem
