import React from 'react'
import { FiTrash } from "react-icons/fi";

const CardToDo = ({ title, tanggal }) => {
  return (
    <div className="flex flex-col gap-[112px] justify-start py-[22px] px-[27px] min-w-[235px] bg-white border rounded-sm" style={{ boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)" }}>
      <h2 className='mb-0 text-[#111111] font-[700] text-[18px]'>{title}</h2>
      <div className='flex justify-between items-center'>
        <h4 className='mb-0 font-[500] text-[14px] text-[#888888]'>{new Date(tanggal).toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric' })}</h4>
        <FiTrash />
      </div>
    </div>
  )
}

export default CardToDo