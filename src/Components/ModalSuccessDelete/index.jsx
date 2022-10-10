import React from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import ModalInfo from '../../assets/images/modal-information-icon.png'
import { reset } from '../../redux/activityGroups'

const ModalSuccessDelete = ({ isDelete }) => {
  const dispatch = useDispatch()

  const handleClose = (e) => {
    dispatch(reset())
  }

  return (
    <Modal show={isDelete} className="modal-md" centered data-cy="modal-information" onHide={handleClose}>
      <div className='py-3 px-2 flex justify-start items-center'>
        <img data-cy="modal-information-icon" src={ModalInfo} alt="Modal Info" />
        <h3 data-cy="modal-information-title" className="mb-0 font-[500] text-[#111111] text-[14px] ml-[15px]">Activity berhasil dihapus</h3>
      </div>
    </Modal>
  )
}

export default ModalSuccessDelete