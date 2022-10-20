import React, { useEffect, useState } from 'react';
import { Modal, Col, Row, Form, Dropdown } from 'react-bootstrap';
import ToDoButton from '../Button';
import { getData, patchData, postData } from '../../utils/fetchdata';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { options } from './data';

const AddItem = ({ isModal, setIsModal, id, type, editId }) => {
  const [listItem, setListItem] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState({});
  const handleCloseModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    if (type === 'EditList') {
      const fetch = async id => {
        const response = await getData(`/todo-items/${id}`);
        setListItem({
          ...listItem,
          title: response.data.title,
          priority: response.data.priority,
          is_active: response.data.is_active,
        });
        options.forEach(item => {
          if (response.data.priority === item.value) {
            setActiveDropdown(item);
          }
        });
      };
      fetch(editId);
    } else {
      setListItem({
        activity_group_id: id,
        title: '',
        priority: 'very-high',
      });
      setActiveDropdown({
        id: 1,
        value: 'very-high',
        label: 'Very High',
        color: '#ED4C5C',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId, type, id]);

  const handleChange = e => {
    setListItem({
      ...listItem,
      title: e.target.value,
    });
  };

  const handleSimpan = async e => {
    e.preventDefault();
    if (type === 'EditList') {
      await patchData(`/todo-items/${editId}`, listItem);
    } else {
      await postData('/todo-items', listItem);
    }
    setIsModal(false);
    setListItem({
      ...listItem,
      title: '',
    });
    setActiveDropdown({
      id: 1,
      value: 'very-high',
      label: 'Very High',
      color: '#ED4C5C',
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickDropdown = (e, item) => {
    e.preventDefault();
    setListItem({
      ...listItem,
      priority: item.value,
    });
    setActiveDropdown(item);
  };

  return (
    <Modal
      show={isModal}
      className="rounded modal-lg"
      data-cy="modal-add"
      onHide={handleCloseModal}
    >
      <Modal.Header>
        <h2
          data-cy="modal-add-title"
          className="mb-0 font-[600] text-[18px] text-[#111111]"
        >
          Tambah List Item
        </h2>
        <div
          className="cursor-pointer"
          data-cy="modal-add-close-button"
          onClick={handleCloseModal}
        >
          <FiX size={26} />
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <label data-cy="modal-add-name-title">NAMA LIST ITEM</label>
          <div data-cy="modal-add-name-input" className="w-full mb-2">
            <input
              type="text"
              placeholder="Tambahkan nama list item"
              className="p-2 w-full focus:bg-none outline-none border-[1px] rounded-md"
              value={listItem.title}
              onChange={handleChange}
            />
          </div>
          <label data-cy="modal-add-priority-title" className="mb-2">
            PRIORITY
          </label>
          <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
              as="a"
              onClick={toggleDropdown}
              className="dropdown-toggle"
              data-cy="modal-add-priority-dropdown"
            >
              <div className="flex items-center justify-between w-[205px] cursor-pointer border-[1px] rounded-md py-[14px] px-[17px]">
                <div className="flex gap-4 items-center">
                  <div
                    style={{ backgroundColor: activeDropdown.color }}
                    className={`rounded-full w-[14px] h-[14px] `}
                  ></div>
                  <h4 className="text-[16px] text-[#111111] font-[400] mb-0">
                    {activeDropdown.label}
                  </h4>
                </div>
                <FiChevronDown color="#111111" />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
              <div
                onClick={toggleDropdown}
                className="rounded-md min-w-[235px]"
              >
                {options.map(item => {
                  return (
                    <div
                      data-cy={`modal-add-priority-item`}
                      className="flex cursor-pointer items-center justify-between border-b-[1px] py-[14px] px-[24px]"
                      key={item.id}
                      onClick={e => handleClickDropdown(e, item)}
                    >
                      <div className="w-full flex  items-center justify-start gap-4">
                        <div
                          style={{ backgroundColor: item.color }}
                          className={`rounded-full w-[14px] h-[14px]`}
                        ></div>
                        <h3 className="font-400 text-[16px] text-[#4a4a4a] mb-0">
                          {item.label}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col className="d-flex align-items-center justify-content-end">
            <ToDoButton
              data_cy="modal-add-save-button"
              disabled={listItem.title === ''}
              className={[
                'bg-[#16ABF8] text-white',
                listItem.title === '' ? 'opacity-30' : 'opacity-100',
              ].join(' ')}
              onClick={handleSimpan}
            >
              Simpan
            </ToDoButton>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default AddItem;
