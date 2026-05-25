import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCards'
import { projects } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

function Project() {
  const stats = [
    { number: "10+", label: "Projects", icon: "🚀" },
    { number: "500+", label: "Hours of Code", icon: "💻" }
  ]

  return (
    <section id="projects" className="py-28 bg-gradient-to-b from-[#060816] via-[#0a0f1a] to-[#060816]">
      
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
         
          
          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-6 rounded-full"></div>
          
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Modern and creative projects with beautiful UI and smooth animations.
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
        
        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Explore More <FaArrowRight />
          </a>
        </motion.div>
        
        {/* Stats Section*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition duration-300">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}

export default Project