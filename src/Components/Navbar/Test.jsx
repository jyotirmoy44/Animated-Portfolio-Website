import React from 'react'
import { motion } from 'framer-motion'

const Test = () => {
  return (
    <div className='crashCourse'>
        <motion.div className="box" 
        initial={{opacity:1, scale:1.5}}
        animate={{opacity:1, scale:1.8}} 
        transition={{duration:3}}
        // whileHover={{opacity:1, scale:2}}
        drag
        >
    

        </motion.div>
    </div>
  )
}

export default Test