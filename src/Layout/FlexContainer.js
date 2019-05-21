import React from 'react';


const FlexContainer = ({ direction, justifyContent, alignItems, width, height, wrap=false, children }) => {
  const styles = {
    justifyContent,
    alignItems,
    width,
    height
  }

  const classes = `flex-container ${direction}`

  return (
    <div className={classes} style={styles} >
      {children}
    </div>
  )
}

// props are:
// direction: row, column
// justify-content: center, baseline, etc
// align-items: center, baseline, etc
// wrap: bool
// height, width ?
// children: nodes

export default FlexContainer
