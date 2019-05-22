import React from 'react';

const NavItem = ({ children, variant }) => {
  const classes = `nav-item ${variant}`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
// props are:
// children: any nodes that are rendered inside the nav
// href: url
// variant: brand, link, button

export default NavItem
