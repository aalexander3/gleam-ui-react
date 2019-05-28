import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Navbar, NavItem, NavGroup, FlexContainer, Button, ImageUpload, Input, Select, Checkbox, Form, Submit } from '../../src'

class Demo extends Component {

  state = {
    password: '',
    select: '',
    name: '',
    admin: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  handleCheck = (e) => {
    e.persist()
    this.setState(prevState => ({
      [e.target.name]: !prevState[e.target.name]
    }), () => console.log(this.state))
  }

  handleSubmit = () => {
    console.log('submit!')
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

        <Form onSubmit={this.handleSubmit}>
          <ImageUpload label='Upload an avatar!' compression={.5} getImage={imageUrl => console.log(imageUrl)}/>
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
          <Checkbox name='admin' label='Admin' onChange={this.handleCheck} checked={this.state.admin} />
          <Submit >CLICK</Submit>
        </Form>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
