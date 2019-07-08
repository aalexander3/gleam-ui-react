import React, { Fragment } from 'react';
import Media from "react-media";
import NavGroup from './NavGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const NavCollapse = ({ toggleCollapsed, open }) => {
  const getHamburger = () => {
    return (
      <div className={`nav-item plus-icon ${open ? 'open': ''}`} onClick={toggleCollapsed} >
        <FontAwesomeIcon icon={faPlusCircle} className='collapse-icon' />
      </div>
    )
  }

  return (
    <NavGroup justify='right' >{getHamburger()}</NavGroup>
  )
}

NavCollapse.proptypes = {
  toggleCollapsed: PropTypes.func,
  open: PropTypes.bool
}
NavCollapse.defaultProps = {
  toggleCollapsed: () => {},
  open: false
}

export default NavCollapse
