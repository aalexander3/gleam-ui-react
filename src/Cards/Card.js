import React from 'react'
import PropTypes from 'prop-types'
import { colorList } from '../constants/Colors'

const Card = ({ children, color }) => {
  const classes = `card ${color}`
  return (
    <div className={classes} >
      {children}
    </div>
  )
}

Card.propTypes = {
  color: PropTypes.oneOf([...colorList, '']),
  children: PropTypes.arrayOf(PropTypes.node)
}

Card.defaultProps = {
  color: '',
  children: []
}

 export default Card
