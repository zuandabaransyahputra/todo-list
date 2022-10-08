import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const CardToDo = () => {
  return (
    <Card style={{ boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)" }} className="border h-[243px] w-[235px] bg-white px-[27px] py-[25px] rounded">
      <Card.Header>
        New Activity
      </Card.Header>
      <Card.Footer>
        <Row>
          <Col sm="8">5 Oktober 2022</Col>
          <Col sm="4">-</Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default CardToDo