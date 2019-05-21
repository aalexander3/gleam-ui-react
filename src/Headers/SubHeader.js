import React from 'react'

const SubHeader = ({ text, size='medium', color='default', className='', children, ...props }) => {
  return (
    <h4 className={`header-${size} header-${color} ${className}`} {...props} >{text} {children}</h4>
  )
}

export default SubHeader
