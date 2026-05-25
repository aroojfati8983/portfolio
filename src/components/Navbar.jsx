import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#070b14]/90 via-[#0a0f1a]/90 to-[#070b14]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
      >

        <div className='px-6 py-4'>
          <div className='flex items-center justify-between max-w-7xl mx-auto'>

            {/* LOGO */}
            <a
              href='#home'
              className='text-2xl md:text-3xl font-bold text-white tracking-wide'
            >
              Arooj
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Fatima
              </span>
            </a>

            {/* DESKTOP MENU */}
            <div className='hidden md:flex items-center gap-8'>

              {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item}`}
                  className='relative text-gray-300 hover:text-white transition duration-300 text-sm uppercase tracking-wider group'
                >
                  {item}

                  <span className='absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
              ))}

              {/* Resume Button */}
              <a
                href='#'
                className='px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20'
              >
                Resume
              </a>
            </div>

            {/* MOBILE ICON */}
            <div className='md:hidden text-white text-2xl cursor-pointer'>
              {
                showMenu
                  ? <FaTimes onClick={() => setShowMenu(false)} />
                  : <FaBars onClick={() => setShowMenu(true)} />
              }
            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {
        showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className='fixed top-16 left-0 right-0 bg-gradient-to-b from-[#070b14]/95 to-[#0a0f1a]/95 backdrop-blur-2xl border-b border-white/10 py-6 flex flex-col items-center gap-5 z-40 shadow-2xl'
          >

            {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                onClick={() => setShowMenu(false)}
                className='text-gray-300 hover:text-cyan-400 transition duration-300 uppercase tracking-wider py-2'
              >
                {item}
              </a>
            ))}

            <a
              href='#'
              className='px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold'
            >
              Resume
            </a>

          </motion.div>
        )
      }
    </>
  )
}

export default Navbar