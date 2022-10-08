import React from 'react'
import { Button } from 'react-bootstrap'
import Image from '../assets/images/activity-empty-state.png'

const Home = () => {
  return (
    <div className='flex flex-col h-full w-full px-[220px] py-[43px]'>
      <section className='flex w-full items-start justify-between'>
        <h2 className='text-[#111111] font-[700] text-[36px]'>Activity</h2>
        <Button className='rounded-pill text-white w-[159px] h-[54px] font-[600] text-[18px] bg-[#16ABF8]'>+ Tambah</Button>
      </section>
      <section className='flex justify-center w-full py-[70px]'>
        <img src={Image} alt="background" />
      </section>
    </div>
  )
}

export default Home
