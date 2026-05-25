import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'

function Contact() {
  const contactInfo = [
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Kangunpur, Pakistan', link: 'https://maps.google.com/?q=Kangunpur,Pakistan' },
    { icon: FaEnvelope, label: 'Email', value: 'aroojfati890@gmail.com', link: 'mailto:aroojfati890@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+92 3176056531', link: 'tel:+923176056531' }
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: false }} id="contact" className='py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className='container mx-auto px-4'>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-center mb-16'>
       
          <h2 className='text-4xl md:text-5xl font-bold mt-2 mb-4'>Get In <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Touch</span></h2>
          <div className='w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6'></div>
          <p className='text-gray-300 max-w-2xl mx-auto'>Have a project in mind or want to collaborate? Let's talk!</p>
        </motion.div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <h3 className='text-2xl font-bold text-white mb-6'>Send a Message</h3>
            <form className='space-y-5'>
              <input type='text' placeholder='Your Name' className='w-full px-5 py-3 bg-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700' />
              <input type='email' placeholder='Your Email' className='w-full px-5 py-3 bg-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700' />
              <textarea rows='5' placeholder='Your Message' className='w-full px-5 py-3 bg-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700 resize-none'></textarea>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className='w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2'>
                Send Message <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='space-y-4'>
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
              <h3 className='text-2xl font-bold text-white mb-6'>Contact Info</h3>
              <div className='space-y-4'>
                {contactInfo.map((info, idx) => (
                  <div key={idx} className='flex items-start gap-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all group'>
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform'>
                      <info.icon />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold mb-1 text-white'>{info.label}</h3>
                      {info.link ? <a href={info.link} className='text-gray-400 hover:text-cyan-400 transition'>{info.value}</a> : <p className='text-gray-400'>{info.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
              <h3 className='text-2xl font-bold text-white mb-6'>Follow Me</h3>
              <div className='flex gap-4'>
                <motion.a href="https://github.com/aroojfati8983" target="_blank" whileHover={{ y: -5 }} className='w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 hover:from-cyan-500 hover:to-blue-500 hover:text-white transition shadow-lg'>
                  <FaGithub className='text-xl'/>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/arooj-fatima-982659403" target="_blank" whileHover={{ y: -5 }} className='w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 hover:from-cyan-500 hover:to-blue-500 hover:text-white transition shadow-lg'>
                  <LiaLinkedin className='text-2xl'/>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact