import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Navbar, NavItem, NavGroup, FlexContainer, Button, ImageUpload, Input, Select, Checkbox, Form, Submit, Modal, Alert, Card } from '../../src'

class Demo extends Component {

  state = {
    open: true
  }

  handleClick = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

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
        {this.state.open && <Alert message="hey don't do that!!!!" variant="primary" onClose={this.handleClick} timeout={4}/> }

        <ImageUpload getImage={(img) => console.log(img)} blob />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
