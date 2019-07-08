import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import {
  Carousel,
  Navbar,
  NavItem,
  NavGroup,
  FullscreenNav,
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
    this.setState(prevState => ({ open: false }))
  }

  render() {
    return (
      <div className='demo'>
        <FullscreenNav color="primary">
          <NavItem variant="fullscreen"><a href='#'>Home</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>About</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>Test</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>Home</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>About</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>Test</a></NavItem>
        </FullscreenNav>
        <FlexContainer>
          <Card>
            <Header text='hello world'/>
            <p>Checking how this all looks</p>
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
