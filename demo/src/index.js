import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Navbar, NavItem, NavGroup, FlexContainer, Button, ImageUpload, Input, Select } from '../../src'

class Demo extends Component {

  state = {
    password: '',
    select: '',
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
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

        <ImageUpload label='Profile' compression={.5} getImage={imageUrl => console.log(imageUrl)}/>
        <Input
          label='Enter Name'
          name='name'
          onChange={this.handleChange}
          value={this.state.name} />
        <Select
          label='Select Option'
          name='select'
          onChange={this.handleChange}
          options={['hello', 'work', 'please']}
          value={this.state.select} />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
