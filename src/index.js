import React, {Component} from 'react'
import Button from './Button'

export default class extends Component {
  render() {
    return (
      <div>
        <Button handleClick={() => console.log('hello')} label="Log it"/>
      </div>
    )
  }
}
