import React from 'react'
import PropTypes from 'prop-types'
import { colorList } from '../constants/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Alert = ({ message, variant, onClose, timeout }) => {

  if (timeout) setTimeOut(onClose, timeout) // optionally sets a timer to autoclose alert

  return (
    <div className={`alert ${variant}`}>
      <p>{ message }</p>
      <span onClick={onClose}><FontAwesomeIcon icon={faTimes}/></span>
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.oneOf(colorList),
  timeout: PropTypes.number
}

Alert.defaultProps = {
  message: '',
  variant: 'default',
}

 export default Alert
