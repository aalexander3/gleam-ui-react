import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ open, children, onClose }) => {

  if (open) {
    return (
      <div className={`modal open`} onClick={onClose}>
        <div className='modal-content'>
          {children}
        </div>
      </div>
    )
  } else {
    return (
      null
    )
  }
}

Modal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node),
  onClose: PropTypes.func
}

Modal.defaultProps = {
  visible: false,
  children: [],
  onClose: () => {}
}

export default Modal
