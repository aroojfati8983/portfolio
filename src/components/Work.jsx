import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

function Work() {
  return (
    <motion.div  
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Work <span className='text-purple-500'>Experience</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>
          My professional journey so far
        </p>
        
        <div className='max-w-3xl mx-auto'>
          <div className='space-y-8'>
            {workData.map((data, index) => (
              <div
                key={index}
                className="timeline-item relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple-500 cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                {/* timeline dot */}
          <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple-500'></div> 
                
                {/* box */}
                <div className='bg-dark-300 rounded-2xl p-6'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-bold'>{data.role}</h3>  
                    <p className='px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm'>{data.duration}</p>  {/* ✅ added text color */}
                  </div>
                  <p className='text-gray-400 m-2'>{data.company}</p> 
                  <p className='text-gray-300 '>{data.description}</p>  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work