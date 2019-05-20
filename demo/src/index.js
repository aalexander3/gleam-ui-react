import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Button } from '../../src'

class Demo extends Component {
  render() {
    return (
      <div className='demo'>
        <h1>gleam-ui-react demo</h1>
        <Button handleClick={()=>console.log('works')} label='DEFAULT' />
        <Button handleClick={()=>console.log('blue button')} label='PRIMARY' color="primary" />
        <Button handleClick={()=>console.log('secondary button')} label='SECONDARY' color="secondary" />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
