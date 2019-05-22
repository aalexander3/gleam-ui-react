import React, { Component, Fragment } from 'react';
import Media from "react-media";
import NavGroup from './NavGroup'

class Navbar extends Component {
  state = {
    open: false
  }

  getHamburger = () => {
    return (
      <div className='nav-item' onClick={this.toggleCollapsed} >
        HAMBURGER
      </div>
    )
  }

  toggleCollapsed = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  render(){
    const { children, direction, color } = this.props
    const { open } = this.state
    const classes = open ? `navbar navbar-${direction} open ${color}` : `navbar navbar-${direction} ${color}`

    return (
      <Fragment>
        <Media query="(max-width: 650px)" >
          <Fragment>
            <nav className={classes} >
              <NavGroup justify='right' >{this.getHamburger()}</NavGroup>
              {open &&
                <div className='extended-nav' >
                  {children}
                </div>
              }
            </nav>
          </Fragment>
        </Media>
        <Media query="(min-width: 651px)" >
          <nav className={classes} >
            {children}
          </nav>
        </Media>
      </Fragment>
    )
  }
}

// props are: direction: enum - horizontal / vertical
// children: any nodes that are rendered inside the nav
// color: enum - default, primary, secondary
// justify: right / left

export default Navbar
