import React, { Fragment, Component } from 'react';
import Media from "react-media";
import NavGroup from './NavGroup'
import NavCollapse from './NavCollapse'
import PropTypes from 'prop-types'
import { colorList } from '../constants/Colors'

class Navbar extends Component {

  state = {
    open: false
  }

  toggleCollapsed = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  closeNav = () => {
    this.setState({ open: false })
  }

  getVerticalNav = () => {
    const { children, direction, color, hiddenContent, collapsable } = this.props
    const { open } = this.state
    const classes = `navbar-${direction} ${color} ${open ? 'open' : ''}`

    return (
      <nav className={classes} onMouseLeave={this.closeNav}>
        {collapsable && <NavCollapse toggleCollapsed={this.toggleCollapsed} open={open} />}
        {(open && hiddenContent)? hiddenContent : children}
      </nav>
    )
  }

  getHorizontalNav = () => {
    const { children, direction, color, hiddenContent, collapsable } = this.props
    const { open } = this.state
    const classes = `navbar-${direction} ${color}`

    return (
      <div onMouseLeave={this.closeNav}>
        <nav className={classes} >
          {children}
          {collapsable && <NavCollapse toggleCollapsed={this.toggleCollapsed} open={open} /> }
        </nav>
        {open &&
          <div className={`extended-nav ${color}`} >
            {(open && hiddenContent) ? hiddenContent : children.slice(1)}
          </div>
        }
      </div>
    )
  }

  render(){
    if (this.props.direction === 'vertical') {
      return this.getVerticalNav()
    } else {
      return this.getHorizontalNav()
    }
  }
}

Navbar.proptypes = {
  direction: PropTypes.string,
  children:  PropTypes.arrayOf(PropTypes.node),
  color: PropTypes.oneOf(colorList),
  hiddenContent: PropTypes.arrayOf(PropTypes.node),
  collapsable: PropTypes.bool
}

Navbar.defaultProps = {
  direction: 'horizontal',
  children:  [],
  color: 'default',
  hiddenContent: [],
  collapsable: false
}

export default Navbar
