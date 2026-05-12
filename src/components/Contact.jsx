import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone} from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'

function Contact() {
  return (
    <motion.div  
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Get In <span className='text-purple-500'>Touch</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        
        {/* Contact form */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
                <input 
                  type='text' 
                  id='name'
                  placeholder='Your Name' 
                  className='w-full px-6 py-3 bg-dark-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500' 
                />
              </div>
              
              <div>
                <label htmlFor='email' className='block text-gray-300 mb-2'>Email Address</label>
                <input 
                  type='email' 
                  id='email'
                  placeholder='Your Email'  
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500'
                />
              </div>
              
              <div>
                <label htmlFor='message' className='block text-gray-300 mb-2'>Your Message</label>
                <textarea 
                  id='message'
                  rows='5' 
                  placeholder='Your Message' 
                  className='w-full px-6 py-3 bg-dark-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
                ></textarea>
              </div>
              
              <button type="submit" className='w-full px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact information */}
        <div className='space-y-3'>
  <div className='flex items-start gap-3 p-4 rounded-lg'>
    <div className='text-purple-500 text-xl'>
      <FaMapMarkerAlt/>
    </div>
    <div>
      <h3 className='text-lg font-semibold mb-1 text-white'>Location</h3>
      <p className='text-gray-400'>Kangunpur</p>
    </div>
  </div>
  
  <div className='flex items-start gap-3 p-4 rounded-lg'>
    <div className='text-purple-500 text-xl'>
      <FaEnvelope/>
    </div>
    <div>
      <h3 className='text-lg font-semibold mb-1 text-white'>Email</h3>
      <p className='text-gray-400'>aroojfati890@gmail.com</p>
    </div>
  </div>
  
  <div className='flex items-start gap-3 p-4 rounded-lg'>
    <div className='text-purple-500 text-xl'>  
      <FaPhone/>
    </div>
    <div>
      <h3 className='text-lg font-semibold mb-1 text-white'>Phone</h3> 
      <p className='text-gray-400'>+92 3176056531</p>
    </div>
  </div>
  
  <div className='p-4 rounded-lg'>
    <h3 className='text-lg font-semibold text-white mb-3'>Follow Me</h3>
    <div className='flex space-x-3'>
      <a 
        href="https://github.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center text-white-500 hover:bg-purple-500 hover:text-white transition duration-300'
      >  
        <FaGithub/>
      </a>

      <a 
        href="https://www.linkedin.com/in/arooj-fatima-982659403?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center text-white-500 hover:bg-orange-400 hover:text-white transition duration-300'
      >  
        <LiaLinkedin/>  
      </a>
    </div>
  </div>
</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact