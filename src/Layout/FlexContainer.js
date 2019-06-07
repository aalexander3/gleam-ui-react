import React from 'react';
import PropTypes from 'prop-types'


const FlexContainer = ({ direction, justifyContent, alignItems, width, height, wrap, children }) => {
  const styles = {
    justifyContent,
    alignItems,
    width,
    height,
    flexWrap: wrap
  }

  const classes = `flex-container ${direction}`

  return (
    <div className={classes} style={styles} >
      {children}
    </div>
  )
}

FlexContainer.proptypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  justifyContent: PropTypes.oneOf(['center', 'flexStart', 'flexEnd']),
  alignItems: PropTypes.oneOf(['center', 'flexStart', 'flexEnd']),
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse', 'initial', 'inherit']),
  height: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node)
}

FlexContainer.defaultProps = {
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  wrap: 'nowrap',
  height: '100%',
  width: '100%',
  children: []
}


export default FlexContainer
