import React, { Component, Fragment } from 'react';
import Media from "react-media";
import NavGroup from './NavGroup'
import NavCollapse from './NavCollapse'

class Navbar extends Component {

  state = {
    open: false
  }

  toggleCollapsed = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  getVerticalNav = () => {
    const { children, direction, color, hiddenContent, collapsable } = this.props
    const { open } = this.state
    const classes = `navbar-${direction} ${color} ${open ? 'open' : ''}`

    return (
      <nav className={classes} >
        {collapsable && <NavCollapse toggleCollapsed={this.toggleCollapsed} open={open} {...this.props} />}
        {(open && hiddenContent)? hiddenContent : children}
      </nav>
    )
  }

  getHorizontalNav = () => {
    const { children, direction, color, hiddenContent, collapsable } = this.props
    const { open } = this.state
    const classes = `navbar-${direction} ${color}`

    return (
      <Fragment>
        <nav className={classes} >
          {children}
          {collapsable && <NavCollapse toggleCollapsed={this.toggleCollapsed} open={open} {...this.props} /> }
        </nav>
        {open &&
          <div className={`extended-nav ${color}`} >
            {(open && hiddenContent) ? hiddenContent : children.slice(1)}
          </div>
        }
      </Fragment>
    )
  }

  render(){
    const { direction } = this.props

    if (direction === 'vertical') {
      return this.getVerticalNav()
    } else {
      return this.getHorizontalNav()
    }
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
