import React from 'react'
import { motion } from 'framer-motion'
import { skills, techStack } from '../assets/assets'

function Skills() {
  return (
    <section id='skills' className='py-28 bg-gradient-to-b from-[#070b14] via-[#0a0f1a] to-[#070b14] relative'>
      
      {/* Background Effects */}
      <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full'></div>
      <div className='absolute bottom-0 left-0 w-[350px] h-[350px] bg-pink-500/20 blur-[120px] rounded-full'></div>
      
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'
        >
          <span className='inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 text-sm tracking-widest uppercase mb-4'>
            💡 What I Do
          </span>
          
          <h2 className='text-5xl md:text-6xl font-bold text-white'>
            My <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Skills</span>
          </h2>
          
          <div className='w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-6 rounded-full'></div>
          
          <p className='mt-6 text-gray-400 max-w-2xl mx-auto text-lg'>
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className='glass rounded-[30px] p-8 border border-white/10 hover:border-purple-500/30 transition-all'>
                
                <skill.icon className='text-5xl text-purple-400 mb-6' />
                
                <h3 className='text-2xl font-bold mb-4 text-white'>
                  {skill.title}
                </h3>
                
                <p className='text-gray-400 mb-6'>
                  {skill.description}
                </p>
                
                <div className='flex flex-wrap gap-2'>
                  {skill.tags.map((tag, idx) => (
                    <span key={idx} className='px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-sm'>
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Proficiency Bar */}
                <div className='mt-6 pt-4 border-t border-white/10'>
                  <div className='flex justify-between text-xs text-gray-500 mb-1'>
                    <span>Proficiency</span>
                    <span>Advanced</span>
                  </div>
                  <div className='w-full h-1.5 bg-white/10 rounded-full overflow-hidden'>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className='h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500'
                    ></motion.div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mt-24'
        >
          <div className='text-center mb-10'>
            <span className='text-gray-500 uppercase tracking-wider text-sm'>Trusted Technologies</span>
            <h3 className='text-2xl font-semibold mt-2 text-white'>Working With Modern <span className='gradient-text'>Stack</span></h3>
          </div>
          
          <div className='flex flex-wrap justify-center gap-4'>
            {techStack.map((tech, idx) => (
              <span key={idx} className='text-gray-300 text-base font-medium px-5 py-2.5 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300'>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}

export default Skills