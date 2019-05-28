import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

class Select extends Component {

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
    const { name, onChange, value, disabled, label, error, options } = this.props
    const { focused } = this.state
    const inputName = `input-${name}`
    const classes = `input select ${error ? 'error' : ''}`

    return (
      <div className='input-base'>
        <label htmlFor={inputName} className={this.getLabelClass()}>{label}</label>
        <div className='select-holder'>
          <select
            onFocus={this.focus}
            onBlur={this.blur}
            onChange={onChange}
            className={classes}
            id={inputName}
            name={name}
            value={value}
            disabled={disabled}>
            <option disabled label=''></option>
            {options.map(opt => <option value={opt} key={opt}>{opt}</option>)}
          </select>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        {error && <small className='error-message'>{error}</small>}
      </div>
    )
  }
}

Select.proptypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.number,
  required: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}

Select.defaultProps = {
  label: '',
  options: [],
  value: 0,
  required: false,
  name: '',
  onChange: () => {},
  error: '',
  disabled: false,
}

export default Select
