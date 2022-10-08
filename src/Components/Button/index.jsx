import React from 'react'

const ToDoButton = ({ children, className, onClick, style, disabled }) => {
  return (
    <button disabled={disabled} className={["rounded-full w-[159px] h-[54px] font-[600] text-[18px]", className].join(" ")} onClick={onClick} style={style}>{children}</button>
  )
}

export default ToDoButton