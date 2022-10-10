import React, { useEffect, useState } from 'react';
import { Modal, Col, Row, Form } from 'react-bootstrap';
import ToDoButton from '../Button';
import Select from 'react-select';
import { options } from './data';
import chroma from 'chroma-js';
import { getData, patchData, postData } from '../../utils/fetchdata';

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      width: '205px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: chroma.contrast(color, 'white'),
      color: chroma.contrast(color, 'black'),
      ':before': {
        backgroundColor: data.color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
      },
      ':after': isSelected
        ? {
          content: '"✓"',
          marginLeft: '30px',
        }
        : { content: '" "' },
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const AddItem = ({ isModal, setIsModal, id, type, editId }) => {
  const [listItem, setListItem] = useState({
    activity_group_id: id,
    title: '',
    priority: 'very-high'
  });

  const handleCloseModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    const fetch = async (id) => {
      if (type === 'EditList') {
        const response = await getData(`/todo-items/${id}`)
        setListItem({
          ...listItem,
          title: response.data.title,
          priority: response.data.priority,
          is_active: response.data.is_active
        })
      }
    }
    fetch(editId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId, type])

  const handleChange = e => {
    setListItem({
      ...listItem,
      title: e.target.value
    });
  };

  const handleSimpan = async (e) => {
    e.preventDefault()
    if (type === 'EditList') {
      await patchData(`/todo-items/${editId}`, listItem)
    } else {
      await postData('/todo-items', listItem)
    }
    setIsModal(false)
  }

  const handleChangeOption = (e) => {
    if (e.value === 'medium') {
      setListItem({
        ...listItem,
        priority: 'normal'
      })
    } else {
      setListItem({
        ...listItem,
        priority: e.value
      })
    }

  }

  return (
    <Modal show={isModal} className="rounded modal-lg" centered>
      <Modal.Header onHide={handleCloseModal} closeButton data-cy="modal-add-close-button">
        <h2 data-cy="modal-add-title" className="mb-0 font-[600] text-[18px] text-[#111111]">
          Tambah List Item
        </h2>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label data-cy="modal-add-name-title">NAMA LIST ITEM</Form.Label>
          <Form.Control
            data-cy="modal-add-name-input"
            type="text"
            placeholder="Tambahkan nama list item"
            className="mb-3 py-2"
            value={listItem.title}
            onChange={handleChange}
          />
          <Form.Label data-cy="modal-add-priority-title">PRIORITY</Form.Label>
          <Select
            data-cy="modal-add-priority-dropdown"
            className='w-[205px] cursor-pointer'
            defaultValue={options.find(i => i.value === listItem.priority) || options[0]}
            options={options}
            styles={colourStyles}
            onChange={handleChangeOption}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col className="d-flex align-items-center justify-content-end">
            <ToDoButton
              data-cy="modal-add-save-button"
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
