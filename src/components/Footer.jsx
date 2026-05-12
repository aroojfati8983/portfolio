import React from 'react'

function Footer() {
  return (
    <footer className='py-6 bg-dark-300 '>
      <div className='container mx-auto px-6'>
        <div className='text-center'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Created By <span className='text-purple-500'>Arooj Fatima</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer