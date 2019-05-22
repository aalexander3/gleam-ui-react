import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    open: false
  }

  render(){
    const { children, direction, color } = this.props
    const classes = `navbar navbar-${direction} ${color}`

    return (
      <nav className={classes} >
        {children}
      </nav>
    )
  }
}

// props are: direction: enum - horizontal / vertical
// children: any nodes that are rendered inside the nav
// color: enum - default, primary, secondary
// justify: right / left

export default Navbar
