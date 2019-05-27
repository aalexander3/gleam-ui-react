import React from 'react'
import PropTypes from 'prop-types'
import { colorList } from '../constants/Colors'

const Header = ({ text, color, className, skew, highlight, children, ...props }) => {
  const classes = `${skew ? 'header-skewed ' : ''}${highlight ? 'header-highlight-' + color : 'header-' + color} ${className}`

  return (
    <div>
      <h1 className={classes} {...props} >{text} {children}</h1>
    </div>
  )
}

Header.proptypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(colorList),
  className: PropTypes.string,
  skew: PropTypes.bool,
  highlight: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node)
}

Header.defaultProps = {
  text: '',
  color: [''],
  className: '',
  skew: false,
  highlight: false,
  children: []
}

export default Header
