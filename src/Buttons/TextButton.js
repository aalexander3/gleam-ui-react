import React from 'react'

const TextButton = ({ handleClick, label, size='medium', color='default', className='', children, variant, ...props }) => {
  // color, size, label, handleClick, className, children, props, variant
  return (
    <button onClick={handleClick} className={`text-btn btn-${size} text-btn-${color} ${className}`} {...props} >{label} {children}</button>
  )
}

export default TextButton
