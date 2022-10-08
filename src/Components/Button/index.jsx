import React from 'react'

const ToDoButton = ({ children, className, onClick, style }) => {
  return (
    <button className={["rounded-full text-white w-[159px] h-[54px] font-[600] text-[18px] bg-[#16ABF8]", className].join(" ")} onClick={onClick} style={style}>{children}</button>
  )
}

export default ToDoButton