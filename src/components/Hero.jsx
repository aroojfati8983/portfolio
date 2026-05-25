

import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center relative overflow-hidden bg-[#070b14] pt-28 pb-20'>
      {/* background */}
      <div className='absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full'></div>
      <div className='absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/20 blur-[120px] rounded-full'></div>
      <div className='container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16 relative z-10'>

        {/* left */}
        <div className='md:w-1/2 text-center md:text-left'>
  

          <h1 className='text-5xl md:text-7xl font-bold leading-tight text-white'>
            Hi, I’m{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
              Arooj Fatima
            </span>
          </h1>

          <h2 className='text-2xl md:text-4xl font-semibold text-gray-300 mt-6'>
            Full Stack Developer
          </h2>

          <p className='text-gray-400 mt-6 text-lg leading-relaxed'>
            I create modern, responsive and aesthetic websites with React, Tailwind CSS and Node.js.
          </p>

          <div className='flex flex-wrap gap-4 mt-10 justify-center md:justify-start'>
            <a
              href='#projects'
              className='px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-xl hover:scale-105 transition duration-300'
            >
              View Projects
            </a>

            <a
              href='#contact'
              className='px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300'
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* right */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative'>

            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-40'></div>

            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              src={assets.profileImg}
              alt='profile'
              className='relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/10 shadow-2xl'
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero

