import React from 'react';
import PropTypes from 'prop-types'
import { colorList, sizeList } from '../constants/Colors'

const Submit = ({ children, color, size, className }) => {

  return (
    <div className='input-base'>
      <button type='submit' className={`btn btn-${size} btn-${color} ${className}`}>
        {children}
      </button>
    </div>
  )
}

Submit.proptypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  // onSubmit: PropTypes.func,
  color: PropTypes.oneOf(colorList),
  size: PropTypes.oneOf(sizeList),
  className: PropTypes.string,
}

Submit.defaultProps = {
  children: [],
  // onSubmit: () => {},
  color: 'default',
  size: 'medium',
  className: '',
}

export default Submit
