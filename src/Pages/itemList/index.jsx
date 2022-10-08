import React from 'react'
import ToDoButton from '../../Components/Button'
import bgItemList from '../../assets/images/todo-empty-state.png'
import { useNavigate } from 'react-router-dom'

const ItemList = () => {
  const navigate = useNavigate()

  const handleListItem = (e) => {
    e.preventDefault()
    navigate('/item-list/add-item-list')
  }

  return (
    <div className="flex flex-col gap-4 px-[220px] py-[38px]">
      <section className='flex items-center justify-between '>
        <h2 className="font-[700] text-[#111111] text-[36px]">New Activity</h2>
        <ToDoButton>+ Tambah</ToDoButton>
      </section>
      <section className='flex items-center justify-center h-full mt-[90px] mb-2'>
        <div className="relative">
          <img src={bgItemList} alt="item list" />
          <div onClick={handleListItem} className="absolute w-[78px] h-[78px] bg-black rounded-full top-0 right-3 opacity-0 cursor-pointer"></div>
        </div>
      </section>
    </div>
  )
}

export default ItemList