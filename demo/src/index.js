import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Button, Header, SubHeader } from '../../src'

class Demo extends Component {
  render() {
    return (
      <div className='demo'>
        <Header text='Buttons' />
        <SubHeader text='Buttons are great for letting someone know what actions they can do on a page' />

        <Header text='Normal Buttons' color='primary' />
        <div>
          <Button handleClick={()=>console.log('works')} label='DEFAULT' />
          <Button handleClick={()=>console.log('works')} label='DISABLED' disabled={true} />
          <Button handleClick={()=>console.log('blue button')} label='PRIMARY' color="primary" />
          <Button handleClick={()=>console.log('blue button')} label='W/ CHILD' color="primary" className='test'> hello </Button>
          <Button handleClick={()=>console.log('secondary button')} label='SECONDARY' color="secondary" />
        </div>

        <Header text='Button Sizes' color='secondary'/>
        <SubHeader text='Buttons come in three sizes: small, medium, or large' />
        <div>
          <Button handleClick={()=>console.log('small button')} label='SMALL' color="primary" size='small' />
          <Button handleClick={()=>console.log('medium button')} label='MEDIUM' color="primary" size='medium' />
          <Button handleClick={()=>console.log('large button')} label='LARGE' color="primary" size='large' />
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
