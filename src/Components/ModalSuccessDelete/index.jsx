import React from 'react'
import { Modal } from 'react-bootstrap'
import ModalInfo from '../../assets/images/modal-information-icon.png'

const ModalSuccessDelete = ({ isSuccess, setIsSuccess }) => {

  const handleClose = () => setIsSuccess(false)

  return (
    <Modal show={isSuccess} className="modal-md" centered onHide={handleClose}>
      <div className='py-3 px-2 flex justify-start items-center'>
        <img src={ModalInfo} alt="Modal Info" />
        <h3 className="mb-0 font-[500] text-[#111111] text-[14px] ml-[15px]">Activity berhasil dihapus</h3>
      </div>
    </Modal>
  )
}

export default ModalSuccessDelete