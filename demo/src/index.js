import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Navbar, NavItem, NavGroup, FlexContainer, Button, ImageUpload, Input, Select, Checkbox, Form, Submit, Modal } from '../../src'

class Demo extends Component {

  state = {
    open: false
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
        <Modal open={this.state.open} onClose={this.handleClick}>
          <h1>modal open!!</h1>
          <p>please work</p>
        </Modal>

        <Button handleClick={this.handleClick} label='open modal' />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
