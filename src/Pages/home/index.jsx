import React, { useEffect } from 'react'
import Image from '../../assets/images/activity-empty-state.png'
import ToDoButton from '../../Components/Button'
import CardToDo from '../../Components/Card'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createActivity, getDataActivity, reset } from '../../redux/activityGroups'

const Home = () => {
  const dispatch = useDispatch()
  const activity = useSelector(state => state.activity)
  const { dataActivity, isLoading, isDelete, isAdd } = activity

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch(createActivity())
  }

  useEffect(() => {
    dispatch(getDataActivity())
  }, [dispatch])

  useEffect(() => {
    if (isDelete) {
      dispatch(getDataActivity())
    }
    if (isAdd) {
      dispatch(getDataActivity())
      dispatch(reset())
    }
  }, [dispatch, isDelete, isAdd])

  return (
    <div className='flex flex-col h-full lg:max-w-[1000px] lg:px-0 px-20 mx-auto py-[43px]'>
      <section className='flex w-full items-start justify-between'>
        <h2 className='text-[#111111] font-[700] text-[36px]'>Activity</h2>
        <ToDoButton onClick={handleClick} className="bg-[#16ABF8] text-white">{isLoading ? (
          <Spinner animation='border' variant="light" />
        ) : <>
          +Tambah
        </>}
        </ToDoButton>
      </section>
      <section className='flex justify-start w-full py-[70px]'>
        {dataActivity.length === 0 ? (<div className='relative'>
          <img src={Image} alt="background" />
          <div onClick={handleClick} className='absolute bg-[#16ABF8] top-[94px] cursor-pointer opacity-0 right-[165px] w-[117px] h-[117px] rounded-full'></div>
        </div>) : (
          <div className="grid grid-cols-primary justify-center gap-[20px] w-[1000px]">
            {dataActivity.map(data => (
              <CardToDo key={data.id} title={data.title} tanggal={data.created_at} id={data.id} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
