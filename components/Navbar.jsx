import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-around w-full h-20 bg-gray-100 items-center'>
      <div>Nike</div>
      <div className='flex gap-5'>
        <div>Home</div>
        <div>About</div>
        <div>Location</div>
        <div>Contact</div>
      </div>
      <div className='bg-red-400 text-white'>LogIN</div>
    </nav>
  )
}

export default Navbar
