import React from 'react'
import PropTypes from 'prop-types'
import { colorList } from '../constants/Colors'


const SubHeader = ({ text, color, className, children, skew, highlight, ...props }) => {
  const classes = `${skew ? 'header-skewed ' : ''}${highlight ? 'header-highlight-' + color : 'header-' + color} ${className}`

  return (
    <div>
      <h4 className={classes} {...props} >{text} {children}</h4>
    </div>
  )
}


SubHeader.proptypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(colorList),
  className: PropTypes.string,
  skew: PropTypes.bool,
  highlight: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node)
}

SubHeader.defaultProps = {
  text: '',
  color: [''],
  className: '',
  skew: false,
  highlight: false,
  children: []
}


export default SubHeader
