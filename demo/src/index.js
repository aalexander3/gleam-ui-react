import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import {
  Carousel,
  Navbar,
  NavItem,
  NavGroup,
  FlexContainer,
  Button,
  ImageUpload,
  Input, Select,
  Checkbox,
  Form,
  Submit,
  Modal,
  Alert,
  Header,
  Card } from '../../src'

class Demo extends Component {

  state = {
    open: true
  }

  handleClick = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  render() {
    const images = [
      'https://images.unsplash.com/photo-1560775664-5010c750aeed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1560836059-3277890e663b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1560854786-8c2a4f642f96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://jdid.art/static/media/blue-glow.21a817cd.mp4'
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
        {this.state.open && <Alert message="hey don't do that!!!!" variant="primary" onClose={this.handleClick} timeout={4}/> }
        <FlexContainer>
          <Card>
            <Header text='hello world'/>
            <p>Checking how this all looks</p>
            <img src={images[0]} style={{height:'20vh'}}></img>
          </Card>
          <Card color='default'>
            <Header text='hello world'/>
            <p>Checking how this all looks</p>
            <Button label="hello"/>
          </Card>
          <Card color='secondary'>
            <Header text='hello world'/>
            <p>Checking how this all looks</p>
          </Card>
        </FlexContainer>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
