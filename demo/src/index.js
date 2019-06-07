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
        {this.state.open && <Alert message="hey don't do that!!!!" variant="secondary" onClose={this.handleClick} timeout={1}/> }

        <FlexContainer wrap='wrap'>
          <Card color='primary'>
            <h1>Hello</h1>
            <p>this works?</p>
          </Card>
          <Card color='default'>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <p>this works?</p>
          </Card>
          <Card>
            <h1>Hello</h1>
            <p>this works?</p>
          </Card>
          <Card>
            <h1>Hello what happens if this line is long??</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <p>this works?</p>
          </Card>
          <Card>
            <h1>Hello</h1>
            <p>this works?</p>
          </Card>
          <Card>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <p>this works?</p>
          </Card>
        </FlexContainer>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
