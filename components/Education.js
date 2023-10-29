import React from 'react';
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
const Education = (props) => {
  return (
    <Col>
        <Card>
        <Card.Body>
            <Card.Title className='subTitle'> {props.courseName}</Card.Title>
            <Card.Text >{props.institue} {props.period}</Card.Text>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default Education;

