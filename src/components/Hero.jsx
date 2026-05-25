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
          
          {/* Name with animation */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-3xl md:text-5xl font-bold leading-tight text-white'
          >
            Hi, I'm{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
              Arooj Fatima
            </span>
          </motion.h1>

          {/* Full Stack Developer with animation */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-xl md:text-2xl font-semibold text-gray-300 mt-4'
          >
            Full Stack Developer
          </motion.h2>

          {/* Paragraph with animation */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='text-gray-400 mt-4 text-base leading-relaxed'
          >
            I create modern, responsive and aesthetic websites with React, Tailwind CSS and Node.js.
          </motion.p>

          {/* Buttons with animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='flex flex-wrap gap-4 mt-8 justify-center md:justify-start'
          >
            <a
              href='#projects'
              className='px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-xl hover:scale-105 transition duration-300 text-sm'
            >
              View Projects
            </a>

            <a
              href='#contact'
              className='px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 text-sm'>
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* right - Image with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='md:w-1/2 flex justify-center'
        >
          <div className='relative'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-40'></div>
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              src={assets.profileImg}
              alt='profile'
              className='relative w-56 h-56 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl'
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero