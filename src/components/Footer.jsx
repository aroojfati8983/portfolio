import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className='relative py-8 bg-gradient-to-r from-[#070b14] via-[#0a0f1a] to-[#070b14] border-t border-white/10 overflow-hidden'>
      
      {/* Background Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-purple-500/20 blur-[80px] rounded-full'></div>
      
      <div className='container mx-auto px-6 relative z-10'>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <p className='text-gray-400 text-sm'>
            © 2026 <span className='text-purple-400 font-semibold'>Arooj Fatima</span> • All Rights Reserved
          </p>
        </motion.div>
        
      </div>
    </footer>
  )
}

export default Footer