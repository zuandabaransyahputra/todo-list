import React from 'react'
import Image from '../../assets/images/activity-empty-state.png'
import ToDoButton from '../../Components/Button'

const Home = () => {
  return (
    <div className='flex flex-col h-full w-full px-[220px] py-[43px]'>
      <section className='flex w-full items-start justify-between'>
        <h2 className='text-[#111111] font-[700] text-[36px]'>Activity</h2>
        <ToDoButton>+ Tambah</ToDoButton>
      </section>
      <section className='flex justify-center w-full py-[70px]'>
        <img src={Image} alt="background" />
      </section>
    </div>
  )
}

export default Home
