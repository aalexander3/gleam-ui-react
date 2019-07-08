import React from 'react'
import PropTypes from 'prop-types'
import { colorList } from '../constants/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Alert = ({ message, color, onClose, timeout }) => {

  if (timeout) setTimeout(onClose, timeout*1000) // optionally sets a timer to autoclose alert

  return (
    <div className={`alert ${color}`}>
      <p>{ message }</p>
      <span onClick={onClose}><FontAwesomeIcon icon={faTimes}/></span>
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string,
  color: PropTypes.oneOf(colorList),
  timeout: PropTypes.number,
  onClose: PropTypes.func
}

Alert.defaultProps = {
  message: '',
  color: 'default',
  onClose: () => {}
}

 export default Alert;
