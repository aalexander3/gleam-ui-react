import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'

const Checkbox = ({ label, name, checked, onChange, error, disabled }) => {
  const inputName = `input-${name}`

  return (
    <div className='input-base checkbox'>
      <label htmlFor={inputName} className='input-base checkbox'>
        <div className='checkbox-holder'>
          {checked ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faSquare} /> }
          <input
            disabled={disabled}
            id={inputName}
            type='checkbox'
            name={name}
            checked={checked}
            onChange={onChange} />
        </div>
        {label}
      </label>
      {error && <small className='error-message'>{error}</small>}
    </div>
  )
}

Checkbox.proptypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  label: '',
  checked: false,
  name: '',
  onChange: () => {},
  error: '',
  disabled: false
}

export default Checkbox
