import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { sizeList } from '../constants/Colors'


const Avatar = ({ src, size, srcSet, children, shape }) => {
  return (
    <Fragment>
      {(src || srcSet) && <img src={src} srcSet={srcSet} alt='avatar' className={`avatar-${shape} avatar-${size}`}/>}
      {children}
    </Fragment>
  )
}

Avatar.proptypes = {
  src: PropTypes.string,
  srcSet: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(sizeList),
  shape: PropTypes.oneOf(['circle', 'round', 'square']),
  children: PropTypes.arrayOf(PropTypes.node)
}

Avatar.defaultProps = {
  src: '',
  srcSet: [''],
  size: 'medium',
  shape: 'round',
  children: []
}


export default Avatar
