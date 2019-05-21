import React, { Component } from 'react'
import { render } from 'react-dom'

import './styles.css'
import { Button, Header, SubHeader, TextButton, Divider, Avatar } from '../../src'

class Demo extends Component {
  render() {
    return (
      <div className='demo'>
        <Header text='Buttons' />
        <SubHeader text='Buttons are great for letting someone know what actions they can do on a page' />
        <Divider />

        <Header text='Normal Buttons' color='primary' />
        <Divider light length={80} />
        <div>
          <Button handleClick={()=>console.log('works')} label='DEFAULT' />
          <Button handleClick={()=>console.log('works')} label='DISABLED' disabled={true} />
          <Button handleClick={()=>console.log('blue button')} label='PRIMARY' color="primary" />
          <Button handleClick={()=>console.log('blue button')} label='W/ CHILD' color="primary" className='test'> hello </Button>
          <Button handleClick={()=>console.log('secondary button')} label='SECONDARY' color="secondary" />
        </div>


        <Header text='Text Buttons' color='primary' skew={true} highlight={true} />
        <SubHeader text='Buttons have a few variations. Check out Text Buttons for a more subtle feel' color='primary' skew={true} highlight={true} />
        <div>
          <TextButton handleClick={()=>console.log('default button')} label='DEFAULT' color="default" size='medium' />
          <TextButton handleClick={()=>console.log('primary button')} label='PRIMARY' color="primary" size='medium' />
          <TextButton handleClick={()=>console.log('secondary button')} label='SECONDARY' color="secondary" size='medium' />
          <TextButton handleClick={()=>console.log('disabled button')} label='DISABLED' color="default" size='medium' disabled={true}/>
        </div>

        <Header text='Button Sizes' color='secondary'/>
        <SubHeader text='Buttons come in three sizes: small, medium, or large' />
        <div>
          <Button handleClick={()=>console.log('small button')} label='SMALL' color="primary" size='small' />
          <Button handleClick={()=>console.log('medium button')} label='MEDIUM' color="primary" size='medium' />
          <Button handleClick={()=>console.log('large button')} label='LARGE' color="primary" size='large' />
          <TextButton handleClick={()=>console.log('small button')} label='SMALL' color="secondary" size='small' />
          <TextButton handleClick={()=>console.log('medium button')} label='MEDIUM' color="secondary" size='medium' />
          <TextButton handleClick={()=>console.log('large button')} label='LARGE' color="secondary" size='large' />
        </div>

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
