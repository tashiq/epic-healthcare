import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, picture, about } = props.data
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="p-1 m-2">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;