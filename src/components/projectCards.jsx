import React from 'react'

function ProjectCards({ title, description, image, tech, demo, code }) {  
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {tech && tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm'>
              {item}
            </span>
          ))}
        </div>
        <div className='flex gap-4 justify-center mt-12'>
          <a 
            href={demo || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className='flex-1 text-center px-6 py-3 bg-purple-500 rounded-lg text-white font-medium hover:bg-purple-700 transition duration-300'
          >
            View Demo 
          </a>
          <a 
            href={code || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className='flex-1 text-center px-4 py-2 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition duration-300'
          >
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards