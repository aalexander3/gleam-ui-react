import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { colorList } from '../constants/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import NavCollapse from './NavCollapse'

class FullscreenNav extends Component {

  state = {
    open: false
  }

  toggleNav = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  render(){
    const { open } = this.state;
    const classes = open ? `fullscreen-nav open` : `fullscreen-nav`;

    return (
      <div className={classes}>
        <NavCollapse toggleCollapsed={this.toggleNav} open={open} />
        <nav >
          {open && <div className="fullscreen-nav--container">{this.props.children}</div>}
        </nav>
      </div>
    )
  }
}

FullscreenNav.proptypes = {
  children:  PropTypes.arrayOf(PropTypes.node),
  color: PropTypes.oneOf(colorList),
}

FullscreenNav.defaultProps = {
  children:  [],
  color: 'default',
}

export default FullscreenNav
