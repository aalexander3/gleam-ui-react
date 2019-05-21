import React from 'react'

const Header = ({ text, color='default', className='', skew, highlight, children, ...props }) => {
  const classes = `${skew ? 'header-skewed ' : ''}${highlight ? 'header-highlight-' + color : 'header-' + color} ${className}`

  return (
    <div>
      <h1 className={classes} {...props} >{text} {children}</h1>
    </div>
  )
}

export default Header
