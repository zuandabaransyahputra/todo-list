import React, { useEffect, useState } from 'react';
import ToDoButton from '../../Components/Button';
import bgItemList from '../../assets/images/todo-empty-state.png';
import ImageEdit from '../../assets/images/todo-title-edit-button.png';
import ImageBack from '../../assets/images/todo-back-button.png';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, patchData } from '../../utils/fetchdata';
import AddItem from '../../Components/AddItem';
import { FiTrash } from 'react-icons/fi';
import Alert from '../../Components/Alert';

const colorPriority = [
  {
    id: 1,
    priority: 'very-high',
    color: '#ED4C5C',
  },
  {
    id: 2,
    priority: 'high',
    color: '#F8A541',
  },
  {
    id: 3,
    priority: 'normal',
    color: '#00A790',
  },
  {
    id: 4,
    priority: 'low',
    color: '#428BC1',
  },
  {
    id: 5,
    priority: 'very-low',
    color: '#8942C1',
  },
];

const ItemList = () => {
  const [isModal, setIsModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false)
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState()
  const [formListTitle, setFormListTitle] = useState({
    title: '',
    email: 'zuandabaransyahputra@gmail.com',
  });
  const [deleteList, setDeleteList] = useState({})
  const [listTodo, setListTodo] = useState([]);
  const [type, setType] = useState("")
  const navigate = useNavigate();
  const params = useParams();

  const handleListItem = e => {
    e.preventDefault();
    setType("AddList")
    setIsModal(true);
  };

  const handleClickEdit = e => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  const handleChangeTitle = e => {
    e.preventDefault();
    setFormListTitle({
      ...formListTitle,
      title: e.target.value,
    });
  };

  const handleKeyPress = async e => {
    if (e.charCode === 13) {
      await patchData(`/activity-groups/${params.id}`, formListTitle);
      setIsEdit(false);
    }
  };

  const handleClickBack = e => {
    e.preventDefault();
    navigate('/');
  };

  const handleChange = async (e, id, index) => {
    const _temp = [...listTodo];
    _temp.forEach(list => {
      if (list.id === id) {
        list.is_active = list.is_active === 1 ? 0 : 1;
      }
    });
    setListTodo(_temp);
    await patchData(`/todo-items/${id}`, _temp[index])
  };

  const handleClick = (e) => {
    e.preventDefault()
    setIsEdit(true)
  }

  useEffect(() => {
    const fetch = async id => {
      const response = await getData(`/activity-groups/${id}`);
      const responseList = await getData(`/todo-items`, {
        activity_group_id: params.id,
      });
      setListTodo(responseList.data.data);
      setFormListTitle({
        ...formListTitle,
        title: response.data.title,
      });
    };
    fetch(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id, isDelete, isModal]);

  const handleDeleteList = async (e, id, title) => {
    e.preventDefault()
    setDeleteList({
      id: id,
      title: title
    })
    setIsDelete(true)
  };

  const handleClickEditList = (e, id) => {
    e.preventDefault()
    setType("EditList")
    setEditId(id)
    setIsModal(true)
  }

  return (
    <>
      <Alert isModal={isDelete} setIsModal={setIsDelete} type="todo" id={deleteList.id} title={`Apakah anda yakin menghapus List Item "${deleteList.title}"?`} />
      <AddItem isModal={isModal} setIsModal={setIsModal} id={params.id} type={type} editId={editId} />
      <div className="flex flex-col gap-4 lg:max-w-[1000px] lg:px-0 px-20 mx-auto py-[38px]">
        <section className="flex gap-[20px] items-center justify-between ">
          <div className="flex-[0.7] flex items-center justify-start">
            <img
              src={ImageBack}
              alt="back button"
              className="mr-[35px] cursor-pointer"
              onClick={handleClickBack}
            />
            {isEdit ? (
              <input
                onBlur={() => setIsEdit(false)}
                onFocus={() => setIsEdit(true)}
                autoFocus={isEdit}
                type="text"
                value={formListTitle.title}
                onChange={handleChangeTitle}
                onKeyPress={handleKeyPress}
                className="border-0 font-[700] mb-0 text-[#111111] text-[36px] focus:outline-none w-[70%]"
              />
            ) : (
              <h2 onClick={handleClick} className="font-[700] mb-0 text-[#111111] text-[36px]">
                {formListTitle.title}
              </h2>
            )}
            <img
              src={ImageEdit}
              alt="Edit"
              className="ml-[35px] cursor-pointer"
              onClick={handleClickEdit}
            />
          </div>
          <ToDoButton
            onClick={handleListItem}
            className="bg-[#16ABF8] text-white flex-[0.3]"
          >
            + Tambah
          </ToDoButton>
        </section>
        <section className="flex flex-col gap-[10px] items-center justify-center w-full h-full mt-[50px]">
          {listTodo.length === 0 ? (
            <div className="relative">
              <img src={bgItemList} alt="item list" />
              <div
                onClick={handleListItem}
                className="absolute w-[78px] h-[78px] bg-black rounded-full top-0 right-3 opacity-0 cursor-pointer"
              ></div>
            </div>
          ) : (
            listTodo.map((list, index) => (
              <div
                key={list.id}
                className={[
                  'flex px-[45px] justify-between items-center w-full h-[80px] rounded-[12px]',
                  list.is_active === 1
                    ? 'no-underline text-black'
                    : 'line-through text-[#888888]',
                ].join(' ')}
                style={{ boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex items-center justify-start gap-[22px]">
                  <input
                    type={'checkbox'}
                    checked={Boolean(!list.is_active)}
                    onChange={e => handleChange(e, list.id, index)}
                    className="w-[20px] h-[20px]"
                  />
                  {colorPriority.map(prio => {
                    if (prio.priority === list.priority) {
                      return (
                        <div
                          key={prio.id}
                          style={{ background: `${prio.color}` }}
                          className={[
                            `w-[9px] h-[9px] rounded-full`,
                          ].join(' ')}
                        ></div>
                      );
                    }
                  })}
                  <h4 className="mb-0">{list.title}</h4>
                  <img
                    src={ImageEdit}
                    alt="Edit"
                    className="ml-[35px] cursor-pointer"
                    onClick={(e) => handleClickEditList(e, list.id)}
                  />
                </div>
                <FiTrash className='cursor-pointer' onClick={e => handleDeleteList(e, list.id, list.title)} />
              </div>
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default ItemList;
