import React from 'react'
import './styles/Button.css'

const Button = ({ handleClick, label, size='medium', color='default' }) => {
  // color, size, label, handleClick
  return (
    <button onClick={handleClick} className={`btn btn-${size} btn-${color}`} >{label}</button>
  )
}

export default Button
