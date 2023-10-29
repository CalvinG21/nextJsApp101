import React from 'react';
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

let createWorkExpComn=(workExp)=>
{
    return (
        <Col>
            <Card>
            <Card.Body>
                <Card.Title className='subTitle'>{workExp.title}</Card.Title>
                <Card.Text >{workExp.company}</Card.Text>
                <Card.Text >{workExp.EmploymentPeriod}</Card.Text>
                <Card.Text>
                    {workExp.desc}
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
    );
}

   /* iterates through aray param  and create a card-in-column elements for each item in array ,and returns card-in-column elements */
const WorkExperience = (props) => {
    return( (props.workExp).map( (workExpItem)=>{ return createWorkExpComn(workExpItem)}))
    // { props.skillSet.map( (skill)=>{ return <ListGroup.Item>{skill}</ListGroup.Item>} )  }
}


export default WorkExperience;