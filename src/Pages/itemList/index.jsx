import React, { useState } from 'react'
import ToDoButton from '../../Components/Button'
import bgItemList from '../../assets/images/todo-empty-state.png'
import AddItem from '../../Components/AddItem'
import ImageEdit from '../../assets/images/todo-title-edit-button.png'
import ImageBack from '../../assets/images/todo-back-button.png'
import { useNavigate } from 'react-router-dom'

const ItemList = () => {
  const [isModal, setIsModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [formListTitle, setFormListTitle] = useState({
    title: 'New Activity',
    email: 'zuandabaransyahputra@gmail.com',
  })
  const navigate = useNavigate()

  const handleListItem = (e) => {
    e.preventDefault()
    setIsModal(true)
  }

  const handleClickEdit = (e) => {
    e.preventDefault()
    setIsEdit(true)
  }

  const handleChangeTitle = (e) => {
    e.preventDefault()
    setFormListTitle({
      ...formListTitle,
      title: e.target.value
    })
  }

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      setIsEdit(false)
    }
  }

  const handleClickBack = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <AddItem isModal={isModal} setIsModal={setIsModal} />
      <div className="flex flex-col gap-4 px-[220px] py-[38px]">
        <section className='flex items-center justify-between '>
          <div className='flex items-center'>
            <img src={ImageBack} alt="back button" className='mr-[35px] cursor-pointer' onClick={handleClickBack} />
            {isEdit ? (
              <input
                autoFocus={isEdit}
                type="text"
                value={formListTitle.title}
                onChange={handleChangeTitle}
                onKeyPress={handleKeyPress}
                className="border-0 font-[700] mb-0 text-[#111111] text-[36px]"
              />
            ) : (
              <h2 className="font-[700] mb-0 text-[#111111] text-[36px]">{formListTitle.title}</h2>
            )}
            <img src={ImageEdit} alt="Edit" className='ml-[35px] cursor-pointer' onClick={handleClickEdit} />
          </div>
          <ToDoButton onClick={handleListItem} className="bg-[#16ABF8] text-white">+ Tambah</ToDoButton>
        </section>
        <section className='flex items-center justify-center w-full h-full mt-[90px] mb-2'>
          <div className="relative">
            <img src={bgItemList} alt="item list" />
            <div onClick={handleListItem} className="absolute w-[78px] h-[78px] bg-black rounded-full top-0 right-3 opacity-0 cursor-pointer"></div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ItemList