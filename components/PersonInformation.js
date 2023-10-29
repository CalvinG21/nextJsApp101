import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
//personal info functional requirement, display info on about page
const PersonalInformation = (props) => {
  return (
    <Card id={"personalInfo"}>
      <Card.Body>
        <Card.Title>Personal Info</Card.Title>
        <ListGroup variant="flush">
            <ListGroup.Item><strong>Name:</strong> {props.Name}</ListGroup.Item>
            <ListGroup.Item><strong>Surname:</strong> {props.Surname}</ListGroup.Item>
            <ListGroup.Item><strong>Email:</strong> {props.Email}</ListGroup.Item>
            <ListGroup.Item><strong>Phone:</strong> {props.Phone}</ListGroup.Item>
            <ListGroup.Item><strong>ID:</strong> {props.ID}</ListGroup.Item>
            <ListGroup.Item><strong>Nationality:</strong> {props.Nationality}</ListGroup.Item>
            <ListGroup.Item><strong>Driver License:</strong> {props.DL}</ListGroup.Item>
            <ListGroup.Item><strong>Github:</strong> <a href={props.githubLink} target="_blank" rel="noopener noreferrer">CalvinG21</a></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default PersonalInformation;
