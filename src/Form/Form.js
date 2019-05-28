import React from 'react';
import PropTypes from 'prop-types'

const Form = ({ children, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}

Form.proptypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onSubmit: PropTypes.func,
}

Form.defaultProps = {
  children: [],
  onSubmit: () => {},
}

export default Form
