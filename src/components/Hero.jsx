import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-28 pb-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16'> 
        
        {/*left side content*/}
        <div className='md:w-1/2 mb-12 md:mb-0 space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold text-white'>  
            Hi, I&apos;m <span className='text-purple-500'>Arooj Fatima</span>
          </h1>

          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
            Full Stack Developer
          </h2>

          <p className='text-lg text-gray-300 mb-8'>
            I create stunning web experiences with modern technologies and innovative design.
          </p>

          <div className='flex space-x-4 pt-4'>
            <a 
              className='px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300 text-white' 
              href="#projects"
            >
              View Work
            </a>

            <a 
              className='px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition duration-300 text-white' 
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/*right side content*/}
        <div className='md:w-1/2 flex justify-center mt-10 md:mt-0'>
          <div className='relative w-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70'>  
              <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'  
                src={assets.profileImg} 
                alt='profile'
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero