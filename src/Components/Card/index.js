import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert';
import ModalSuccessDelete from '../ModalSuccessDelete';

const CardToDo = ({ title, tanggal, id }) => {
  const [isModal, setIsModal] = useState(false)
  const navigate = useNavigate()
  const activity = useSelector(state => state.activity)
  const { isDelete } = activity

  const handleDelete = (e) => {
    e.preventDefault()
    setIsModal(true)
  }

  const handleClickActivity = (e) => {
    e.preventDefault()
    navigate(`/item-list/${id}`)
  }

  return (
    <>
      <ModalSuccessDelete isDelete={isDelete} />
      <Alert type="activity" id={id} title={`Apakah anda yakin menghapus activity "${title}"?`} isModal={isModal} setIsModal={setIsModal} />
      <div
        className="flex flex-col justify-between py-[22px] px-[27px] bg-white rounded-[12px] min-h-[150px] md:min-h-[234px] cursor-pointer"
        style={{ boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)' }}
      >
        <h2 data-cy="activity-title" onClick={handleClickActivity} className="mb-0 text-[#111111] font-[700] text-[14px] md:text-[18px]">{title}</h2>
        <div onClick={handleClickActivity} className="w-full h-full cursor-pointer"></div>
        <div className="flex justify-between items-center">
          <h4 className="mb-0 font-[500] text-[10px] md:text-[14px] text-[#888888]">
            {new Date(tanggal).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h4>
          <FiTrash data-cy="activity-item-delete-button" onClick={handleDelete} className="cursor-pointer w-[12px] md:w-[24px]" />
        </div>
      </div>
    </>
  );
};

export default CardToDo;
