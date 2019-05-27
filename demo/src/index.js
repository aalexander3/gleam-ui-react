import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Navbar, NavItem, NavGroup, FlexContainer, Button, ImageUpload, Input } from '../../src'

class Demo extends Component {
  render() {
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

        <ImageUpload label='Profile' compression={.5} getImage={imageUrl => console.log(imageUrl)}/>
        <Input label='Enter Name' name='name' />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
