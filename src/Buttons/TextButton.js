import React from 'react'
import PropTypes from 'prop-types'
import { colorList, sizeList } from '../constants/Colors'


const TextButton = ({ handleClick, label, size, color, className, children, variant, ...props }) => {
  return (
    <button onClick={handleClick} className={`text-btn btn-${size} text-btn-${color} ${className}`} {...props} >{label} {children}</button>
  )
}

TextButton.proptypes = {
  handleClick: PropTypes.func,
  color: PropTypes.oneOf(colorList),
  label: PropTypes.string,
  size: PropTypes.oneOf(sizeList),
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node)
}

TextButton.defaultProps = {
  handleClick: () => {},
  color: 'default',
  label: '',
  size: 'medium',
  className: '',
  children: []
}

export default TextButton
