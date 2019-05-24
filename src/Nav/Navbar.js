import React, { Fragment, useState } from 'react';
import Media from "react-media";
import NavGroup from './NavGroup'
import NavCollapse from './NavCollapse'

const Navbar = ({ children, direction, color, hiddenContent, collapsable }) => {

  const [ open, setOpen ] = useState(false)

  const toggleCollapsed = () => {
    setOpen(!open)
    // setState(prevState => ({ open: !prevState.open }))
  }

  const getVerticalNav = () => {
    // const { children, direction, color, hiddenContent, collapsable } = this.props
    // const { open } = this.state
    const classes = `navbar-${direction} ${color} ${open ? 'open' : ''}`

    return (
      <nav className={classes} >
        {collapsable && <NavCollapse toggleCollapsed={toggleCollapsed} open={open} />}
        {(open && hiddenContent)? hiddenContent : children}
      </nav>
    )
  }

  const getHorizontalNav = () => {
    const classes = `navbar-${direction} ${color}`

    return (
      <Fragment>
        <nav className={classes} >
          {children}
          {collapsable && <NavCollapse toggleCollapsed={toggleCollapsed} open={open} /> }
        </nav>
        {open &&
          <div className={`extended-nav ${color}`} >
            {(open && hiddenContent) ? hiddenContent : children.slice(1)}
          </div>
        }
      </Fragment>
    )
  }

  if (direction === 'vertical') {
    return getVerticalNav()
  } else {
    return getHorizontalNav()
  }
}

// props are: direction: enum - horizontal / vertical
// children: any nodes that are rendered inside the nav
// color: enum - default, primary, secondary
// justify: right / left
// hidden content: array of nodes ? to make the nav extendable.
// when open - show the array of hidden nodes
// collapsable - bool

export default Navbar
