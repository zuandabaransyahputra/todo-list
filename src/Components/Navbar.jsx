import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div data-cy="header-title" className="h-[105px]flex items-center justify-start w-full py-[38px] bg-[#16ABF8] shadow-[0px 4px 10px rgba(0, 0, 0, 0.1)]">
      <div className='lg:max-w-[1000px] lg:px-0 px-20 mx-auto'>
        <Link to="/" className="text-[24px] font-[700] text-white no-underline">TO DO LIST APP</Link>
      </div>
    </div>
  )
}

export default Navbar