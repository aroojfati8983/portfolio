import React from 'react'

function ProjectCards({title, description, image, tech, demo, code}) {
  return (
    <div className='glass rounded-[30px] overflow-hidden hover:-translate-y-4 duration-300'>
      <img src={image} alt={title} className='h-64 w-full object-cover'/>
      
      <div className='p-6'>
        <h3 className='text-2xl font-bold mb-3'>{title}</h3>
        <p className='text-gray-400 mb-5'>{description}</p>
        
        <div className='flex flex-wrap gap-3 mb-8'>
          {
            tech.map((item, index) => (
              <span key={index} className='px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm'>
                {item}
              </span>
            ))
          }
        </div>
        
        <div className='flex gap-4'>
          <a
            href={demo}
            target='_blank'
            rel='noopener noreferrer'
            className='flex-1 text-center py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600'
          >
            Live Demo
          </a>  
          
          {code && (
            <a
              href={code}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 text-center py-3 rounded-full border border-purple-500/50 hover:bg-purple-500/10'
            >
              Source Code
            </a>
          )}
        </div>
      </div> 
    </div>  
  )
}

export default ProjectCards