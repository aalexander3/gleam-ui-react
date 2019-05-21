import React from 'react'

const Header = ({ text, color='default', className='', children, ...props }) => {

  return (
    <h1 className={`header-${color} ${className}`} {...props} >{text} {children}</h1>
  )
}

export default Header
