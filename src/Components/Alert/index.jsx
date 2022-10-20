import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import Delete from '../../assets/images/modal-delete-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import ToDoButton from '../Button';
import { deleteActivity } from '../../redux/activityGroups';
import { deleteData } from '../../utils/fetchdata';

const Alert = ({
  title,
  isModal,
  setIsModal,
  id,
  type,
  setIsDeleteSuccess,
}) => {
  const dispatch = useDispatch();
  const activity = useSelector(state => state.activity);
  const { isLoading } = activity;

  const handleDelete = async e => {
    e.preventDefault();
    try {
      if (type === 'activity') {
        dispatch(deleteActivity(id));
      } else {
        await deleteData(`/todo-items/${id}`);
        setIsDeleteSuccess(true);
      }
      setIsModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setIsModal(false);
  };

  return (
    <>
      <Modal
        show={isModal}
        className="modal-lg"
        centered
        onHide={handleClose}
        data-cy="modal-delete"
      >
        <Modal.Body>
          <div className="flex flex-col items-center justify-center h-full py-[50px] gap-[50px]">
            <img src={Delete} alt="Delete" data-cy="modal-delete-icon" />
            <h2
              data-cy="modal-delete-title"
              className="mb-0 font-[500] text-[18px] text-[#111111] max-w-[365px] text-center"
            >
              {title.split('"')[0]}
              <span className="font-bold ">
                "{title.split('"').slice(1, 3)}"
              </span>
            </h2>
            <div className="flex items-center gap-[20px] justify-center">
              <ToDoButton
                data_cy="modal-delete-cancel-button"
                className="bg-[#f4f4f4] text-[#4a4a4a]"
                onClick={() => setIsModal(false)}
              >
                Batal
              </ToDoButton>
              <ToDoButton
                className="bg-[#ED4C5C] text-white"
                onClick={handleDelete}
                data_cy="modal-delete-confirm-button"
              >
                {isLoading ? (
                  <Spinner animation="border" variant="light" />
                ) : (
                  <>Hapus</>
                )}
              </ToDoButton>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Alert;
