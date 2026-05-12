import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false); 
    
    return (
        <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href="#" className='text-3xl font-bold text-white'>
                        Arooj
                        <span className='text-purple-500'>Fatima</span>
                        <div className='w-4 h-4 bg-purple-500 rounded-full inline-block ml-2'>
                            {/* Decorative dot */}
                        </div>
                    </a>
                </div>
                
                <div className="hidden md:flex space-x-10">
                    <a href='#home' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Home</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href='#about' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>About</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href='#skills' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Skills</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href='#projects' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Projects</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href='#experience' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Experience</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href='#contact' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                        <span>Contact</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </div>
            
                <div className='md:hidden'>
                    {showMenu ?
                        <FaTimes onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer text-white'/> :
                        <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer text-white'/>        
                    }
                </div>
            </div>
            
            {/* Mobile menu */}
            {showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 rounded-lg p-4 flex flex-col space-y-4 text-center'>
                    <a onClick={()=>setShowMenu(!showMenu)} href='#home' className='text-white/80 hover:text-purple-500 transition py-2'>
                        Home
                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href='#about' className='text-white/80 hover:text-purple-500 transition py-2'>
                        About
                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href='#skills' className='text-white/80 hover:text-purple-500 transition py-2'>
                        Skills
                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href='#projects' className='text-white/80 hover:text-purple-500 transition py-2'>
                        Projects
                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href='#experience' className='text-white/80 hover:text-purple-500 transition py-2'>
                        Experience
                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href='#contact' className='text-white/80 hover:text-purple-500 transition py-2'>
                        Contact
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar