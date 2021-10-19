import React from 'react';
import { Accordion } from 'react-bootstrap';

const Map = () => {
    return (
        <div id="map" className="container">
            <h3 className=" p-2 text-info">
                Building Guide
            </h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Floor 0</Accordion.Header>
                    <Accordion.Body>
                        <li>Parking</li>
                        <li>Reception</li>
                        <li>Sanitization</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Floor 1</Accordion.Header>
                    <Accordion.Body>
                        <li>MRI</li>
                        <li>RadioGraphy</li>
                        <li>Prayer</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Floor 2</Accordion.Header>
                    <Accordion.Body>
                        <li>X-ray</li>
                        <li>Cardio Graphy</li>
                        <li>Ultrasonic</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Floor 3</Accordion.Header>
                    <Accordion.Body>
                        <li>CT scan</li>
                        <li>Gynealogy</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Map;