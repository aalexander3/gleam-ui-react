import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Carousel, Navbar, NavItem, NavGroup, FlexContainer, Button, ImageUpload, Input, Select, Checkbox, Form, Submit, Modal, Alert, Card } from '../../src'

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

        <ImageUpload getImage={(img) => console.log(img)} blob />
        <Button label='hello' />
        <Button label='hello' size='large' color='primary' />
        <Carousel images={images} height={'60vh'} width={'60vw'} dots />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
