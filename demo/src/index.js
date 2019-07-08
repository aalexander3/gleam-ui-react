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
  TextButton,
  ImageUpload,
  Input,
  Select,
  Checkbox,
  Form,
  Submit,
  Modal,
  Alert,
  Header,
  SubHeader,
  Card
} from '../../src'

class Demo extends Component {

  state = {
    open: true,
    input: '',
  }

  handleClick = () => {
    this.setState(prevState => ({ open: false }))
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <div className='demo'>
        <FullscreenNav color="default">
          <NavItem variant="fullscreen"><a href='#'>Home</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>About</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>Test</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>Home</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>About</a></NavItem>
          <NavItem variant="fullscreen"><a href='#'>Test</a></NavItem>
        </FullscreenNav>
        <Header color='green' text='hello' highlight />
        <SubHeader color='green' text='hello' skew/>
        <Input label='enter your info' value={this.state.input} onChange={this.handleChange}/>
        <FlexContainer>
          <TextButton label='hello' color='pink'/>
          <Button label='hello' color='yellow'/>
          <Button label='hello' color='green'/>
        </FlexContainer>
        <FlexContainer>
          <Card>
            <Header text='hello world'/>
            <p>Checking how this all looks</p>
          </Card>
          <Card color='pink'>
            <Header text='hello world'/>
            <p>Checking how this all looks</p>
            <Button label="hello"/>
          </Card>
          <Card color='yellow'>
            <Header text='hello world'/>
            <p>Checking how this all looks</p>
          </Card>
        </FlexContainer>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
