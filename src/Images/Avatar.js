import React, { Fragment } from 'react'

const Avatar = ({ src, size='medium', srcSet, children, shape }) => {
  return (
    <Fragment>
      {(src || srcSet) && <img src={src} srcSet={srcSet} alt='avatar' className={`avatar-${shape} avatar-${size}`}/>}
      {children}
    </Fragment>
  )
}

export default Avatar
