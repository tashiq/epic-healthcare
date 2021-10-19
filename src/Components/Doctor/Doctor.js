import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { img, name, gender, age, email, phone } = props.data;
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="p-2 m-2">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Age: {age}</li>
                            <li>Email: {email}</li>
                            <li>Phone: {phone}</li>
                            <li>Gender: {gender}</li>
                        </ul>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;