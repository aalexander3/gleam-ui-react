import React, { Fragment } from 'react';
import Media from "react-media";
import NavGroup from './NavGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const NavCollapse = ({ children, direction, color, toggleCollapsed, open }) => {
  const getHamburger = () => {
    return (
      <div className={`nav-item plus-icon ${open ? 'open': ''}`} onClick={toggleCollapsed} >
        <FontAwesomeIcon icon={faPlusCircle} />
      </div>
    )
  }

  return (
    <NavGroup justify='right' >{getHamburger()}</NavGroup>
  )
}

export default NavCollapse
