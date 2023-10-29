import React from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';


const Skills = (props) => {

  return (
  <Col>
    <Card>
      <Card.Body>
        <Card.Title className='subTitle'>{props.skillName}</Card.Title>
        <Card.Text>
            <ListGroup as="ol" numbered>
              {/* iterates through aray param  and create li elements for each item in array ,and returns li elements */}
                { props.skillSet.map( (skill)=>{ return <ListGroup.Item>{skill}</ListGroup.Item>} )  }
            </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>  
  );
}

export default Skills;
