import React from 'react'

const Button = ({ handleClick, label, size='medium', color='default', className='', children, variant, ...props }) => {
  // color, size, label, handleClick, className, children, props, variant
  return (
    <button onClick={handleClick} className={`btn btn-${size} btn-${color} ${className}`} {...props} >{label} {children}</button>
  )
}

export default Button
