import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import ToDoButton from '../Button'

const options = [
  {
    id: 1,
    title: <h2><span className='bg-[#ED4C5C] w-[14px] h-[14px]'></span>Very High</h2>,
    label: 'Very High'
  },
  {
    id: 2,
    title: <h2><span className='bg-[#F8A541] w-[14px] h-[14px]'></span>High</h2>,
    label: 'High'
  },
  {
    id: 3,
    title: <h2><span className='bg-[#00A790] w-[14px] h-[14px]'></span>Medium</h2>,
    label: 'Medium'
  },
  {
    id: 4,
    title: <h2><span className='bg-[#428BC1] w-[14px] h-[14px]'></span>Low</h2>,
    label: 'Low'
  },
  {
    id: 1,
    title: <h2><span className='bg-[#8942C1] w-[14px] h-[14px]'></span>Very Low</h2>,
    label: 'Very Low'
  }
]

const AddItem = () => {
  return (
    <Card className="rounded">
      <Card.Header>
        Tambah List Item
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label>Nama Item List</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tambahkan nama list item"
            />
            <Form.Label>Priority</Form.Label>
            <Form.Select
              defaultValue={'Pilih priority'}
              required={true}
            >
              <option>Pilih priority</option>
              {options.map(item => (
                <option key={item.id} label={item.label}>{item.title}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col className="d-flex align-items-center justify-content-end">
            <ToDoButton>Simpan</ToDoButton>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default AddItem