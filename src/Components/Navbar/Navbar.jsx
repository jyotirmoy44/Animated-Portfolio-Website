import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { motion } from 'framer-motion'
import Sidebar from './Sidebar/Sidebar'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <div className='navbar'>
     
    <div className="wrapper">
    <Sidebar />
   
    <motion.span
    initial={{opacity:0, scale:0.5}}
    animate={{opacity:1, scale:1}}
    transition={{duration: 0.5}}
    className='name-text'
    > Jyotirmoy Sharma </motion.span>
    
    <div className="social">
        <a href='#'><img src='/facebook.png'></img></a>
        <a href='#'><img src='/instagram.png'></img></a>
        <a href='#'><img src='/youtube.png'></img></a>
        <a href='#'><img src='/dribbble.png'></img></a>
    </div>

    </div>
    
    </div>
  )
}

export default Navbar