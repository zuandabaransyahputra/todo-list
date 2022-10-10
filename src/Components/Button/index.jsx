import React from 'react'

const ToDoButton = ({ children, className, onClick, style, disabled, data_cy }) => {
  return (
    <button data-cy={data_cy} disabled={disabled} className={["rounded-full w-[100px] px-[10px] md:w-[159px] h-[37px] md:h-[54px] font-[600] text-[18px]", className].join(" ")} onClick={onClick} style={style}>{children}</button>
  )
}

export default ToDoButton