import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          About <span className='text-purple-500'>Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know more about my background and passion
        </p>
        
        {/* image + my journey */}
        <div className='flex flex-col md:flex-row items-center gap-12'>
          {/* image */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='w-full h-full object-cover'
              src={assets.profileImg} 
              alt="profile"
            />
          </div>
          
          {/* text content */}
          <motion.div   
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'
          >
            <div className='rounded-2xl p-8'>
              <h3 className='text-2xl font-bold text-white mb-6'>My Journey</h3>
              <p className='text-gray-300 mb-6'>
                I'm a beginner full-stack developer learning HTML, CSS, JavaScript, and backend basics through personal projects. Although I don't have professional experience yet, I'm passionate about building web solutions and improving daily. I'm now looking for opportunities to apply my skills and grow as a developer.
              </p>
              <p className='text-gray-300 mb-12'>
                Outside of coding, I love exploring new tools, watching tech tutorials, and trying out small project ideas. I believe in learning something new every day and staying curious about web development.
              </p>
              
              {/* cards */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {aboutInfo.map((data, index) => ( 
                  <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                    <div className='text-purple-500 text-4xl'> 
                      <data.icon/>
                    </div>
                    <h3 className='text-xl font-semibold mt-3'>{data.title}</h3>
                    <p className='text-gray-400 text-sm mt-2'>{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About