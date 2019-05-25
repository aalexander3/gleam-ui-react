import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const NavGroup = ({ children, justify }) => {

  return (
    <div className={`nav-group nav-group-${justify}`}>
      {children}
    </div>
  )
}

NavGroup.proptypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  justify: PropTypes.oneOf(['right', 'left'])
}

NavGroup.defaultProps = {
  children: [],
  justify: 'right'
}

export default NavGroup
