import React from 'react'
import PropTypes from 'prop-types'
import { colorList, sizeList } from '../constants/Colors'


const Button = ({ handleClick, label, size, color, className, children, ...props }) => {
  return (
    <button onClick={handleClick} className={`btn btn-${size} btn-${color} ${className}`} {...props} >{label} {children}</button>
  )
}

Button.proptypes = {
  handleClick: PropTypes.func,
  color: PropTypes.oneOf(colorList),
  label: PropTypes.string,
  size: PropTypes.oneOf(sizeList),
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node)
}

Button.defaultProps = {
  handleClick: () => {},
  color: 'default',
  label: '',
  size: 'medium',
  className: '',
  children: []
}

export default Button
