import React from 'react'

const Navbar = ({ children }) => {
  return (
    <div className='bg-sky-900 flex items-center py-10'>
        <div className="mx-auto">
           <h1 className="text-white text-2xl font-bold mb-2 text-center">Picture Gallery</h1>
           {children}
        </div>
    </div>
  )
}

export default Navbar