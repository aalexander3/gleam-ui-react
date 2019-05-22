import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Navbar, NavItem, NavGroup, FlexContainer, Button } from '../../src'

class Demo extends Component {
  render() {
    return (
      <div className='demo'>
        <Navbar direction='horizontal' color='default'>
          <NavGroup justify='left'>
            <NavItem variant="brand"><a href='#'>Home</a></NavItem>
            <NavItem variant="link"><a href='#'>Test</a></NavItem>
            <NavItem variant="brand"><a href='#'>Home</a></NavItem>
            <NavItem variant="link"><a href='#'>Test</a></NavItem>
          </NavGroup>
          <NavGroup justify='right'>
            <NavItem variant="brand"><a href='#'>Home</a></NavItem>
            <NavItem variant="link"><a href='#'>Test</a></NavItem>
            <NavItem variant="brand"><a href='#'>Home</a></NavItem>
            <NavItem variant="link"><a href='#'>Test</a></NavItem>
          </NavGroup>
        </Navbar>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
