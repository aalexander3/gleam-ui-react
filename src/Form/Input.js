import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    const { name, error } = this.props

    let input = document.getElementById(`input-${name}`)
    let value = this.props.value || (input && input.value) || ''

    return `input-label ${(focused || value) ? 'filled' : ''} ${error ? 'error' : ''}`
  }


  render(){
    const { name, onChange, value, type, disabled, label, error } = this.props
    const { focused } = this.state
    const inputName = `input-${name}`
    const classes = `input ${error ? 'error' : ''}`

    return (
      <div className='input-base'>
        <label htmlFor={inputName} className={this.getLabelClass()}>{label}</label>
        <input
          onFocus={this.focus}
          onBlur={this.blur}
          onChange={onChange}
          className={classes}
          id={inputName}
          name={name}
          type={type}
          value={value}
          disabled={disabled} />
        {error && <small className='error-message'>{error}</small>}
      </div>
    )
  }
}

Input.proptypes = {
  type: PropTypes.oneOf(['number', 'text', 'password']),
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string, //should be a message?
  disabled: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  label: '',
  value: '',
  required: false,
  name: '',
  onChange: () => {},
  error: '', //should be a message?
  disabled: false
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
