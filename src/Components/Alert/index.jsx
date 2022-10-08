import React from 'react'
import { Modal } from 'react-bootstrap'
import Delete from '../../assets/images/modal-delete-icon.png'
import ToDoButton from '../Button'

const Alert = ({ title, isModal, setIsModal }) => {
  console.log(title.split('"')[0])
  return (
    <Modal show={isModal} className="modal-lg">
      <Modal.Body>
        <div className="flex flex-col items-center justify-center h-full py-[50px] gap-[50px]">
          <img src={Delete} alt="Delete" />
          <h2 className='mb-0 font-[500] text-[18px] text-[#111111] max-w-[365px] text-center'>{title.split('"')[0]}<span className="font-bold ">"{title.split('"').slice(1, 3)}"</span></h2>
          <div className='flex items-center gap-[20px] justify-center'>
            <ToDoButton className="bg-[#f4f4f4] text-[#4a4a4a]" onClick={() => setIsModal(false)}>Batal</ToDoButton>
            <ToDoButton className="bg-[#ED4C5C] text-white">Hapus</ToDoButton>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Alert