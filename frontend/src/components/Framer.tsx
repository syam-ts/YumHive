import React from 'react'
import { motion } from 'framer-motion'


export const Transition = (props: any) => {

     
    return (
        <motion.div
              className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                      }
                    }}
                    >
                       {props.children}
        </motion.div>
    )
}


export const Hover = (props: any) => {

    return (
        <motion.div
                    className="box bg-white border font-bold border-gray-700 mx-5 text-green-500 p-1 h-[34px] w-[119px] rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    
                  >

                { props.children }
                  </motion.div>
    )
}