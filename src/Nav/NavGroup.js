import React, { Fragment } from 'react';

const NavGroup = ({ children, justify }) => {

  return (
    <div className={`nav-group nav-group-${justify}`}>
      {children}
    </div>
  )
}

// props are :
// children nodes
// justify: enum left / right

export default NavGroup
