import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-[105px] flex items-center justify-start w-full py-[38px] bg-[#16ABF8] shadow-[0px 4px 10px rgba(0, 0, 0, 0.1)]">
      <Link to="/" className="text-[24px] font-[700] text-white no-underline w-[1000px] mx-auto">TO DO LIST APP</Link>
    </div>
  )
}

export default Navbar