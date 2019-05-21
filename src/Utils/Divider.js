import React from 'react'

const Divider = ({ light=null, length=100 }) => {
  const classes = `divider${light && '-light'}`

  return <hr className={classes} style={{ width: `${length}%`, marginLeft: 0 }} />
}

export default Divider
