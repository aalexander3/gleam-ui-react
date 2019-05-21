import React from 'react'

const SubHeader = ({ text, color='default', className='', children, skew, highlight, ...props }) => {
  const classes = `${skew ? 'header-skewed ' : ''}${highlight ? 'header-highlight-' + color : 'header-' + color} ${className}`

  return (
    <div>
      <h4 className={classes} {...props} >{text} {children}</h4>
    </div>
  )
}

export default SubHeader
