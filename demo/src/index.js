import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Button, Header, SubHeader, TextButton, Divider, Avatar } from '../../src'

class Demo extends Component {
  render() {
    return (
      <div className='demo'>
        

        <Divider />
        <Header text='Images and Avatars' />
        <SubHeader text='Avatars are great as little images connected to person' />
        <div>
          <Avatar src='https://arrenalexander.com/images/arren-cartoon.jpg' size='medium' shape='circle' />
          <Avatar src='https://arrenalexander.com/images/arren-cartoon.jpg' size='medium' shape='rounded' />
          <Avatar src='https://arrenalexander.com/images/arren-cartoon.jpg' size='medium' shape='square' />
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
