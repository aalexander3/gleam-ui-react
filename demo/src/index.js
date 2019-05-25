import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Navbar, NavItem, NavGroup, FlexContainer, Button } from '../../src'

class Demo extends Component {
  render() {
    const hiddenContent1 = [
      <NavGroup justify='right' >
        <NavItem variant="link"><a href='#'>HIDDEN HOME</a></NavItem>
        <NavItem variant="link"><a href='#'>HIDDEN TEST</a></NavItem>
        <NavItem variant="link"><a href='#'>HIDDEN NEXT</a></NavItem>
      </NavGroup>
    ]
    const hiddenContent2 = [
      <NavGroup justify='left' >
        <NavItem variant="brand"><a href='#'>Home</a></NavItem>
      </NavGroup>,
      <NavGroup justify='right' >
        <NavItem variant="link"><a href='#'>HIDDEN HOME</a></NavItem>
        <NavItem variant="link"><a href='#'>HIDDEN TEST</a></NavItem>
        <NavItem variant="link"><a href='#'>HIDDEN NEXT</a></NavItem>
      </NavGroup>
    ]

    return (
      <div className='demo'>
        <Navbar>
          <NavGroup justify='left'>
            <NavItem variant="brand"><a href='#'>Home</a></NavItem>
          </NavGroup>
          <NavGroup justify='right'>
            <NavItem variant="link"><a href='#'>Home</a></NavItem>
            <NavItem variant="link"><a href='#'>Test</a></NavItem>
          </NavGroup>
        </Navbar>
        <Navbar direction='vertical' color='default' hiddenContent={hiddenContent2} collapsable>
          <NavGroup justify='left'>
            <NavItem variant="brand"><a href='#'>Home</a></NavItem>
          </NavGroup>
          <NavGroup justify='right' >
            <NavItem variant="link"><a href='#'>Home</a></NavItem>
            <NavItem variant="link"><a href='#'>Test</a></NavItem>
          </NavGroup>
        </Navbar>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
