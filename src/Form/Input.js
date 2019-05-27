import React, { Component } from 'react'

class Input extends Component {

  state = {
    focused: false
  }

  focus = () => {
    this.setState({ focused: true })
  }

  blur = () => {
    this.setState({ focused: false })
  }

  getLabelClass = () => {
    const { focused } = this.state
    const { name } = this.props

    let input = document.getElementById(`input-${name}`)
    let value = this.props.value || (input && input.value) || ''

    return `input-label ${(focused || value) ? 'filled' : ''}`
  }


  render(){
    const { name, onChange, value, type, disabled, label } = this.props
    const { focused } = this.state
    const inputName = `input-${name}`
    const classes = `input`

    return (
      <div className='input-base'>
        <label htmlFor={inputName} onChange={onChange} className={this.getLabelClass()}>{label}</label>
        <input
          onFocus={this.focus}
          onBlur={this.blur}
          className={classes}
          id={inputName}
          type={type}
          value={value}
          disabled={disabled} />
      </div>
    )
  }
}

export default Input

// type - oneOf(number, text, password, )
// label / same as placeholder
// value - ''
// required - bool
// name
// onChange
// error
// disabled
