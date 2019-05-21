import React from 'react'

const SubHeader = ({ text, color='default', className='', children, ...props }) => {
  // add skew and highlight
  return (
    <h4 className={`header-${color} ${className}`} {...props} >{text} {children}</h4>
  )
}

export default SubHeader
