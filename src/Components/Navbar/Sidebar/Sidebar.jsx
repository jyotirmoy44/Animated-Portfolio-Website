import React, { useState } from 'react'
import "./sidebar.scss"
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { motion } from 'framer-motion'


const Sidebar = () => {
const [open, setOpen] = useState(false);

const variants= {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
  }

}
 
    };
  

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  }
  return (
    <motion.div className="sidebar">
        <motion.div className="bg" animate={variants[open ? "open" : "closed"]}>
            <Links />
        </motion.div>
        <ToggleButton setOpen={handleToggle} />
    </motion.div>
  );

}
export default Sidebar;