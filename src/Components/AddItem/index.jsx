import React, { useState } from 'react';
import { Modal, Col, Row, Form } from 'react-bootstrap';
import ToDoButton from '../Button';
import Select from 'react-select';
import { options } from './data';
import chroma from 'chroma-js';

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

const AddItem = ({ isModal, setIsModal }) => {
  const [listItem, setListItem] = useState('');

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleChange = e => {
    setListItem(e.target.value);
  };

  return (
    <Modal show={isModal} className="rounded modal-lg" centered>
      <Modal.Header onHide={handleCloseModal} closeButton>
        <h2 className="mb-0 font-[600] text-[18px] text-[#111111]">
          Tambah List Item
        </h2>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>NAMA LIST ITEM</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tambahkan nama list item"
            className="mb-3 py-2"
            value={listItem}
            onChange={handleChange}
          />
          <Form.Label>PRIORITY</Form.Label>
          <Select
            className='w-[205px]'
            defaultValue={options[0]}
            options={options}
            styles={colourStyles}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col className="d-flex align-items-center justify-content-end">
            <ToDoButton
              disabled={listItem === ''}
              className={[
                'bg-[#16ABF8] text-white',
                listItem === '' ? 'opacity-30' : 'opacity-100',
              ].join(' ')}
              onClick={() => setIsModal(false)}
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
