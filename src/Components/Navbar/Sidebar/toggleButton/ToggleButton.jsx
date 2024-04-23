import React from 'react'
import "../sidebar.scss";

const ToggleButton = ({setOpen}) => {
  return (
    <button className='toggle-Button' 
    onClick={() => setOpen((prev) => !prev)}>
      
    </button>
  )
}

export default ToggleButton;