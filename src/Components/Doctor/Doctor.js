import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { img, name, gender, age, email, phone } = props.data;
    return (
        <Col>

            <div className='col mt-3' data-aos="fade-up" data-aos-duration="500">
                <Card style={{ minWidth: '18rem' }} className="p-2 m-2">
                    <Card.Img variant="top" src={img} className="card-img" />
                    <Card.Body className="card-body">
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
            </div>
        </Col>
    );
};

export default Doctor;