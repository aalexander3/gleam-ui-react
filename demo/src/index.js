import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Navbar, FlexContainer } from '../../src'

class Demo extends Component {
  render() {
    return (
      <div className='demo'>
        <Navbar direction='horizontal'> <a href='#'>Home</a></Navbar>
        <FlexContainer direction='row' alignItems='center' justifyContent='space-evenly' width='50%' height='200px' >
          <p>hello</p>
          <p>world</p>
          <p>it's </p>
          <p>me</p>
        </FlexContainer>


      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
